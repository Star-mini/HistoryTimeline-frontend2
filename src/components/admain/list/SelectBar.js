import React from 'react';
import '../../../styles/admin/adminList.css'

// 리스트 옵션 선택 바
const SelectBar = ({ list, listId, setListId }) => {
    // 옵션 클릭 시 listId set
    const onClickOption = (id) => {
        setListId(id);
    }

    return (
        <div className="select-bar">
            { list.map((listOption) => {
                return (
                    <div className={`select-bar-option${listOption.id === listId ? '-checked' : ''}`}
                        onClick={() => onClickOption(listOption.id)}>
                        {listOption.name}
                    </div>
                )
            })}
        </div>
    );
};

export default SelectBar;