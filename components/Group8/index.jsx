import React from "react";
import Group7 from "../Group7";
import "./Group8.css";

function Group8(props) {
  const { group5, group6, path13, group7Props, className } = props;

  return (
    <div className={`group-82 ${className || ""}`}>
      <div className="group-52" style={{ backgroundImage: `url(${group5})` }}></div>
      <div className="group-62" style={{ backgroundImage: `url(${group6})` }}></div>
      <img className="path-132" src={path13} />
      <Group7 group7={group7Props.group7} path31={group7Props.path31} path32={group7Props.path32} />
    </div>
  );
}

export default Group8;
