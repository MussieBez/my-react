import React from "react";
import MaskGroup1 from "../MaskGroup1";
import "./Login.css";

function Login(props) {
  const { group173, path5, line2, maskGroup1Props } = props;

  return (
    <div className="log-in3">
      <MaskGroup1 group164Props={maskGroup1Props.group164Props} group1642Props={maskGroup1Props.group1642Props} />
      <div className="group-1732" style={{ backgroundImage: `url(${group173})` }}>
        <img className="path-56" src={path5} />
        <img className="line-22" src={line2} />
      </div>
    </div>
  );
}

export default Login;
