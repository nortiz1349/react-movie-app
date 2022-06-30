import React from "react";
import styles from "./Movie.module.css";
import { IMG_BASE_URL } from "../Config";

function Credits({ name, profile_path, character }) {

  return (
    <>
      <div className={styles.movie}>
        <img
          src={`${IMG_BASE_URL}w138_and_h175_face${profile_path}`}
          alt={name}
          className={styles.movie__img}
        />
        <h3 className={styles.movie__title}>{name}</h3>
        <span>{character}</span>
      </div>
    </>
  );
}


export default Credits;
