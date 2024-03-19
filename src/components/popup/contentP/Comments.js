import React, { useState } from 'react';
import "../../../styles/contents/comments.css";

function Comments() {
  // 댓글을 위한 상태
  const [comments, setComments] = useState([
    { author: "홍길동", body: "와, 정말 대단한 시리즈였어요! 마지막까지 놓칠 수 없는 전개..." },
    { author: "이순신", body: "시즌 3는 언제 나오나요? 더 보고 싶어요!" }
  ]);
  // 입력된 댓글 텍스트를 위한 상태
  const [newComment, setNewComment] = useState('');

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
              <span className="comment-author">{comment.author}</span>
            </div>
            <p className="comment-body">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
