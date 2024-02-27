import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css'; // Custom CSS
import Comments from './Comments';
import Cart from './Cart';
import Description from './Description';
import './copy.css'; // copy.css 파일을 임포트합니다.


function Copy() {
  return (
    <div className="Copy pink-background font-sans">
      <div className="container mx-auto">
        <Description />
        <div style={{ marginTop: '20px' }}>
          <Cart />
        </div>
        <Comments />
      </div>  
    </div>
  );
}

export default Copy;
