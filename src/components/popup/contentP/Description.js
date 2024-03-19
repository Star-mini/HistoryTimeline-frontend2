import React, { useState } from "react";
import "../../../styles/contents/description.css";
import Fade from "react-reveal/Fade";

const Description = () => {
  const [thumbsUp, setThumbsUp] = useState(10);
  const [thumbsDown, setThumbsDown] = useState(5);

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  const handleThumbsDown = () => {
    setThumbsDown(thumbsDown + 1);
  };

  return (
    <div className="custom-body">
      <div className="description-section">
        <img src="배경이미지.jpg" alt="Series Background" className="hero-image"/>
        <Fade bottom delay={500}>
        <div className="content-section">
          <h3 className="title">서울의 봄</h3>
          <span className="thumb-up" onClick={handleThumbsUp}>
            <img src="thumb-up.png" alt="추천" className="thumb-icon" />
            추천 {thumbsUp}
          </span>
          <span className="thumb-down" onClick={handleThumbsDown}>
            <img src="thumb-down.png" alt="비추천" className="thumb-icon" />
            비추천 {thumbsDown}
          </span>
          <div className="tags">
            <span className="tag">2015</span>
            <span className="tag">18+</span>
            <span className="tag">2 Seasons</span>
            <span className="tag">Sci-Fi</span>
          </div>
          <p className="description">
            "매트릭스"와 "바빌론 5"의 제작자가 만든 이 긴장감 넘치는 시리즈에서는 8명이 텔레파시를 통해 서로의 삶을 경험할 수 있습니다.
          </p>
          <div>
            <h2 className="cast">주연: 터펜스 미들턴, 브라이언 J. 스미스, 배두나</h2>
            <h2 className="producers">제작자: 릴리 워쇼스키, 라나 워쇼스키, J. 마이클 스트라진스키</h2>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Description;
