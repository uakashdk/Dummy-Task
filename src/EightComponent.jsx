import React from "react";
import logo from "../src/assests/10001.svg";
import "./EightComponent.css";
import background from "../src/assests/10007.png";
const EightComponent = () => {
  return (
    <div className="eightcap-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button className="login-btn">Log into Eightcap</button>
      </div>

      <div className="hero">
        <div className="big-eight">
          <img src={background} alt="background-8" />
        </div>

        <div className="nav-links">
          <div className="nav-item green">
            Trade <span className="dot"></span>
          </div>
          <div className="nav-item blue">
            Partner <span className="dot"></span>
          </div>
          <div className="nav-item grey">
            AI <span className="dot"></span>
          </div>
          <div className="nav-item yellow">
            Embedded <span className="dot"></span>
          </div>
          <div className="nav-item purple">
            Careers <span className="dot"></span>
          </div>
        </div>
        <div className="floating-icon">
          <span className="icon-text">∞</span>
        </div>
      </div>
    </div>
  );
};

export default EightComponent;
