import React from "react";
import "./Group164.css";

function Group164(props) {
  const { email, className } = props;

  return (
    <div className={`group-164 border-1px-cararra ${className || ""}`}>
      <div className="email nunitosans-normal-silver-10px">{email}</div>
    </div>
  );
}

export default Group164;
