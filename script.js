const APIKEY = "d6a063d4f77da01c5ef5724cc8b8be3a";
let searchQuery = "Kampala";
document.addEventListener("DOMContentLoaded", () => {
  fetchWeather(searchQuery);
});

const searchBtn = document.querySelector(".search-btn");

const info = document.querySelector(".info");
const loader = document.querySelector(".loader");
const weatherIcon = document.querySelector("#weather-icon");
const error = document.querySelector(".error");

const searchInput = document.querySelector("#search-input");
const temp = document.querySelector("#temp");
const cityname = document.querySelector("#cityname");
const humidityPerc = document.querySelector("#humidityPerc");
const windSpeed = document.querySelector("#windSpeed");

//   const test =
//   "https://api.openweathermap.org/data/2.5/weather?q=Kampala&units=metric&appid=d6a063d4f77da01c5ef5724cc8b8be3a";
function fetchWeather(searchQuery) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${APIKEY}`
  )
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
      temp.innerText = `${+data.main.temp.toFixed(1)}°C`;
      cityname.innerText = `${data.name}`;
      humidityPerc.innerText = `${data.main.humidity}%`;
      windSpeed.innerText = `${data.wind.speed}Km/h`;
      data.weather.map((e) => {
        if (e.main == "Clouds") {
          weatherIcon.src = "images/clouds.png";
          //   print(weatherIcon);
        } else if (e.main == "Rain") {
          weatherIcon.src = "images/rain.png";
        } else if (e.main == "Clear") {
          weatherIcon.src = "images/clear.png";
        } else if (e.main == "Drizzle") {
          weatherIcon.src = "images/drizzle.png";
        } else if (e.main == "Mist") {
          weatherIcon.src = "image/mist.png";
        } else if (e.main == "Snow") {
          weatherIcon.src = "images/snow.png";
        }
      });
      //   console.log(data.weather);
      setTimeout(() => {
        info.classList.add("visibleContent");
        loader.classList.add("removeLoader");
        error.classList.remove("errorVisible");
      }, 2000);
    })
    .catch(() => {
      setTimeout(() => {
        error.classList.add("errorVisible");
        loader.classList.add("removeLoader");
      }, 2000);
      info.classList.remove("visibleContent");
    });
}

// weatherIcon.src='images/Clouds.png'

searchBtn.addEventListener("click", () => {
  //   fetchWeather(searchQuery);
  //   console.log(s);
  info.classList.remove("visibleContent");
  loader.classList.remove("removeLoader");
  error.classList.remove("errorVisible");
  if (searchInput.value) {
    searchQuery = searchInput.value;
  }
  fetchWeather(searchQuery);
  console.log(searchQuery);
});
