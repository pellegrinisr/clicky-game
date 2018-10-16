import React from "react";

const Header = props => (
  <nav className="navbar navbar-dark fixed-top bg-dark">
    <div className="nav navbar-nav navbar-left">
      <a href="/">Clicky Game</a>
    </div>
    <div className="nav navbar-nav navbar-center">
      <span className="navbar-text">Click Any Image to Begin!</span>
    </div>
    <div className="nav navbar-nav navbar-right text-light">
      Score: {props.score} | Top Score: {props.topScore}
    </div>
  </nav>
);

export default Header;