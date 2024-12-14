import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./component/Header";
import BodyContainer from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantDetails from "./component/RestaurantDetails";
import Shimmer from "./component/Shimmer";

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

// to make app loadtiming faster
// use of chunking,lazy loading, ondemand loading
// using lazy feature from react make it easy(use lazy import and add suspense so react can pull it behind screen until that fallback screen (shimmerUI) shown to user)
//

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => (
  <div className="app">
    <HeaderContainer />
    <Outlet />
  </div>
);
//Step1: Creating routes
paths = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
];
const routes = createBrowserRouter(paths);
const rootDom = ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
//rootDom.render(<AppLayout />); // return js object to html elementxxs
//Step2:
rootDom.render(<RouterProvider router={routes} />);
