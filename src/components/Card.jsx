import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detali";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar imge={props.img} />
      </div>
      <div className="bottom">
        <Detail tele={props.tel} />
        <Detail tele={props.email} />
      </div>
    </div>
  );
}

export default Card;
