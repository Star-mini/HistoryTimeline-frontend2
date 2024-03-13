import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function MapChartV2() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY === maxScroll) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mapBoxHeight = 1000; // 페이지의 높이
    const maxScroll = mapBoxHeight - window.innerHeight; // 페이지의 높이 - 브라우저 높이

    const mapBoxStyle = useSpring({
        top: scrollY <= maxScroll ? `${scrollY}px` : `${maxScroll}px`, // 스크롤 위치에 따라 이동
    });

    const westStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 100)}px` : "5px", // 스크롤 위치에 따라 이동, 최대 100px로 제한
        left: scrollY <= maxScroll ? `${Math.min(scrollY, 50)}px` : "5px", // 스크롤 위치에 따라 이동
    });

    const eastStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 100)}px` : "5px", // 스크롤 위치에 따라 이동, 최대 100px로 제한
        right: scrollY <= maxScroll ? `${Math.min(scrollY, 50)}px`: "5px", // 스크롤 위치에 따라 이동
    });

    const containerStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 60)}px` : "5px", // 스크롤 위치에 따라 이동, 최대 100px로 제한
        right: scrollY <= maxScroll ? `${scrollY}px` : "5px", // 스크롤 위치에 따라 이동
        width:
            scrollY <= maxScroll
                ? `${50 - (scrollY / maxScroll) * 20}vw`
                : "40vw", // 스크롤 위치에 따라 width 점차적으로 조정
        height:
            scrollY <= maxScroll
                ? `${20 + (scrollY / maxScroll) * 10}vw`
                : "40vw", // 스크롤 위치에 따라 height 점차적으로 조정
        borderRadius:
            scrollY <= maxScroll
                ? `${5 + (scrollY / maxScroll) * 45}vw`
                : "40vw", // 스크롤 위치에 따라 borderRadius 점차적으로 조정
    });

    return (
        <div
            className="mapBox"
            style={{
                maxWidth: "70vw",
                width: "70vw",
                height: `${mapBoxHeight}px`, // 페이지의 높이
                margin: "0 auto",
                position: "relative",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden", // 스크롤시 이미지가 페이지 밖으로 나가지 않도록 함
            }}
        >
            <div
                className="map"
                style={{
                    textAlign: "center",
                    maxWidth: "65vw",
                    width: "65vw",
                    position: "absolute",
                    height: "auto",
                    zIndex: 1,
                    ...mapBoxStyle,
                }}
            >
                <animated.img
                    src="./western.svg"
                    alt="west"
                    style={{
                        borderRadius: "5vw",
                        width: "15vw",
                        position: "absolute",
                        ...westStyle,
                    }}
                />
                <animated.img
                    src="./eastern.svg"
                    alt="east"
                    style={{
                        width: "30vw",
                        position: "absolute",
                        ...eastStyle,
                    }}
                />
            </div>

            <div
                className="earth"
                style={{
                    width: "50vw",
                    height: "40vw",
                    borderRadius: "50%",
                    position: "absolute",
                    zIndex: 0,
                }}
            >
                <animated.div
                    className="container"
                    style={{
                        background: "#eaeafc",
                        position: "absolute",
                        borderRadius: "5vw",
                        width: "50vw",
                        height: "40vw",
                        ...containerStyle,
                    }}
                ></animated.div>
            </div>

            {showButton && (
                <button
                    onClick={() => {
                        // 버튼을 클릭하면 맨 위로 스크롤
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                        position: "fixed",
                        top: "380px",
                        right: "280px",
                        zIndex: 3,
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        border: "none",
                        background: "#7a45de"
                    }}
                >
                </button>
            )}
        </div>
    );
}

export default MapChartV2;
