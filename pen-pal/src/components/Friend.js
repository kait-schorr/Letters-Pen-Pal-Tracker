import React from "react";
import "./FriendsList.css";

const Friend = props => {
  return (
    <div className="friend">
      <div>
        <img src={props.picture} />
      </div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.email}</div>
    </div>
  );
};

export default Friend;
