import TimelineComponent from "../components/timeline/Timeline";
import "../styles/timeline/timeline.css"
import ScrollLoadingBox from "../components/timeline/ScrollLoadingBox";


// 타임라인 페이지
const Timeline = () => {
    return (
        <div>
            {/* 타임라인 컴포넌트 */}
            <TimelineComponent />
            {/* 로딩때만 보일 로딩 박스 */}
            <ScrollLoadingBox isLoading={true}/>
        </div>
    );
};

export default Timeline;