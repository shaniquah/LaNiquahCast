/* The code is importing various components and dependencies from different files and libraries. */
import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";
import Seasons from "./Seasons";
import BackToTop from "./BackToTop";
import "../App.css";
import Loading from "./Loading";
import supabase from "../config/supabaseClient";
import SortBy from "./Sort";

/* The code defines a React functional component called `
`. It is responsible for fetching data
from an API and rendering it on the screen. */
export default function FetchAPI() {
  const [isLoading, setIsLoading] = useState(true);

  /* These lines of code are using the `useState` hook from React to declare and initialize state
  variables. */
  const [datar, setData] = useState(null);
  const [preview, setPreview] = useState("");
  const [seasonRender, setSeasonRender] = useState(null);
  const [episodesRender, setEpisodesRender] = useState(null);
  const [sortOption, setSortOption] = useState("a-z");

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
        setIsLoading(false);

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
                        <Seasons
                          title={sm.title}
                          episodes={sm.episodes.length}
                          image={sm.image}
                          clicked={() => displayEps(sm)}
                        />
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
            console.log(fetched);
            const eps = fetched.episodes.map((epsItem) => {
              return (
                <>
                  <div className="episodes_card" key={epsItem.id}>
                    <h1>{epsItem.title}</h1>
                    <h3>Episode {epsItem.episode}</h3>
                    <button
                      onClick={() => {
                        const addFave = async () => {
                          const { data, error } = await supabase
                            .from("Favorites")
                            .insert({
                              title: epsItem.title,
                              file: epsItem.file,
                            });

                          // const toggleFaves = () => {
                          //   if (c)
                          // }
                        };
                        addFave();
                      }}
                    >
                      Add to Faves
                    </button>
                    {/* <img  width={30px} src="../src/assets/heart.png"/> */}
                    <p>{epsItem.description}</p>
                    <audio controls className="audio_bar">
                      <source src={epsItem.file} type="audio/ogg" />
                    </audio>
                  </div>
                </>
              );
            });

            setEpisodesRender(eps);
          }

          const handleSort = () => {
            const sortPreview = [...preview].sort((a, b) => {
              if (sortOption === "a-z") {
                return a.title.localeCompare(b.title);
              } else if (sortOption === "z-a") {
                return b.title.localeCompare(a.title);
              } else if (sortOption === "dateAsc") {
                return new Date(a.updated) - new Date(b.updated);
              } else if (sortOption === "dateDesc") {
                return new Date(b.updated) - new Date(a.updated);
              }
            });
            
            setPreview(sortPreview);
            
            return (
              <>
                <div>
                  <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="az">Sort A-Z</option>
                    <option value="za">Sort Z-A</option>
                    <option value="ascDate">Sort Ascending by Date</option>
                    <option value="descDate">Sort Descending by Date</option>
                  </select>
                  <SortBy handleSort={preview} />
                  {preview}
                  <BackToTop />
                </div>
              </>
            );

            
          };

          /* The `return` statement is returning JSX elements that will be rendered on the screen. */
          return (
            <>
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
            </>
          );
        });

        setPreview(mapData);
      });
  };

  // function example() {
  //   if (datar) {
  //     const mapData = datar.map((item) => {
  //       return (
  //         <>
  //           <>
  //             <div id="card">
  //               <ResponsiveGrid
  //                 // handleSort={handleSort}
  //                 key={item.id}
  //                 {...item}
  //                 // clicked={() => showSeasons(item.id)}
  //               />
  //             </div>
  //             <BackToTop />
  //           </>
  //         </>
  //       );
  //     });
  //   }

  //   // setPreview(mapData);
  // }

  /* The `useEffect` hook is used to fetch data from the API by calling the `getApi` function when the component is mounted. */
  useEffect(() => {
    getApi();
    // setIsLoading(true);
    // example();
    console.log(datar);
  });

  /* The `return` statement is returning JSX elements that will be rendered on the screen. */
  return (
    <>
      {!isLoading ? episodesRender : <Loading />}{" "}
      
      {!isLoading ? seasonRender : <Loading />}
      {!isLoading ? <div key={preview.id}>{preview}</div> : <Loading />}
      {/* {example} */}
    </>
  );
}
