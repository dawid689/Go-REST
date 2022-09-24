import React from 'react';
import TodoItem from './TodoItem';
import classes from "./TodosList.module.css";

const TodosList = (props) => {
  return (
    <ul className={classes.list}>
      {props.todosList && //sprawdzenie czy dane props.todosList są dostępne, pozwala na ich wyświetlenie w momencie, w którym zostały pobrane (bez ryzyka na zbyt szybkie operowanie na pustej zmiennej)
        props.todosList.map((todo) => (
            // umieszczenie pobranych danych w komponencie "TodoItem" przy pomocy funkcji .map() -> pozwala na ich wyświetlenie jako elementy komponentu
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            userId={todo.user_id}
            dueOn={todo.due_on}
            status={todo.status}
          />
        ))}
    </ul>
  )
}

export default TodosList;