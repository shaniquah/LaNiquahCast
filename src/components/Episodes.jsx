export default function Episodes(props) {
  return (
    <div className="episodes_card">
    <h1>{props.seasons.episodes.title}</h1>
      <h2>Season: {props.seasons.season}</h2>
      <h3>Episode: {props.seasons.episodes.episode}</h3>
      <p>{props.seasons.episodes.description}</p>
      <a href={props.seasons.episodes.file}>
        <button>Listen Now▶️</button>
      </a>
    </div>
  );
}
