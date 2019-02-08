import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { getFriends } from './actions'

class App extends Component {
  componentDidMount(){
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends List!!</h1>
        <FriendForm />
        <FriendsList friends={this.props.friends} />

      </div>
    );
  }
}
const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.fetchingFriends,
});
export default connect(
  mapStateToProps,
  { getFriends } 
)(App);