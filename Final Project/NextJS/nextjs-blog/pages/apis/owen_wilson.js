import Link from 'next/link';

export default function dadJoke() {
  return (
    <>
      {' '}
      {/* JSX needs a parent element */}
      <h1>Owen Wilson API</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}
