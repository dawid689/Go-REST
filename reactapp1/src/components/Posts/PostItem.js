import React from "react";
import Card from "../../UI/Card";
import classes from "./PostItem.module.css";

// komponent realizujący wygląd danych wyświetlanych na ekranie
const PostItem = (props) => { //dane pobierane od rodzica z wykorzystaniem parametru "props" zostaną wyświetlone w tym komponencie (potomnym)
  return (
    <li className={classes.postItem}>
      <Card>
        <div className={classes.content}>
          <h4>Post:</h4>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <p>User id: {props.userId}</p>
          <p>Id: {props.id}</p>
          <h4>Comments: {props.comments}</h4>
        </div>
      </Card>
    </li>
  );
};

export default PostItem;
