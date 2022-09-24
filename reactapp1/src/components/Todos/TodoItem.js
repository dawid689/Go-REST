import React from "react";
import Card from "../../UI/Card";
import classes from "./TodoItem.module.css";

// komponent realizujący wygląd danych wyświetlanych na ekranie
const TodoItem = (props) => { //dane pobierane od rodzica z wykorzystaniem parametru "props" zostaną wyświetlone w tym komponencie (potomnym)
  return (
    <li className={classes.todoItem}>
      <Card>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p>User id: {props.userId}</p>
          <p>Due on: {props.dueOn}</p>
          <p>Status: {props.status}</p>
          <p>Id: {props.id}</p>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
