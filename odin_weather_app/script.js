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

async function getWeatherData(city, apiKey) {
  try {
    const geoLocation = await getGeoCoding(city, apiKey);
    const lattitude = geoLocation[0];
    const longtitude = geoLocation[1];
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longtitude}&appid=${apiKey}`,
    );
    const responseData = await response.json();
    return responseData;
  } catch {
    console.log("Something is wrong when fetching weather data!");
  }
}

let weatherObj;
let city = "New York";
const apiKey = "28ed9226662500eeaab2ae9f2dc3f341";
getWeatherData(city, apiKey).then((data) => {
  weatherObj = new Weather(
    city,
    data.main.temp,
    data.main.feels_like,
    data.main.temp_min,
    data.main.temp_max,
    data.main.humidity,
    data.weather[0].description,
  );
  console.log(data);
  console.log(weatherObj.description);
});

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
