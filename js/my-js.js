// let images = document.querySelector('#img-group div');
// document.querySelector('#img-group img').map(e=>{
//     e.addEventListener(()=>alert(e.getAttribute('src')));
// });

$(document).ready(function () {



    //embed welcome video to homepage
    const playVideo = () => {
        if ($('#home-video').children().length > 0) {
            // $('#main-menu a').innerText('value','delete');

            change();

        } else {
            document.getElementById('playVid').innerText = "Stop";
            let videoDiv = document.getElementById("home-video");
            let vid = document.createElement('video');
            vid.setAttribute('src', './videos/hello.mp4');
            vid.autoplay = true;
            vid.setAttribute("id", "HomeVideo");
            vid.setAttribute("width", "300");
            vid.setAttribute("height", "150");
            vid.setAttribute('controls', 'controls');

            $(vid).on('ended', () => {
                $(videoDiv).empty();
            });
            videoDiv.appendChild(vid);
        }
    };

    const change = () => {
        $('#home-video').empty();
        document.getElementById('playVid').innerText = "Play Video"
    };

    let btn = document.getElementById("playVid");
    btn.addEventListener("click", playVideo, false);



    const setTime = () => {
        setTimeout(() => {
            document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            setTime();
        }, 1000);
    };

    setTime();
});


