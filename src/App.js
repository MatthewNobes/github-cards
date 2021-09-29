import React from 'react';
import axios from 'axios';
import './App.css';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(response.data);
      this.setState({userName: ''})
    }
    catch (error){
        console.log(error);
    }
    
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
      profiles: [],
    };
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    ) 
  }
}

export default App;
