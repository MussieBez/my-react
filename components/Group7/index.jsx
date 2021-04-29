import React from "react";
import "./Group7.css";

function Group7(props) {
  const { group7, path31, path32 } = props;

  return (
    <div className="group-72" style={{ backgroundImage: `url(${group7})` }}>
      <img className="path-312" src={path31} />
      <img className="path-322" src={path32} />
    </div>
  );
}

export default Group7;
