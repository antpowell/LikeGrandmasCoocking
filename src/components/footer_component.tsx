import React from "react";
import SimpleContactInfo from "../controls/simple_contact_info_control";
import Copyright from "../controls/copyright_control";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div>
      <SimpleContactInfo />
      <Copyright />
    </div>
  );
};

export default Footer;
