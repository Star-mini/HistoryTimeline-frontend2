import React, {forwardRef} from 'react';
import '../../styles/timeline/scrollLoadingBox.css';
import {useEffect, useState} from "react";

const ScrollLoadingBox = forwardRef((noMorePage, ref) => {
    // loading bar의 애니메이션을 위한 width 설정
    const [width,  setWidth] = useState(0);

    // loading 중에만 보이도록 한다.
    const display = {
        display: !noMorePage ? 'flex' : 'none'
    }

    // 일정 시간마다 길이가 바뀌는 애니메이션 삽입
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the width every second (or adjust the interval as needed)
            setWidth(prevWidth => (prevWidth < 150 ? prevWidth + 10 : 0));
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="loading-box" ref={ref} style={display}>
            <div className="loading-content">
                <div className="loading-bar-mask">
                    <div className="loading-bar" style={{width: width}}></div>
                </div>
                <p className="loading-bar-label">Loading...</p>
            </div>
        </div>
    );
});

export default ScrollLoadingBox;