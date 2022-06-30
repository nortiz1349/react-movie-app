import Movie from "../components/Movie";
import { currentday, nextyearday } from "../atom/Date";
import { API_URL, API_KEY } from "../Config";

import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

const HomeStyle = styled.div`
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

  .movies {
    display: grid;
    grid-template-columns: repeat(20, minmax(250px, 1fr));
    grid-gap: 30px;
    padding: 20px 0px 50px 20px;
    max-width: 90%;
    padding-top: 1rem;
    overflow-x: scroll;
  
}
  }

  .btn_div {
    display: flex;
    justify-content: center;
  }

  .btn {
    background-color: whitesmoke;
    color: #2c2c2c;
    font-size: 15px;
    width: 100px;
    height: 30px;
    border-radius: 0.5em;
    border-style: none;
  }

  .category_title {
    font-size: 30px;
    padding: 20px 0px 0px 35px;
  }

  @media screen and (max-width: 0) {
    .movies {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // 인기 영화 가져오기
  const getPopularMovies = async () => {
    await axios
      .get(`${API_URL}movie/popular?api_key=${API_KEY}`)
      .then((json) => {
        setPopularMovies(json.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 개봉 예정 영화 가져오기
  const upcomingGetMovies = async () => {
    await axios
      .get(
        `${API_URL}discover/movie?api_key=${API_KEY}&primary_release_date.gte=${currentday}&primary_release_date.lte=${nextyearday}`
      )
      .then((json) => {
        setUpcomingMovies(json.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPopularMovies();
    upcomingGetMovies();
  }, []);

  return (
    <HomeStyle>
      {/* RENDER POPULAR MOVIE */}
      <div className="category_title">What's Popular</div>
      <div className="container">
        {loading ? (
          <div className="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {popularMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date}
                vote={movie.vote_average}
                posterImg={movie.poster_path}
              />
            ))}
          </div>
        )}
      </div>

      {/* RENDER UPCOMING MOVIE */}
      <div className="category_title">Upcoming Movie</div>
      <div className="container">
        {loading ? (
          <div className="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {upcomingMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date}
                vote={movie.vote_average}
                posterImg={movie.poster_path}
              />
            ))}
          </div>
        )}
      </div>
      <div style={{justifyContent: "center", display: "flex", padding: "2em"}}>  React Movie app</div>
    </HomeStyle>
  );
}

export default Home;
