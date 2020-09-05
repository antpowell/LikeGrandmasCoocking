import React from "react";
import logo from "../logo.svg";

interface Props {}

const HeaderBody = (props: Props) => {
  return (
    <header className="App-header">
      <div className="title">Like Grandma's Cooking and Catering</div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default HeaderBody;
