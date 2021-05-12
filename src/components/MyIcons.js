import React from "react";
import { ReactComponent as FrontEndIcon } from "../assets/images/frontend-icon.svg";
import { ReactComponent as BackEndIcon } from "../assets/images/backend-icon.svg";
import { ReactComponent as DatabaseIcon } from "../assets/images/database-icon.svg";
import { ReactComponent as OtherIcon } from "../assets/images/other-icon.svg";
import { ReactComponent as SoftSkillsIcon } from "../assets/images/softskills-icon.svg";

const ICON_TYPES = {
  frontEndIcon: "frontEndIcon",
  backEndIcon: "backEndIcon",
  databaseIcon: "databaseIcon",
  otherIcon: "otherIcon",
  softSkillsIcon: "softSkillsIcon",
};

function getProperIcon(type, fill, stroke, style) {
  switch (type) {
    case "frontEndIcon":
      return (
        <FrontEndIcon
          fill={fill}
          stroke={stroke}
          className={style}
        ></FrontEndIcon>
      );
    case "backEndIcon":
      return (
        <BackEndIcon
          fill={fill}
          stroke={stroke}
          className={style}
        ></BackEndIcon>
      );
    case "databaseIcon":
      return (
        <DatabaseIcon
          fill={fill}
          stroke={stroke}
          className={style}
        ></DatabaseIcon>
      );
    case "otherIcon":
      return (
        <OtherIcon fill={fill} stroke={stroke} className={style}></OtherIcon>
      );
    case "softSkillsIcon":
      return (
        <SoftSkillsIcon
          fill={fill}
          stroke={stroke}
          className={style}
        ></SoftSkillsIcon>
      );
  }
}

function MyIcons(props) {
  return (
    <>{getProperIcon(props.type, props.fill, props.stroke, props.style)}</>
  );
}

export { MyIcons, ICON_TYPES };
