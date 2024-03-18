import React from 'react';
import '../../../styles/admin/adminList.css'

const SelectBar = ({ list, listId, setListId }) => {
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