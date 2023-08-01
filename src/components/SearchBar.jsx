import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import { preview } from "FetchApi";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const results = preview.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    console.log(searchQuery);
  };

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
