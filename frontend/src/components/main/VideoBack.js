import React from "react";

/*
 * 뒷 배경 동영상 파일 재생을 위한 컴포넌트
 */
function VideoBack() {
    const backColor = "#264364"; // 배경색
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "75vw",
                height: "40vh",
                overflow: "hidden",
                backgroundColor: backColor
            }}
        >
            <video
                autoPlay
                loop
                muted
                style={{
                    objectFit: "cover",
                    display: "block",
                }}
            >
                <source src="./war.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoBack;
