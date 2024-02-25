import React from "react";
import VideoBack from "./VideoBack";

/*
 * 첫 입장? 메인 페이지 컴포넌트
 * 뒷 배경색 통일을 위해 Bcolor 변수를 사용
 * 모바일 접속시 스크롤 기능 고려할 필요 있음
 */
function VideoMain() {
  const Bcolor = "#0d0d32";
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "auto",
      overflow: "hidden",
    }}>
      <VideoBack />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box"
        }}
      >
        <div
          className="overlayImage"
          style={{
            willChange: "width, height",
            width: "60vw",
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box"
          }}
        >
          <div
            className="textBox"
            style={{
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              boxSizing: "border-box"
            }}
          >
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                fontSize: "5vw",
                lineHeight: "1",
                fontWeight: "700",
                paddingRight: "0.6vw",
                paddingLeft: "0.6vw",
                textAlign: "left",
                paddingBottom: "10px",
                paddingTop: "20px",
                background: Bcolor,
                boxSizing: "border-box"
              }}
            >
              <div>History</div>
            </div>
            <img
              src="./whatfont.png"
              alt="svg"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                fontSize: "5vw",
                lineHeight: "1",
                fontWeight: "700",
                paddingRight: "0.6vw",
                textAlign: "right",
                paddingTop: "10px",
                background: Bcolor,
                boxSizing: "border-box"
              }}
            >
              <div>Time Line</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoMain;
