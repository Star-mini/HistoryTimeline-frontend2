import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movie.css";
import Fade from "react-reveal/Fade";

const MovieCom = ({ movies, onMovieSelect }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await Promise.all(
          movies.map(async (movie) => {
            const searchResponse = await axios.get(
              `https://api.themoviedb.org/3/search/movie`,
              {
                params: {
                  api_key: "fab5e47a8eb6bba3fa581019b523c6b2",
                  query: movie.title,
                },
              }
            );
            const movieId = searchResponse.data?.results[0]?.id;
            if (movieId) {
              const detailResponse = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}`,
                {
                  params: {
                    api_key: "fab5e47a8eb6bba3fa581019b523c6b2",
                    language: "ko-KR",
                  },
                }
              );
              const posterUrl = detailResponse.data?.poster_path;
              const movieData = {
                title: movie.title,
                posterUrl: posterUrl
                  ? `https://image.tmdb.org/t/p/original${posterUrl}`
                  : null,
              };
              return movieData;
            } else {
              return null;
            }
          })
        );
        setMovieData(data.filter((item) => item !== null)); // null인 경우 필터링하여 상태 변수에 저장
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movies]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
  };

  return (
    <div className="movieContainer">
      <h3 className="movieTitle">관련 영화</h3>

      <Slider {...sliderSettings} className="moviePosterSlide">
        {movieData.map((movie, index) => (
          <div
            className="moviePoster"
            key={index}
            onClick={() => onMovieSelect(movie.title)}
          >
            <img
              className="moviePosterFrame"
              src={movie.posterUrl}
              alt={movie.title}
              width="70%"
            />
            <h4 className="movieName">{movie.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCom;
