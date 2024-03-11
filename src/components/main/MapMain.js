import React from "react";
import MapChart from "./MapChart";
import Header from "../Header";
import MapTimeLine from "./MapTimeLine";
import Footer from "../Footer";

/**
 * 지도 메인화면
 */
function MapMain() {
    const backColor = "#264364"; // 배경색
    return (
        <div
            style={{
                background: backColor,
                paddingLeft: "50px",
                paddingRight: "50px",
            }}
        >
            <Header />
            <br />
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin : "auto",
                    textAlign: "center"
                }}
            >
                <MapChart />
            </div>
            <br /><br />
            <MapTimeLine />
            <br /><br />
            <Footer/>
        </div>
    );
}

export default MapMain;
