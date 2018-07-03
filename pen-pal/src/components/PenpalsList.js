import React from "react";
import Penpal from "./Penpal";
import "./PenpalList.css";

const PenpalsList = props => {
  return (
    <div className="friends-card">
      Penpal List
      {/* {props.friends.map(friend => (
        <Penpal
          key={friend.id}
          name={friend.name}
          penpal={friend.penpal}
          letter={friend.letter}
          // picture={friend.picture}
        />
      ))} */}
    </div>
  );
};

export default PenpalsList;
