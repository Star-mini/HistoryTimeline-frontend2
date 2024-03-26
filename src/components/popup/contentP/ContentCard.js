import React, { useEffect, useState } from "react";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import Content from "./Content";
import "../../../styles/contents/contentCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ContentCard = ({ contentId, onContentSelect }) => {
  const [contents, setContents] = useState([]);
  const [mouseDownPos, setMouseDownPos] = useState({ x: null, y: null });

  useEffect(() => {
    const apiKey = "0decfffb82411d82c9af75fdfaba9b34";
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

  const handleMouseDown = (e) => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

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
