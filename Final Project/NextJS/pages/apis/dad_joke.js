import Link from 'next/link';

export default function dadJoke() {
  return (
    <>
      {' '}
      {/* https://icanhazdadjoke.com/ */}
      <h1>Dad Joke</h1>
      <p>Dad jokes come from <a href="http://icanhazdadjoke.com" target="_blank">icanhazdadjoke.com/</a></p>
      <p>
      This API is a bit different than the Owen Wilson one because the API returns an HTML doc. This needs to be parsed and is handled a bit differently by adding a header</p>
        <div>
          <button onClick={async (e) => {
            e.preventDefault();

          const response = await fetch("https://icanhazdadjoke.com", {
              headers: { 'Accept': 'application/json'}
            });

            const data = await response.json();
            console.log(data);
        }}
        >Get a Dad Joke</button>
        </div>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}
