import React from 'react';
import '../../styles/timeline/timeline.css'
import HistoryLabel from "./HistoryLabel";
import { useState, useEffect, useCallback } from 'react';
import TimelineLabel from './TimelineLabel';
import ScrollLoadingBox from './ScrollLoadingBox';
import axios from 'axios';
import {years} from "../../constants/years";

/* Timeline Component -> 나라 선택 부터 history Label까지 포함 */
const Timeline = () => {
    // 맨 아래에서 scroll할 때마다 / 나라를 선택할 때 data를 fetch한다.
    const [histories, setHistories] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [isVisible, setIsVisible] = useState(false); // 타임라인 보이기 여부
    const [scrollHeight, setScrollHeight] = useState(0); // scroll의 y 위치에 따른 타임라인의 길이
    const [selectedCountry, setSelectedCountry] = useState(null); // 선택된 나라
    const [selectedYear, setSelectedYear] = useState(2000); // 선택된 연도 - 가져온 연도 리스트에서 첫번째 연도로 했음.

    // 나라, 연도 리스트 가져오기
    const countries = axios.get("/countries");

    // 페이지가 열렸을 때 Timeline이 천천히 보이도록 함.
    useEffect(() => {
        // ** data 초기 세팅 해야함  
        setIsVisible(true);
        fetchHistories();
    }, []);

    // 무한 스크롤 관련 자료 https://tech.kakaoenterprise.com/149
    // 아래에서 scroll을 내릴 때마다 fetch를 진행한다.
    useEffect(() => {
        const handleScroll = () => {
          const { scrollTop, offsetHeight } = document.documentElement
          if (window.innerHeight + scrollTop >= offsetHeight) {
            setIsLoading(true)
          }
        }
        // setLoading(true)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const fetchHistories = useCallback(async () => {
        // 나라가 선택되었는지에 따라 api가 달라진다.
        const { data } = selectedCountry ? 
            // 선택된 나라가 있을 때
            await axios.get('/timeline/compareKorea', {
                params : {
                    page : page,
                    countryId : selectedCountry.countryId,
                    year: selectedYear
                }
            })
            :
            // 선택된 나라가 없을 때 (한국만 보일 때)
            await axios.get('/timeline/korea', {
                params :{
                    page: page,
                    year: selectedYear
                }
            })
        setHistories(histories.concat(data.contents))
        setPage(page + 1)
        setIsLoading(false)
      }, [page]);
    
    // isLoading == true, 즉 로딩에 들어가면 데이터를 업데이트한다.
    useEffect(() => {
        if (isLoading) fetchHistories()
    }, [isLoading]);


    // 스크롤 위치에 따라 타임라인 중심선 높이를 동적으로 설정
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
                                {histories.map((step) => (
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
                                {histories.map((step) => (
                                    <HistoryLabel direction="left" data={step} isHidden={step.country_id !== 1}/>
                                ))}
                            </div>
                            <div className="steps right">
                                {histories.map((step) => (
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
            {/* 로딩때만 보일 로딩 박스 */}
            <ScrollLoadingBox isLoading={isLoading}/>
            
        </div>
        
    );
};

export default Timeline;