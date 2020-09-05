import React from "react";

interface Props {}

const TopNavigationControl = (props: Props) => {
  return (
    <nav>
      <img src="./logo" alt="" />
      <div className="button_group">
        <button>Home</button>
        <button>Menu</button>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default TopNavigationControl;
