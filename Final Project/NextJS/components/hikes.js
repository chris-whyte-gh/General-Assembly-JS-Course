//destruct extracts key from object (key = useState which is a function)
import { useState } from 'react'

export default function hikes({
  setapiResponse, setapiType
}) {
  const [state, setstate] = useState("GA");
  console.log(state);
  return (
    <>
      <h3>NPS</h3>
      <p>Get a list of all NPS activities within your state</p>
      <form
        onChange={(e) => {
          {
            /* console.log(e.target.value); */
          }
          setstate(e.target.value);
        }}
      >
        <select>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </form>
      <button
        onClick={async (e) => {
          e.preventDefault();
          setapiType('hikes');
          //how to safely store the apikey
          const apikey = 'ni0oPrLFUiBZB8dCtk1eqaWPclXnmZUpwESRa4D8';
          const response = await fetch(
            `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${apikey}`,
          );

          const data = await response.json();
          console.log(data.data[0]);
          setapiResponse(data.data[0].name);
        }}
      >
        Find Park Activities &rarr;
      </button>
    </>
  );}