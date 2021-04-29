import React from "react";
import "./Union6.css";

function Union6(props) {
  const { union6, className } = props;

  return <img className={`union-6 ${className || ""}`} src={union6} />;
}

export default Union6;
