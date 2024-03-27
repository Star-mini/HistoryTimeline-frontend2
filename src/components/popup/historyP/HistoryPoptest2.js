import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import MovieCom from './HistoryPoPComponent/MovieCom';
import ContentsPopup from '../contentP/ContentsPopup';
import "./HistoryPop.css";

const movies = [
    {
      title: "서울의 봄",
      imageUrl: "https://img.movist.com/?img=/x00/05/96/41_p1.jpg"
    },
    {
      title: "남산의 부장들",
      imageUrl: "https://img.movist.com/?img=/x00/05/24/83_p1.jpg"
    },
    {
      title: "택시운전사",
      imageUrl: "https://img.movist.com/?img=/x00/04/81/75_p1.jpg"
    },
    {
      title: "1987 (2017)",
      imageUrl: "https://img.movist.com/?img=/x00/04/93/47_p1.jpg"
    }
  ];






// historyPop 전체 컴포넌트 
const HistoryPoptest2 = ({ historyId }) => {
    const [historyData, setHistoryData] = useState(null);
    const [moviesData, setMoviesData] = useState([]);
    
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

                // // 백엔드에서 영화 데이터 가져옴
                // const moviesResponse = await axios.get('http://localhost:8081/movies');
                // setMoviesData(moviesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [historyId]);

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
            <MovieCom movies={movies} onMovieSelect={handleMovieSelect} />
        </div>
        <div className="contents-container">
            {selectedMovie && (
            <ContentsPopup 
                movieTitle={selectedMovie} 
                onClose={() => setSelectedMovie(null)} 
            />
            )}
        </div>
        </div>
);
};

export default HistoryPoptest2;