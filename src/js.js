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
//
function citynew(event) {
    event.preventDefault();
    let newCity = document.querySelector("#city");
    let cityForm = document.querySelector("#city-submit");
    newCity.innerHTML = cityForm.value;
  }
  let form = document.querySelector("#city-form");
  form.addEventListener("submit", citynew);
//
  
    function displayWeatherCondition(response) {
        document.querySelector("#city").innerHTML = response.data.name;
        document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
        document.querySelector("#humidity").innerHTML = response.data.main.humidity;
        document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
        document.querySelector("#description").innerHTML = response.data.weather[0].main;
    }

    function searchLocation(position) {
        let apiKey = "e9e196ee12c6e5ec0599f3bdf6ebd323";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(displayWeatherCondition);
    }

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
    }

    let currentLocationButton = document.querySelector("#Current-button");
    currentLocationButton.addEventListener("click", getCurrentLocation);
  

  function searchCity(city) {
    let apiKey = "e9e196ee12c6e5ec0599f3bdf6ebd323";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    var city = document.querySelector("#city-submit").value;
    searchCity(city);
  }
  
  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSubmit);
  searchCity("Chernihiv");
