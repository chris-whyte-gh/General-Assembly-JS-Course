/*
    1. Sign up for openweathermap.org and generate an API key.
    2. Use fetch to pull current weather data for London.
       (hint: http://api.openweathermap.org/data/2.5/weather?q=...)
    3. Log the temperature to the console. Note that the temperature will be in Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console:
        // calculate and store Fahrenheit temperature
        const degC = (temp - 273.15)
        // round calculated temperature down to the nearest whole number
        const degCInt = Math.floor(degC);
    5. Use DOM manipulation to add the returned temperature to the span element with the id 'temp'.
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
    7. Update your code to obtain the current temperature from this data source instead of openweathermap, log it to the console, and then add it to the DOM.
    8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.

    BONUS 1: Implement a form that prompts users for a city and borough and returns data for the location they specify. (Uncomment out the existing form code in index.html as marked).
    BONUS 2: The response data for each request includes the name of an image file that illustrates current weather conditions. Use the documentation to figure out the URL for these files on the server, and then incorporate this image into the DOM.
*/

'use strict';

//London Lat 51.5 Long -0.12
const apikey = '5683f9d231d7106415cf913c2c273739';
const locationId = document.getElementById('location');
const tempId = document.getElementById('temp');
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const weatherUrl2 = 'http://api.weatherunlocked.com/api/current/';
// const geocode = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + countryCode + '&appid=' + apikey;

const convertKToC = (locationTemp) => {
  const degC = (locationTemp - 273.15)
  const degCInt = Math.floor(degC)
  return degCInt;
}

const getWeather = async () => {
  try {
    const response = await fetch(weatherUrl + 'lat=51.5&lon=-0.12&appid=' + apikey);

    if (response.ok) {
      const data = await response.json();
      //console.log(data.main.temp);
      return data.main.temp;
    }

  } catch (error) {
    console.error({ error });
  }
}

async function convertTempToC() {
  const locationTemp = await getWeather();
  const tempInC = convertKToC(locationTemp);
  return tempInC;

}

const tempResult = convertTempToC();
console.log(tempResult + 'c');
//Its returning Object Promise, instead of data.main.temp
  //console.log(locationTemp);


tempId.innerText = tempResult;

