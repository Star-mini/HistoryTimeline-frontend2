import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import VideoZoomInOut from "./pages/VideoZoomInOut";
import MapMain from "./pages/MapMain";
import Timeline from "./pages/Timeline";
import AdminList from "./pages/AdminList";
import Login from "./components/login/login";
import InsertReport from "./pages/InsertReport";
import ContentsPopup from "./components/popup/contentP/ContentsPopup";

/*
 * "/" 동영상 있는 메인페이지

 * "/map" 지도 있는 메인페이지
 */
function App() {
    document.body.style.fontFamily = "Galmuri14";
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<VideoZoomInOut />} />
                <Route path="/map" element={<MapMain />} />
                <Route path="/adminList" element={<AdminList />} />
                <Route path="/timeline/:countryId" element={<Timeline />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/login" element={<Login />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/report" element={<InsertReport />} />
                <Route path="/contents" element={<ContentsPopup />} />
            </Routes>
        </Router>
    );
}

export default App;
