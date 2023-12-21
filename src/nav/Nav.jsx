import React, { useState } from "react";
import { images } from "../data";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavLi from "./NavLi";
import { Link } from "react-router-dom";

function Nav() {
  const [controlMenu, setControlMenu] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (e) => {
    setActiveItem(e.target.textContent);
    setControlMenu(true);
  };

  return (
    <nav className="nav">
      <section className="content">
        <Link content="Home" to="/">
          <img src={images.random[2].url} alt="" />
        </Link>
        <ul className="menu-wrapper">
          <ul
            className="menu"
            style={
              controlMenu
                ? { top: "-100vh", transition: "1s ease" }
                : { top: "0", transition: "1s ease" }
            }
            onClick={handleClick}
          >
            <NavLi
              content={
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setControlMenu(true)}
                  className="menu-controller"
                />
              }
            />
            <NavLi content="Home" to="/" isActive={activeItem === "Home"} />
            <NavLi content="Shop" to="/Shop" isActive={activeItem === "Shop"} />
            <NavLi content="Blog" to="/Blog" isActive={activeItem === "Blog"} />
            <NavLi
              content="About"
              to="/About"
              isActive={activeItem === "About"}
            />
            <NavLi
              content="Contact"
              to="/Contact"
              isActive={activeItem === "Contact"}
            />
          </ul>
          <ul className="icons">
            <NavLi
              to="/Cart"
              content={
                <FontAwesomeIcon icon={faBagShopping} className="cart" />
              }
            />
            <NavLi
              content={
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  className="menu-icon"
                  onClick={() => setControlMenu((controlMenu) => !controlMenu)}
                />
              }
            />
          </ul>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
