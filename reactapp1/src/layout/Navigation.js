import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <span>Go REST</span>
      </div>
      <nav className={classes.pages}>
        {/* poniżej zostaje utworzona lista przycisków wyświetlana w pasku nawigacyjnym aplikacji na góze ekranu, służy do swobodnego przełączania kart wyświetlanych na ekranie */}
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
