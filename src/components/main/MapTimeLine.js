import React, { useState, useEffect, useCallback } from "react";
import styles from "./TimeLine.scss";
const useDetectScroll = () => {
    const [progressWidth, setProgressWidth] = useState(0);

    const handleScroll = useCallback(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollPercentage = (totalScroll / windowHeight) * 100;

        const section = Math.floor(scrollPercentage / (100 / 6));
        const width = section * (100 / 6);
        setProgressWidth(width);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return { progressWidth };
};


const MapTimeLine = () => {
    const { progressWidth } = useDetectScroll();

    const isDotVisible = progressWidth !== 0 && progressWidth !== 100;
    const dotLeft = `calc(${progressWidth}% + 20px)`;

    return (
        <div className="scrollable-container">
            <div className="scrollbar">
                <div style={{ overflowX: "auto" }}>
                    <div className="progress-container">
                        <div
                            className="progress"
                            style={{ width: progressWidth + "%" }}
                        />
                        {isDotVisible && (
                            <div
                                className="dot"
                                style={{ left: progressWidth + "%"}}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MapTimeLine;
