// jQuery function
// $(document).ready(function () {
    //Swap images
    // $("#swap_gallery li a").click(function () {
    //     var imagesource = $(this).attr("src");
    //     var titlesource = $(this).attr("title");
    //     $("#main_image").attr("src", imagesource);
    //     $("#caption").text(titlesource);
    // });

//Put clock in the header



const setTime = () => {
    setTimeout(() => {
        document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTime();
    }, 1000);
};

setTime();

$(document).ready(function () {
    //Toggle buttons (jquerry)
    $('.hide').click( () => {
        $('div.button-images').slideToggle("slow");
    });




    var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 20,
        bottomSpacing: 20
    });


});


