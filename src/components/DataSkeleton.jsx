/* eslint-disable react/prop-types */
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { genreMap } from "./GetGenreStrings";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "justified",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 5, sm: 10, md: 9 }}
      >
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={8} md={8} key={index}>
            <Item id="card">
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
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
