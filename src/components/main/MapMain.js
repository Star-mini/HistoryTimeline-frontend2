import React from "react";
import MapChartV2 from "./MapChartV2";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/font.css"

/**
 * 지도 메인화면
 */
function MapMain() {
    return (
        <div
            style={{
                textAlign: "center",
                height: "3000px",
                background: "linear-gradient(45deg, rgb(209, 202, 252), rgb(234, 226, 253))"
            }}
        >
            <Header />
            <br />
            <div
                style={{
                    margin : "auto",
                    textAlign: "center",
                    width: "100%",
                    height: "100vh",
                    position: "fixed",
                    top: "120px",
                }}
            >
                <MapChartV2 />
            </div>
            <Footer/>
        </div>
    );
}

export default MapMain;
