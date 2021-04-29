import React from "react";
import MaskGroup1 from "../MaskGroup1";
import "./Login2.css";

function Login2(props) {
  const { group173, path5, line2, maskGroup1Props } = props;

  return (
    <div className="log-in7">
      <MaskGroup1 group164Props={maskGroup1Props.group164Props} group1642Props={maskGroup1Props.group1642Props} />
      <div className="group-1733" style={{ backgroundImage: `url(${group173})` }}>
        <img className="path-511" src={path5} />
        <img className="line-24" src={line2} />
      </div>
    </div>
  );
}

export default Login2;
