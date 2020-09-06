import React from "react";
import MenuItem from "../controls/menu_item_control";

interface Props {}

const Menu = (props: Props) => {
  const menuList: Array<JSX.Element> = [
    <MenuItem />,
    <MenuItem />,
    <MenuItem />,
    <MenuItem />,
    <MenuItem />,
    <MenuItem />,
  ];
  const createGrid = menuList.map((element) => (
    <div className="p-col-4 p-shadow-2">{element}</div>
  ));

  return (
    <>
      <div className="menu_list p-grid">{createGrid}</div>
    </>
  );
};

export default Menu;
