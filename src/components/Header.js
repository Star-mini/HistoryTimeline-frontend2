import React from "react";
import "../styles/font.css";

function Header(props) {
    const fontColor = "#0d0d0d"; // 글씨
    return (
        <div
            className="container"
            style={{
                margin: 0,
                maxWidth: "100%",
                position: "fixed",
                top: "10px",
                right: "20px",
            }}
        >
            <div className="row">
                <div className="col-4">
                    <img src="logo.png" style={{ width: "90px", height: "90px" }}></img>
                </div>
                <div className="col-8">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/login"
                                style={{
                                    color: fontColor,
                                    paddingRight: "15px",
                                    fontSize: "15pt",
                                }}
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                href="#"
                                style={{
                                    color: fontColor,
                                    paddingRight: "0px",
                                    fontSize: "15pt",
                                }}
                            >
                                Join
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
