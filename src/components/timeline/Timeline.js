import React, {useRef, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/timeline/timeline.css'
import HistoryLabel from "../timeline/HistoryLabel";
import TimelineLabel from '../timeline/TimelineLabel';
import ScrollLoadingBox from '../timeline/ScrollLoadingBox';
import {years} from "../../constants/years";
import {countries, koreaImgUrl} from "../../constants/countries";
import {cusomizedAxios as axios} from "../../constants/customizedAxios";
import HistoryPoptest2 from '../popup/historyP/HistoryPoptest2';

const Modal = ({ isOpen, onClose, historyId ,selectedCountry, selectedYear }) => {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal2" onClick={(e) => e.stopPropagation()}>
            <HistoryPoptest2 
                historyId={historyId} 
                countryId={selectedCountry?.countryId} 
                year={selectedYear?.name} 
            />
            </div>
        </div>
    );
};

/* Timeline Component -> 나라 선택 부터 history Label까지 포함 */
const Timeline = () => {
    let {countryId} = useParams();
    // 맨 아래에서 scroll할 때마다 / 나라를 선택할 때 data를 fetch한다.
    const loader = useRef(null);
    const [histories, setHistories] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [morePage, setMorePage] = useState(true);

    const [isVisible, setIsVisible] = useState(false); // 타임라인 보이기 여부
    const [scrollHeight, setScrollHeight] = useState(window.scrollY +  window.innerHeight * 3 / 4); // scroll의 y 위치에 따른 타임라인의 길이
    const [selectedCountry, setSelectedCountry] = useState(
        countryId === undefined || Number(countryId) === 410 ?
        null : countries.find((country) => country.countryId === Number(countryId))); // 선택된 나라
    const [selectedYear, setSelectedYear] = useState({ name: 1500 }); // 선택된 연도 - 가져온 연도 리스트에서 첫번째 연도로 했음.
    const countriesExcludeKorea = countries.filter((country) => country.countryId !== 410);

    // 선택한 나라가 데이터가 없을 때
    const [noData, setNoData] = useState(false);

    // Popup state
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
    const [historyId, setHistoryId] = useState(null);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        setIsModalOpen(false); // Modal이 닫혀있는지 확인
    }, [selectedCountry, selectedYear]);

    // 페이지가 열렸을 때 Timeline이 천천히 보이도록 함.
    useEffect(() => {
        // ** data 초기 세팅 해야함  
        setIsVisible(true);
    }, []);

    // 옵저버로 loading bar 나오면 loadMore 동작
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !isLoading && morePage) {
                    setIsLoading(true);
                    loadMore();
                }
            },
            { threshold: 0.8 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => observer.disconnect();
    }, [isLoading, morePage]);

    // loadMore로 페이지가 바뀔 따마다 fetch
    useEffect(()=> {
        fetchHistories();
    }, [page]);

    // 새 설정이 들어왔을 때 새 데이터 fetch
    useEffect(() => {
        setIsVisible(false);
        setMorePage(true);
        setNoData(false);

        if (page === 0) {
            fetchHistories();
        }
        else {
            setPage(0);
        }

        MoveToTop();
        setTimeout(() => {
            setIsVisible(true);
        }, 300);

    }, [selectedYear, selectedCountry]);

    // 스크롤 위치에 따라 타임라인 중심선 높이를 동적으로 설정
    useEffect(() => {
        const handleScroll = () => {
            // 맨 아래에 도달하면 중심선 길이는 최대로
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
                setScrollHeight(document.body.scrollHeight);
            }

            else setScrollHeight(window.scrollY +  window.innerHeight * 3 / 4);
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const loadMore = () => {
        setPage(page + 1);
    };

    // 새로운 역사 리스트를 fetch하는 함수
    const fetchHistories = async () => {
        // 나라가 선택되었는지에 따라 api가 달라진다.
        const { data } = selectedCountry ?
            // 선택된 나라가 있을 때
            await axios.get('/timeline/compareKorea', {
                params : {
                    page : page,
                    countryId : selectedCountry.countryId,
                    year: selectedYear.name
                }
            })
            :
            // 선택된 나라가 없을 때 (한국만 보일 때)
            await axios.get('/timeline/korea', {
                params :{
                    page: page,
                    year: selectedYear.name
                }
            })

        if (selectedCountry !== null) {
            const { data } = await axios.get('/checkData', {
                params : {
                    countryId: selectedCountry.countryId
                }
            })
            setNoData(!data);
        }
        if (data.content.length < 10) setMorePage(false);
        if (page === 0 ) setHistories(data.content)
        else setHistories(histories.concat(data.content));
        setIsLoading(false);
    };

    // 페이지 맨 위로 올라가는 함수
    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 보여줄 역사 아이디를 저장하는 함수
    const onClickHistoryLabel = (historyId) => {
        setHistoryId(historyId);
        setIsModalOpen(true);
    }

    // 역사 팝업에서 나올 때 historyId -> null
    const onClickHistoryPopupQuit = () => {
        setIsHistoryVisible(false);
        setHistoryId(null);
    }

    // 콘텐츠 팝업에서 나올 때
    const onClickContentPopupQuit = () => {
        setIsContentVisible(false);
    }

    return (
        <div>
            {/* 역사 팝업 들어갈 자리 - 클릭한 역사 아이디, 닫기 onClick 함수 전달 */}
            {/* 콘텐츠 팝업 들어갈 자리 - 클릭한 콘텐츠 아이디, 닫기 onClick 함수 전달 */}
            {noData && <div className="no-data-alert">데이터 수집 중...</div>}
            {/* 국가, 연도 선택 바 */}
            <TimelineLabel
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countries={countriesExcludeKorea}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                years={years}
            />
            {/* 타임라인 선 */}
            {(selectedCountry === null || selectedCountry === undefined) &&
                <div className={`timeline-transition${isVisible ? '-visible' : ''}`}>
                    <div className="timeline-wrapper">
                        <div className="img-hero" style={{
                            alignItems: 'start',
                            marginLeft: '7%'
                        }}>
                            <div className="scoll-wrap-hero" style={{marginLeft: '20px'}}>
                                <div
                                    className="scroll-animate _2"
                                    style={{height: `${scrollHeight}px`}}
                                    data-w-id="f7c9a793-0d3b-789e-1c98-89b2bc29cc0f"
                                ></div>
                                <div className="scroll-base"></div>
                            </div>
                            <div className="scroll-hero" style={{marginLeft: '23px'}}>
                                <div className="steps right">
                                    {histories.map((step) => (
                                        <HistoryLabel
                                            onClickHistoryLabel={onClickHistoryLabel}
                                            direction="right" data={step} isHidden={step.countryId !== 410}
                                            defaultImage={koreaImgUrl}
                                        />
                                    ))}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
            {/* 타임라인에 있는 역사 리스트 */}
            {selectedCountry !== null && selectedCountry !== undefined &&
                <div className={`timeline-transition${isVisible ? '-visible' : ''}`}>
                    <div className="timeline-wrapper">
                        <div className="img-hero">
                            <div className="scroll-hero">
                                <div className="steps left">
                                    {histories.map((step) => (
                                        <HistoryLabel
                                            onClickHistoryLabel={onClickHistoryLabel}
                                            direction="left" data={step} isHidden={step.countryId !== 410}
                                            defaultImage={koreaImgUrl}
                                        />
                                    ))}
                                </div>
                                <div className="steps right">
                                    {histories.map((step) => (
                                        <HistoryLabel
                                            onClickHistoryLabel={onClickHistoryLabel}
                                            direction="right" data={step} isHidden={step.countryId === 410}
                                            defaultImage={selectedCountry.imgUrl}/>
                                    ))}

                                </div>
                            </div>
                            <div className="scoll-wrap-hero">
                                <div
                                    className="scroll-animate _2"
                                    style={{height: `${scrollHeight}px`}}
                                    data-w-id="f7c9a793-0d3b-789e-1c98-89b2bc29cc0f"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* 로딩때만 보일 로딩 박스 */}
            { morePage && <ScrollLoadingBox ref={loader} />}
            {console.log(selectedYear)}
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                historyId={historyId} 
                selectedCountry={selectedCountry} 
                selectedYear={selectedYear} 
            />
        </div>

    );
};

export default Timeline;