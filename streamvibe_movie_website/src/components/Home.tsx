import { FaPlay } from "react-icons/fa";
import "../styles/Home.css";
import ExploreSection from "../components/ExploreSection";
import ProvideSection from "./ProvideSection";
import FAQ from "../components/FAQ";
import PlanSection from "./PlanSection/PlanSection";


const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeBackground">
        <div className="homeContent">
          <h1 className="contentTitle">The Best Streaming Experience</h1>
          <p className="contentDescription">
            is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="homeButton">
            <FaPlay /> Start Watching Now
          </button>
        </div>
      </div>
      <ExploreSection />
      <ProvideSection />
      <FAQ />
      <PlanSection/>
    </div>
  );
};

export default Home;
