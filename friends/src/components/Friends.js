import React from 'react';

const Friends = props => {
    return (
        <div className="friends">
            <h1>{props.friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friends;