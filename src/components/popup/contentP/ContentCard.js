import React, { useEffect, useState } from "react";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import Content from "./Content";
import "../../../styles/contents/contentCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//슬라이더 설정
const settings = {
  dots: true,
  infinite: true,
  speed: 700, // 슬라이드 전환 속도
  slidesToShow: 3,
  slidesToScroll: 2,  
  autoplay: true,
  autoplaySpeed: 3000, // 자동 전환 속도
  cssEase: 'ease-in-out', // 부드러운 전환 효과를 위한 속도 곡선 설정
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
      },
    },
  ],
};


//컨텐츠 카드 컴포넌트
const ContentCard = ({ contentId, onContentSelect }) => {
  const [contents, setContents] = useState([]);
  const [mouseDownPos, setMouseDownPos] = useState({ x: null, y: null });

  //컴포넌트가 마운트될 때 실행
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    // 영화의 키워드를 가져오는 API 호출
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${contentId}/keywords?api_key=${apiKey}`
      )
      .then((keywordsResponse) => {
        const keywords = keywordsResponse.data.keywords;
        if (keywords.length > 0) {
          // 키워드 목록 중에서 랜덤으로 하나 선택
          const randomKeyword =
            keywords[Math.floor(Math.random() * keywords.length)].id;
          // 선택된 키워드를 사용하여 관련 영화 목록 가져오기
          return axios.get(
            `https://api.themoviedb.org/3/keyword/${randomKeyword}/movies?api_key=${apiKey}&language=ko-KR`
          );
        } else {
          throw new Error("No keywords found for this movie.");
        }
      })
      // 관련 영화 목록을 가져오는 API 호출
      .then((moviesResponse) => {
        const relatedMovies = moviesResponse.data.results;
        setContents(
          relatedMovies.map((movie) => ({
            id: movie.id,
            title: movie.title,
            imgUrl: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/컨텐츠기본이미지.jpg",
          }))
        );
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [contentId]);

  //마우스 다운 이벤트 핸들러
  const handleMouseDown = (e) => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };
  
//컨텐츠 타입 확인 후 페이지 이동
  const checkContentTypeAndPost = async (content, mouseUpEvent) => {
    if (
      Math.abs(mouseDownPos.x - mouseUpEvent.clientX) > 5 ||
      Math.abs(mouseDownPos.y - mouseUpEvent.clientY) > 5
    ) {
      // 드래그로 간주, 클릭 이벤트 무시
      return;
    }
    // 저장 작업의 성공 여부와 관계없이 페이지 이동
    onContentSelect(content.title);
  };

  return (
    <div onMouseDown={handleMouseDown}>
      <h3 className="video-title">비슷한 영화 추천</h3>
      <Slider {...settings}>
        {contents.map((content, index) => (
          <div
            key={index}
            onMouseUp={(e) => checkContentTypeAndPost(content, e)}
          >
            <Content name={content.title} src={content.imgUrl} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContentCard;
