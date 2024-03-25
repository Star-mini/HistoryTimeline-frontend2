import React from 'react';

const ReportModal = ({item, setReportItem, setIsVisibleReport}) => {

    const onClickCloseButton = () => {
        setIsVisibleReport(false);
        setReportItem(null);
    }

    return (
        <div className="modal-background">
            <div className="report-modal">
                <p className="report-content">{item.report}</p>
                <button className="close-button"
                        onClick={() => onClickCloseButton()}>닫기</button>
            </div>
        </div>
    );
};

export default ReportModal;