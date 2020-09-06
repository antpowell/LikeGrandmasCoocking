import React from "react";
import "./App.css";
import Header from "./components/header_component";
import Menu from "./components/menu_component";

import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Footer from "./components/footer_component";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
