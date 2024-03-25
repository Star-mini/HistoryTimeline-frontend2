import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./History.css";


// 스크롤 이벤트 처리
const AnimatedText = ({ children }) => {
    const { scrollYProgress } = useScroll();
    
    return (
        <motion.div style={{ opacity: scrollYProgress }}>
            {children}
        </motion.div>
    );
};

// 역사 정보 컴포넌트 (데이터)
const HistoryCom = ({ imgUrl, title, content, detail}) => {
    // 이미지 URL을 배열로 변환
    const images = Array.isArray(imgUrl) ? imgUrl : [imgUrl];
    // 역사 이미지 슬라이더 설정
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

    const handleImageClick = () => {
        
    };


    return (
        <div>
            <Navbar className='hispopnav'>
                <Container>
                    <Nav className="hispopnavlink">
                        <Nav.Link className="hispopnavlink1" href="#">상세설명</Nav.Link>
                        <Nav.Link className="hispopnavlink2" href="#" onClick={handleImageClick}>사진</Nav.Link>
                        <Nav.Link className="hispopnavlink3" href="#">youtube</Nav.Link>
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
                    <div className="historyMemo" >
                        {content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="historyMemo2">
                        {detail && (
                            <div>                        
                                {detail.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HistoryCom;
