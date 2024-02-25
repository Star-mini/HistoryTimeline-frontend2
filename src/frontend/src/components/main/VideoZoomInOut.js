import React from "react";
import VideoMain from "./VideoMain";

/*
 * 스크롤 기능 구현해야함.. 진짜 안되면 버튼으로..?ㅎㅎㅎㅎㅎ...ㅎ
 */
function VideoZoomInOut() {
  const Bcolor = "#0d0d32";
  return (
    <div>
      <div style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Bcolor,
        }}>
        <VideoMain />
      </div>
    </div>
  );
}

export default VideoZoomInOut;
