import React, { useState } from 'react';
import '../../styles/timeline/dropdown.css';

const DropDown = ({defaultLabel, valueList, value, setValue}) => {
    // dropdown의 select option을 보여줄 지 말지의 state
    const [isVisible, setIsVisible] = useState(false);

    // dropdown을 선택하면 invert
    const clickDropDown = () => {
        setIsVisible(!isVisible)
    }

    // option 클릭하면 value를 option으로 바꾸고 option 닫기
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