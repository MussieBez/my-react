import React from "react";
import Group164 from "../Group164";
import "./MaskGroup12.css";

function MaskGroup12(props) {
  const { group164Props, group1642Props, group1643Props } = props;

  return (
    <div className="mask-group-13">
      <div className="group-1722">
        <Group164 email={group164Props.email} className="group-164-1" />
        <Group164 email={group1642Props.email} className="group-1742" />
        <Group164 email={group1643Props.email} className="group-163-1" />
      </div>
    </div>
  );
}

export default MaskGroup12;
