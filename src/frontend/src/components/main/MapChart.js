import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const korea = ["South Korea", "North Korea"]

/* 
* 🚨 node modules 추가
* yarn add react-simple-maps  
* yarn add react-tooltip 

* 지도 컴포넌트, react-simple-map을 통해 구현하였음
* 현재 onClick, onMouseEnter, onMouseLeave 이벤트 구현 완료.
* onClick 나라이름 및 id 출력, 추후 선택된 나라 id를 전달 예정
* onMouseEnter, onMouseLeave 마우스의 위치에 따른 색 변경 이벤트 구현.
*/ 
function MapChart() {
  const [content, setcontent] = useState("");
  const handleClick = (geo, id) => (event) => {
    console.log(geo.name + "#"+ id);
    event.stopPropagation();
  };
  const initialCoordinates = [127, 37];
  const initialZoom = 4;

  return (
    <div
      className="Map"
      style={{
        width: "80%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d0d34",
      }}
    >
      <Tooltip>{content}</Tooltip>
      <ComposableMap>
        <ZoomableGroup
          center={initialCoordinates}
          zoom={initialZoom}
          onMoveStart={({ coordinates, zoom }) => {
            console.log(coordinates, zoom)
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { name } = geo.properties;
              
                return (
                  <Geography
                    stroke="#ffffff"
                    strokeWidth="0.03"
                    key={geo.rsmKey}
                    geography={geo}
                    fill={ korea.includes(name) ? "#5CFFD1" : "#2a0c66"}
                    onClick={
                      handleClick(geo.properties, geo.id)
                    }
                    onMouseEnter={(event) => {
                      setcontent(name);
                      event.stopPropagation();
                    }}
                    onMouseLeave={() => setcontent("")}
                    style={{
                      hover: {
                        fill: korea.includes(name) ? "#5CFFD1" : "#FF81DB",
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