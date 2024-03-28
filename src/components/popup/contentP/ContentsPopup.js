import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from "./Comments";
import ContentCard from "./ContentCard";
import Description from "./Description";
import PlatformSection from "./PlatformSection";
import Detail from "./Detail";
import "../../../styles/contents/ContentsPopup.css";
import FetchMovieID from "./FetchMovieID";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";


// ContentsPopup 컴포넌트
function ContentsPopup({ onClose }) {
  const [contentId, setContentId] = useState("11658"); // 초깃값을 11658로 설정
  const [title, setTitle] = useState(""); // movieTitle 상태 초기값을 빈 문자열로 설정
  const popupRef = useRef(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    // TMDB API를 호출하여 초기 영화 제목을 가져옴
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=태극기 휘날리며&language=ko-KR`)
      .then((response) => {
        const movies = response.data.results;
        if (movies.length > 0) {
          // 검색 결과 중 첫 번째 영화의 제목으로 상태 업데이트
          setTitle(movies[0].title);
          setContentId(movies[0].id);
        } else {
          // 영화를 찾을 수 없는 경우 에러 처리
          console.error("영화를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("API 호출 중 오류가 발생했습니다: ", error);
      });
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행


  // URL에서 title 파라미터를 추출하는 대신, movieTitle 프롭스를 사용
  const handleMovieIdFetched = (id) => {
    setContentId(id);
  };

  const handleContentSelect = (selectedTitle) => {
    // 선택된 영화 제목을 처리하는 로직
    // 예: 상태 업데이트 또는 다른 컴포넌트로의 전달
    setTitle(selectedTitle);
  };

  return (
    <div className="popup" ref={popupRef}>
      <FetchMovieID movieTitle={title} onMovieIdFetched={handleMovieIdFetched} />

      <div>
        <Description contentId={contentId} />
        <div style={{ marginTop: "15px" }}>
          <PlatformSection contentId={contentId} />
        </div>
        <Detail contentId={contentId} />
        <div className="movie-card-margin">
          <ContentCard contentId={contentId} onContentSelect={handleContentSelect} />
        </div>
        <div style={{ marginTop: "80px" }}>
          <Comments contentId={contentId}/> {/* useParams 대신 movieTitle 프롭스를 사용합니다. */}
        </div>
      </div>
    </div>
  );
}

export default ContentsPopup;
