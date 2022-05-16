import Link from 'next/link';

export default function dadJoke() {
  return (
    <>
      {' '}
      {/* https://owen-wilson-wow-api.herokuapp.com/ */}
      <h1>Owen Wilson API</h1>
      <div>
        <button
          onClick={async (e) => {
            e.preventDefault();

            const response = await fetch(
              'https://owen-wilson-wow-api.herokuapp.com/wows/random',
            );

            const data = await response.json();
            console.log(data);
          }}
        >
          <img
            src="https://ih1.redbubble.net/image.257196091.5010/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg"
            alt="Get a wow"
            width="100"
            height="100"
          ></img>
        </button>
      </div>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}
