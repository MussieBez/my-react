import React from "react";
import "./Group179.css";

function Group179(props) {
  const { browse, membership, editorial, className } = props;

  return (
    <div className={`group-179 ${className || ""}`}>
      <div className="browse overpass-normal-gray-15px">{browse}</div>
      <div className="membership overpass-normal-gray-15px">{membership}</div>
      <div className="editorial overpass-normal-gray-15px">{editorial}</div>
    </div>
  );
}

export default Group179;
