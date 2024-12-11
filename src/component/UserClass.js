import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-container">
        <h2>Name of the Developer:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Twitter Handle:sarvan2victory</h3>
        <h4>Count- {count}</h4>
        <h4>Count2- {count2}</h4>
        <button
          onClick={() => {
            console.log("button clicked");
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Button
        </button>
      </div>
    );
  }
}
export default UserClass;
