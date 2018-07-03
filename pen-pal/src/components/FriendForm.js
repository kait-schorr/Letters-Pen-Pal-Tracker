import React from "react";

const FriendForm = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="friend"
          placeholder="Name of your friend"
          value={props.penpal.name}
          onChange={props.submitHandler}
        />
        <input
          type="text"
          name="friend"
          placeholder="Add Address"
          value={props.penpal.address}
          onChange={props.submitHandler}
        />
        <input
          type="text"
          name="friend"
          placeholder="Add Letter"
          value={props.penpal.letters}
          onChange={props.submitHandler}
        />
        <button onClick={props.addFriend}> Add a Penpal </button>
      </form>
    </div>
  );
};

export default FriendForm;
