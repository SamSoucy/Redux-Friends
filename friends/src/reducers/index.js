import {
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE
} from "../actions"

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FRIEND_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ""
            };
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                error: "",
                friends: action.payload,
                friendsFetched: true
            };
        case FETCH_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;