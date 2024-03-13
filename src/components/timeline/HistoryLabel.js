import React from 'react';
import '../../styles/timeline/timeline.css';
import { useRef, useEffect, useState } from 'react';

// 역사를 보여주는 박스(레이블)
// 어느 방향에 위치하는지, 역사에 대한 데이터, 스크롤에 따른 숨김 여부를 입력받는다.
const HistoryLabel = ({direction, data, isHidden}) => {
  // 스크롤에 따른 visible 설정 하기 위한 state 선언
    const [isVisible, setIsVisible] = useState(false);
    // circle 표시하기 위한 style 설정
    const gap = "-38px";
    const Style = direction === "left" ?
        {right : gap}:{left : gap}
    // 자연스럽게 나타나는 애니메이션을 위해 isVisible == false일 때 opacity 0으로 설정
    const hiddenStyle = {
        opacity : isHidden || !isVisible ? '0' : '100%'
    }
    // image 배치 style
    const imageStyle = direction === "left" ?
        {
            float: "right",
            marginLeft: "10px"
        } : {
        float: "left",
        marginRight: "10px"}

    const componentRef = useRef();

    // 스크롤할 때마다 보여줄 지를 체크한다. 보여주기 여부는 prop으로 
    const checkVisibility = () => {
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          const componentCenterY = rect.top + rect.height / 2;
          const viewportCenterY = window.innerHeight * 3 / 4;

          const isVisible = componentCenterY < viewportCenterY;
          setIsVisible(isVisible);
        }
      };
    
      useEffect(() => {
        // Initial check on mount
        checkVisibility();
    
        const handleScroll = () => {
          // Update visibility on scroll
          checkVisibility();
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="step-block-hero-container" ref={componentRef} style={hiddenStyle}>
            <div className="step-block-hero">
                <div className="circle" style={Style}/>
                <div className="bg-shadow"></div>
                <div className="step-hero">
                    <div className="label">
                        {
                            data.imgUrl !== null &&
                            <img className="label-image"
                                 src={data.imgUrl}
                                 style={imageStyle}
                                 alt="test"/>
                        }
                        <p className="label-date">{data.year}</p>
                        {data.month !== null && data.month !== 0 && <p className="label-date">.{data.month}</p>}
                        {data.day !== null && <p className="label-date">.{data.day}</p>}
                        <br/>
                        {
                            data.title !== null ?
                                <div className={"label-title"}>{data.title}</div> :
                                <div className={"label-brief"}>{data.brief}</div>

                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HistoryLabel;