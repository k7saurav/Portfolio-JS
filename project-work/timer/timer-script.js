let hrs = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

let btnStart = document.getElementById("start");
let btnReset = document.getElementById("reset");
let btnPause = document.getElementById("pause");
// let btnResume = document.getElementById("resume");

let err = document.getElementById("error");
let errFocus = document.getElementsByClassName("time-err");

//  Displaying error msg on invalid input:
function handleInput(maxValue, errorMessage) {
    return function() {
        if(this.value > maxValue) {
            this.value = maxValue;
            err.innerHTML = errorMessage;
            err.style.display = "block";
        } else{
            err.style.display = "none";
        }
    }
}

sec.addEventListener("input", handleInput(59, "Invalid seconds count (max 00:00:59)."));
min.addEventListener("input", handleInput(59, "Invalid minutes count (max 00:59:59)."));
hrs.addEventListener("input", handleInput(23, "Invalid hours count (max 23:59:59)."));

// hiding error msg when selecting other input box:
for (let i = 0; i < errFocus.length; i++) {
    errFocus[i].addEventListener("focus", function() {
        err.style.display = "none";
    });
}
btnStart.addEventListener("focus", function() {
        err.style.display = "none";
    });

// Countdown timer logic:

let timer;
let totalSeconds;

function countDown() {
    if (totalSeconds == 0) {
        clearInterval(timer);
        hrs.value = min.value = sec.value = "";
        // alert("Countdown finished!");

        btnStart.style.display = "block";
        btnReset.style.display = "none";
        btnPause.style.display = "none";

        new Audio("./images/sms-tone.mp3").play();
    }
    else {
        totalSeconds--;
        let currentHours = Math.floor(totalSeconds / 3600);
        let currentMinutes = Math.floor((totalSeconds % 3600) / 60);
        let currentSeconds = totalSeconds % 60;

        hrs.value = currentHours < 10 ? "0" + currentHours : currentHours;
        min.value = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
        sec.value = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

    }
}

function startTimer() {
    //  converting string to number.
    //  || 0 is required because empty field retuens NaN (Not a Number).
    let hours = parseInt(hrs.value) || 0;
    let minutes = parseInt(min.value) || 0;
    let seconds = parseInt(sec.value) || 0;
   
    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    timer = setInterval(countDown, 1000); 

    // visible other buttons:
    btnReset.style.display = "block";
    btnPause.style.display = "block";
    btnStart.style.display = "none";
}

btnStart.addEventListener("click", startTimer);

// Reset and pause buttoms:
function resetTimer() {
    clearInterval(timer);
    hrs.value = min.value = sec.value = "";

    btnStart.style.display = "block";
    btnReset.style.display = "none";
    btnPause.style.display = "none";
}
btnReset.addEventListener("click", resetTimer);

function pauseTimer() {
    clearInterval(timer);

    btnStart.style.display = "block";
    btnReset.style.display = "block";
    btnPause.style.display = "none";
}
btnPause.addEventListener("click", pauseTimer);