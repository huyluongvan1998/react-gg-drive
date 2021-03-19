import React from "react";
import "./App.css";
import { GlobalStyle } from "./global.style";
import "primeicons/primeicons.css";
import Header from "pages/header";
import Sidenav from "pages/sidenav";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle>
        <Header />
        <Sidenav />
      </GlobalStyle>
    </div>
  );
};

export default App;
