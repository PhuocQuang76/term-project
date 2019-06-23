//set clock funtion
    const setTime = () => {
        setTimeout(() => {
            document.getElementById('time').innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            setTime();
        }, 1000);
    };

    setTime();

    //side bar collapse
    // $(document).ready(function () {
    //     $('#sidebarCollapse').on('click', function () {
    //         $('#sidebar').toggleClass('active');
    //     });
    // });
