import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/font.css";
import cookie from "react-cookies";

function Header(props) {
    const fontColor = "#0d0d0d"; // 글씨
    const propsBackground = props.background;
    const [state, setState] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setState(cookie.load("email"));
    }, []);

    const handleLogout = () => {
        setState("");
        navigate(-1);
    };

    return (
        <div
            className="header container"
            style={{
                margin: 0,
                maxWidth: "100%",
                position: "fixed",
                background: propsBackground || "",
            }}
        >
            <div className="row">
                <div className="col-4">
                    <img
                        src="logo.png"
                        style={{ width: "90px", height: "90px", margin: "5px" }}
                    ></img>
                </div>
                <div className="col-8">
                    <ul
                        className="nav justify-content-end"
                        style={{ marginTop: "15px", marginRight: "10px" }}
                    >
                        <li className="nav-item">
                            {state ? (
                                <button
                                    className="nav-link"
                                    onClick={handleLogout}
                                    style={{
                                        color: fontColor,
                                        fontSize: "15pt",
                                        border: "none",
                                        background: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Logout
                                </button>
                            ) : (
                                <a
                                    className="nav-link"
                                    href="/login"
                                    style={{
                                        color: fontColor,
                                        fontSize: "15pt",
                                    }}
                                >
                                    Login
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
