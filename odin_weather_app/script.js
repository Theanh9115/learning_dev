const apiKey = "28ed9226662500eeaab2ae9f2dc3f341";

class Weather {
  constructor(city, temp, feelsLike, tempMin, tempMax, humidity, description) {
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.description = description;
    this.city = city;
  }
}

// Get location of a city
async function getGeoCoding(city, apiKey) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
    );
    const cityGeoCoding = await response.json();
    return [cityGeoCoding[0]["lat"], cityGeoCoding[0]["lon"]];
  } catch {
    console.log("Error in fetching city geocoding!");
  }
}

// get weather data using latitude longtitude
async function getWeatherData(city, apiKey) {
  let cityLocation = await getGeoCoding(city, apiKey);
  let latitude = cityLocation[0];
  let longitude = cityLocation[1];
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
    );
    const responseData = await response.json();
    return responseData;
  } catch {
    console.log("Something is wrong when fetching weather data!");
  }
}

async function main() {
  let cityForm = document.querySelector("#city-form");
  let cityName = document.querySelector("#city-name");
  let weatherDescription = document.querySelector("#weather-description");
  let weatherTemp = document.querySelector("#weather-temp");
  let weatherTempMin = document.querySelector("#weather-temp-min");
  let weatherTempMax = document.querySelector("#weather-temp-max");
  let weatherHumidity = document.querySelector("#weather-humidity");

  let city = "New York";
  cityName.textContent = city;

  getWeatherData(city, apiKey).then((data) => {
    console.log(data);
    weatherDescription.textContent = data.weather[0].description;
    weatherTemp.textContent = data.main.temp;
    weatherTempMin.textContent = data.main.temp_min;
    weatherTempMax.textContent = data.main.temp_max;
    weatherHumidity.textContent = data.main.humidity;
  });

  cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    city = new FormData(cityForm);
    city = city.get("city-input");
    cityName.textContent = city;
    getWeatherData(city, apiKey).then((data) => {
      console.log(data);
      weatherDescription.textContent = data.weather[0].description;
      weatherTemp.textContent = data.main.temp;
      weatherTempMin.textContent = data.main.temp_min;
      weatherTempMax.textContent = data.main.temp_max;
      weatherHumidity.textContent = data.main.humidity;
    });
  });
}

main();
