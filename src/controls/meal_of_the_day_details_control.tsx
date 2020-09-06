import React from "react";

interface Props {}

const MealDetails = (props: Props) => {
  return (
    <div>
      <div className="mean_name">Roast Beef Soup</div>
      <div className="nutrition_facts">650cal</div>
      <div className="meal_notes">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsam
        molestiae deserunt officiis reprehenderit tempore et cupiditate,
        consequuntur esse dignissimos asperiores repudiandae expedita ipsum quo,
        maxime possimus perspiciatis quasi est.
      </div>
      <div className="meal_price">$12.99</div>
    </div>
  );
};

export default MealDetails;
