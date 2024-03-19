import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Comments from './Comments';
import MovieCard from './MovieCard';
import Description from './Description';
import '../../../styles/contents/ContentsPopup.css'// ContentsPopup.css 파일을 임포트합니다.


function ContentsPopup() {
  return (
    <div className="ContentsPopup pink-background font-sans">
      <div className="container mx-auto">
        <Description />
        <div>
          <MovieCard />
        </div>
        <Comments />
      </div>  
    </div>
  );
}

export default ContentsPopup;
