import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.shuffleFriend(props.id)} className="shuffle">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
