import axios from 'axios';

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';



export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIEND_START })
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FRIEND_FAILURE, payload: err }))
};


export const addFriend = (friend) => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }))
};

