import TimelineComponent from "../components/timeline/Timeline";
import "../styles/timeline/timeline.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import cookie from "react-cookies";
import {useEffect} from "react";
import "../styles/timeline/timeline.css"


// 타임라인 페이지
const Timeline = () => {
    useEffect(() => {
        cookie.save("previousUrl", window.location.href);
    }, [])

    return (
        <div className="timeline-page">
            <Header background="linear-gradient(276deg, rgb(209, 202, 252), rgb(255 149 125))"/>
            {/* 타임라인 컴포넌트 */}
            <TimelineComponent />
            <Footer />
        </div>
    );
};

export default Timeline;