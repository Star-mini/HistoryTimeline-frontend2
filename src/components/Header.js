import React, { useState, useEffect } from "react";
import "../styles/font.css";
import cookie from "react-cookies";

function Header(props) {
    const fontColor = "#0d0d0d"; // 글씨
    const propsBackground = props.background;
    const [state, setState] = useState("");
    useEffect(() => {
        setState(cookie.load("email"));
    }, []);

    const isLoginState = () => {
        return state !== "";
    };

    const logout = () => {
        setState("");
        cookie.remove("email");
    }

    const LoginAndLogout = () => {
        if (isLoginState()) {
            return (
                <a
                    className="nav-link"
                    href="#"
                    style={{
                        color: fontColor,
                        paddingRight: "15px",
                        fontSize: "15pt",
                    }}
                >
                    Logout
                </a>
            );
        } else {
            return (
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
            );
        }
    };
    return (
        <div
            className="header container"
            style={{
                zIndex: 5,
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
                        style={{marginTop: "15px" , marginRight: "10px"}}
                    >
                        <li className="nav-item">{LoginAndLogout()}</li>
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
