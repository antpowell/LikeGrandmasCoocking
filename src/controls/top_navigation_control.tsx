import React from "react";
import { Toolbar } from "primereact/toolbar";
import RightNavigation from "./right_navigation_control";

interface Props {}

const TopNavigationControl = (props: Props) => {
  return <Toolbar right={RightNavigation} />;
};

export default TopNavigationControl;
