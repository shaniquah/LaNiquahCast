/* The code is importing three modules: `SearchIcon` from the `@mui/icons-material/Search` package,
`TextField` from the `@mui/material/TextField` package, and `useState` from the `react` package.
These modules are used in the `SearchBar` component to render a search icon, a text input field, and
manage state respectively. */
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import FetchAPI, {preview} from "./FetchApi";

/* The code defines a React functional component called `SearchBar`. It is a search bar component that
allows users to enter a search query and displays the search results. */
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /**
   * The inputChangeHandler function updates the searchQuery state with the value of the input field.
   */
  const inputChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  /**
   * The searchHandler function filters an array called preview based on a search query and updates the
   * search results.
   */
  const searchHandler = (event) => {
    event.preventDefault();

    const results = preview.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    console.log(searchQuery);
  };

  /* The `return` statement returns the JSX (JavaScript XML) code that defines the 
  structure and content of the component's UI. */
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search"
        type="text"
        value={searchQuery}
        name="search"
        onChange={inputChangeHandler}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "click") {
            searchHandler();
          }
        }}
        InputProps={{
          startAdornment: (
            <SearchIcon sx={{ color: "action.active", mr: 2, my: 0.5 }} />
          ),
        }}
      />

      <button onClick={searchHandler} className="search_btn">
        <SearchIcon sx={{ color: "black", mr: 2, my: 0.5 }} />
      </button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
