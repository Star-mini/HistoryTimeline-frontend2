import React from "react";

function Header(props) {
    const fontColor = "#0d0d0d"; // 글씨
    return (
        <div
            className="container"
            style={{
                margin: 0,
                maxWidth:"100%",
                transform : "translateY(0%)",
                position: "fixed",
                top: 0,
                left: 0,
            }}
        >
            <div className="row">
                <div className="col-4">
                    <img
                        src="logo.png"
                        style={{ width: "90px", height: "90px" }}
                    ></img>
                </div>
                <div className="col-8">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                style={{ color: fontColor, paddingRight:"15px",fontSize:"16pt" }}
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                href="#"
                                style={{ color: fontColor, paddingRight:"0px",fontSize:"16pt" }}
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
