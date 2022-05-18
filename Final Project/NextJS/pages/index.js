import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Hikes from '../components/hikes'
import Owen_wilson from '../components/owen_wilson'
import Dad_jokes from '../components/dad_jokes'
import ReactAudioPlayer from 'react-audio-player';


export default function Home() {
  // Destructuring the api response to use useState. This allows us to access and change variables
  const [apiResponse, setapiResponse] = useState(null)
  // So we know which api is called when the button is clicked.
  //This is the key, the value is in the component
  const [apiType, setapiType] = useState(null)
  // console.log(apiType);

  const renderApiResponse = () => {
    if (apiType === "owenWilson") {
      console.log(apiResponse);
      //console.log(apiType);
      return (
        <>
        <p>Wow!</p>
        <ReactAudioPlayer
          src={apiResponse}
          controls
          style={{ width: '300px' }}
        />
        </>
)
    } else if (apiType === "dadJokes") {
      return (
        apiResponse
      )
    } else if (apiType === "hikes") {
      return (
        apiResponse
        // console.log(apiResponse)
      );
    } else {
      return (null)
    }

  }
    //apiResponse ? JSON.stringify(apiResponse) : null;

    //return statement use brackets use {JSX}
  //   return (
  //     { apiResponse ? JSON.stringify(apiResponse) : null }
    //)


  //Everything in return is the render function
  return (
    <div className="container">
      <Head>
        <title>My Final Project for General Assembly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">General Assembly Final Project</h1>

        {/* Can make a button component with a k:v prop */}
        <div className="grid">
          <div className="card">
            <Owen_wilson
              //component props
              setapiResponse={setapiResponse}
              setapiType={setapiType}
              anything={1.2}
            />
          </div>
          <div className="card">
            <Dad_jokes
              setapiResponse={setapiResponse}
              setapiType={setapiType}
            />
          </div>
          <div className="card">
            <Hikes setapiResponse={setapiResponse} setapiType={setapiType} />
          </div>
        </div>
        <div>
          {/* {apiResponse ? JSON.stringify(apiResponse) : null} */}
          {renderApiResponse()}

          {/* {apiResponse ? (
            <>
              <p>Wow!</p>
              <ReactAudioPlayer
                src={apiResponse}
                controls
                style={{ width: '300px' }}
              />
            </>
          ) : null} */}
          {/* {apiResponse ? (
            <>
              <h3>Activities for Georgia</h3>
              <div>
                {data.map((result) => {
                  const { fullName, description } = result;

                  return (
                    <>
                      <li key={fullName} className="card"></li>
                      <p>{description}</p>
                    </>
                  );
                })}
              </div>
            </>
          ) : null} */}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
