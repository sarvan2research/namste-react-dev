import User from "./User";
import UserClass from "./UserClass";

const About = () => (
  <div>
    <h1>Its Namaste React Test page</h1>
    <h2>From Bangalore</h2>
    <h3>Learning space</h3>
    <User name={"Sarvan from Function"} location={"Salem"} />
    <UserClass name={"Sarvan from Classy"} location={"BLR"} />
  </div>
);

export default About;
