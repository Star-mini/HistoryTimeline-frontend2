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
function ContentsPopup({ movieTitle = "태극기 휘날리며", onClose }) {
  const [contentId, setContentId] = useState("11658");
  const [title, setTitle] = useState(movieTitle);
  const popupRef = useRef(null);
  
  useEffect(() => {
    const fetchMovieId = async () => {
      if (!title) return; // title이 없다면 함수를 종료합니다.
      
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        // TMDB API를 사용해 영화 ID 검색
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`);
        if (response.data.results.length > 0) {
          // 검색된 영화 중 첫 번째 영화의 ID를 설정
          setContentId(response.data.results[0].id);
          setTitle(response.data.results[0].title); // 검색된 영화의 정확한 제목을 저장
        } else {
          // 영화가 검색되지 않았을 때의 처리
          console.error('영화를 찾을 수 없습니다.');
        }
      } catch (error) {
        // API 호출 중 오류가 발생했을 때의 처리
        console.error('API 호출 중 오류가 발생했습니다: ', error);
      }
    };

    fetchMovieId();
  }, [movieTitle]); // movieTitle prop이 변경될 때마다 useEffect를 다시 실행합니다.


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
