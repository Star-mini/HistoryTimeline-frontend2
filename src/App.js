import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Test from "./components/popup/historyP/Test";
import HistoryPoptest from "./components/popup/historyP/HistoryPoptest";
import HistoryPoptest2 from "./components/popup/historyP/HistoryPoptest2";
/*
 * "/" 동영상 있는 메인페이지ghb

 * "/map" 지도 있는 메인페이지
 */
function App() {
    return (
        <Router>
            <Routes>
               
                <Route path="/test" element={<Test />} />
                <Route path="/test1" element={<HistoryPoptest />} />
                <Route path="/test2" element={<HistoryPoptest2/>} />
              
            </Routes>
        </Router>
    );
}

export default App;
