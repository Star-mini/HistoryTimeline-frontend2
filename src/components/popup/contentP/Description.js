// Description.js
import React, { useState } from "react";
import "./App.css"; // CSS 파일을 임포트합니다. 파일 경로는 프로젝트 구조에 따라 달라질 수 있습니다.
import "./description.css"; // description.css 파일을 임포트합니다. 파일 경로는 프로젝트 구조에 따라 달라질 수 있습니다.
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
    <div className="flex mb-50">
      <div className="image-box mr-4 flex-none">
        <Fade bottom delay={500}>
          <img
            src="a.png"
            alt="설명 이미지"
            style={{ width: "250px", height: "auto" }}
          />
        </Fade>
      </div>
      <div className="description flex-grow">
      <Fade bottom delay={500}>

        <h3>서울의 봄</h3>
        <div>
          {/* 추천 및 비추천 버튼에 onClick 이벤트 핸들러 추가 */}
          <span className="thumb-up" onClick={handleThumbsUp}>
            <img
              src="thumb-up.png"
              alt="추천"
              style={{ width: "24px", height: "20px" }}
            />{" "}
            추천 {thumbsUp}
          </span>
          <span className="thumb-down" onClick={handleThumbsDown}>
            <img
              src="thumb-down.png"
              alt="비추천"
              style={{ width: "24px", height: "20px" }}
            />{" "}
            추천 {thumbsDown}
          </span>
        </div>
        <p>네이버 열화상 정전 전도</p>
        <p>클릭하고, 랜더링, 국가, 개발의 제작사, 감독, 출연자</p>
        <p>
          3월 개강과 함께 학생들은 다른 시위 구호와 함께 '어용 교수 퇴진'을
          외쳤다. 어용 교수 퇴진을 요구하는 시위가 일어난 대학은 3월 말까지 모두
          18개교였으며 참가자만 8천여 명에 달했다. 이에 김옥길 문교부 장관이
          "국가의 장래를 위해 바람직하지 않은 일이라는 것을 알면서도 당장의
          이익을 위해 어용한 사람이 있다"고 지적하면서 이와 같은 교수들은 각자의
          양심에 따라 물러나야 한다고 촉구했다. 그러나 당시 스스로 물러난
          교수들은 단 한 명도 없었다. 학원 민주화의 바람은 4월 말까지 멈추지
          않았다. 4월 18일 문교부가 집계한 바에 따르면 학원 민주화 투쟁의 상황은
          시위/농성이 진행 중인 학교 중 학원 민주화를 거부하는 총학장 퇴진
          요구가 21개 대학, 어용 교수 퇴진 요구가 24개, 재단비리 척결 요구가
          12개, 학교 시설 확장 요구가 11개, 학생회 인정 및 학내 언론자유 요구가
          20개에 달했다. 투쟁 양상을 보면 총학장실 점거 농성 12곳, 교내 철야
          농성 24곳, 가두시위 진출 시도 2곳, 총학장이 사퇴나 사의를 표명한 경우
          14곳, 입시휴강 조치 19곳 등으로 나왔다. 4월 18일 김대중은 동국대에
          방문해 연설에서 “군은 반드시 중립을 지켜야 한다. 정치에 개입해서는 안
          된다. 계엄령을 더 연장할 이유가 없다.”면서 동시에 “우리가 성급하게
          혼란을 일으키는 일에 말려들어 가면, 그런 일을 노리고 그렇게 되기를
          바라는 사람들에게 절호의 구실을 주게 된다.”고 군부에 빌미를 주는 일을
          만들어서는 안 된다고 학생들에게 강조했다. # 4월 24일 서울 14개 대학
          361명의 교수들은 학원 민주화를 요구하는 성명서를 발표했다. 그 내용은
          사학의 족벌체계 비판, 군사교육 개선책 모색, 재임용제도 철폐, 교수회의
          기능 강화, 대학별 교수협의회 구성 등 대학교육과 직/간접적으로 연관된
          사항들이었다. 그러나 이에 주도적으로 참여한 교수들은 신군부가 정권을
          장악한 후 5.18 민주화운동에 참여한 교수들과 함께 해직되었으며 그 수만
          87명에 달했다. 이 시기에 복직했던 교수들 역시 다시 강단에서 쫓겨나게
          되었다.
        </p>
        </Fade>
      </div>
    </div>
  );
};

export default Description;
