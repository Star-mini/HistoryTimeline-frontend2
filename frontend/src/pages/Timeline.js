import TimelineComponent from "../components/Timeline";
import '../css/timeline.css'
import ScrollLoadingBox from "../components/ScrollLoadingBox";


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