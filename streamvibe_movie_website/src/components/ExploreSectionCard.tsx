import "../styles/ExploreSection.css";
import { IoIosArrowRoundForward } from "react-icons/io";
// import "../styles/ExploreSection.css"

type Props = {
  image: string;
  type: string;
};

const ExploreSectionCard = ({ image, type }: Props) => {
  return (
    <div className="exploreSectionCard">
      <img src={image} alt="MovieImage" />
      <div className="exploreCardContent">
        <p className="typeOfMovie">{type}</p>
        <button>
          <IoIosArrowRoundForward className="exploreCardBtn" />
        </button>
      </div>
    </div>
  );
};

export default ExploreSectionCard;
