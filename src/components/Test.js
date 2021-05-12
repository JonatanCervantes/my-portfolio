import React from "react";

import { ReactComponent as DatabaseIcon } from "../assets/images/database-icon.svg";
import { MyIcons, ICON_TYPES } from "./MyIcons";

export default function Test() {
  return (
    <MyIcons
      type={ICON_TYPES.databaseIcon}
      fill="green"
      stroke="green"
    ></MyIcons>
  );
}
