import React from 'react';
import '../../styles/timeline/timeline.css'
import HistoryLabel from "./HistoryLabel";
import { useState, useEffect } from 'react';
import TimelineLabel from './TimelineLabel';

// 테스트 용 history 리스트
const steps = [
    {
      hisotry_id: 1,
      year: 1960,
      month: 1,
      country_id: 1,
      title: '한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건한국 사건 '
    },
    {
        hisotry_id: 1,
        year: 1960,
        month: 6,
        country_id: 1,
        title: '한국 사건'
      },
    {
        hisotry_id: 1,
        year: 1961,
        month: null,
        country_id: 1,
        title: '한국 사건'
    },
    {
        hisotry_id: 1,
        year: 1967,
        month: null,
        country_id: 3,
        title: '일본 사건'
    },
    {
        hisotry_id: 1,
        year: 1968,
        month: null,
        country_id: 1,
        title: '한국 사건'
    },
    {
        hisotry_id: 1,
        year: 1969,
        month: null,
        country_id: 3,
        title: '일본 사건'
    },
  ];
// 테스트 용 country 리스트
const countries = [
        {
            country_id: 1,
            name: "한국"
        },
        {
            country_id: 2,
            name: "미국"
        },
        {
            country_id: 3,
            name: "중국"
        },
        {
            country_id: 4,
            name: "일본"
        },
        {
            country_id: 5,
            name: "나라"
        },
        {
            country_id: 6,
            name: "나라"
        },
        {
            country_id: 7,
            name: "나라"
        },
        {
            country_id: 8,
            name: "나라"
        },
        {
            country_id: 9,
            name: "나라"
        },
        {
            country_id: 10,
            name: "나라"
        },
        {
            country_id: 11,
            name: "나라"
        },
    ];
// 테스트 용 year 리스트
const years = [
    {
        name: 1900
    },
    {
        name: 1910
    },
    {
        name: 1920
    },
    {
        name: 1930
    },
    {
        name: 1940
    },
    {
        name: 1950
    },
    {
        name: 1960
    }

]
/* Timeline Component -> 나라 선택 부터 history Label까지 포함 */
const Timeline = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // 타임라인 보이기 여부
    const [scrollHeight, setScrollHeight] = useState(0); // scroll의 y 위치에 따른 타임라인의 길이
    const [selectedCountry, setSelectedCountry] = useState(null); // 선택된 나라
    const [selectedYear, setSelectedYear] = useState(years[0]); // 선택된 연도 - 가져온 연도 리스트에서 첫번째 연도로 했음.

    // 페이지가 열렸을 때 Timeline이 천천히 보이도록 함.
    useEffect(() => {
        // ** data 초기 세팅 해야함  
        setIsVisible(true);
    }, []);

    // 스크롤 위치에 따라 높이를 동적으로 설정
    useEffect(() => {
        const handleScroll = () => {
            const newHeight = window.scrollY + 500;
            setScrollHeight(newHeight);
        };
    
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div>
            {/* 국가, 연도 선택 바 */}
            <TimelineLabel 
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countries={countries}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                years={years}
            />
            {/* 타임라인 선 */}
            {selectedCountry === null &&
                <div className={`timeline-transition ${isVisible ? 'visible' : ''}`}>
                <div className="timeline-wrapper">
                    <div className="img-hero" style={{
                        alignItems: 'start',
                        marginLeft: '7%'}}>
                        <div className="scoll-wrap-hero" style={{marginLeft: '20px'}}>
                            <div
                            className="scroll-animate _2"
                            style={{ height: `${scrollHeight}px` }}
                            data-w-id="f7c9a793-0d3b-789e-1c98-89b2bc29cc0f"
                            ></div>
                            <div className="scroll-base"></div>
                        </div>
                        <div className="scroll-hero" style={{marginLeft: '23px'}}>
                            <div className="steps right">
                                {steps.map((step) => (
                                    <HistoryLabel direction="right" data={step} isHidden={step.country_id !== 1}/>
                                ))}

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            }
            {/* 타임라인에 있는 역사 리스트 */}
            {selectedCountry !== null && 
                <div className={`timeline-transition ${isVisible ? 'visible' : ''}`}>
                <div className="timeline-wrapper">
                    <div className="img-hero">
                        <div className="scroll-hero">
                            <div className="steps left">
                                {steps.map((step) => (
                                    <HistoryLabel direction="left" data={step} isHidden={step.country_id !== 1}/>
                                ))}
                            </div>
                            <div className="steps right">
                                {steps.map((step) => (
                                    <HistoryLabel direction="right" data={step} isHidden={step.country_id === 1}/>
                                ))}

                            </div>
                        </div>
                        <div className="scoll-wrap-hero">
                            <div
                            className="scroll-animate _2"
                            style={{ height: `${scrollHeight}px` }}
                            data-w-id="f7c9a793-0d3b-789e-1c98-89b2bc29cc0f"
                            ></div>
                            <div className="scroll-base"></div>
                        </div>
                    </div>
                </div>
            </div>
            }
            
        </div>
        
    );
};

export default Timeline;