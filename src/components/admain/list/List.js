import React, {useState} from 'react';
import SelectBar from "./SelectBar";
import ListBox from "./ListBox";
import '../../../styles/admin/adminList.css'
import PageBar from "./PageBar";

// 선택 바부터 페이지 바까지 포함하는 리스트 컴포넌트
const List = () => {
    // 리스트 옵션
    const listOption = [
        {
            id: 0,
            name: "역사"
        },
        {
            id: 1,
            name: "콘텐츠"
        }
    ];

    const [listId, setListId] = useState(0); // 리스트 옵션
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    return (
        <div className="list-container">
            <SelectBar
                list={listOption}
                listId={listId}
                setListId={setListId}
            />
            <ListBox
                items={items}
                setItems={setItems}
            />
            <PageBar
                page={page}
                setPage={setPage}
                maxPage={13}
            />
        </div>
    );
};

export default List;