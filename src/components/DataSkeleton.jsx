/* eslint-disable react/prop-types */
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { genreMap } from "./GetGenreStrings";
import "../App.css";
import { React, useEffect, useState } from "react";
import { genreMap } from "./GetGenreStrings";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "justified",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {

  const [genres, setGenres] = useState([props.genres]);
  useEffect(() => {
    

    if (genres.value === genreMap.key) {
      // console.log(g)
      setGenres((prevState) => [...prevState]);
    }
  }, [])

  return (
    <div>
      <h2 className="titles">{props.title}</h2>

      <img src={props.image} className="pod_img" />
      <p>Genre(s): {props.genres}</p>
      <p className="info">{props.seasons} Seasons</p>
      <p className="info">
        Last Released:{" "}
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
