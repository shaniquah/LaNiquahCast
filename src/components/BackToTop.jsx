import { useState } from "react";
import "../index.css";

export default function BackToTop() {
  const [setShowText] = useState(false);
  const buttonHoverHandler = () => {
    setShowText(true);
  };

  const buttonIdleHandler = () => {
    setShowText(false);
  };

  return (
    <button
      id="return_top"
      onClick={() => window.scrollTo(0, 0)}
      onMouseEnter={buttonHoverHandler}
      onMouseLeave={buttonIdleHandler}
    >
      <span id="return_top_text">Return to Top</span>
      <span>
        <img id="return_top_button" src="./src/assets/arrow-top.png" />
      </span>
    </button>
  );
}
