import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion, useScroll } from "framer-motion";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Movie.css';

const Movie = () => {
    const sliderSettings = {
        dots: false,
        infinite: true ,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    
      return (
        <div classname='row justify-content-center'>
          {/* 슬라이더 */}
          <Slider {...sliderSettings} className="container2">
            <div className="col-md-4">
              <Fade bottom delay={0}>
                <img className='MF'
                  src="https://img.movist.com/?img=/x00/05/96/41_p1.jpg"
                  width="30%"
                />
                <h4>서울의 봄 (2023)</h4>
              </Fade>
            </div>
            <div className="col-md-4">
              <Fade bottom delay={500}>
                <img className='MF'
                  src="https://img.movist.com/?img=/x00/05/24/83_p1.jpg"
                  width="30%"
                />
                <h4>남산의 부장들 (2020)</h4>
              </Fade>
            </div>
            <div className="col-md-4">
              <Fade bottom delay={1000}>
                 <img className='MF'
                  src="https://img.movist.com/?img=/x00/04/81/75_p1.jpg"
                  width="30%"
                />
                <h4>택시운전사 (2017)</h4>
              </Fade>
            </div>
            <div className="col-md-4" >
              <Fade bottom delay={1000}>
                <img className='MF'
                  src="https://img.movist.com/?img=/x00/04/93/47_p1.jpg"
                  width="30%"
                />
                <h4>1987 (2017)</h4>                
              </Fade>
            </div>
          </Slider>
        </div>
    );
};

export default Movie;