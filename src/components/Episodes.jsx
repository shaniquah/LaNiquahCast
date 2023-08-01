export default function Episodes(props) {
  return (
    <>
    <h1>{props.seasons}</h1>
      <h3>{props.seasons.episodes.title}</h3>
      <h4>{props.seasons.episodes.episode}</h4>
      <p>{props.seasons.episodes.description}</p>
      <a href={props.seasons.episodes.file}>
        <button>Listen Now▶️</button>
      </a>
    </>
  );
}
