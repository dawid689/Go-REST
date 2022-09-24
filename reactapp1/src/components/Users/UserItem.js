import React from "react";
import Card from "../../UI/Card";
import classes from "./UserItem.module.css";

// komponent realizujący wygląd danych wyświetlanych na ekranie
const UserItem = (props) => { //dane pobierane od rodzica z wykorzystaniem parametru "props" zostaną wyświetlone w tym komponencie (potomnym)
  return (
    <li className={classes.userItem}>
      <Card>
        <div className={classes.content}>
          <h2>{props.name}</h2>
          <p>Gender: {props.gender}</p>
          <p>Email: {props.email}</p>
          <p>Status: {props.status}</p>
          <p>Id: {props.id}</p>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
