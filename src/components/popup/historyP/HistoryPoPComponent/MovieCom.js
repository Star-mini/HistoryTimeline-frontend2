import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movie.css";
import Fade from 'react-reveal/Fade';

// 슬라이더 화살표 추가용 컴포넌트 
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );
}

// 영화 포스터용 컴포넌트
const MovieCom = ({ movies, onMovieSelect }) => {
    // 영화 포스터 이미지 슬라이더 설정
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
                {movies && movies.map((movie, index) => (  // 영화 데이터 맵핑 후 포스터 랜더링
                    <div className="moviePoster" key={index} onClick={() => handlePosterClick(movie.title)}>
                        <img className='moviePosterFrame'
                            src={movie.imageUrl}
                            alt={movie.title}
                            width="70%"                            
                        />
                        <h4 className='movieName'>{movie.title}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCom;