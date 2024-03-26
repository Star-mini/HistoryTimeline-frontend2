import React, { useState, useEffect } from "react";
import "../../../styles/contents/description.css";
import Fade from "react-reveal/Fade";
import {cusomizedAxios as axios} from "../../../constants/customizedAxios";

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
  const api_key = process.env.REACT_APP_API_KEY;
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

  useEffect(() => {
    const fetchLikeCount = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/likes/count`, {
                params: { contentId: props.contentId }
            });
            setThumbsUp(response.data); // 받은 추천 수로 상태 업데이트
        } catch (error) {
            console.error('추천 수 조회 실패:', error);
        }
    };

    if(props.contentId) { // contentId가 있을 때만 요청
        fetchLikeCount();
    }
}, [props.contentId]); // props.contentId가 변경될 때마다 추천 수를 다시 조회

  useEffect(() => {
    const fetchDislikeCount = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/dislikes/count`, {
                params: { contentId: props.contentId }
            });
            setThumbsDown(response.data); // 비추천 수로 상태 업데이트
        } catch (error) {
            console.error('비추천 수 조회 실패:', error);
        }
    };

    if(props.contentId) { // contentId가 있을 때만 요청
        fetchDislikeCount();
    }
}, [props.contentId]); // props.contentId가 변경될 때마다 비추천 수를 다시 조회

  const handleThumbsUp = async () => {
    try {
      // 유저 ID와 contentId를 쿼리 파라미터로 서버에 전송
      const response = await axios.post('http://localhost:8081/likes', null, {
        params: {
          userId: 1, // 유저 ID는 1로 고정
          contentId: props.contentId, // props에서 받은 contentId 사용
        }
      });
      console.log('추천이 성공적으로 추가되었습니다.', response.data);
      // 추천 수 상태 업데이트
      setThumbsUp(thumbsUp + 1);
    } catch (error) {
      console.error('추천 추가 실패:', error);
    }
  };

  const handleThumbsDown = async () => {
    try {
      const response = await axios.post('http://localhost:8081/dislikes', null, {
        params: {
          userId: 1, // 예시로 1 사용
          contentId: props.contentId,
        }
      });
      console.log('비추천이 성공적으로 추가되었습니다.', response.data);
      setThumbsDown(thumbsDown + 1);
    } catch (error) {
      console.error('비추천 추가 실패:', error);
    }
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
              <img src="/thumb-up.png" alt="추천" className="thumb-icon" />
              추천 {thumbsUp}
            </span>
            <span className="thumb-down" onClick={handleThumbsDown}>
            <img src="/thumb-down.png" alt="비추천" className="thumb-icon" />
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
