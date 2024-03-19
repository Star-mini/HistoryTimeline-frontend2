// Description.js
import React, { useState } from "react";
import "../../../styles/contents/description.css"; // description.css 파일을 임포트
import Fade from "react-reveal/Fade";

const Description = () => {
  // 추천 및 비추천 상태를 위한 useState 훅
  const [thumbsUp, setThumbsUp] = useState(10);
  const [thumbsDown, setThumbsDown] = useState(5);

  // 추천 수를 증가시키는 함수
  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  // 비추천 수를 증가시키는 함수
  const handleThumbsDown = () => {
    setThumbsDown(thumbsDown + 1);
  };

  return (
<body class="custom-body">

  <div class="description-section">
    <img src="배경이미지.jpg" alt="Series Background" class="hero-image"/>

=    <div class="content-section">
      <h3 class="title">서울의봄</h3>
      <span class="thumb-up" onclick="handleThumbsUp()">
        <img src="thumb-up.png" alt="추천" class="thumb-icon" />
        추천 10
      </span>
      <span class="thumb-down" onclick="handleThumbsDown()">
        <img src="thumb-down.png" alt="비추천" class="thumb-icon" />
        비추천 5
      </span>

      <div class="tags">
        <span class="tag">2015</span>
        <span class="tag">18+</span>
        <span class="tag">2 Seasons</span>
        <span class="tag">Sci-Fi</span>
      </div>
      <p class="description">
        "매트릭스"와 "바빌론 5"의 제작자가 만든 이 긴장감 넘치는 시리즈에서는 8명이 텔레파시를 통해 서로의 삶을 경험할 수 있습니다.
      </p>
      <div>
        <h2 class="cast">주연: 터펜스 미들턴, 브라이언 J. 스미스, 배두나</h2>
        <h2 class="producers">제작자: 릴리 워쇼스키, 라나 워쇼스키, J. 마이클 스트라진스키</h2>
      </div>
    </div>
  </div>
</body>

  );
};

export default Description;
