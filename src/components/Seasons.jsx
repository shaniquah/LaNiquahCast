export default function Seasons(props) {

  return (
    // <div>
    //   <h1>{props.title}</h1>
    //   <h2>{props.seasons.title}</h2>
    //   <h3>Season: {props.seasons.season}</h3>
    //   <img src={props.seasons.image} className="season_cover_img" />
    // </div>

    <div>
        <h1>{props.title}</h1>
        <img src={props.image} className="season_cover_img" />
  </div>
  );
}
