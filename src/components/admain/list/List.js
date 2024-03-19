import React, {useEffect, useState} from 'react';
import ListBox from "./ListBox";
import '../../../styles/admin/adminList.css'
import PageBar from "./PageBar";
import {cusomizedAxios as axios} from "../../../constants/customizedAxios";
import DeleteModal from "./DeleteModal";

// 선택 바부터 페이지 바까지 포함하는 리스트 컴포넌트
const List = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState();
    const [isVisible, setIsVisible] = useState(false); // 추가&수정 팝업창 보이기 여부
    const [postId, setPostId] = useState(); // 추가&수정할 History Id
    const [isVisibleDelete, setIsVisibleDelete] = useState(false); // 삭제 시 다시 물어보는 모달창
    const [deleteId, setDeleteId] = useState(); // 삭제할 History Id

    // 처음 데이터 fetch
    useEffect(() => {
        fetchHistories();
    }, []);

    // page가 바뀔 때마다 fetch
    useEffect(() => {
        fetchHistories();
    }, [page]);

    const fetchHistories = async () => {
        const { data } = await axios.get('/adminList/list', {
            params : {
                page : page,
            }
        })
        setItems(data.content);
        setMaxPage(data.totalPages);
    }

    const onClickAdd = async () => {
        setIsVisible(true);
    }

    // deleteId로 History 삭제
    // DeleteModal에 전달
    const onClickDelete = () => {
        axios.delete('/adminList/delete', {
            params: {
                historyId: deleteId,
            }
        }).then(() => {
            setIsVisibleDelete(false);
            setDeleteId();
            fetchHistories();
        })
    }

    return (
        <div className="list-container">
            { isVisible && <div style={{
                width: '400px', height: '400px', position: 'fixed',top: '20%', left: '50%', border: '3px solid black', transform: 'translate(-50%, 0)'
            }}>컴포넌트 들어갈 자리</div>}
            { isVisibleDelete &&
                <DeleteModal
                    deleteId={deleteId}
                    setDeleteId={setDeleteId}
                    setIsVisibleDelete={setIsVisibleDelete}
                    onClickDelete={onClickDelete}
                />
            }
            <div className="list-title">
                <div>역사 관리 페이지</div>
                <button onClick={() => onClickAdd()}>추가</button>
            </div>
            <ListBox
                items={items}
                setIsVisible={setIsVisible}
                setPostId={setPostId}
                setIsVisibleDelete={setIsVisibleDelete}
                setDeleteId={setDeleteId}
            />
            <PageBar
                page={page}
                setPage={setPage}
                maxPage={maxPage}
            />
        </div>
    );
};

export default List;