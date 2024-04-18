
setInterval(() => {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // Array of days and months name, since it displays as Arrays indexes i.e., 0 - Sun, 6 - Sat.
    let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = daysName[now.getDay()];
    let date = now.getDate();
    let month = monthName[now.getMonth()];
    let year = now.getFullYear();
    
    // Formatting 12 hours clock
    let amPm = hrs < 12 ? "AM" : "PM";
    hrs = hrs > 12 ? hrs%12 : hrs;
    hrs = hrs == 0 ? hrs=12 : hrs;

    // Displaying current time
    document.getElementById("am-pm").innerHTML = amPm;
    document.getElementById("hrs").innerHTML = (hrs<10?"0":"") + hrs;
    document.getElementById("min").innerHTML = (min<10?"0":"") + min;
    document.getElementById("sec").innerHTML = (sec<10?"0":"") + sec;

    // Displaying current date
    document.getElementById("day").innerHTML = day;
    document.getElementById("date").innerHTML = (date<10?"0":"") + date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;


}, 1000)

// light - dark mode
let lightBtn = document.getElementById("light");
let darkBtn = document.getElementById("dark");

lightBtn.addEventListener("click", (e)=>{
    document.querySelector("body").style.color = "#000000";
    document.querySelector("body").style.backgroundColor = "#d4d7e4";
    document.querySelector(".box").style.backgroundColor = "#adb7c6";

    let timeTextBG = document.querySelectorAll(".time-text");
    timeTextBG.forEach((element) => {
        element.style.backgroundColor = "#e9ebef";
    });

    document.querySelector("#light").style.display = "none";
    document.querySelector("#dark").style.display = "block";
});


darkBtn.addEventListener("click", (e)=>{
    document.querySelector("body").style.color = "rgb(234, 248, 248)";
    document.querySelector("body").style.backgroundColor = "#1b202b";
    document.querySelector(".box").style.backgroundColor = "rgb(57, 67, 82)";

    let timeTextBG = document.querySelectorAll(".time-text");
    timeTextBG.forEach((element) => {
        element.style.backgroundColor = "#101116";
    });

    document.querySelector("#light").style.display = "block";
    document.querySelector("#dark").style.display = "none";
});
