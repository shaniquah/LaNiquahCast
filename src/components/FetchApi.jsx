/* The code is importing various components and dependencies from different files and libraries. */
import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";
import Seasons from "./Seasons";
import BackToTop from "./BackToTop";
import supabase from "../config/supabaseClient";
import "../App.css";
import Loading from "./Loading";
// import SearchBar from "./SearchBar";

/* The code defines a React functional component called `
`. It is responsible for fetching data
from an API and rendering it on the screen. */
export default function FetchAPI() {
  console.log(supabase);

  const [isLoading, setIsLoading] = useState(true);

  /* These lines of code are using the `useState` hook from React to declare and initialize state
  variables. */
  const [data, setData] = useState(null);
  const [preview, setPreview] = useState("");
  const [seasonRender, setSeasonRender] = useState(null);
  const [episodesRender, setEpisodesRender] = useState(null);

  /* The `getApi` function is responsible for fetching data from the API endpoint
  "https://podcast-api.netlify.app/shows". It uses the `fetch` function to make a GET request to the
  endpoint and retrieves the response in JSON format. */
  const getApi = () => {
    /* The code block is making a GET request to the API endpoint
    "https://podcast-api.netlify.app/shows" using the `fetch` function. It then converts the
    response to JSON format using the `.json()` method. */
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())

      /* This code block is part of a `.then()` callback function that is executed after the data is
      fetched from the API. */
      .then((data) => {
        setData(data);

        /* The code block is mapping over the `data` array and returning JSX elements for each item in
       the array. */
        const mapData = data.map((item) => {
          /* The `showSeasons` function is responsible for fetching data for a specific show's seasons
          from the API. It takes an `id` parameter, which is the unique identifier of the show. */
          function showSeasons(id) {
            if (id) {
              fetch(`https://podcast-api.netlify.app/id/${id}`)
                .then((res) => res.json())
                .then((data) => {
                  const seas = data.seasons;

                  const seasM = seas.map((sm) => {
                    return (
                      <>
                        {isLoading ? (
                          <Loading />
                        ) : (
                          <Seasons
                            title={sm.title}
                            episodes={sm.episodes.length}
                            image={sm.image}
                            clicked={() => displayEps(sm)}
                          />
                        )}
                      </>
                    );
                  });

                  setSeasonRender(seasM);
                });
            }
          }

          /**
           * The function "displayEps" takes in a fetched object, maps through its episodes, and
           * returns a JSX element for each episode with its title, episode number, description, and an
           * audio player.
           */
          function displayEps(fetched) {
            const eps = fetched.episodes.map((epsItem) => {
              return (
                <>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <div className="episodes_card" key={epsItem.id}>
                      <h1>{epsItem.title}</h1>
                      <h3>Episode {epsItem.episode}</h3>
                      <p>{epsItem.description}</p>
                      <audio controls className="audio_bar">
                        <source src={epsItem.file} type="audio/ogg" />
                      </audio>
                    </div>
                  )}
                </>
              );
            });

            setEpisodesRender(eps);
          }

          /**
           * The function `handleSort` sorts an array called `preview` in alphabetical order and
           * updates the state variable `preview`, and if a condition is met, it also sorts the array
           * in reverse alphabetical order.
           */
          const handleSort = () => {
            const sortedAZ = [...preview].sort((a, b) =>
              a.title.localeCompare(b)
            );
            const sortedZA = [...preview].sort((a, b) => b - a);
            setPreview(sortedAZ);
            if (sortedAZ === true && event === true) {
              setPreview(sortedZA);
            }
          };

          /* The `return` statement is returning JSX elements that will be rendered on the screen. */
          return (
            <>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <div id="card">
                    <ResponsiveGrid
                      handleSort={handleSort}
                      key={item.id}
                      {...item}
                      clicked={() => showSeasons(item.id)}
                    />
                  </div>
                  <BackToTop />
                </>
              )}
            </>
          );
        });

        setPreview(mapData);
      });
  };

  /* The `useEffect` hook is used to fetch data from the API by calling the `getApi` function when the component is mounted. */
  useEffect(() => {
    getApi();
    setIsLoading(false);
  }, []);

  /* The `return` statement is returning JSX elements that will be rendered on the screen. */
  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        { episodesRender } && { seasonRender } && (
          <div key={preview.id}>{preview}</div>
        )
      )}
    </>
  );
}
