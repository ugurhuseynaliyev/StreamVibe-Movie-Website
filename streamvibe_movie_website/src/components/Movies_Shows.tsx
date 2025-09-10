import { SlLike } from "react-icons/sl";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import "../styles/Movies_Shows.css";
import { useEffect, useRef } from "react";

const Movies_Shows = () => {
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function setMarginTop() {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight + "px";
        document.documentElement.style.setProperty("--header-height", height);
        console.log("Header height: ", height)
      }
    }

    setMarginTop();
    window.addEventListener("resize", setMarginTop);

    return () => window.removeEventListener("resize", setMarginTop);
  }, []);
  return (
    <section className="movies_shows" id="movies_shows">
      <div className="movies_shows_hero">
        <div className="movies_shows_content">
          <div className="movies_shows_title"></div>
          <div className="movies_shows_description"></div>
          <div className="movies_shows_buttons">
            <button className="playNow">Play Now</button>
            <button className="add">+</button>
            <button className="like">
              <SlLike />
            </button>
            <button className="sound">
              <HiOutlineSpeakerWave />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies_Shows;
