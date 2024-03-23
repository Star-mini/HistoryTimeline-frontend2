import React from 'react';
import {cusomizedAxios as axios} from "../../../constants/customizedAxios";

const DeleteModal = ({ onClickDelete, setIsVisibleDelete }) => {
    // 취소 시 모달 창 닫음
    const onClickCancel = () => {
        setIsVisibleDelete(false);
    }
    return (
        <div className="modal-background">
            <div className="delete-modal">
                <div className="delete-modal-text">정말 삭제하시겠습니까?</div>
                <div className="delete-modal-buttons">
                    <button className="delete-modal-button"
                            onClick={() => onClickDelete()}>삭제</button>
                    <button className="delete-modal-button"
                            onClick={() => onClickCancel()}>취소</button>
                </div>
            </div>
        </div>

    );
};

export default DeleteModal;