import { useEffect, useState } from "react";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(5, 16);
        setCarouselData(slicedData);
      });
  }, []);

  return (
    <>
      <h2 className="carousel_heading">Recommended Shows</h2>
      <div id="carousel_container">
        {carouselData.map((item) => (
          <>
            <div key={item.id} className="carousel_item">
              <div className="carousel_item_content">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
