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

// ContentsPopup 컴포넌트
function ContentsPopup({ movieTitle = "태극기 휘날리며", onClose }) {
  const [contentId, setContentId] = useState("");
  const [title, setTitle] = useState(movieTitle); // movieTitle 상태 추가
  const popupRef = useRef(null); // DOM 요소에 대한 참조를 생성합니다.

  // contentId 상태가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log(`contentId가 변경되었습니다: ${contentId}`);
  }, [contentId]);

  // URL에서 title 파라미터를 추출하는 대신, movieTitle 프롭스를 사용합니다.
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
        <div className="movie-card-margin">
          <ContentCard contentId={contentId} onContentSelect={handleContentSelect} />
        </div>
        <Detail contentId={contentId} />
        <div style={{ marginTop: "80px" }}>
          <Comments contentId={contentId}/> {/* useParams 대신 movieTitle 프롭스를 사용합니다. */}
        </div>
      </div>
    </div>
  );
}

export default ContentsPopup;
