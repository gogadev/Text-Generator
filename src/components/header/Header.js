import React from "react";

import img from "../../assets/pen.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <div className="info">
        <img className="img" src={img} alt="" />
        <h1 className="title">Text Generator...</h1>{" "}
        <img className="img" src={img} alt="" />
      </div>
    </header>
  );
};

export default Header;
