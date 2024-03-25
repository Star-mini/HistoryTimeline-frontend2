import React from 'react';

const AsideBar = ({ listOptions, setListId }) => {

    const onClickButton = (id) => {
        setListId(id);
    }
    
    return (
        <aside className="list-select-bar">
            {listOptions.map((option) => {
                return <button className="list-select-button"
                    onClick={() => onClickButton(option.id)}>{option.name}</button>
            })}
        </aside>
    );
};

export default AsideBar;