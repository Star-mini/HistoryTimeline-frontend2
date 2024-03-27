import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios 라이브러리 import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movie.css";
import Fade from 'react-reveal/Fade';

const MovieCom = ({ movies, onMovieSelect }) => {
    const [posterUrls, setPosterUrls] = useState([]);

    useEffect(() => {
        const fetchPosterUrls = async () => {
            try {
                const urls = await Promise.all(movies.map(async (movie) => {
                    const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                        params: {
                            api_key: 'fab5e47a8eb6bba3fa581019b523c6b2',
                            query: movie.title 
                        }
                    });
                    const movieId = searchResponse.data?.results[0]?.id;
                    if (movieId) {        
                        const detailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                            params: {
                                api_key: 'fab5e47a8eb6bba3fa581019b523c6b2' 
                            }
                        });                        
                        const posterUrl = detailResponse.data?.poster_path;
                        return posterUrl ? `https://image.tmdb.org/t/p/original${posterUrl}` : null;
                    } else {
                        return null; // 영화 ID가 없는 경우 null 반환
                    }
                }));
                setPosterUrls(urls.filter(url => url !== null)); // null인 경우 필터링하여 상태 변수에 저장
            } catch (error) {
                console.error('Error fetching poster URLs:', error);
            }
        };

        fetchPosterUrls(); 
    }, [movies]); 

    // 슬라이더 설정
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-out'
    };

    const handlePosterClick = (title) => {
        // 영화 포스터 클릭 시 선택된 영화의 제목을 상위 컴포넌트로 전달
        onMovieSelect(title);
    };

    return (
        <div className='movieContainer'>
            <h3 className='movieTitle'>관련 영화</h3>

            <Slider {...sliderSettings} className="moviePosterSlide" >
                {posterUrls.map((posterUrl, index) => (  // 포스터 이미지 URL 맵핑 후 렌더링
                    <div className="moviePoster" key={index} onClick={() => handlePosterClick(movies[index].title)}>
                        <img className='moviePosterFrame'
                            src={posterUrl}
                            alt={movies[index].title}
                            width="70%"
                        />
                        <h4 className='movieName'>{movies[index].title}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCom;
