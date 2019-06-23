$(document).ready(function () {
    //Swap images
    $("#swap_gallery-garden li a").click(function () {
        var imagesource = $(this).attr("src");
        var titlesource = $(this).attr("title");
        $("#main_image-garden").attr("src", imagesource);
        $("#caption-garden").text(titlesource);
    });


    $("#swap_gallery-shopping li a").click(function () {
        var imagesource = $(this).attr("src");
        var titlesource = $(this).attr("title");
        $("#main_image-shopping").attr("src", imagesource);
        $("#caption-shopping").text(titlesource);
    });
});


const setTime = () => {
    setTimeout(() => {
        document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTime();
    }, 1000);
};

setTime();