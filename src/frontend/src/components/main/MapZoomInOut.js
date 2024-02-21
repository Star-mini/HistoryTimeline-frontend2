import React from "react";
import MapChart from "./MapChart";
import '../../styles/main/MapZoomInOut.css';

/*
* 지도 컴포넌트의 줌인 줌아웃 애니메이션 구현을 위한 컴포넌트
*/
function MapZoomInOut() {
    return (
        <div className="Zoom-in-out-box">
            <div className="Ch">
                <MapChart/>
            </div>
        </div>
    );
}

export default MapZoomInOut;
