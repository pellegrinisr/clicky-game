import React from "react";
import "./Header.css";

const Header = props => (
  <nav className="navbar fixed-top">
    <div className="nav navbar-nav navbar-left">
      <a href="/">Clicky Game</a>
    </div>
    <div className="nav navbar-nav navbar-center">
      <span className="navbar-text">Click a Team Logo to Begin!</span>
    </div>
    <div className="nav navbar-nav navbar-right text-light">
      Score: {props.score} | Top Score: {props.topScore}
    </div>
  </nav>
);

export default Header;