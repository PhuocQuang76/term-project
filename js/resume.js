const setTime = () => {
    setTimeout(() => {
        document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTime();
    }, 1000);
};
setTime();

//embed data to resume
let xhr = new XMLHttpRequest();
xhr.open('GET', 'data/my-data.json', true);
xhr.onload = () => {
    let result;
    if(xhr.status === 200){
        result = JSON.parse(xhr.responseText);
        console.log(result);
        let inforDiv = document.getElementById('resume-info');
        let table = document.createElement('TABLE');
        for(let prop in result.information){
            table.appendChild(createRow(result.information, prop));
        }
        inforDiv.appendChild(table);
    }
};
xhr.send(null);


const createRow = (info, prop) => {

    let row = document.createElement('TR');
    let thOfRow = document.createElement('TH');
    thOfRow.innerText = prop;
    row.appendChild(thOfRow);
    let tdOfRow = document.createElement('TD');
    tdOfRow.innerText = info[prop];
    row.appendChild(tdOfRow);
    return row;
};





