export default function hikes({
  setapiResponse
}) {
  return (
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
        setapiResponse(data)
      }}
    >
      Get Activities from the NPS
    </button>
)}