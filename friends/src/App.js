import React, { Component } from 'react';
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
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  componentDidMount() {
    this.props.addFriends()
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
    { addFriends }
  )(App);
