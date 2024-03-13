import React from "react";
import { animated } from "react-spring";

function Pin({ x, y, imageOffset }) {
    const imageX = x - imageOffset.left;
    const imageY = y - imageOffset.top;

    return (
        <animated.div
            style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "red",
                transform: `translate(${imageX}px, ${imageY}px)`, 
            }}
        />
    );
}

export default Pin;
