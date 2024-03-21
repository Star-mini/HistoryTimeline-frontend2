import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoZoomInOut from "./components/main/VideoZoomInOut";
import MapMain from "./components/main/MapMain";
import AdminInsert from "./components/admain/insert/AdminInsert";
import MapChartV2 from "./components/main/MapChartV2";
import Timeline from "./pages/Timeline";
import AdminList from "./pages/AdminList";

/*
 * "/" 동영상 있는 메인페이지ghb

 * "/map" 지도 있는 메인페이지
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideoZoomInOut />} />
                <Route path="/map" element={<MapMain />} />
                <Route path="/mapv2" element={<MapChartV2 />} />
                <Route path="/adminInsert" element={<AdminInsert/>} />
                <Route path="/adminList" element={<AdminList/>} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </Router>
    );
}

export default App;
