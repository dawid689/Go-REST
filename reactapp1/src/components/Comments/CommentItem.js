import React from "react";
import Card from "../../UI/Card";
import classes from "./CommentsItem.module.css";

// komponent realizujący wygląd danych wyświetlanych na ekranie
const CommentItem = (props) => { //dane pobierane od rodzica z wykorzystaniem parametru "props" zostaną wyświetlone w tym komponencie (potomnym)
  return (
    <li className={classes.commentItem}>
      <Card>
        <h5>
          {props.name}: {props.body}
        </h5>
        <div className={classes.content}>
          <p>Email: {props.email}</p>
          <p>Post id: {props.postId}</p>
          <p>Id: {props.id}</p>
        </div>
      </Card>
    </li>
  );
};

export default CommentItem;
