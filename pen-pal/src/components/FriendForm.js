import React from "react";

const FriendForm = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="friend"
          placeholder="Add Friend"
          value={props.value}
          onChange={props.submitHandler}
        />
        <input
          type="text"
          name="friend"
          placeholder="Add Address"
          value={props.value}
          onChange={props.submitHandler}
        />
        <input
          type="text"
          name="friend"
          placeholder="Add Letter"
          value={props.value}
          onChange={props.submitHandler}
        />
        <button onClick={props.addFriend}> Add Friend </button>
      </form>
    </div>
  );
};

export default FriendForm;
