import React from 'react';
import '../css/timelineLabel.css';
import DropDown from './DropDown';

// 연도, 나라를 선택할 바
// 선택한 연도와 나라는 타임라인 전체에 영향을 주므로 타임라인에서 받는다.
const TimelineLabel = ({
    selectedCountry,
    setSelectedCountry,
    countries, 
    selectedYear,
    setSelectedYear,
    years
}) => {
    return (
        <div className='timeline-labels'>
            {/* 한국 고정 */}
            <div className='korea-label label'>한국</div>
            {/* 연도 선택 드롭다운
                스크롤 이동 시 연도 바뀌어야만.
                선택 시 연도 선택과 함께 페이지 스크롤 리셋
            */}
            <DropDown
                defaultLabel={null}
                valueList={years} 
                value={selectedYear} 
                setValue={setSelectedYear}
            />
            {/* 나라 선택 드롭다운
                선택 시 나라 선택과 함께 페이지 스크롤 리셋?
            */}
            <DropDown
                defaultLabel="나라 선택"
                valueList={countries} 
                value={selectedCountry} 
                setValue={setSelectedCountry}
            />
        </div>
    );
};

export default TimelineLabel;