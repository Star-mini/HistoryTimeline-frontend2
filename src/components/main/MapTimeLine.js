import React, { useState, useEffect, useCallback } from "react";
import "./TimeLine.scss";

const useDetectScroll = () => {
    const [progressWidth, setProgressWidth] = useState(0);

    const handleScroll = useCallback(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollPercentage = (totalScroll / windowHeight) * 100;

        const section = Math.min(4, Math.floor(scrollPercentage / (100 / 5)));
        const width = (section+1) * (100 / 5);
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

    const dots = [1, 2, 3, 4].map((index) => {
        const dotPosition = (index / 5) * 100;
        return (
            <div
                key={index}
                className="dot"
                style={{ left: dotPosition + "%",
                backgroundColor: progressWidth >= dotPosition ? "#5cffd1" : "#deb488", }}
            />
        );
    });

    const col2Divs = [1, 2, 3, 4].map((index) => {
        const Left = (index / 5) * 100 + 20;
        return (
            <div
                key={index}
                className="col-4"
                style={{ left: Left + "%" }}
            >
                <p>test title {index}</p>
                <p>test text</p>
            </div>
        );
    });
    

    return (
        <>
            <div className="scrollable-container">
                <div className="scrollbar">
                    <div style={{ overflowX: "auto" }}>
                        <div className="progress-container">
                            <div
                                className="progress"
                                style={{ width: progressWidth + "%" }}
                            />
                            {dots}
                            <div className="row">
                                <div className="col-4"></div>
                                {col2Divs}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapTimeLine;
