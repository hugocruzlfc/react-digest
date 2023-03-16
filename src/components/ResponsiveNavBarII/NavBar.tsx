import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    console.log("hi");
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      {toggleMenu && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button
        className="btn"
        onClick={toggleNav}
      >
        BTN
      </button>
    </nav>
  );
}
