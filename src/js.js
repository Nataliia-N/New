function currentDate(date) {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let formattedDate = `${day}, ${hour}:${min}`;
  return formattedDate;
}
let time = document.querySelector("h2");
time.innerHTML = currentDate();

function city(event) {
  event.preventDefault();
  let newCity = document.querySelector("h1");
  let cityForm = document.querySelector("#city-submit");
  newCity.innerHTML = cityForm.value;
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", city);


function displayWeatherCondition(response) {
  document.querySelector("#city-submit").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

function searchCity(city) {
  var apiKey = "e9e196ee12c6e5ec0599f3bdf6ebd323";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchLocation(position) {
  var apiKey = "e9e196ee12c6e5ec0599f3bdf6ebd323";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(position.coords.latitude, "&lon=").concat(position.coords.longitude, "&appid=").concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}