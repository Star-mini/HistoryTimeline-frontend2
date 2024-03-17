import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./History.css";

const AnimatedText = ({ children }) => {
    const { scrollYProgress } = useScroll();
    
    return (
        <motion.div style={{ opacity: scrollYProgress }}>
            {children}
        </motion.div>
    );
};

const HistoryCom = ({ imageUrl, title, content }) => {
    // 이미지 URL을 배열로 변환
    const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
        fade: true,
        cssEase: 'linear'
    };

    return (
        <div>
            <Navbar className='hispopnav'>
                <Container>
                    <Nav className="hispopnavlink">
                        <Nav.Link href="#">상세설명</Nav.Link>
                        <Nav.Link href="/map">사진</Nav.Link>
                        <Nav.Link href="#">youtube</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="historyPopMain">
                <div className="historyWiki">
                    <Slider className='historyPhoto' {...sliderSettings} dots={true}>
                        {images.map((image, index) => (
                            <div key={index} className="historyPhotoSlide">
                                <motion.img 
                                    src={image} 
                                    alt="History" 
                                    className="historyImage" 
                                />
                            </div>
                        ))}
                    </Slider>            
                    <h1 className='historyTitle'>{title}</h1>
                    <div className="historyMemo">
                        {content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCom;
