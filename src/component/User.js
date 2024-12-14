import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count1] = useState(2);

  useEffect(() => {
    console.log(name + "from fucntional component");
    timer = setInterval(() => {
      console.log("Func delayed for 1 second.");
    }, "1000");

    return () => {
      console.log(
        "Cleanup called once per screen change also reason for async is not available for useEffect"
      );
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-container">
      <h2>Name of the Developer:{name}</h2>
      <h3>Location:{location}</h3>
      <h3>Twitter Handle:sarvan2victory</h3>
      <h4>Count- {count}</h4>
      <h4>Count1- {count1}</h4>
    </div>
  );
};
export default User;
