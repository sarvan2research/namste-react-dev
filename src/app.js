import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./component/Header";
import BodyContainer from "./component/Body";

/*
AppLayout
  Header
    - Logo
    - Nav Items
  Body
  - Search bar
  - RestroContainer
    - Restro Cards
  Footer
    - Copyright
    - Contact
    - Links
    - Address
*/

const AppLayout=()=>(
  <div className="app">
    <div className="header-container">
    <HeaderContainer/>
    </div>
    <div className="body-container">
      <BodyContainer/>
    </div>
  </div>
) 
const rootDom=ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
rootDom.render(<AppLayout />); // return js object to html elementxxs