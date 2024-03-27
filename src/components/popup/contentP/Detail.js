import React, { useEffect, useState } from 'react';
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import '../../../styles/contents/detail.css';

// Detail 컴포넌트는 영화 상세 정보를 렌더링
const Detail = ({ contentId }) => {
  const [details, setDetails] = useState('');

  const api_key = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";

  // 영화 상세 정보를 가져오는 useEffect 추가
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

  return (
    <section className="detail-section">
      <h3 className="detail-title">콘텐츠 설명</h3>
      <div id="detailContent" className="detail-content">
        <p>
          {details}
        </p>
      </div>
    </section>
  );
};

export default Detail;
