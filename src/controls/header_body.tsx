import React from "react";

interface Props {}

const HeaderBody = (props: Props) => {
  return (
    <header className="">
      <div className="title">Like Grandma's Cooking and Catering</div>
      <img
        src="/assets/images/Like_Grandmas_Cooking.jfif"
        className=""
        alt="logo"
      />
    </header>
  );
};

export default HeaderBody;
