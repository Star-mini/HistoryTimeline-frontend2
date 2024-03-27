import React, { useState, useEffect } from 'react';
import {cusomizedAxios as axios} from "../../../constants/customizedAxios";
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import MovieCom from './HistoryPoPComponent/MovieCom';
import ContentsPopup from '../contentP/ContentsPopup';
import "./HistoryPop.css";

// historyPop 전체 컴포넌트 
const HistoryPoptest2 = ({ historyId ,countryId, year  }) => {
    const [historyData, setHistoryData] = useState(null);
    const [contentData, setContentData] = useState([]);

    // 컴포넌트가 마운트될 때 데이터를 불러옴 
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 역사 데이터 가져오기
                const historyResponse = await axios.get(`/historyPop/${historyId}`);
                setHistoryData(historyResponse.data);
    
                // 국가와 연도에 따른 콘텐츠 타이틀들 가져오기
                if (countryId && year) {
                    const contentResponse = await axios.get(`/historyPop/content/${countryId}/${year}`);
                    setContentData(contentResponse.data); // 데이터가 없을 경우 빈 배열로 초기화
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [historyId, countryId, year]);


    // 대체 기본 이미지 URL
    const defaultImageUrl = "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg?type=thumb&opt=C800x400";

    return (
    
        <div className="HistoryPop">
            <div className="history-container">
                {historyData && (
                    <HistoryCom 
                        imgUrl={historyData.imgUrl || defaultImageUrl}  
                        title={historyData.title} 
                        content={[historyData.content]} // 배열로 전달되어야 함
                        detail={historyData.detail} 
                    />
                )}
            </div>
            <div className="movie-container">
                    
            </div>
            <div className="contents-container">
                {/* 이 부분은 필요에 따라 수정 */}
            </div>
        
           {console.log(historyData)}

           {console.log(contentData)}
        </div>
    );
};

export default HistoryPoptest2;
