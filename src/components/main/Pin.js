import React from "react";
import { animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import "./Pin.scss";

function Pin({ x, y, country }) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/timeline", { state: { country } }); 
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
