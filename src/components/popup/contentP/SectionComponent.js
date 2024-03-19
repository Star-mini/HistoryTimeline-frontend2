import React from 'react';
import '../../../styles/contents/sectionComponent.css';

const SectionComponent = () => {
  return (
    <section className="container">
      <div className="content">
        <img src="티빙.png" alt="Logo" className="logo"/>
        <img src="와챠.png" alt="Logo" className="logo"/>
        <img src="와우.png" alt="Logo" className="logo"/>
        <img src="유튜브.png" alt="Logo" className="logo"/>
        <span className="text">원하는곳에서 시청하세요</span>
      </div>
    </section>
  );
}

export default SectionComponent;
