import React, {useState} from 'react';
import SelectBar from "./SelectBar";
import ListBox from "./ListBox";
import '../../../styles/admin/adminList.css'
import PageBar from "./PageBar";

const List = () => {
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

    const [listId, setListId] = useState(0);
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