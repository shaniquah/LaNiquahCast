/**
 * The Seasons function is a React component that renders a card displaying information about a season of a podcast
 * show.
 * @returns a JSX element, which is a div with the class name "seasons_card". Inside the div, there is
 * an h1 element displaying the value of the props.title, an h3 element displaying the value of the
 * props.episodes, and an img element with the src attribute set to the value of the props.image.
 */
export default function Seasons(props) {

  return (
    <div className="seasons_card" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <h3>{props.episodes} Episodes</h3>
        <img src={props.image} className="season_cover_img" />
  </div>
  );
}
