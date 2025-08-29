import "../styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerColumn">
          <a className="mainLink" href="#home">
            Home
          </a>
          <a className="footerLink" href="#">
            Categories
          </a>
          <a className="footerLink" href="#">
            Devices
          </a>
          <a className="footerLink" href="#">
            Pricing
          </a>
          <a className="footerLink" href="#">
            FAQ
          </a>
        </div>
        <div className="footerColumn">
          <a className="mainLink" href="#movies">
            Movies
          </a>
          <a className="footerLink" href="#">
            Gernes
          </a>
          <a className="footerLink" href="#">
            Trending
          </a>
          <a className="footerLink" href="#">
            New Release
          </a>
          <a className="footerLink" href="#">
            Popular
          </a>
        </div>
        <div className="footerColumn">
          <a className="mainLink" href="#shows">
            Shows
          </a>
          <a className="footerLink" href="#">
            Gernes
          </a>
          <a className="footerLink" href="#">
            Trending
          </a>
          <a className="footerLink" href="#">
            New Release
          </a>
          <a className="footerLink" href="#">
            Popular
          </a>
        </div>
        <div className="footerColumn">
          <a className="mainLink" href="#support">
            Support
          </a>
          <a className="footerLink" href="#">
            Contact Us
          </a>
        </div>
        <div className="footerColumn">
          <a className="mainLink" href="#subscription">
            Subscription
          </a>
          <a className="footerLink" href="#">
            Plans
          </a>
          <a className="footerLink" href="#">
            Features
          </a>
        </div>
        <div className="footerColumn">
          <a className="mainLink" href="#connect">
            Connect With Us
          </a>
          <div className="row">
            <div className="icon">
              <FaFacebook />
            </div>

            <div className="icon">
              <FaXTwitter />
            </div>

            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="leftSide">
          <p>@2025 streamvibe, All Rights Reserved</p>
        </div>
        <div className="rightSide">
          <a href="#" className="footerLink">Terms of Use</a>
          <a href="#" className="footerLink">Privacy Policy</a>
          <a href="#" className="footerLink">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
