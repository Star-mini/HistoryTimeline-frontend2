import React, { useState, useEffect, useCallback } from "react";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import styles from "../../../styles/contents/platformSection.module.css";

const PlatformSection = ({ contentId }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/movie";

  const fetchTrailer = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${contentId}/videos`, {
        params: {
          api_key: TMDB_API_KEY,
        },
      });

      const youtubeTrailer = response.data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      );
      if (youtubeTrailer) {
        setTrailerUrl(`https://www.youtube.com/watch?v=${youtubeTrailer.key}`);
      } else {
        setTrailerUrl(""); // 트레일러가 없는 경우 URL을 초기화합니다.
      }
    } catch (error) {
      console.error("Trailer fetch error:", error);
    }
  }, [contentId, TMDB_API_KEY]); // useCallback을 사용하여 함수 메모이제이션

  const fetchPlatforms = useCallback(async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${contentId}/watch/providers`,
        {
          params: {
            api_key: TMDB_API_KEY,
          },
        }
      );

      const availablePlatforms = response.data.results.KR?.flatrate || [];
      setPlatforms(availablePlatforms);
    } catch (error) {
      console.error("Platform fetch error:", error);
    }
  }, [contentId, TMDB_API_KEY]); // useCallback을 사용하여 함수 메모이제이션

  useEffect(() => {
    fetchPlatforms();
    fetchTrailer(); // contentId가 변경될 때마다 트레일러 정보를 가져오기
  }, [contentId, fetchPlatforms, fetchTrailer]); // 의존성 배열에 contentId와 fetchTrailer 추가


  const handleButtonClick = () => {
    if (trailerUrl) { // 트레일러 URL이 있을 경우에만 새 탭에서 열기
      window.open(trailerUrl, "_blank");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {platforms.map((platform) => {
          // 플랫폼 이름의 길이에 따라 className을 동적으로 설정
          const platformNameClassName = platform.provider_name.length > 11 ? 'long-name' : '';

          return (
            <div key={platform.provider_id} className={styles.platform}>
              <img
                src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
                alt={platform.provider_name}
                className={styles.logo}
              />
              {/* className에 동적으로 계산한 값을 추가. */}
              <span
                className={`${styles.platformName} ${platformNameClassName ? styles['long-name'] : ''}`}
              >
                {platform.provider_name}
              </span>
            </div>
          );
        })}
        <div className={styles["text-button-container"]}>
          <span className={styles.text}>관련 유튜브 트레일러</span>
          <button className={styles.button} onClick={handleButtonClick}>
            보러가기
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
