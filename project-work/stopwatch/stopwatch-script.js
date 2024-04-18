let [miliSec, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("the-stopwatch");
let timer = null;

let btnStart = document.getElementById("start");
let btnReset = document.getElementById("reset");
let btnPause = document.getElementById("pause");
let btnResume = document.getElementById("resume");

let hrs, min, sec, mili;

function stopwatch(){
    miliSec++;
    if(miliSec == 100){
        miliSec = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    hrs = hours < 10 ? "0" + hours : hours;
    min = minutes < 10 ? "0" + minutes : minutes;
    sec = seconds < 10 ? "0" + seconds : seconds;
    mili = miliSec < 10 ? "0" + miliSec : miliSec;

    displayTime.innerHTML = hrs + ":" + min + ":" + sec + "." + mili;
}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);

    btnPause.style.display = "block";
    btnStart.style.display = "none";
    btnReset.style.display = "block";
    btnLap.style.display = "block";
}

btnStart.addEventListener("click", ()=>{
    watchStart();
})

function watchPause(){
    clearInterval(timer);
    btnPause.style.display = "none";
    btnResume.style.display = "block"
}

btnPause.addEventListener("click", ()=>{
    watchPause();
})

btnResume.addEventListener("click", ()=>{
    watchStart();
    btnResume.style.display = "none"
})

function watchReset(){
    clearInterval(timer);
    [miliSec, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00.00";

    btnResume.style.display = "none";
    btnReset.style.display = "none";
    btnPause.style.display = "none";
    btnStart.style.display = "block";
    btnLap.style.display = "none";

    lapList.innerHTML = "";
}

btnReset.addEventListener("click", ()=>{
    watchReset();   
})

// laps functions
let laps = [];
let lapList = document.getElementById("lap-list");
function lap() {
    if(laps.length >= 8){
        return;
      }

    let currentLap = hrs + ":" + min + ":" + sec + "." + mili;
    laps.push(currentLap);

    let listItem = document.createElement("li");
    listItem.innerHTML = currentLap;
    if(laps.length >= 8) {
        listItem.innerHTML = "Limit Over...";
    }
    lapList.appendChild(listItem);
}
let btnLap = document.getElementById("lap");
btnLap.addEventListener("click", ()=>{
    lap();
})