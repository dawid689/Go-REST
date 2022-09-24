import React from "react";
import classes from "./Card.module.css";

// Komponent zastosowany jako tło dla danych przekazywanych przez wyrażenie {props.children}.
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
