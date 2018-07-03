import React from "react";
import Penpal from "./Penpal";
import "./PenpalList.css";

const PenpalsList = props => {
  return (
    <div className="friends-card">
      {props.penpals.map(penpal => (
        <Penpal
          key={penpal.id}
          name={penpal.name}
          penpal={penpal.penpal}
          letter={penpal.letter}
          // picture={friend.picture}
        />
      ))}{" "}
      */}
    </div>
  );
};

export default PenpalsList;
