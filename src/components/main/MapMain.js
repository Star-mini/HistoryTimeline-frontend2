import React from "react";
import MapChartV2 from "./MapChartV2";
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
                paddingLeft: "50px",
                paddingRight: "50px",
                textAlign: "center",
                height: "1000px",
                background: "linear-gradient(45deg, rgb(209, 202, 252), rgb(234, 226, 253))"
            }}
        >
            <Header />
            <br />
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin : "auto",
                    textAlign: "center",
                    width: "80%",
                    height: "80vh",
                    position: "fixed",
                    top: "120px",
                    left: "150px",
                }}
            >
                <MapChartV2 />
            </div>
            {/* <br /><br />
            <MapTimeLine />
            <br /><br /> */}
            <Footer/>
        </div>
    );
}

export default MapMain;
