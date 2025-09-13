import "../styles/ExploreSection.css";
import ExploreSectionCard from "./ExploreSectionCard";
// import data from "../Database/db.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// interface MovieCategory {
//   img: string;
//   type: string;
// }

const ExploreSection = () => {
  const exploreSectionData = [
    { img: "../src/assets/images/actionMovie.png", type: "Action" },
    { img: "../src/assets/images/adventureMovie.png", type: "Adventure" },
    { img: "../src/assets/images/comedyMovie.png", type: "Comedy" },
    { img: "../src/assets/images/dramaMovie.png", type: "Drama" },
    { img: "../src/assets/images/horrorMovie.png", type: "Horror" },
  ];
  return (
    <div className="exploreSection">
      <h1 className="exploreTitle">Explore our wide variety of categories</h1>
      <p className="exploreDescription">
        Whether you're looking for a comedy to make you laugh, a drama to make
        you think, or a documentary to learn something new
      </p>
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
        {exploreSectionData.map((item, index) => (
          <ExploreSectionCard key={index} image={item.img} type={item.type} />
        ))}
      </Carousel>
    </div>
  );
};

export default ExploreSection;
