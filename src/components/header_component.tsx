import React from "react";
import TopNavigationControl from "../controls/top_navigation_control";

import HeaderBody from "../controls/header_body";
import MealOfTheDay from "./meal_of_the_day_component";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <MealOfTheDay />
      <TopNavigationControl />
      <HeaderBody />
    </div>
  );
};

export default Header;
