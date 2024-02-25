import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoZoomInOut from "./components/main/VideoZoomInOut";
import MapZoomInOut from "./components/main/MapZoomInOut";

/*
 * "/" 동영상 있는 메인페이지
 * "/map" 지도 있는 메인페이지
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoZoomInOut />} />
        <Route path="/map" element={<MapZoomInOut />} />
      </Routes>
    </Router>
  );
}

export default App;
