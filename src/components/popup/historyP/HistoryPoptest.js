import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import HistoryPop from './HistoryPop';

const HistoryPoptest = () => {
    const [historyData, setHistoryData] = useState(null);
    const historyId = 1299; // 사용할 역사 ID


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/historyPop/${historyId}`);
                setHistoryData(response.data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchData();
    }, [historyId]);

    // historyData를 이용하여 UI를 렌더링하는 로직 추가

    return (
        <div>
            {/* historyData를 이용하여 UI를 렌더링 */}
            {historyData && (
                <div>

                    <h1>{historyData.title}</h1>
                    <p>{historyData.year}</p>                    
                    <p>{historyData.brief}</p>
                    
                </div>
            )}
        </div>
    );
};

export default HistoryPoptest;
