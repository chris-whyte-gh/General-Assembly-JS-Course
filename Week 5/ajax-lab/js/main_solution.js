"use strict";
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const weatherUrl2 = "http://api.weatherunlocked.com/api/current/";
const apikey = "e953d7587b1beb603fd3e047558ed2bf";
const homeSection = document.querySelector("#home");
const template = document.querySelector("template");

const getWeather = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.5&lon=-0.12&appid=${apikey}`);

    if (response.ok) {
      const data = await response.json();
      //console.log(data.main.temp);
      //const { main } = data Destruct
      return data.main.temp;
    }
  } catch (error) {
    console.error({ error });
  }
};

async function convertTempToC() {
  const locationTemp = await getWeather();
  return locationTemp;
  // const tempInC = convertKToC(locationTemp);
  // return tempInC;
}

// This will fail at the top level:
// const result = await convertTempToC();

convertTempToC()
  .then((locationTemp) => {
    console.log(locationTemp);
    //tempId.innerText = tempResult;
  })
  .catch((error) => {
    console.error(error);
  });