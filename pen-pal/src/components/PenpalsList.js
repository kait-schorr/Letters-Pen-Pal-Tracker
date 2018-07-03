import React from 'react';
import Penpal from './Penpal';
import './PenpalList.css';

const PenpalsList = props => {
  return (
    <div className="friends-card">
<<<<<<< HEAD
      Penpal List
      {/* {props.friends.map(friend => (
=======
      {props.penpals.map(penpal => (
>>>>>>> 5fe38c62191b9ef2f94056c0666ff8600e7dc9a3
        <Penpal
          key={penpal.id}
          name={penpal.name}
          penpal={penpal.penpal}
          letter={penpal.letter}
          // picture={friend.picture}
        />
      ))} */}
    </div>
  );
};

export default PenpalsList;
