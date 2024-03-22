import React, { useState } from "react";
import axios from "axios";
import "../../../styles/contents/platformSection.css";

const PlatformSection = ({ contentId }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const TMDB_API_KEY = "0decfffb82411d82c9af75fdfaba9b34";
  const BASE_URL = "https://api.themoviedb.org/3/movie";

  const fetchTrailer = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${contentId}/videos`, {
        params: {
          api_key: TMDB_API_KEY
        }
      });

      const youtubeTrailer = response.data.results.find(video => video.site === "YouTube" && video.type === "Trailer");
      if (youtubeTrailer) {
        setTrailerUrl(`https://www.youtube.com/watch?v=${youtubeTrailer.key}`);
      }
    } catch (error) {
      console.error("Trailer fetch error:", error);
    }
  };

  const handleButtonClick = () => {
    if (!trailerUrl) { // 트레일러 URL이 이미 로드되지 않았다면 요청
      fetchTrailer();
    } else { // 트레일러 URL이 있다면 새 탭에서 열기
      window.open(trailerUrl, "_blank");
    }
  };

  return (
    <section className="container">
      <div className="content">
        <img src="티빙.png" alt="Logo" className="logo" />
        <img src="와챠.png" alt="Logo" className="logo" />
        <img src="와우.png" alt="Logo" className="logo" />
        <img src="유튜브.png" alt="Logo" className="logo" />
        <div className="text-button-container">
          <span className="text">관련 유튜브 트레일러</span>
          <button className="button" onClick={handleButtonClick}>보러가기</button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
