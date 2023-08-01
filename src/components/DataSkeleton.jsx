/* eslint-disable react/prop-types */
// import { genreMap } from "./GetGenreStrings";
import "../App.css";
import { useEffect, useState } from "react";
import { genreMap } from "./GetGenreStrings";


export default function ResponsiveGrid(props) {

  const [genres, setGenres] = useState([props.genres]);
  useEffect(() => {
    

    if (genres.value === genreMap.value) {
      setGenres(prevState => [...prevState]);
      // console.log(genres[0])
      genres[0].map(genreId => genreMap[genreId])
    }
  }, [])

  // if (genreMap[genreId] > 1) {
  //   genreMap[genreId] | genreMap[genreId]
  // }

  return (
    <div className="card" onClick={props.clicked}>
      <h2 className="titles">{props.title}</h2>

      <img src={props.image} className="pod_img" />
      <p>Genre(s): {props.genres.map(genreId => genreMap[genreId])}
      {}</p>
      <p className="info">{props.seasons} Seasons</p>
      <p className="info">
        Last Updated:{" "}
        {new Date(props.updated).toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p className="description-responsive">{props.description}</p>
    </div>
  );
}
