import React from 'react';
import './App.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
  /**This takes an array of objects (people and their data) and maps out the data into a new 
   * array called profile. This is then used to fill Card components with the profile data
   * until every item in the array has had a component generated for it.
   */
  <div>
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
)

class Card extends React.Component{
  render() {

    const profile = this.props;

    return (
      <div className="github-profile">
          <img src={profile.avatar_url} />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
      </div>
    )
  }
}

class Form extends React.Component {
  state = {
    userName: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.userName} 
          onChange={event => this.setState({userName: event.target.value})} 
          placeholder="GitHub Username please" 
          required
        />
        <button>Add Card</button>
      </form>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: testData,
    };
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </div>
    ) 
  }
}

export default App;
