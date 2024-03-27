import TimelineComponent from "../components/timeline/Timeline";
import "../styles/timeline/timeline.css"
import Header from "../components/Header";
import Footer from "../components/Footer";


// 타임라인 페이지
const Timeline = () => {
    return (
        <div>
            <Header />
            {/* 타임라인 컴포넌트 */}
            <TimelineComponent />
            <Footer />
        </div>
    );
};

export default Timeline;