import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import './History.css';

const HistoryCom = ({ imageUrl, content }) => {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <div className="main-bg">
                <div className="wrapper">
                    <img src={imageUrl} width="25%" />
                    <div className="memo">
                        <div className="wrap">
                            <motion.div className="bar" style={{ scaleX: scrollYProgress }}>
                                {content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCom;
