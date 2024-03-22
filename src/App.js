import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoZoomInOut from "./pages/VideoZoomInOut";
import MapMain from "./pages/MapMain";
import Timeline from "./pages/Timeline";
import AdminList from "./pages/AdminList";
import InsertReport from "./pages/InsertReport";

/*
 * "/" 동영상 있는 메인페이지

 * "/map" 지도 있는 메인페이지
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideoZoomInOut />} />
                <Route path="/map" element={<MapMain />} />
                <Route path="/adminList" element={<AdminList />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/report" element={<InsertReport />} />
            </Routes>
        </Router>
    );
}

export default App;
