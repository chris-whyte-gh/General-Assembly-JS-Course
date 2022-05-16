import Link from 'next/link';

export default function dadJoke() {
  return (
    <>
      {' '}
      {/* https://owen-wilson-wow-api.herokuapp.com/ */}
      <h1>Owen Wilson API</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
      <div>
        <button
          onClick={async (e) => {
            e.preventDefault();

            const response = await fetch(
              "https://owen-wilson-wow-api.herokuapp.com/wows/random",
            );

            const data = await response.json();
            console.log(data);
          }}
        >
          Get a Wow
        </button>
      </div>
    </>
  );
}
