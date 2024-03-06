import React from "react";

function Footer(props) {
    const backColor = "#264364"; // 배경색
    const fontColor = "#f4e9c9"; // 글씨
    return (
        <div
            className="container"
            style={{
                background: backColor,
                margin: 0,
                maxWidth: "100%",
            }}
        >
            <div className="row">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{
                                color: fontColor,
                                paddingRight: "0px",
                                fontSize: "16pt",
                            }}
                        >
                            제보하기
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
