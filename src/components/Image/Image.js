import React from "react";
import "./Image.css";

const Image = props => (
  <img className="pic" src={"images/" + props.src} alt="test" onClick={props.onClick} id={props.id}/>
);

export default Image;