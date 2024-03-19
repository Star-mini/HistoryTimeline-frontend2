// Detail.js
import React, { useState } from 'react';
import '../../../styles/contents/detail.css';

const Detail = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <section className="detail-section">
        <h3 className="detail-title">콘텐츠 설명</h3>
        <div id="detailContent" className={`detail-content ${isExpanded ? 'detail-expanded' : 'detail-collapsed'}`}>
          <p>
            {/* 콘텐츠 내용 */}
            크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램크리에이터 킴이안, 이안스다양한 이유로 이별한 커플들이 한 장에 모여 지나간 연애를 되짚고 새로운 연인을 만족하며 자신만의 사랑을 찾아가는 여행 리얼리티 프로그램
          </p>
        </div>
        <button id="detailToggle" className="detail-button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '접기 ▲' : '더보기 ▼'}
        </button>
      </section>
    );
  };
  
  export default Detail;
