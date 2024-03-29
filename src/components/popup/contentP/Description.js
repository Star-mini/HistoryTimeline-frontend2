import React, { useState, useEffect } from "react";
import "../../../styles/contents/description.css";
import Fade from "react-reveal/Fade";
import {cusomizedAxios as axios} from "../../../constants/customizedAxios";

// Description 컴포넌트는 영화 상세 정보를 렌더링
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
  const [hasThumbedUp, setHasThumbedUp] = useState(false); // 추천 버튼을 눌렀는지 여부
  const [hasThumbedDown, setHasThumbedDown] = useState(false); // 비추천 버튼을 눌렀는지 여부



  // TMDB API 키와 영화 ID 설정
  const api_key = process.env.REACT_APP_API_KEY;
  const movie_id = props.contentId; 
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  // 영화 상세 정보를 가져오는 useEffect 추가
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

  // 추천 수와 비추천 수를 가져오는 useEffect 추가
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

  // 비추천 수를 가져오는 useEffect 추가
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


  // contentId가 변경될 때 추천 상태를 초기화하는 useEffect 추가
  useEffect(() => {
    setHasThumbedUp(false);
    setHasThumbedDown(false);
  }, [props.contentId]);

  
  // 추천 수와 비추천 수를 업데이트하는 함수 추가
  const handleThumbsUp = async () => {
    if(hasThumbedUp) {
      alert('추천은 한번만 가능해요.'); // 경고 메시지 띄우기
      return; // 추가 처리 방지
    }
  
    try {
      // 서버에 추천 요청 전송 로직은 여기에 유지
      const response = await axios.post('http://localhost:8081/likes', null, {
        params: {
          userId: 1, // 유저 ID는 예시로 1 사용
          contentId: props.contentId,
        }
      });
      console.log('추천이 성공적으로 추가되었습니다.', response.data);
      setThumbsUp(thumbsUp + 1); // 추천 수 상태 업데이트
      setHasThumbedUp(true); // 추천 버튼을 눌렀다고 상태 업데이트
    } catch (error) {
      console.error('추천 추가 실패:', error);
    }
  };
  
  // 비추천 수를 업데이트하는 함수 추가
  const handleThumbsDown = async () => {
    if(hasThumbedDown) {
      alert('비추천은 한번만 가능해요.'); // 경고 메시지 띄우기
      return; // 추가 처리 방지
    }
  
    try {
      // 서버에 비추천 요청 전송 로직은 여기에 유지
      const response = await axios.post('http://localhost:8081/dislikes', null, {
        params: {
          userId: 1, // 유저 ID는 예시로 1 사용
          contentId: props.contentId,
        }
      });
      console.log('비추천이 성공적으로 추가되었습니다.', response.data);
      setThumbsDown(thumbsDown + 1); // 비추천 수 상태 업데이트
      setHasThumbedDown(true); // 비추천 버튼을 눌렀다고 상태 업데이트
    } catch (error) {
      console.error('비추천 추가 실패:', error);
    }
  };
  
  // Description 컴포넌트에서 추천 수와 비추천 수를 렌더링
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
            <h6 className="description">{movieDetails.tagline}</h6>{" "}
            {/* 동적으로 태그라인 설정 */}
            <div>
              <h6 className="cast">
                주연: {movieDetails.cast} {/* 동적으로 주연 배우 설정 */}
              </h6>
              <h6 className="producers">
                제작자: {movieDetails.producers} {/* 동적으로 제작자 설정 */}
              </h6>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Description;
