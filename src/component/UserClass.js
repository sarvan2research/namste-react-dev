import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        name: "deafult-name",
        avatar: "dummy-pic",
        location: "Dummy-Location",
      },
    };
    console.log(this.props.name + "Cosntructor Called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sarvan2research");

    const profile = await data.json();
    this.setState({ userProfile: profile });

    console.log(this.props.name + "Component Did Mount Called");

    this.timer = setInterval(() => {
      console.log("Classy delayed for 1 second.");
    }, "1000");
  }

  componentDidUpdate() {
    console.log(this.props.name + "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { name, location } = this.props;
    const { userProfile } = this.state;
    console.log(this.props.name + "Render Method called");
    return (
      <div className="user-container">
        <h2>Name of the Developer:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Twitter Handle:sarvan2victory</h3>
        <h4>GithubName: {userProfile.name}</h4>
        <h4>GitLoginId: {userProfile.login}</h4>
        <img src={userProfile.avatar_url}></img>
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
