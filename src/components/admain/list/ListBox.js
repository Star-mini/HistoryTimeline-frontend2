import React from 'react';
import '../../../styles/admin/adminList.css'

// 리스트 아이템 나열 박스
const ListBox = ({ items, setItems }) => {
    return (
        <div className="list-box">
            <div className="list-item">test1</div>
            <div className="list-item">test2</div>
            <div className="list-item">test3</div>
            <div className="list-item">test4</div>
            <div className="list-item">test5</div>
            <div className="list-item">test6</div>
            <div className="list-item">test7</div>
            <div className="list-item">test8</div>
            <div className="list-item">test9</div>
            <div className="list-item">test10</div>
            <div className="list-item">test1</div>
            <div className="list-item">test2</div>
            <div className="list-item">test3</div>
            <div className="list-item">test4</div>
            <div className="list-item">test5</div>
        </div>
    );
};

export default ListBox;