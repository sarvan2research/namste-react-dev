import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderContainer = () => {
  const [buttonName, setButtonName] = useState("Login");
  //console.log("Header Called");
  // If no dependency its called on each renders.
  // If Empty Array its called only once when first time screen renders
  // If any state variable given then only called when its getting changed.
  const isOnline = useOnlineStatus();
  useEffect(() => {
    //console.log("Header called inside UseEffect");
  }, [buttonName]);

  return (
    <div className="flex justify-between bg-amber-100 shadow-lg sm:bg-green-300 lg:bg-purple-300">
      <div className="logo-container">
        <img className="w-12" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{isOnline ? "✅" : "🛑"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderContainer;
