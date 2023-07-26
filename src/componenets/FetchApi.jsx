import { useState, useEffect } from "react";
import ResponsiveGrid from "./DataSkeleton";

// import {RenderGenres} from "./ResponsiveGrid";
// import BackToTop from "./BackToTop";
import '../App.css'


export default function FetchAPI() {
  const [preview, setpreview] = useState(null);

  const getApi = () => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        const mapData = data.map((item) => {
          return (
            // <div className="card">
            //   <img src={item.image} className="pod_img" />
            //   <div className="card-content">
            //     <h2 className="card-title">{item.title}</h2>
            //     <h4>{item.genres}</h4>
            //     <p className="card-description">
            //       {item.description}
            //       </p>
            //   </div>
            // </div>

            <>
              <ResponsiveGrid 
              {...item} 
              /* genres = {GetGenreStrings(genres)} */
              />
              {/* <BackToTop /> */}
              
            </>
          );
        });
        setpreview(mapData);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return <div>{preview}</div>;
}
