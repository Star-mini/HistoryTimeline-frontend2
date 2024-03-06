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


const HistoryCom = ({ imageUrl, content }) => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Navbar className='nav' bg="dark" variant="dark" fixed="top">
                <Container>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">상세설명</Nav.Link>
                        <Nav.Link href="#">사진</Nav.Link>
                        <Nav.Link href="#">youtube</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg">
                <div className="wrapper">
                    <Slider className='photo' {...sliderSettings}>
                        {imageUrl.map((image, index) => (
                            <div key={index} className="history-slide">
                                <motion.img 
                                    src={image} 
                                    alt="History" 
                                    className="history-image" 
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="memo">
                        <div className="wrap">
                            {content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default HistoryCom;
