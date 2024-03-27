import React from "react";
import VideoBack from "./VideoBack";

/*
 * 첫 입장 메인 페이지 컴포넌트
 * 뒷 배경색 통일을 위해 backColor 변수를 사용
 */
function VideoMain() {
    const backColor = "#ffffff"; // 배경색
    const fontColor = "#0d0d0d"; // 글씨
    return (
        <div
            className="videoMain"
            style={{
                overflow: "hidden",
                width:"100%"
            }}
        >
            <VideoBack />
            <div
                style={{
                    position:"absolute",
                    top: "50%",
                    left:"50%",
                    transform: "translate(-50%, -50%)",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
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
                                zIndex: 2,
                                height: "100px"
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
                                display: "inline-block",
                                border: "none",
                                position: "relative",
                                zIndex: 1,
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
                                zIndex: 2,
                                height: "100px"
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
