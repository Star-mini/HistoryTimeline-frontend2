import React, { useState } from "react"; // React 라이브러리와 useState 훅을 임포트
import "../../../styles/contents/comments.css"; // 댓글 관련 스타일을 정의한 CSS 파일을 임포트

function Comments() {
  const [comments, setComments] = useState([]); // 댓글 목록을 저장하는 상태 변수, 초기값은 빈 배열입니다.
  const [inputValue, setInputValue] = useState(""); // 입력 필드의 현재 값을 저장하는 상태 변수, 초기값은 빈 문자열입니다.
  const [userNickname, setUserNickname] = useState("user1"); // 사용자 닉네임을 저장하는 상태 변수, 초기값은 'user1'입니다.

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 입력 필드가 변경될 때마다 이 함수가 호출되어 inputValue 상태를 업데이트합니다.
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작을 방지합니다.
    const newComment = { nickname: userNickname, text: inputValue }; // 사용자 닉네임과 댓글 내용을 객체로 저장합니다.
    setComments([newComment, ...comments]); // 새로운 댓글 객체를 배열의 맨 앞에 추가합니다.
    setInputValue(""); // 입력 필드를 초기화합니다.
  };
  
  // 최신 5개의 댓글만 선택하여 렌더링합니다.
  const recentComments = comments.slice(Math.max(comments.length - 5, 0));

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="댓글을 입력하세요"
          rows="3"
          className="textarea textarea-custom"
        />
        <div className="button-container">
          <br />
          <button type="submit" className="button">
            댓글 달기
          </button>
        </div>
      </form>
      <div className="comments-container">
        {recentComments.length > 0 ? (
          <ul className="comments-list">
            {recentComments.map((comment, index) => (
              <li key={index} className="comment-item">
                {`${comment.nickname}: ${comment.text}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
