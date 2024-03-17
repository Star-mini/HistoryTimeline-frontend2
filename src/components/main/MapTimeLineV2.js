import React, { useState, useEffect, useCallback } from "react";
import { cusomizedAxios as axios } from "../../constants/customizedAxios";

function MapTimeLineV2(props) {
    const [lineColors, setLineColors] = useState(Array(6).fill("rgba(255, 255, 255, 1)"));
    const [showTexts, setShowTexts] = useState([false, false, false, false, false]);
    const [showDots, setShowDots] = useState([true, false, false, false, false]);

    const [data, setData] = useState([]);

    const getData = useCallback(async () => {
        try {
            const response = await axios.get('priority/korea');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 800) {
                const scrollProgress = (scrollTop - 800) / 500;
                const colors = Array(6).fill("rgba(255, 255, 255, 1)");
                const step = 1 / 4;
                for (let i = 0; i < 6; i++) {
                    const colorProgress = i * step;
                    const alpha = Math.min(1, scrollProgress - colorProgress);
                    colors[i] = `rgba(128, 0, 128, ${alpha})`;
                    if (alpha >= 0.4 && !showTexts[i]) {
                        setShowTexts(prevShowTexts => {
                            const newShowTexts = [...prevShowTexts];
                            newShowTexts[i] = true;
                            return newShowTexts;
                        });
                        setShowDots(prevShowDots => {
                            const newShowDots = [...prevShowDots];
                            newShowDots[i] = true; 
                            return newShowDots;
                        });
                    } else if (alpha < 0.4 && showTexts[i]) {
                        setShowTexts(prevShowTexts => {
                            const newShowTexts = [...prevShowTexts];
                            newShowTexts[i] = false;
                            return newShowTexts;
                        });
                        setShowDots(prevShowDots => {
                            const newShowDots = [...prevShowDots];
                            newShowDots[i] = false;
                            return newShowDots;
                        });
                    }
                }
                setLineColors(colors);
            } else {
                setLineColors(Array(6).fill("rgba(255, 255, 255, 1)"));
                setShowTexts([false, false, false, false, false]);
                setShowDots([true, false, false, false, false]);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showTexts]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div style={{ position: "relative", height: "75vh" }}>
            {lineColors.map(
                (color, index) =>
                    index < 5 && (
                        <React.Fragment key={index}>
                            {/* 점 추가 */}
                            {showDots[index] && (
                                <div
                                    className={`dot-${index}`}
                                    style={{
                                        position: "absolute",
                                        top: `${index * 15 + 10}vh`,
                                        left: "1",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: color,
                                        transform: "translate(-45%, -50%)",
                                    }}
                                />
                            )}
                            <div
                                style={{
                                    position: "absolute",
                                    top: `${index * 15}vh`,
                                    left: "0",
                                    width: "2px",
                                    height: "15vh",
                                    backgroundColor: color,
                                    borderRadius: "35px",
                                }}
                            />
                        </React.Fragment>
                    )
            )}
            {showTexts.map(
                (showText, index) =>
                    index < 5 && (
                        showText && (
                            <div
                                className={`textBox-${index} row`}
                                key={index}
                                style={{
                                    position: "absolute",
                                    top: `${index * 15 + 10}vh`,
                                    transform: "translateY(-50%)",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    margin: "2px 10px 5px 10px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    width: "20vw",
                                    textAlign: "left"
                                }}
                            >
                                <div>{data[index].year} - [ {data[index].title} ]</div>
                                <div>: {data[index].brief}</div>
                            </div>
                        )
                    )
            )}
        </div>
    );
}

export default MapTimeLineV2;
