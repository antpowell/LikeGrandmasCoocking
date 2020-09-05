import React from "react";
import TopNavigationControl from "../controls/top_navigation_control";

import HeaderBody from "../controls/header_body";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <TopNavigationControl />
      <HeaderBody />
    </div>
  );
};

export default Header;
