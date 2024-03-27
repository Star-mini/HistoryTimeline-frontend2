import React from 'react';
import '../../../styles/admin/adminList.css'

// 리스트 아이템 나열 박스
const ListBox = ({ listId, items,setIsVisible, setPostId, setIsVisibleDelete, setDeleteId, setIsVisibleReport, setReportItem }) => {

    const onClickReport = (report) => {
        setReportItem(report);
        setIsVisibleReport(true);
    }
    const onClickEditButton = (historyId) => {
        setPostId(historyId);
        setIsVisible(true);
    }

    // 삭제 버튼 클릭 시 삭제 아이디를 저장하고 삭제 확인 창을 띄운다.
    const onClickDeleteButton = (id) => {
        setDeleteId(id);
        setIsVisibleDelete(true);
    }

    return (
        <div className="list-box">
            {
                listId === 1 &&
                items.map((item, index) => {
                    const length = item.report? item.report.length : 0;
                    const preview = length > 10 ? item.report.substring(0, 50) + "..." : item.report;
                    return (
                        <div className="list-item">
                            <div className="list-item-text">
                                <div className="list-item-index"><b>{index + 1}</b></div>
                                <div className="list-item-content" onClick={() => onClickReport(item)}>
                                    {preview}
                                </div>
                            </div>
                            <div className="list-item-buttons">
                                <button
                                    className="delete-button"
                                    onClick={() => onClickDeleteButton(item.historyReportId)}
                                >삭제</button>
                            </div>
                        </div>
                    )
                })
            }
            {listId === 0 && items.map((item, index) => {
                    return (
                        <div className="list-item">
                            <div className="list-item-text">
                                <div className="list-item-index"><b>{index + 1}</b></div>
                                <div className="list-item-date">{item.year}
                                    {item.month !== null && <p>.{item.month}</p>}
                                    {item.day !== null && <p>.{item.day}</p>}</div>
                                <div className="list-item-content">{item.title !== null ? item.title : item.brief}</div>
                            </div>
                            <div className="list-item-buttons">
                                <button
                                    className="edit-button"
                                    onClick={() => onClickEditButton(item.historyId)}
                                >수정</button>
                                <button
                                    className="delete-button"
                                    onClick={() => onClickDeleteButton(item.historyId)}
                                >삭제</button>
                            </div>
                        </div>
                    )
            })}
        </div>
    );
};

export default ListBox;