import React from "react";
import Group164 from "../Group164";
import "./MaskGroup1.css";

function MaskGroup1(props) {
  const { group164Props, group1642Props } = props;

  return (
    <div className="mask-group-12">
      <div className="group-172">
        <Group164 email={group164Props.email} className="group-1642" />
        <Group164 email={group1642Props.email} className="group-163" />
      </div>
    </div>
  );
}

export default MaskGroup1;
