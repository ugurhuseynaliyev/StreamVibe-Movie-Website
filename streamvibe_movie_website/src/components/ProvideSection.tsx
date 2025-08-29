import "../styles/ProvideSection.css";
import smartphones from "../assets/images/smartphones.png";
import tablet from "../assets/images/tablet.png";
import SmartTv from "../assets/images/SmartTv.png";
import laptops from "../assets/images/laptops.png";
import GamingConsoles from "../assets/images/GamingConsoles.png";
import VrHeadsets from "../assets/images/VrHeadsets.png";

const ProvideSection = () => {
  return (
    <section className="provideSection">
      <h1 className="provideTitle">
        We Provide you streaming experience across various devices.
      </h1>
      <p className="provideDescription">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>

      <div className="provideSectionCards">
        <div className="provideSectionCard">
          <div className="image-title">
            <img src={smartphones} alt="smartphones" />
            <h2 className="provideCardTitle">Smartphones</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>

        <div className="provideSectionCard">
          <div className="image-title">
            <img src={tablet} alt="smartphones" />
            <h2 className="provideCardTitle">Tablet</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>

        <div className="provideSectionCard">
          <div className="image-title">
            <img src={SmartTv} alt="smartphones" />
            <h2 className="provideCardTitle">Smart TV</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>

        <div className="provideSectionCard">
          <div className="image-title">
            <img src={laptops} alt="smartphones" />
            <h2 className="provideCardTitle">Laptops</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>

        <div className="provideSectionCard">
          <div className="image-title">
            <img src={GamingConsoles} alt="smartphones" />
            <h2 className="provideCardTitle">Gaming Consoles</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>

        <div className="provideSectionCard">
          <div className="image-title">
            <img src={VrHeadsets} alt="smartphones" />
            <h2 className="provideCardTitle">VR Headsets</h2>
          </div>
          <p className="provideCardDescription">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvideSection;
