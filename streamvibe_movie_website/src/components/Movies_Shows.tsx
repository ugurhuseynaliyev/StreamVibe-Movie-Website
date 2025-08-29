import { SlLike } from "react-icons/sl";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import "../styles/Movies_Shows_hero.css";

const Movies_Shows = () => {
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
