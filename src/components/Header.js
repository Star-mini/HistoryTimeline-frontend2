import React, { useState, useEffect } from "react";
import "../styles/font.css";
import cookie from "react-cookies";

function Header(props) {
  const fontColor = "#0d0d0d"; // 글씨
  const propsBackground = props.background;
  const [state, setState] = useState("");
  useEffect(() => {
    setState(cookie.load("email"));
    console.log(state);
  }, []);

  const isLoginState = () => {
    return state != null;
  };
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
        margin: 0,
        maxWidth: "100%",
        position: "fixed",
        background: propsBackground || "",
      }}
    >
      <div className="row">
        <div className="col-4">
          <img src="logo.png" style={{ width: "90px", height: "90px" }}></img>
        </div>
        <div className="col-8">
          <ul className="nav justify-content-end">
            <li className="nav-item" style={{ top: "10px" }}>
              {LoginAndLogout()}
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
