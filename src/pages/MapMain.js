import React, { useEffect, useState } from "react";
import MapChartV2 from "../components/main/MapChartV2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/font.css";
/**
 * 지도 메인화면
 */
function MapMain() {
    return (
        <>
            <Header />
            <div
                style={{
                    textAlign: "center",
                    height: "3000px",
                    background:
                        "linear-gradient(276deg, rgb(209, 202, 252), rgb(255 149 125))",
                }}
            >
                <br />
                <div
                    style={{
                        margin: "auto",
                        textAlign: "center",
                        width: "100%",
                        height: "100vh",
                        position: "fixed",
                        top: "100px",
                    }}
                >
                    <MapChartV2 />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MapMain;
