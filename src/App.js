import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoZoomInOut from "./components/main/VideoZoomInOut";
import MapMain from "./components/main/MapMain";
import AdminInsert from "./components/admain/insert/AdminInsert";

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
                <Route path="/adminInsert" element={<AdminInsert/>} />
            </Routes>
        </Router>
    );
}

export default App;
