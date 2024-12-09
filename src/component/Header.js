import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderContainer=() =>
{
  const[buttonName,setButtonName]=useState("Login");

  return (
  <div className="header">
    <div className="logo-container">
      <img className="logo"src={LOGO_URL}></img>
    </div>
    <div className="nav-container-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn"
          onClick={()=>{
            buttonName==="Login"?
            setButtonName("Logout"):
            setButtonName("Login")
          }}>{buttonName}</button>
        </ul>
    </div>
  </div>
)
}
export default HeaderContainer;