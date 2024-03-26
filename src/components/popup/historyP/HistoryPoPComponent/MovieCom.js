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
const MovieCom = ({ movies }) => {
    // 영화 포스터 이미지 슬라이더 설정
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
        cssEase: 'ease-out',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='movieContainer'>
            <h3 className='movieTitle'>관련 영화</h3>
            
            <Slider {...sliderSettings} className="moviePosterSlide" >               
                {movies && movies.map((movie, index) => (  // 영화 데이터 맵핑 후 포스터 랜더링
                    <div className="moviePoster" key={index}>
                        <Fade bottom delay={index * 500} > 
                            <img className='moviePosterFrame'
                                src={movie.imageUrl}
                                width="70%"                            
                            />
                            <h4 className='movieName'>{movie.title}</h4>
                        </Fade>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCom;
