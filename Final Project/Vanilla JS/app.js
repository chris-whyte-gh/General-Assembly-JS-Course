let jokeBtn = document.getElementById('btnJoke');
let owenBtn = document.getElementById('btnOwen');

//Get Jokes from https://icanhazdadjoke.com/api

async function getDadJokes() {
  const apiUrl = 'https://icanhazdadjoke.com';
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    addJokeToPage(data.joke);
  } catch (err) {
    console.log("There was an error");
  }
}

const addJokeToPage = (joke) => {
  //console.log(joke);
  //Create a container (div) to house the joke
  let p = document.createElement("p");
  //Add joke as text
  let jokeText = document.createTextNode(joke);
  //console.log(jokeText);
  //say where to put the joke
  p.appendChild(jokeText);
  let result = document.getElementById('jokeSpace');
  result.appendChild(p);
}

async function getOwenWilson() {
  const api = 'https://owen-wilson-wow-api.herokuapp.com/wows/random';
  try {
    const response = await fetch(api);
    const result = response.json();
    console.log(result);
  } catch (error) {
    console.log("Owen wilson failed you");
  }
}

btnJoke.addEventListener('click', getDadJokes);
btnOwen.addEventListener('click', getOwenWilson);

