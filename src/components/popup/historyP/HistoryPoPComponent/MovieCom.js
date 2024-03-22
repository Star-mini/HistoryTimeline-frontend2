import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion, useScroll } from "framer-motion";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

const MovieCom = ({ movies }) => {
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
        <div className='row justify-content-center'>
            <h3 className='movieTitle'>관련 영화</h3>
            
            <Slider {...sliderSettings} className="moviePosterSlide">
                {movies.map((movie, index) => (
                    <div className="moviePoster" key={index}>
                        <Fade bottom delay={index * 500} >
                            <img className='moviePosterFrame'
                                src={movie.imageUrl}
                                width="70%"                            
                            />
                            <h4>{movie.title}</h4>
                        </Fade>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCom;
