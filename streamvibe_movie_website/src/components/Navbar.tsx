import Logo from "../assets/images/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import "../styles/Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/movies_shows"}
        >
          Movies & Shows
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/support"}
        >
          Support
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/subscriptions"}
        >
          Subscriptions
        </NavLink>
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
