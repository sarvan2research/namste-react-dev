import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderContainer=() =>
{
  const[buttonName,setButtonName]=useState("Login");
  console.log("Header Called")
  // If no dependency its called on each renders.
  // If Empty Array its called only once when first time screen renders
  // If any state variable given then only called when its getting changed.
  useEffect(()=>{
    console.log("Header called inside UseEffect")
  },[buttonName])

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