// Time and Date

let now = new Date();

let timeAndDate = document.querySelector("#date");

let date = now.getDate();
let minute = now.getMinutes();
let year = now.getFullYear();
let hour = now.getHours();

if (hour < 10) {
  hour = `0${hour}`;
}

if (minute < 10) {
  minute = `0${minute}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemeber",
  "Decemeber",
];

let month = months[now.getMonth()];

timeAndDate.innerHTML = `${day} ${date} ${month}, ${hour}:${minute}, ${year}`;

// Search City & API

function search(city) {
  let apiKey = "a0a0d90971165d38ca9ee74546a17771";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(displayWeatherData);
}

function displayWeatherData(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}
let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);
