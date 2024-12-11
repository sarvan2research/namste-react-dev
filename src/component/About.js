import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Cosntructor Called");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>Its Namaste React Test page</h1>
        <h2>From Bangalore</h2>
        <h3>Learning space</h3>
        <UserClass name={"First"} location={"BLR"} />
        <UserClass name={"Second"} location={"BLR"} />
      </div>
    );
  }
}

// const About = () => (
//   <div>
//     <h1>Its Namaste React Test page</h1>
//     <h2>From Bangalore</h2>
//     <h3>Learning space</h3>
//     <User name={"Sarvan from Function"} location={"Salem"} />
//     <UserClass name={"Sarvan from Classy"} location={"BLR"} />
//   </div>
// );

export default About;
