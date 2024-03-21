import React, {useState} from 'react';
import {cusomizedAxios as axios} from "../constants/customizedAxios";

// text로 제보를 받는 페이지
const InsertReport = () => {
    const [report, setReport] = useState("");

    // 입력할 때마다 report에 저장
    const handleInputChange = (event) => {
        setReport(event.target.value); // 입력값을 useState 변수에 저장
    };

    // 취소 시 모달 창 닫음
    const onClickCancelButton = () => {
        window.history.back();
        setReport("");
    }

    // 제출 시 POST 보내기
    const onClickReportButton = async () => {
        const confirmed = window.confirm("제보하시겠습니까?");
        if (confirmed) {
            try {
                await axios.post(`/report/save`, {
                    userId: 1, // login 인증 후 JWT에서 userId값을 가져와야함.
                    report: report
                });
                window.history.back();
                setReport("");
            } catch (error) {
                console.error("Error saving data:", error);
                window.confirm("다시한번 시도해보세요.");
            }
        } else {
            window.confirm("다시한번 시도해보세요.");
        }
    }

    return (
        <div className="insert-report-background">
            <div className="insert-report-container">
                <span className="insert-report-title">제보</span>
                <input type="text" value={report} onChange={handleInputChange}/>
                <button className="button cancel-button"
                    onClick={() => onClickCancelButton()}>취소</button>
                <button className="button report-button"
                    onClick={() => onClickReportButton()}>제출</button>
            </div>
        </div>
    );
};

export default InsertReport;