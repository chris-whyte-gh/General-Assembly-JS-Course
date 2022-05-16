import Link from 'next/link';

export default function hikes() {
  return (
    <>
      <h1>Hikes</h1>

      <p>
        This will demonstrate how to make an API Call using authorization with an API Key
      </p>
      <div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            //how to safely store the apikey
            const apikey = 'ni0oPrLFUiBZB8dCtk1eqaWPclXnmZUpwESRa4D8';
            const response = await fetch(
              `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apikey}`,
            );

            const data = await response.json();
            console.log(data);
          }}
        >
          Get Activities from the NPS
        </button>
      </div>
      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </>
  );
}

