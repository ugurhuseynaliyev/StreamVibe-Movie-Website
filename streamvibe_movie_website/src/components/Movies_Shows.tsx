import { SlLike } from "react-icons/sl";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import "../styles/Movies_Shows.css";
import ExploreSectionCard from "./ExploreSectionCard";
import Carousel from "react-multi-carousel";
// import data from "../Database/db.json";
import StartFreeTrial from "./PlanSection/StartFreeTrial";

// interface MovieCategory {
//   img: string;
//   type: string;
// }

const Movies_Shows = () => {
  const popularTop10InGenres = [
    { img: "../src/assets/images/popular1.png", type: "Action" },
    { img: "../src/assets/images/popular2.png", type: "Adventure" },
    { img: "../src/assets/images/popular3.png", type: "Comedy" },
    { img: "../src/assets/images/popular4.png", type: "Drama" },
  ];

  return (
    <section className="movies_shows" id="movies_shows">
      <div className="movies_shows_hero">
        <div className="movies_shows_content">
          <div className="movies_shows_title">Avengers : Endgame</div>
          <div className="movies_shows_description">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </div>
          <div className="movies_shows_buttons">
            <button className="playNow">
              <FaPlay />
              Play Now
            </button>
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

      <div className="moviesSection">
        <div className="ourGenres">
          <h1 className="sectionTitle">Our Genres</h1>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1430 },
                items: 4,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: { max: 1430, min: 768 },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: { max: 768, min: 320 },
                items: 2,
                partialVisibilityGutter: 0,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {popularTop10InGenres.map((item, index) => (
              <ExploreSectionCard
                key={index}
                image={item.img}
                type={item.type}
              />
            ))}
          </Carousel>

          <h1 className="sectionTitle">Popular Top 10 In Genres</h1>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1430 },
                items: 4,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: { max: 1430, min: 768 },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: { max: 768, min: 320 },
                items: 2,
                partialVisibilityGutter: 0,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {popularTop10InGenres.map((item, index) => (
              <ExploreSectionCard
                key={index}
                image={item.img}
                type={item.type}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="showsSection">
        <div className="ourGenres">
          <h1 className="sectionTitle">Our Genres</h1>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1430 },
                items: 4,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: { max: 1430, min: 768 },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: { max: 768, min: 320 },
                items: 2,
                partialVisibilityGutter: 0,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {popularTop10InGenres.map((item, index) => (
              <ExploreSectionCard
                key={index}
                image={item.img}
                type={item.type}
              />
            ))}
          </Carousel>

          <h1 className="sectionTitle">Popular Top 10 In Genres</h1>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1430 },
                items: 4,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: { max: 1430, min: 768 },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: { max: 768, min: 320 },
                items: 2,
                partialVisibilityGutter: 0,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {popularTop10InGenres.map((item, index) => (
              <ExploreSectionCard
                key={index}
                image={item.img}
                type={item.type}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <StartFreeTrial />
    </section>
  );
};

export default Movies_Shows;
