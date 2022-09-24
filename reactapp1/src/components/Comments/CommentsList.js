import React from "react";
import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

// KOMPONENT OPCJONALNY - gdyby wystąpiła potrzeba wyświetlenia pełnej listy komentarzy
const CommentsList = (props) => {
  return (
    <ul className={classes.list}>
      {props.commentsList && //sprawdzenie czy dane props.commentsList są dostępne, pozwala na ich wyświetlenie w momencie, w którym zostały pobrane (bez ryzyka na zbyt szybkie operowanie na pustej zmiennej)
        props.commentsList.map((comment) => (
            // umieszczenie dostęnych danych w komponencie "CommentItem" przy pomocy funkcji .map() -> pozwala na ich wyświetlenie jako elementy komponentu
          <CommentItem
            key={comment.id}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            postId={comment.post_id}
            body={comment.body}
          />
        ))}
    </ul>
  );
};

export default CommentsList;
