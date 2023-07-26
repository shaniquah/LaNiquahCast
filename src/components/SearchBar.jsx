import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    console.log(searchQuery)

    const inputChangeHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    const searchHandler = (title) => {
        const results = title.filter((item) => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSearchResults(results)
    }

  return (
    <div>
        <TextField
      variant="outlined"
      placeholder="Search"
      value={searchQuery}
      name="search"
      onChange={inputChangeHandler}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
            searchHandler()
        }
      }}
      InputProps={{
        startAdornment: (
          <SearchIcon sx={{ color: "action.active", mr: 2, my: 0.5 }} />
        ),
      }}
    />
    <ul>
        {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
        )
        )}
    </ul>
    </div>
    

  );
}
