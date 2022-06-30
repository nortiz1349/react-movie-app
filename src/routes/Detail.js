import { API_URL, API_KEY } from "../Config";
import MovieDetail from "../components/MovieDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  //영화 상세 정보 가져오기
  const getMovieDetail = async () => {
    await axios
      .get(`${API_URL}movie/${id}?api_key=${API_KEY}`)
      .then((json) => {
        setMovieDetail(json.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (
          <MovieDetail
            backdrop_path={movieDetail.backdrop_path}
            title={movieDetail.title}
            poster_path={movieDetail.poster_path}
            vote_average={movieDetail.vote_average}
            genres={movieDetail.genres}
            overview={movieDetail.overview}
            release_date={movieDetail.release_date}
            cast={movieDetail.cast}
            runtime={movieDetail.runtime}
          />
      )
      }
    </div>
  );
}

export default Detail;
