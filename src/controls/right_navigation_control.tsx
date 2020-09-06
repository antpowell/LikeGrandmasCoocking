import React from "react";
import { Button } from "primereact/button";

interface Props {}

const RightNavigation = (props: Props) => {
  return (
    <>
      <Button label="Home" className="p-mr-2" />
      <Button label="Menu" className="p-mr-2" />
      <Button label="Contact" className="p-mr-2" />
    </>
  );
};

export default RightNavigation;
