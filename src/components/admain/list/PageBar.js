import React from 'react';
import '../../../styles/admin/adminList.css';

// 페이지 상태 + 선택 바
const PageBar = ({ page, setPage, maxPage }) => {
    // page 범위 안에 있을 경우 page set 실행
    const onClickPageOption = (pageOption) => {
        if (pageOption > 0 && pageOption <= maxPage) setPage(pageOption);
    }
    return (
        <div className="page-bar">
            <div className="page-option"
                 style={page - 2 > 0 ? {opacity: 1} : {opacity: 0}}
                onClick={() => onClickPageOption(page - 2)}>
                {page - 2}
            </div>
            <div className="page-option"
                 style={page - 1 > 0 ? {opacity: 1} : {opacity: 0}}
                 onClick={() => onClickPageOption(page - 1)}>
                {page - 1}
            </div>
            <div className="page-option current">
                {page}
            </div>
            <div className="page-option"
                 style={page + 1 <= maxPage ? {opacity: 1} : {opacity: 0}}
                 onClick={() => onClickPageOption(page + 1)}>
                {page + 1}
            </div>
            <div className="page-option"
                 style={page + 2 <= maxPage ? {opacity: 1} : {opacity: 0}}
                 onClick={() => onClickPageOption(page + 2)}>
                {page + 2}
            </div>
        </div>
    );
};

export default PageBar;