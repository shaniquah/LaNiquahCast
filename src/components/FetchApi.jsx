import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";
import Seasons from "./Seasons";
// import {RenderGenres} from "./ResponsiveGrid";
import BackToTop from "./BackToTop";
import "../App.css";
import Episodes from "./Episodes";
// import SearchBar from "./SearchBar";

export default function FetchAPI() {
  const [data, setData] = useState(null);
  const [preview, setPreview] = useState("");
  const [seasonRender, setSeasonRender] = useState(null);
  const [episodesRender, setEpisodesRender] = useState(null);

  const getApi = () => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        const mapData = data.map((item) => {

          function showSeasons(id) {
            if (id) {
              fetch(`https://podcast-api.netlify.app/id/${id}`)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data.seasons);

                  const seas = data.seasons;

                  const seasM = seas.map((mm) => {
                    {
                      console.log(mm.title);
                      console.log(mm.episodes.length)
                    }/* 

                    console.log(data.seasons.episodes);

                    const eps = data.seasons.episodes;

                    const epsMap = eps.map((ors) => {
                      {
                        console.log(ors.title);
                      }
                      return (
                        <>
                          <Episodes title={ors.title} image={ors.image} />
                        </>
                      );
                    }); */

                    return (
                      <>
                        <Seasons
                          title={mm.title}
                          episodes={mm.episodes.length}
                          image={mm.image}
                          // clicked={() => epsMap}
                        />
                      </>
                    );
                  });

                  setSeasonRender(seasM);
                });
            }
          }

          return (
            <>
              {/* <SearchBar/> */}
              <div id="card">
                <ResponsiveGrid
                  key={item.id}
                  {...item}
                  clicked={() => showSeasons(item.id)}
                />
              </div>
              <BackToTop />
            </>
          );
        });
        setPreview(mapData);
      });
  };

  useEffect(() => {
    getApi();
  }, []);
  console.log();
  return (
    <>
      {episodesRender}
      {seasonRender}
      <div key={preview}>{preview}</div>
    </>
  );
}
