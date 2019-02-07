import React, { Component } from 'react';
import { getFriends } from './actions'
import { addFriends } from './actions'
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        name: "",
        age: "",
        email: ""
      }
    };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  submitHandler = ev => {
    ev.preventDefault();
    this.props.addFriends({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: "",
      age: "",
      email: ""
    })
  }

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div>
        <h1>FriendsList!!</h1>
        {this.props.friends.map((friend, index) => {
          return <div key={index}>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        })}

      <form onSubmit ={this.submitHandler}>
        <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
        />
        <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.age}
        />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
        />
        <button>Add New Friend</button>
    </form>
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      fetchingFriends: state.fetchingFriends,
      friendsFetched: state.friendsFetched,
      friendsSaved: state.friendsSaved,
      savingFriends: state.savingFriends,
      updatingFriend: state.updatingFriend,
      friendUpdated: state.friendUpdated,
      deletingFriend: state.deletingFriend,
      friendDeleted: state.friendDeleted,
      friends: state.friends,
      error: state.error
    };
  };

  
  

  export default connect(mapStateToProps,
    {
      getFriends,
      addFriends
    }
  )(App);
