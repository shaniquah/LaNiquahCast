import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";

// import {RenderGenres} from "./ResponsiveGrid";
import BackToTop from "./BackToTop";
import '../App.css'
// import SearchBar from "./SearchBar";


export default function FetchAPI() {
  const [preview, setPreview] = useState(null);

  const getApi = () => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        const mapData = data.map((item) => {
          return (
            <>
            {/* <SearchBar/> */}
              <ResponsiveGrid 
              {...item} 
              /* genres = {GetGenreStrings(genres)} */
              />
              <BackToTop />
              
            </>
          );
        });
        setPreview(mapData);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return <div key={preview}>{preview}</div>;
}
