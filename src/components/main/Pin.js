import React from "react";
import { animated } from "react-spring";

function Pin({x, y}) {

    return (
        <animated.div
            style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "red",
                transform: `translate(${x}vw, ${y}vw)`, 
            }}
        />
    );
}

export default Pin;
