import Link from 'next/link';

export default function notesApp() {
  return (
    <>
      {' '}
      <h1>Notes App</h1>
      <div>
        <main>
          <div>Left Part of the Page</div>
          <div>Right Part of the Page</div>
        </main>
      </div>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </>
  );
}


