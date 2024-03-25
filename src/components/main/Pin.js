import React from "react";
import { animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import "../../styles/main/Pin.scss";

/**
 * 클릭 이벤트를 통해 타임라인 페이지로 이동한다.
 * 이동 시 countryId 값이 함께 전달된다.
 * Pin의 애니메이션은 import 주소와 같이 Pin.scss에 구현되어있다.
 * 스크롤 창의 크기에 상관없이 위치를 상대적으로 표시하기 위해 vw, absolute를 사용하였다.
 */
function Pin({ x, y, country }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/timeline/" + country); 
    };

    return (
        <animated.div className="mapPin"
            style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                transform: `translate(${x}vw, ${y}vw)`,
                cursor: "pointer",
            }}
            onClick={handleClick}
        />
    );
}

export default Pin;
