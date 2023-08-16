/* The code is importing three modules: `SearchIcon` from the `@mui/icons-material/Search` package,
`TextField` from the `@mui/material/TextField` package, and `useState` from the `react` package.
These modules are used in the `SearchBar` component to render a search icon, a text input field, and
manage state respectively. */
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

/**
 * The SearchBar component is a React component that allows users to search for podcasts and displays
 * the search results.
 * @returns The SearchBar component is returning a form with an input field for searching, and a div to
 * display the search results. The search results are mapped over and displayed as individual result
 * items, each containing the title and image of the podcast.
 */
export default function SearchBar() {
  const [fuse, setFuse] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        const newFuse = new Fuse(data, {
          keys: ["id", "title"],
        });
        setFuse(newFuse);
      });
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;
    if (fuse) {
      const results = fuse.search(search);
      setSearchResults(results.map((result) => result.item));
    }
  };

  return (
    <>
      <form className="search_form">
        {/* Use the TextField component from MUI for styling */}
        <TextField
          type="search"
          aria-label="Search"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "action.active", mr: 2, my: 0.5 }} />
              </InputAdornment>
            ),
          }}
        />
      </form>

      <div className="search_results_container">
        <div className="search_results">
          {searchResults.map((result) => (
            <div key={result.id} className="result_item">
              <h2 className="result_title">{result.title}</h2>
              <img
                src={result.image}
                className="result_pod_img"
                alt={`Podcast ${result.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
