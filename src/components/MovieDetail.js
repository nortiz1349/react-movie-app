import React from "react";
import { IMG_BASE_URL } from "../Config";
import styled from "styled-components";
import styles from "./Movie.module.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../Config";
import Credits from "./Credits";

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

function MovieDetail({
  backdrop_path,
  title,
  genres,
  overview,
  release_date,
  runtime,
}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [credit, setCredit] = useState([]);

  // 영화 캐스팅 정보 가져오기
  const getCredit = async () => {
    await axios
      .get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
      .then((json) => {
        setCredit(json.data.cast);
        console.log(credit);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCredit();
  }, []);

  return (
    <>
      <div style={{ padding: "0px 0px 5px 0px" }}>
        {/* Header Title */}
        <MovieTitle>
          <h2 className="title"> {title} </h2>
        </MovieTitle>

        {/* Main Movie Image */}
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
          {/* Movie Information */}
          <MovieInfo>
            <div className="container">
              <div className="info">
                <div>
                  {release_date} · {runtime}m
                </div>
                <div>
                  {genres.map((genre, index) => (
                    <span key={index}>{genre.name}&nbsp;&nbsp;</span>
                  ))}
                </div>
              </div>
              <p className="info"> {overview} </p>
            </div>
          </MovieInfo>
        </div>
      </div>

      {/* Cast */}
      <CastStyle>
        <div className="category_title">Cast</div>
        <div className="container">
          {loading ? (
            <div className="loader">
              <span>Loading...</span>
            </div>
          ) : (
            <div className="card">
              {credit.map((credit) => (
                <Credits
                  name={credit.name}
                  profile_path={credit.profile_path}
                  character={credit.character}
                />
              ))}
            </div>
          )}
        </div>
      </CastStyle>
    </>
  );
}

export default MovieDetail;

const CastStyle = styled.div`
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  }

  .card {
    display: grid;
    grid-template-columns: repeat(10, minmax(180px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    max-width: 90%;
    padding-top: 1rem;
    overflow-x: scroll;
  
}
  }

  .category_title {
    font-size: 30px;
    padding: 30px 60px 0px 60px;
  }

  @media screen and (max-width: 0) {
    .card {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;