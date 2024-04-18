const apiKey = "049e77ecf35bc3e4edbb5243ea74ce4a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city){
    const response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else{

        let weatherData = await response.json();

        console.log(weatherData);   // to be commented

        document.querySelector("#city").innerHTML = weatherData.name;
        document.querySelector("#temp").innerHTML = Math.round(weatherData.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = weatherData.main.humidity + "%";
        document.querySelector("#speed").innerHTML = weatherData.wind.speed + " km/h";
        document.querySelector("#visibility").innerHTML = weatherData.visibility + " km";
        document.querySelector("#pressure").innerHTML = weatherData.main.pressure + " hPa";
        document.querySelector("#condition").innerHTML = weatherData.weather[0].main;

        if(weatherData.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherData.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherData.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherData.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (weatherData.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherData.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (weatherData.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png";
        } else if (weatherData.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png";
        }

        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkWeather(searchBox.value);
    }
});
