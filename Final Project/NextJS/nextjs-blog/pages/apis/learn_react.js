import Link from 'next/link';

export default function learnReact() {
  return (
    <>
      {' '}
      <h1>Learn React</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}
