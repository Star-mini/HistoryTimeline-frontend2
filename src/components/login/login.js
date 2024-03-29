import React, { useEffect } from "react";
import "../../styles/font.css";
import {useNavigate, useParams} from "react-router-dom";
import { cusomizedAxios as axios } from "../../constants/customizedAxios";

function Login() {
  const navigate = useNavigate();


  useEffect(() => {
    //params에 url 뒤에 붙는 파라미터 저장
    const params = new URLSearchParams(window.location.search);
    console.log(params);

      const code = params.get("code");
      const state = params.get("state");

    // 카카오는 code, 네이버는 code, state사용
    if (code && state) {
      //code와 state 둘 다 있는 경우 (네이버 로그인)
      axios
        .post("/app/login/naver", {
          authorizationCode: code,
          state: state,
        })
        .then(() => {
          alert("네이버 로그인 성공");
          navigate("/");
        })
        .catch((error) => {
          console.error("Naver login error:", error);
        });
    } else if (code) {
      //code만 있는경우 (카카오 로그인)
      axios
        .post("/app/login/kakao", {
          authorizationCode: code,
        })
        .then(() => {
          alert("카카오 로그인 성공");
          navigate("/");
        })
        .catch((error) => {
          console.error("kakao login error:", error);
        });
    }
  }, [navigate]);

  const Rest_api_key = "2ea545389bd54a8f75ef9673fc8a6ece";
  const redirect_uri_kakao = "http://localhost:8081/app/login/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri_kakao}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const NAVER_CLIENT_ID = "glyJ_46nNdvnv3wHPPvh";
  const redirect_uri_naver = "http://localhost:8081/app/login/naver";
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=naver&redirect_uri=${redirect_uri_naver}`;

  const handleNaverLogin = () => {
    window.location.href = naverURL;
  };

  return (
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
          top: "120px",
        }}
      >

        <button style={{ border: "none", background: "none" }}>
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
            onClick={handleKakaoLogin}
          />
        </button>
        <button style={{ border: "none", background: "none" }} onClick={handleNaverLogin}>
              <img
                  src="btnG_완성형.png"
                  width="222"
                  alt="네이버 로그인 버튼"
                  onClick={handleNaverLogin}
              />
          </button>
      </div>
    </div>
  );
}

export default Login;
