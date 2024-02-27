import React, { useState, useRef, useEffect } from "react";
import VideoMain from "./VideoMain";

/**
 * handleScroll
 * 비디오 화면 중간을 기준으로 확대/축소 기능
 * 
 */
function VideoZoomInOut() {
    const backColor = "#264364";
    const [zoomLevel, setZoomLevel] = useState(1);
    const minZoomLevel = 1;
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const handleScroll = (event) => {
        const deltaY = event.deltaY;
        const container = containerRef.current;

        cancelAnimationFrame(animationRef.current);

        animationRef.current = requestAnimationFrame(() => {
            setZoomLevel((prevZoomLevel) => {
                const newZoomLevel = prevZoomLevel + deltaY * 0.001;
                const clampedZoomLevel = newZoomLevel < minZoomLevel ? minZoomLevel : newZoomLevel;

                const containerRect = container.getBoundingClientRect();
                const mouseX = event.clientX - containerRect.left;
                const mouseY = event.clientY - containerRect.top;
                const centerX = containerRect.width / 2;
                const centerY = containerRect.height / 2;

                const scale = clampedZoomLevel / prevZoomLevel;
                const translateX = (mouseX - centerX) * (1 - scale);
                const translateY = (mouseY - centerY) * (1 - scale);

                return clampedZoomLevel;
            });
        });
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener("wheel", handleScroll);

        return () => {
            container.removeEventListener("wheel", handleScroll);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: backColor,
            }}
        >
            <div
                style={{
                    transform: `scale(${zoomLevel})`,
                    transition: "transform 0.3s ease-out",
                    overflow: "hidden",
                }}
            >
                <VideoMain />
            </div>
        </div>
    );
}

export default VideoZoomInOut;
