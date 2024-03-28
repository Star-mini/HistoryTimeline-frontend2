import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
                const shuffledMovies = movies.sort(() => Math.random() - 0.5); // 영화 순서를 랜덤하게 섞음
                const urls = await Promise.all(shuffledMovies.map(async (movie) => {
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
                        // 포스터 언어가 한국어인 경우에만 반환
                        if (detailResponse.data.original_language === 'ko') {
                            return posterUrl ? `https://image.tmdb.org/t/p/original${posterUrl}` : null;
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                }));
                setPosterUrls(urls.filter(url => url !== null));
            } catch (error) {
                console.error('Error fetching poster URLs:', error);
            }
        };

        fetchPosterUrls(); 
    }, [movies]); 

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
        onMovieSelect(title);
    };

    return (
        <div className='movieContainer'>
            <h3 className='movieTitle'>관련 영화</h3>

            <Slider {...sliderSettings} className="moviePosterSlide" >
                {posterUrls.map((posterUrl, index) => (
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
