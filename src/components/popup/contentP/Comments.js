import React, { useState, useEffect } from "react";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import "../../../styles/contents/comments.css";

//댓글을 표시하는 컴포넌트
function Comments({ contentId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(''); // 댓글 입력 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10); // 페이지 당 댓글 수

// 댓글을 불러오는 useEffect
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/comments?contentId=${contentId}`);
        setComments(response.data);
      } catch (error) {
        console.error("댓글을 불러오는데 실패했습니다:", error);
      }
    };
  
    fetchComments();
  }, [contentId]);

  // 댓글 제출 핸들러
  const handleCommentSubmit = async () => {
    try {
      // contentId, note, userId를 사용하여 URL을 구성
      const url = `http://localhost:8081/comments/save?contentId=${encodeURIComponent(contentId)}&note=${encodeURIComponent(newComment)}&userId=1`;
      // axios.post의 첫 번째 인자로 완성된 URL을 사용
      const response = await axios.post(url);
      // 댓글 목록을 업데이트
      setComments([...comments, response.data]);
      setNewComment(''); // 댓글 입력을 초기화
    } catch (error) {
      console.error("댓글을 추가하는데 실패했습니다:", error);
    }
  };

  // 현재 페이지의 댓글 계산
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // 페이지 번호 클릭 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 페이지 번호를 위한 버튼 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="comment-section">
      <h2 className="section-title">댓글</h2>
      <div className="comment-form">
        <textarea
          className="textarea"
          placeholder="댓글을 입력하세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="submit-button" onClick={handleCommentSubmit}>
          댓글 작성
        </button>
      </div>
      <div className="comment-list">
        {currentComments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-header">
              <span className="comment-author">{comment.userId}</span>
            </div>
            <p className="comment-body">{comment.note}</p>
          </div>
        ))}
      </div>
      <nav className="page-numbers">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className="page-number">
            {number}
          </button>
        ))}
      </nav>
    </section>
  );
}

export default Comments;
