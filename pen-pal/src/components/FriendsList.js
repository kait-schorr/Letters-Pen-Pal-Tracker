import React from "react";
import Friend from "./Friend";
import "./FriendsList.css";

const FriendsList = props => {
  return (
    <div className="friends-card">
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          penpal={friend.penpal}
          letter={friend.letter}
          // picture={friend.picture}
        />
      ))}
    </div>
  );
};

export default FriendsList;
