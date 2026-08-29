const apiKey = "28ed9226662500eeaab2ae9f2dc3f341";
let cityName;

async function getGeoCoding(cityName, apiKey) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`,
    );
    const cityGeoCoding = await response.json();
    return [cityGeoCoding[0]["lat"], cityGeoCoding[0]["lon"]];
  } catch {
    console.log("Error in fetching city geocoding!");
  }
}

async function getWeatherData(cityName, apiKey) {
  try {
    const geoLocation = await getGeoCoding(cityName, apiKey);
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

getWeatherData("Hanoi", apiKey).then((data) => console.log(data));
