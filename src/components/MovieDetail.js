import React from "react";
import { IMG_BASE_URL } from "../Config";
import styled from "styled-components";
import styles from "./Movie.module.css";

const MovieInfo = styled.div`
  .container {
    max-width: 500px;
    bottom: 2rem;
    margin-left: 2rem;
    position: absolute;
  }

  .info {
    color: white;
    font-size: 1rem;
  }
`;

const MovieTitle = styled.div`
  .title {
    color: black;
    font-weight: 500;
    text-decoration: none;
    margin: 10px;
    font-size: 30px;
  }
`;

const MovieGenresItem = styled.span``;

function MovieDetail({
  backdrop_path,
  title,
  genres,
  overview,
  release_date,
  cast,
  runtime,
}) {

  return (
    <>
      <div style={{ padding: "0px 50px 50px 50px" }}>
        {/* Header */}
        <MovieTitle>
          <h2 className="title"> {title} </h2>
        </MovieTitle>
        <div
          className={styles.movie__img}
          style={{
            background: `linear-gradient(to left, rgba(31.5, 10.5, 10.5, 0) 150px, rgba(31.5, 10.5, 10.5, 0.84) 100%),
        url('${IMG_BASE_URL}original${backdrop_path}'), #1c1c1c`,
            height: "500px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            position: "relative",
            borderRadius: "1em",
          }}
        >
          <MovieInfo>
            <div className="container">
              <div className="info">
                <div>
                  {release_date}·{runtime}m
                </div>
                <div>
                  {genres.map((genre, index) => (
                    <MovieGenresItem key={index}>
                      {genre.name}&nbsp;&nbsp;
                    </MovieGenresItem>
                  ))}
                </div>
              </div>
              <p className="info"> {overview} </p>
            </div>
          </MovieInfo>
        </div>
      </div>

      <div className={styles.movie}>
        Cast
        
      </div>
    </>
  );
}

export default MovieDetail;
