import React from "react";
import MaskGroup12 from "../MaskGroup12";
import "./Component221.css";

function Component221(props) {
  const { component211, path5, line2, maskGroup12Props } = props;

  return (
    <div className="component-22-12">
      <MaskGroup12
        group164Props={maskGroup12Props.group164Props}
        group1642Props={maskGroup12Props.group1642Props}
        group1643Props={maskGroup12Props.group1643Props}
      />
      <div className="component-21-12" style={{ backgroundImage: `url(${component211})` }}>
        <img className="path-510" src={path5} />
        <img className="line-23" src={line2} />
      </div>
    </div>
  );
}

export default Component221;
