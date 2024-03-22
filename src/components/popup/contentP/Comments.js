import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../styles/contents/comments.css";

function Comments() {
  // 댓글을 위한 상태
  const [comments, setComments] = useState([]);
  // 입력된 댓글 텍스트를 위한 상태
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // 서버에서 댓글 데이터를 불러오는 함수
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/comments?contentId=1');
        setComments(response.data); // 서버 응답으로 받은 댓글 데이터로 상태 업데이트
      } catch (error) {
        console.error("댓글을 불러오는데 실패했습니다:", error);
      }
    };

    fetchComments();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 댓글 작성 핸들러
  const handleCommentSubmit = () => {
    if (!newComment.trim()) return; // 빈 댓글은 추가하지 않음
    const updatedComments = [...comments, { author: "익명", body: newComment }];
    setComments(updatedComments);
    setNewComment(''); // 입력 필드 초기화
  };

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
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-header">
              <span className="comment-author">{comment.userId}</span>
            </div>
            <p className="comment-body">
              {comment.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
