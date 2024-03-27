import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoMain from "../components/main/VideoMain";

/**
 * 마우스 이벤트에 따라 동작하며 가운데를 기준으로 확대 및 축소된다.
 * 속도는 scale 변수로 조정 가능하다.
 * 일정 값이상 scale이 상승하면 페이지가 이동된다.
 */
function VideoZoomInOut() {
    const containerRef = useRef(null);
    const backColor = "#ffffff";
    const navigate = useNavigate();

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = (event) => {
            event.preventDefault();

            const delta = event.deltaY || event.detail || event.wheelDelta;
            const scale = delta > 0 ? 1.2 : 0.9;

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
                document.getElementById("root").style.overflow = "hidden";
                // 수정된 부분: newScale이 maxScale에 근접하면 페이지를 이동
                console.log(maxScale - 0.5, maxScale + 0.5)
                if (newScale >= maxScale - 0.5 && newScale <= maxScale + 0.5) {
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
                overflow: "hidden"
            }}
        >
            <VideoMain />
        </div>
    );
}

export default VideoZoomInOut;
