let a = 0;
let timeout

document.getElementById('interval-start').addEventListener("click", function () {
    function timeoutFunction() {
        timeout = setTimeout( () => {
            a += 60
            let div = document.getElementById('interval-div');
            div.innerText += a.toString() + ', ';
            timeoutFunction()
        }, 1000);
    }
    timeoutFunction();

    document.getElementById('interval-stop').addEventListener("click", function () {
        if (a >= 600) {
            clearTimeout(timeout)
        }

    });
});
