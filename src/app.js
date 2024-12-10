import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./component/Header";
import BodyContainer from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";

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
//Step1: Creating routes
paths=[
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error />
  },
  {
    path:"/about",
    element:<About />,
  },
  {
    path:"/contact",
    element:<Contact />,
  },
]
const routes=createBrowserRouter(paths)
const rootDom=ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
//rootDom.render(<AppLayout />); // return js object to html elementxxs
//Step2:
rootDom.render(<RouterProvider router={routes}/>)