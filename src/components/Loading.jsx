import "../Loading.css";

/**
 * The function returns a loading component with a loader animation and a "Loading..." text.
 * @returns a JSX element. It is a div element with a class name of "loading" and contains a child div
 * element with a class name of "loader" and a p element with the text "Loading...".
 */
function Loading() {
  return (
    <div className="loading">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
