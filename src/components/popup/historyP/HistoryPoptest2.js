import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import HistoryPop from './HistoryPop';

const HistoryPoptest2 = () => {
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

    return (
        <div>
            {historyData && (
                <HistoryCom 
                    imageUrl={historyData.imageUrl} 
                    title={historyData.title} 
                    content={historyData.content} 
                />
            )}
        </div>
    );
};

export default HistoryPoptest2;
