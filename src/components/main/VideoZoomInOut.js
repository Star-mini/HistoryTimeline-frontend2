import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoMain from "./VideoMain";

function VideoZoomInOut() {
    const containerRef = useRef(null);
    const backColor = "#264364";
    const navigate = useNavigate();

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = (event) => {
            event.preventDefault();

            const delta = event.deltaY || event.detail || event.wheelDelta;
            const scale = delta > 0 ? 1.05 : 0.1;

            const currentScale = container.style.transform
                ? parseFloat(container.style.transform.replace("scale(", "").replace(")", ""))
                : 1;

            const newScale = currentScale * scale;

            const minScale = 1.0;
            const maxScale = 7.0;
            console.log(newScale)
            if (newScale >= minScale && newScale <= maxScale) {
                container.style.transformOrigin = "50% 50%";
                container.style.transform = `scale(${newScale})`;

                // 수정된 부분: newScale이 maxScale에 근접하면 페이지를 이동
                if (newScale >= maxScale - 0.3 && newScale <= maxScale + 0.3) {
                    navigate("/map");
                }
            }
        };

        container.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, [navigate]);

    return (
        <div
            ref={containerRef}
            style={{
                background: backColor,
                overflowY: "scroll",
                height: "100vh",
                margin: 0,
                transition: "transform 0.5s",
            }}
        >
            <VideoMain />
        </div>
    );
}

export default VideoZoomInOut;
