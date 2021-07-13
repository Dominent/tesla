import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <div className="landing__nav">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/2000px-Tesla_Motors_Logo.svg.png"
            alt="tesla__logo"
          />
        </Link>
        <p id="nav__home">Home</p>
        <p id="nav__aboutUs">About</p>
        <p id="nav__contacts">Contacts</p>
      </div>
    </div>
  );
}

export default Nav;
