import React from "react";
import MapChart from "./MapChart";

/**
 * 지도 메인화면
 */
function MapMain() {
    const backColor = "#264364"; // 배경색
    return (
        <div style={{ background: backColor }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <MapChart />
            </div>
        </div>
    );
}

export default MapMain;
