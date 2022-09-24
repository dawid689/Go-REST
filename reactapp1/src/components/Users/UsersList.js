import React from "react";
import classes from "./UsersList.module.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <ul className={classes.list}>
      {props.usersList && //sprawdzenie czy dane props.usersList są dostępne, pozwala na ich wyświetlenie w momencie, w którym zostały pobrane (bez ryzyka na zbyt szybkie operowanie na pustej zmiennej)
        props.usersList.map((user) => (
          // umieszczenie pobranych danych w komponencie "UserItem" przy pomocy funkcji .map() -> pozwala na ich wyświetlenie jako elementy komponentu
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            gender={user.gender}
            email={user.email}
            status={user.status}
          />
        ))}
    </ul>
  );
};

export default UsersList;
