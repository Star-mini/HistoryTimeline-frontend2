import React, { useState, useEffect } from "react";
import "../../../styles/contents/description.css";
import Fade from "react-reveal/Fade";
import axios from "axios"; 

const Description = (props) => {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    backdropPath: "",
    description: "",
    cast: "",
    producers: "",
    tagline: "",
    year: "", 
    genres: [], 
    rating: 0,
  });
  const [thumbsUp, setThumbsUp] = useState(10);
  const [thumbsDown, setThumbsDown] = useState(5);

  // TMDB API 키와 영화 ID 설정
  const api_key = "0decfffb82411d82c9af75fdfaba9b34";
  const movie_id = props.contentId; 
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // 영화 상세 정보 가져오기
    const fetchMovieDetails = async () => {
      const { data: movieData } = await axios.get(
        `${baseUrl}/movie/${movie_id}?api_key=${api_key}&language=ko-KR`
      );
      const { data: creditsData } = await axios.get(
        `${baseUrl}/movie/${movie_id}/credits?api_key=${api_key}&language=ko-KR`
      );

      const castNames = creditsData.cast
        .slice(0, 3)
        .map((cast) => cast.name)
        .join(", ");
      const producerNames = creditsData.crew
        .filter((crew) => crew.job === "Producer")
        .map((producer) => producer.name)
        .join(", ");
      const genres = movieData.genres.map((genre) => genre.name);

      setMovieDetails({
        title: movieData.title,
        backdropPath: imageUrl + movieData.backdrop_path,
        description: movieData.overview,
        cast: castNames,
        producers: producerNames,
        tagline: movieData.tagline,
        year: movieData.release_date.substring(0, 4),
        genres: genres,
        rating: movieData.vote_average,
      });
    };

    fetchMovieDetails();
  }, [movie_id]);

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  const handleThumbsDown = () => {
    setThumbsDown(thumbsDown + 1);
  };

  return (
    <div className="custom-body">
      <div className="description-section">
        <Fade bottom delay={500}>
          <img
            src={movieDetails.backdropPath} // 동적으로 배경 이미지 설정
            alt="Series Background"
            className="hero-image"
          />
        </Fade>

        <Fade bottom delay={500}>
          <div className="content-section">
            <h3 className="title">{movieDetails.title}</h3>{" "}
            {/* 동적으로 제목 설정 */}
            <span className="thumb-up" onClick={handleThumbsUp}>
              <img src="thumb-up.png" alt="추천" className="thumb-icon" />
              추천 {thumbsUp}
            </span>
            <span className="thumb-down" onClick={handleThumbsDown}>
              <img src="thumb-down.png" alt="비추천" className="thumb-icon" />
              비추천 {thumbsDown}
            </span>
            <div className="tags">
              {movieDetails.year && (
                <span className="tag">{movieDetails.year}</span>
              )}
              {movieDetails.genres.map((genre, index) => (
                <span key={index} className="tag">
                  {genre}
                </span>
              ))}
              <span className="tag">
                평점: ★{movieDetails.rating.toFixed(1)}
              </span>
            </div>
            <h5 className="description">{movieDetails.tagline}</h5>{" "}
            {/* 동적으로 태그라인 설정 */}
            <div>
              <h2 className="cast">
                주연: {movieDetails.cast} {/* 동적으로 주연 배우 설정 */}
              </h2>
              <h2 className="producers">
                제작자: {movieDetails.producers} {/* 동적으로 제작자 설정 */}
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Description;
