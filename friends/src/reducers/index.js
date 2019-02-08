import {  
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
 
} from '../actions';
 
const initialState = {
    friends: [],
    fetchingFriends: false,
    addFriends: false,
    error: null
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIEND_START:
            return {
                ...state,
                fetchingFriends: true
            };
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
            };
        case FETCH_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
            };
        case ADD_FRIEND_START:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: true
            };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: null,
                friends: action.payload
            };
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
            };
            default:
            return state;
        }
    }
    export default reducer;
 