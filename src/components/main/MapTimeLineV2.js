import React, { useState, useEffect, useCallback } from "react";
import { cusomizedAxios as axios } from "../../constants/customizedAxios";

function MapTimeLineV2(props) {
    const [lineColors, setLineColors] = useState(Array(6).fill("rgba(255, 255, 255, 1)"));
    const [showTexts, setShowTexts] = useState([false, false, false, false, false]);
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
                    } else if (alpha < 0.4 && showTexts[i]) {
                        setShowTexts(prevShowTexts => {
                            const newShowTexts = [...prevShowTexts];
                            newShowTexts[i] = false;
                            return newShowTexts;
                        });
                    }
                }
                setLineColors(colors);
            } else {
                setLineColors(Array(6).fill("rgba(255, 255, 255, 1)"));
                setShowTexts([false, false, false, false, false]);
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
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                top: `${index * 15}vh`,
                                width: "2px",
                                height: "15vh",
                                backgroundColor: color,
                            }}
                        ></div>
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
                                    top: `${index * 15 + 6}vh`,
                                    transform: "translateY(-50%)",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    margin: "12px",
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
