import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface Props {}

const MenuItem = (props: Props) => {
  const header = <img alt="Card" src="assets/images/food.jfif" />;
  const footer = (
    <span>
      <Button
        label="Save"
        icon="pi pi-check"
        style={{ marginRight: ".25em" }}
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary"
      />
    </span>
  );
  return (
    <Card footer={footer} header={header}>
      Good morning ladies and gents. Today we are having stuffed chicken. It is
      stuffed with Italian ground, pepperoni and cheese. Topped with tomato
      sauce and cheese. Also comes with a side of California mixed vegetables is
      linguine pasta. A salad, dessert, and drink comes with it.
    </Card>
  );
};

export default MenuItem;
