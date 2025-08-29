import Logo from "../assets/images/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import "../styles/Navbar.css";
import type React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

type NavbarProps = {
  setSelectedPage: React.Dispatch<
    React.SetStateAction<"home" | "movies_shows">
  >;
  selectedPage: "home" | "movies_shows";
};

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>

      <div className="openMenu" onClick={() => setIsOpen(true)}>
        <CiMenuFries />
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="closeMenu" onClick={() => setIsOpen(false)}>
          <IoClose />
        </div>
        <li
          onClick={() => setSelectedPage("home")}
          className={selectedPage === "home" ? "active" : ""}
        >
          <a>Home</a>
        </li>
        <li
          onClick={() => setSelectedPage("movies_shows")}
          className={selectedPage === "movies_shows" ? "active" : ""}
        >
          <a>Movies & Shows</a>
        </li>
        <li>
          <a>Support</a>
        </li>
        <li>
          <a>Subscriptions</a>
        </li>
      </nav>
      <div className="navButtons">
        <button>
          <IoSearchOutline />
        </button>

        <button>
          <IoIosNotificationsOutline />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
