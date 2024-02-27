import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const korea = ["South Korea", "North Korea"];

/*
 * 지도 컴포넌트, react-simple-map을 통해 구현하였음
 * 현재 onClick, onMouseEnter, onMouseLeave 이벤트 구현 완료.
 * onClick 나라이름 및 id 출력, 추후 선택된 나라 id를 전달 예정
 * onMouseEnter, onMouseLeave 마우스의 위치에 따른 색 변경 이벤트 구현.
 */
function MapChart() {
    const [content, setcontent] = useState("");
    const handleClick = (geo, id) => (event) => {
        console.log(geo.name + "#" + id);
        event.stopPropagation();
    };
    const initialCoordinates = [127, 37];
    const initialZoom = 4;
    const backColor = "#264364"; // 배경색
    const mapColor = "#f4e9c9"; // 지도색
    const mapClickColor = "#deb488"; // 마우스&지도색
    const koreaColor = "#5CFFD1"; // 한국 민트

    return (
        <div
            className="Map"
            style={{
                width: "80%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: backColor,
            }}
        >
            <Tooltip>{content}</Tooltip>
            <ComposableMap>
                <ZoomableGroup
                    center={initialCoordinates}
                    zoom={initialZoom}
                    onMoveStart={({ coordinates, zoom }) => {
                        console.log(coordinates, zoom);
                    }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const { name } = geo.properties;

                                return (
                                    <Geography
                                        stroke="#000000"
                                        strokeWidth="0.2"
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={
                                            korea.includes(name)
                                                ? koreaColor
                                                : mapColor
                                        } // #2a0c66
                                        onClick={handleClick(
                                            geo.properties,
                                            geo.id
                                        )}
                                        onMouseEnter={(event) => {
                                            setcontent(name);
                                            event.stopPropagation();
                                        }}
                                        onMouseLeave={() => setcontent("")}
                                        style={{
                                            hover: {
                                                fill: korea.includes(name)
                                                    ? koreaColor
                                                    : mapClickColor,
                                                outline: "none",
                                            },
                                            default: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}

export default MapChart;
