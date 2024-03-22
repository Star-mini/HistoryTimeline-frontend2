import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import HistoryPop from './HistoryPop';
import MovieCom from './HistoryPoPComponent/MovieCom';
import "./HistoryPop.css"


const movies = [
    {
      title: "서울의 봄 (2023)",
      imageUrl: "https://img.movist.com/?img=/x00/05/96/41_p1.jpg"
    },
    {
      title: "남산의 부장들 (2020)",
      imageUrl: "https://img.movist.com/?img=/x00/05/24/83_p1.jpg"
    },
    {
      title: "택시운전사 (2017)",
      imageUrl: "https://img.movist.com/?img=/x00/04/81/75_p1.jpg"
    },
    {
      title: "1987 (2017)",
      imageUrl: "https://img.movist.com/?img=/x00/04/93/47_p1.jpg"
    }
];

const HistoryPoptest2 = () => {
    const [historyData, setHistoryData] = useState(null);
    const historyId = 1298;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/historyPop/${historyId}`);
                const transformedData = { ...response.data, content: response.data.brief };
                setHistoryData(transformedData);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchData();
    }, [historyId]);

    return (
        <div className="HistoryPop">
            <div className="history-container">
                {historyData && (
                    <HistoryCom imageUrl={historyData.imageUrl} title={historyData.title} content={[historyData.content]} />
                )}
            </div>
            <div className="movie-container">
                <MovieCom movies={movies} />
            </div>
        </div>
    );
};

export default HistoryPoptest2;
