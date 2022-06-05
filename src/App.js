import React from "react";
import Form from "./features/Form";
import "./App.css";

const CardList = (props) => (
  /**This takes an array of objects (people and their data) and maps out the data into a new
   * array called profile. This is then used to fill Card components with the profile data
   * until every item in the array has had a component generated for it.
   */
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile">
        <img alt={profile.name} src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };
  }

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
