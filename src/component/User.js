import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count1] = useState(2);

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
