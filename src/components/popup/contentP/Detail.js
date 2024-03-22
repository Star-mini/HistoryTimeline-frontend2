import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/contents/detail.css';

const Detail = ({ contentId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [details, setDetails] = useState('');

  const api_key = "0decfffb82411d82c9af75fdfaba9b34";
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/${contentId}?api_key=${api_key}&language=ko-KR`);
        setDetails(response.data.overview);
      } catch (error) {
        console.error('영화 상세 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchMovieDetails();
  }, [contentId]);

  const shouldShowButton = details.length >310;

  return (
    <section className="detail-section">
      <h3 className="detail-title">콘텐츠 설명</h3>
      <div id="detailContent" className={`detail-content ${isExpanded ? 'detail-expanded' : 'detail-collapsed'}`}>
        <p>
          {details}
        </p>
      </div>
      {shouldShowButton && (
        <button id="detailToggle" className="detail-button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '접기 ▲' : '더보기 ▼'}
        </button>
      )}
    </section>
  );
};

export default Detail;
