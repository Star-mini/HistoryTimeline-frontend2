import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import MovieCom from './HistoryPoPComponent/MovieCom';
import ContentsPopup from '../contentP/ContentsPopup';
import "./HistoryPop.css";

// historyPop 전체 컴포넌트 
const HistoryPoptest2 = ({  historyId ,countryId, year  }) => {
    const [historyData, setHistoryData] = useState(null);
    const [contentData, setConetentData] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // 컴포넌트가 마운트될 때 데이터를 불러옴 
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 백엔드에서 역사 데이터 가져옴
                const historyResponse = await axios.get(`http://localhost:8081/historyPop/${historyId}`);
                const transformedHistoryData = { ...historyResponse.data, content: historyResponse.data.brief };
                transformedHistoryData.detail = historyResponse.data.detail;
                setHistoryData(transformedHistoryData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [historyId]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                if (countryId && year) {
                    const response = await axios.get(`http://localhost:8081/historyPop/content`, {
                        params: {
                            countryId: countryId,
                            year: year
                        }
                    });
    
                    const titles = response.data;
    
                    setConetentData(titles);
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
    
        fetchMovies();
    }, [countryId, year]);

    // 대체 기본 이미지 URL
    const defaultImageUrl = "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg?type=thumb&opt=C800x400";

    const handleMovieSelect = (title) => {
        setSelectedMovie(title);
    };

    return (
    
        <div className="HistoryPop">
            <div className="history-container">
                {historyData && (
                    <HistoryCom 
                        imgUrl={historyData.imgUrl || defaultImageUrl}  
                        title={historyData.title} 
                        content={[historyData.content]} 
                        detail={historyData.detail} 
                    />
                )}
            </div>
            <div className="movie-container">
                {contentData && (
                    <div>
                        {contentData.map((title, index) => (
                            <h1 key={index}>{title}</h1>
                        ))}
                    </div>
                )}
            </div>
            <div className="contents-container">
                {selectedMovie && (
                    <ContentsPopup 
                        movieTitle={selectedMovie} 
                        onClose={() => setSelectedMovie(null)} 
                    />
                )}
            </div>
            {console.log("historyData:", historyData)}
         {console.log("contentData:", contentData)}
        </div>
    );
};

export default HistoryPoptest2;
