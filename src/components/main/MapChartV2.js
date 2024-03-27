import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Pin from "./Pin.js";
import MapTimeLineV2 from "./MapTimeLineV2.js";
import "../../styles/main/Map.scss"
import "../../styles/font.css"

/**
 * 지도 컴포넌트
 * 핀의 클릭이벤트로 타임라인 페이지로 이동 가능. => Pin.js에 구현되어있음
 * 핀은 스크롤에 따라 하나씩 나타나도록 구현하였다.
 * 스크롤 이벤트를 통해 사각형 -> 원으로 표현
 * 타임라인은 스크롤이 800이상이어야 표시됨.
 * 
 * OOOStyle 메소드 들은 스크롤에 따라 이동 시키는 메소드이다.
 */

function MapChartV2() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [showTimeline, setShowTimeline] = useState(false);
    const [pins] = useState([
        { x: "35.6", y: "14.5", country: "410" }, // 한국
        { x: "2", y: "13", country: "840" }, // 미국
        { x: "31", y: "12.5", country: "156" }, // 중국
        { x: "18", y: "11", country: "826" }, // 영국
        { x: "37.5", y: "14", country: "392" }, // 일본
    ]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 800) {
                setShowTimeline(true);
            } else {
                setShowTimeline(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mapBoxHeight = 1000;
    const maxScroll = mapBoxHeight - window.innerHeight;

    const mapBoxStyle = useSpring({
        top: scrollY <= maxScroll ? `${scrollY}px` : `${maxScroll}px`,
    });

    const westStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        left: scrollY <= maxScroll ? `${Math.min(scrollY + 6, 10)}vw` : "10vw",
    });

    const eastStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        right: scrollY <= maxScroll ? `${Math.min(scrollY + 5, 9)}vw` : "9vw",
    });

    const earthBoxStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 1)}vw` : "1vw",
        right: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        width:
            scrollY <= maxScroll
                ? `${50 - (scrollY / maxScroll) * 10}vw`
                : "38vw",
        height:
            scrollY <= maxScroll
                ? `${30 + (scrollY / maxScroll) * 10}vw`
                : "38vw",
        borderRadius:
            scrollY <= maxScroll
                ? `${5 + (scrollY / maxScroll) * 45}vw`
                : "38vw",
    });

    const [showPins, setShowPins] = useState([]);

    useEffect(() => {
        if (scrollY > 800) {
            const newShowPins = [];
            pins.forEach((pin, index) => {
                if (
                    scrollY > 800 + index * 250 &&
                    !newShowPins.includes(index)
                ) {
                    newShowPins.push(index);
                }
            });
            setShowPins(newShowPins);
        } else {
            setShowPins([]);
        }
    }, [scrollY]);

    return (
        <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
                <div
                    className="col-7"
                    style={{
                        maxWidth: "60vw",
                        width: "60vw",
                        height: `${mapBoxHeight}px`,
                        margin: "0 0 0 0",
                        position: "relative",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <div
                        className="map"
                        style={{
                            zIndex: 1,
                            ...mapBoxStyle,
                            width: "40vw",
                            height: "40vw",
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
                        <div>
                            {showPins.map((pinIndex) => (
                                <Pin
                                    key={pinIndex}
                                    x={pins[pinIndex].x}
                                    y={pins[pinIndex].y}
                                    country={pins[pinIndex].country}
                                />
                            ))}
                        </div>
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
                            className="earthBox"
                            style={{
                                background: "#eaeafc",
                                position: "absolute",
                                borderRadius: "5vw",
                                width: "45vw",
                                height: "35vw",
                                ...earthBoxStyle,
                            }}
                        ></animated.div>
                    </div>
                </div>
                <div
                    className="col-5"
                    style={{
                        display: showTimeline ? "flex" : "none",
                        width: "20vw",
                        textAlign: "center",
                    }}
                >
                    <MapTimeLineV2 />
                </div>
            </div>
        </div>
    );
}

export default MapChartV2;
