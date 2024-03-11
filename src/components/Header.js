import React from "react";

function Header(props) {
    const backColor = "#264364"; // 배경색
    const fontColor = "#f4e9c9"; // 글씨
    return (
        <div
            className="container"
            style={{
                background: backColor,
                margin: 0,
                maxWidth: "100%"
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
