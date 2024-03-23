import React from 'react';
import InsertHistory from '../components/admain/insert/InsertHistory';
import DeleteModal from '../components/admain/list/DeleteModal';
import ListBox from '../components/admain/list/ListBox';
import PageBar from '../components/admain/list/PageBar';
import AsideBar from '../components/admain/list/AsideBar';
import { useState, useEffect } from 'react';
import { cusomizedAxios as axios } from '../constants/customizedAxios';

const listOptions = [
    {
        id: 0,
        name: "역사"
    },
    {
        id: 1,
        name: "제보"
    }
]

// 관리자 리스트 페이지
const AdminList = () => {
    const [listId, setListId] = useState(0);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState();
    const [isVisible, setIsVisible] = useState(false); // 추가&수정 팝업창 보이기 여부
    const [postId, setPostId] = useState(); // 추가&수정할 History Id
    const [isVisibleDelete, setIsVisibleDelete] = useState(false); // 삭제 시 다시 물어보는 모달창
    const [deleteId, setDeleteId] = useState(); // 삭제할 History Id

    // 처음 데이터 fetch
    useEffect(() => {
        fetchData();
    }, []);

    // page가 바뀔 때마다 fetch
    useEffect(() => {
        fetchData();
    }, [page]);

    // listId 바뀌면 page reset
    useEffect(() => {
        setPage(0);
        fetchData();
    }, [listId]);

    const fetchData = async () => {
        if (listId === 0) fetchHistories();
        else if (listId === 1) fetchReports();
    }

    const fetchHistories = async () => {
        const { data } = await axios.get('/adminList/list', {
            params : {
                page : page,
            }
        })
        setItems(data.content);
        setMaxPage(data.totalPages);
    }

    const fetchReports = async () => {
        const { data } = await axios.get('/report/list', {
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
        if (listId === 0) {
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
        if (listId === 1) {
            
        }
    }
    return (
        <div className='admin-list'>
            {/* 리스트 선택 사이드바 */}
            <AsideBar listOptions={listOptions} setListId={setListId}/>
            {/* 리스트 컴포넌트 */}
            <div className='content'>
                <div className="list-container">
                { isVisible && <InsertHistory
                    postId={postId}
                    setPostId={setPostId}
                    setIsVisible={setIsVisible}
                />}
                {/* 삭제 확인 창 */}
                { isVisibleDelete &&
                    <DeleteModal
                        deleteId={deleteId}
                        setDeleteId={setDeleteId}
                        setIsVisibleDelete={setIsVisibleDelete}
                        onClickDelete={onClickDelete}
                    />
                }
                <div className="list-title">
                    <div>{listOptions.find((option) => option.id === listId).name} 관리 페이지</div>
                    {listId === 0 && <button onClick={() => onClickAdd()}>추가</button>}
                </div>
                <ListBox
                    listId={listId}
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
            </div>
            </div>
            
    );
};

export default AdminList;