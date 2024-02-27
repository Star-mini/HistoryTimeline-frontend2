import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion, useScroll } from "framer-motion";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Movie.css';

const MovieCom = ({ movies }) => {
    const sliderSettings = {
        dots: false,
        infinite: true ,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    
    return (
        <div className='row justify-content-center'>
            {/* 슬라이더 */}
            <Slider {...sliderSettings} className="container2">
                {movies.map((movie, index) => (
                    <div className="col-md-4" key={index}>
                        <Fade bottom delay={index * 500}>
                            <img className='MF'
                                src={movie.imageUrl}
                                width="30%"
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