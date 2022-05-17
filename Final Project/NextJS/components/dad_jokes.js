export default function dadJokes({ setapiResponse }) {
  return (
    <>
      <button
        onClick={async (e) => {
          e.preventDefault();

          const response = await fetch('http://icanhazdadjoke.com', {
            headers: { Accept: 'application/json' },
          });

          const data = await response.json();
          console.log(data);
          setapiResponse(data.joke);
        }}
      >
        Dad Joke
      </button>
      <p>Get a Dad Joke</p>
    </>
  );
}