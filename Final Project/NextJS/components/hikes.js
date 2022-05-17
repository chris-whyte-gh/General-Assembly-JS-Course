export default function hikes({
  setapiResponse
}) {
  return (
    <>
      <button
        onClick={async (e) => {
          e.preventDefault();
          //how to safely store the apikey
          const apikey = 'ni0oPrLFUiBZB8dCtk1eqaWPclXnmZUpwESRa4D8';
          const response = await fetch(
            `https://developer.nps.gov/api/v1/parks?stateCode=GA&api_key=${apikey}`,
          );

          const data = await response.json();
            console.log(data.data[0]);
          setapiResponse(data);
        }}
      >
        Find Park Activities &rarr;
      </button>
      <p>Get a list of all NPS activities within your state</p>
    </>
  );}