import React from "react";
import MealDetails from "../controls/meal_of_the_day_details_control";

interface Props {}

const MealOfTheDay = (props: Props) => {
  return (
    <>
      <h3>Today's Special</h3>
      <img src="/assets/images/food2.jfif" alt="" className="meal_img" />
      <MealDetails />
    </>
  );
};

export default MealOfTheDay;
