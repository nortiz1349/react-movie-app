import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { IMG_BASE_URL } from "../Config";
import { Link } from "react-router-dom";

function Movie({ title, id, year, vote, posterImg }) {
  return (
    <div className={styles.movie}>
      <Link to={`/react-movie-app/movie/${id}`}>
        <img
          src={`${IMG_BASE_URL}w500${posterImg}`}
          alt={title}
          className={styles.movie__img}
        />
      </Link>

      <h2 className={styles.movie__title}>
        <Link to={`/react-movie-app/movie/${id}`}>{title}</Link>
      </h2>

      <p className={styles.movie__year}>{year}</p>

      <p>{vote}/10</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
