import React from 'react';
import '../css/scrollLoadingBox.css';
import {useEffect, useState} from "react";

const ScrollLoadingBox = ({isLoading}) => {
    const [width,  setWidth] = useState(0);

    const display = {
        display: isLoading ? 'flex' : 'none'
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the width every second (or adjust the interval as needed)
            setWidth(prevWidth => (prevWidth < 150 ? prevWidth + 10 : 0));
        }, 80); // 1000 milliseconds = 1 second

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="loading-box" style={display}>
            <div className="loading-content">
                <div className="loading-bar-mask">
                    <div className="loading-bar" style={{width: width}}></div>
                </div>
                <p className="loading-bar-label">Loading...</p>
            </div>
        </div>
    );
};

export default ScrollLoadingBox;