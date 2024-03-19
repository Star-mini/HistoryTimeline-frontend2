import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Test from "./components/popup/historyP/Test";
// import HistoryPoptest from "./components/popup/historyP/HistoryPoptest";
// import HistoryPoptest2 from "./components/popup/historyP/HistoryPoptest2";
//import ContentsPopup from "./components/popup/contentP/ContentsPopup";
import VideoZoomInOut from "./pages/VideoZoomInOut";
import MapMain from "./pages/MapMain";
import Timeline from "./pages/Timeline";
import AdminList from "./pages/AdminList";

// 컴포넌트.. 팝업 성공하면 지우기~!
import AdminInsert from "./components/admain/insert/AdminInsert";

/*
 * "/" 동영상 있는 메인페이지ghb

 * "/map" 지도 있는 메인페이지
 */
function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/test" element={<Test />} />
                <Route path="/test1" element={<HistoryPoptest />} />
                <Route path="/test2" element={<HistoryPoptest2/>} /> */}
                <Route path="/" element={<VideoZoomInOut />} />
                <Route path="/map" element={<MapMain />} />
                <Route path="/adminInsert" element={<AdminInsert />} />
                <Route path="/adminList" element={<AdminList />} />
                <Route path="/timeline" element={<Timeline />} />
                {/* <Route path="/contents" element={<ContentsPopup />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
