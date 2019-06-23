//Set time for the page
const setTime = () => {
    setTimeout(() => {
        document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTime();
    }, 1000);
};
setTime();


//Check the value input and error

//Create an emty object to set final check value
let tests = {};

//Test input name function
const testName = el => {
    let upperCase = /^[A-Z]/.test(el.value);
    let min2Chars = /^.{2}/.test(el.value);
    let digits = /^([A-Z]|[a-z]){2,}$/.test(el.value);

    let test = {
        upperCase: upperCase,
        min2Chars: min2Chars,
        digits: digits,
        passedValue: upperCase && min2Chars && digits
    };

    //Check firstName and lastName input and set class
    if(test.passedValue){
        el.parentElement.setAttribute('class','input-good');
    }else{
        el.parentElement.setAttribute('class','input-error');
    }


    //check and set for errorText
    let divInput = el.parentElement;
    console.log(divInput);
    let divError = divInput.nextElementSibling;
    let firstError = divError.firstElementChild;
    let secondError = firstError.nextElementSibling;
    let thirdError = secondError.nextElementSibling;

    if(test.upperCase){
        firstError.setAttribute('class','good');
        firstError.firstElementChild.setAttribute("class", "fa fa-check");
    }else{
        firstError.setAttribute('class','error');
        firstError.firstElementChild.setAttribute("class", "fa fa-times");
    }

    if(test.min2Chars){
        secondError.setAttribute('class','good');
        secondError.firstElementChild.setAttribute("class", "fa fa-check");

    }else{
        secondError.setAttribute('class','error');
        secondError.firstElementChild.setAttribute("class", "fa fa-times");
    }

    if(test.digits){
        thirdError.setAttribute('class','good');
        thirdError.firstElementChild.setAttribute("class", "fa fa-check");
    }else{
        thirdError.setAttribute('class','error');
        thirdError.firstElementChild.setAttribute("class", "fa fa-times");
    }
    return test;
};


const doNameTest = (event, el) =>{
    tests[el.id] = testName(el).passedValue;
};

let firstNameNode = document.getElementById("firstName");
let lastNameNode = document.getElementById("lastName");

firstNameNode.addEventListener('input',(event) =>{doNameTest(event,event.srcElement)} ,false);
firstNameNode.addEventListener('focus',(event) =>{doNameTest(event,event.srcElement)} ,false);

lastNameNode.addEventListener('input',(event) =>{doNameTest(event,event.srcElement)} ,false);
lastNameNode.addEventListener('focus',(event) =>{doNameTest(event,event.srcElement)} ,false);

// test Email Error
const testEmail = (el) =>{
    let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value);
    let test = {
        emailValid:emailValid,
        passedEmail:emailValid
    };


    // set style for input box
    if(test.emailValid){
        el.parentElement.setAttribute('class', 'input-good');
    }else{
        el.parentElement.setAttribute('class','input-error');
    }

    //check and set style for errorText
    let divInput = el.parentElement;
    let divError = divInput.nextElementSibling;
    let firstError = divError.firstElementChild;

    if(test.emailValid){
        firstError.setAttribute('class','good');
        firstError.firstElementChild.setAttribute("class", "fa fa-check");
    }else{
        firstError.setAttribute('class','error');
        firstError.firstElementChild.setAttribute("class", "fa fa-time");
    }
    return test;
};

const doEmailTest = (event,el) => {
  tests[el.id] = testEmail(el).passedEmail;
};

let emailNameNode = document.getElementById('email');
emailNameNode.addEventListener('input', () => {doEmailTest(event,event.srcElement)},false);
emailNameNode.addEventListener('focus', () => {doEmailTest(event,event.srcElement)},false);


// Check when click the submit button
testValidity = (event) => {
    let value = true;
    for(let property in tests){
        value = value && tests[property];
    }
    if(!value){
        event.preventDefault();
    }else{
        return true;
    }
};

let btn = document.getElementById("submitbutton");
btn.addEventListener("click", (event) => {testValidity(event)}, false);

//reset button
let resetValues = (event) => {
    let resetTarget = document.getElementsByClassName('input[type=text]') ;
    for(let i of resetTarget){
        resetTarget.item[i].value ="";

    }
};
//Click the reset button
let resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetValues, false);