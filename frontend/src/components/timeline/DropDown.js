import React, { useState } from 'react';
import '../css/dropdown.css';

const DropDown = ({defaultLabel, valueList, value, setValue}) => {
    const [isVisible, setIsVisible] = useState(false);

    const clickDropDown = () => {
        setIsVisible(!isVisible)
    }

    const clickDropDownOption = (option) => {
        setIsVisible(false);
        setValue(option);
    }

    return (
        <div
            className='select-label label'
            onClick={() => clickDropDown()}
            >{isVisible ? '▲' : '▼'}&nbsp;
             {value ? value.name : defaultLabel}
             {
                isVisible &&
                <ul className='select-dropdown'>
                    {
                        defaultLabel &&
                            <li
                            className='select-dropdown-option'
                            onClick={() => clickDropDownOption(null)}
                            >-{defaultLabel}-</li>
                    }
                    {valueList.map((val) => {
                        return (
                        <li
                            className='select-dropdown-option'
                            onClick={() => clickDropDownOption(val)}
                            >{val.name}</li>
                        )
                    })}
                </ul>
            }
             </div>
    );
};

export default DropDown;