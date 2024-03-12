import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HistoryPop from "./components/popup/historyP/HistoryPop";
import Test from "./components/popup/historyP/Test";


/*
 * "/" 동영상 있는 메인페이지
 * "/map" 지도 있는 메인페이지
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test />} />
               
              
            </Routes>
        </Router>
    );
}

export default App;
