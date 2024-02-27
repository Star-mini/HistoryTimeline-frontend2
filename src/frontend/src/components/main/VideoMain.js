import React from "react";
import VideoBack from "./VideoBack";

/*
 * 첫 입장 메인 페이지 컴포넌트
 * 뒷 배경색 통일을 위해 backColor 변수를 사용
 */
function VideoMain() {
    const backColor = "#264364"; // 배경색
    const fontColor = "#f4e9c9"; // 글씨
    return (
        <div
            className="videoMain"
            style={{
                overflow: "hidden",
            }}
        >
            <VideoBack />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    background: backColor,
                }}
            >
                <div
                    className="overlayImage"
                    style={{
                        willChange: "width, height",
                        width: "80vw",
                        display: "flex",
                        justifyContent: "center",
                        boxSizing: "border-box",
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
                            marginTop: "20px",
                            padding: 0,
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                color: fontColor,
                                fontSize: "5vw",
                                lineHeight: "1",
                                fontWeight: "700",
                                paddingRight: "0.6vw",
                                paddingLeft: "0.6vw",
                                textAlign: "left",
                                paddingBottom: "10px",
                                paddingTop: "20px",
                                background: backColor,
                                boxSizing: "border-box",
                            }}
                        >
                            <div>History</div>
                        </div>
                        <img
                            src="./whatfont.svg"
                            alt="svg"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "inline-block",
                                border: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                color: fontColor,
                                fontSize: "5vw",
                                lineHeight: "1",
                                fontWeight: "700",
                                paddingRight: "0.6vw",
                                textAlign: "right",
                                paddingTop: "10px",
                                background: backColor,
                                boxSizing: "border-box",
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
