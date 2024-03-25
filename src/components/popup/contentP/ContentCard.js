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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${contentId}/similar?api_key=${apiKey}&language=ko-KR`
      )
      .then((response) => {
        const similarMovies = response.data.results;
        setContents(
          similarMovies.map((movie) => ({
            id: movie.id, // 컨텐츠의 ID도 저장하여 추후 사용합니다.
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
    if (Math.abs(mouseDownPos.x - mouseUpEvent.clientX) > 5 || Math.abs(mouseDownPos.y - mouseUpEvent.clientY) > 5) {
        // 드래그로 간주, 클릭 이벤트 무시
        return;
    }

    // 컨텐츠가 영화인지 드라마인지 확인하는 API 요청
    const apiKey = "0decfffb82411d82c9af75fdfaba9b34";
    let contentType = 0; // 기본적으로 영화로 가정.

    // 영화 정보 확인 시도
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/${content.id}?api_key=${apiKey}&language=ko-KR`);
        // 성공 시 영화로 확인되었으므로 별도의 처리는 필요 없음.
    } catch (movieError) {
        // 영화 정보가 없을 경우 드라마 정보를 확인
        try {
            await axios.get(`https://api.themoviedb.org/3/tv/${content.id}?api_key=${apiKey}&language=ko-KR`);
            contentType = 1; // 드라마로 설정
        } catch (tvError) {
            console.error("Content 타입 확인 중 에러 발생:", tvError);
            // 에러가 발생해도 아래의 페이지 이동 로직을 실행하기 위해 여기서 return을 사용하지 않습니다.
        }
    }

    // 서버로 저장 시도.
    try {
        const response = await axios.post("/ContentsPopup", {
            title: content.title,
            imgUrl: content.imgUrl,
            contentType: contentType,
        });
        console.log("저장된 컨텐츠:", response.data);
    } catch (error) {
        console.error("Content 저장 중 에러 발생:", error);
    } finally {
        // 저장 작업의 성공 여부와 관계없이 페이지 이동
        onContentSelect(content.title);
    }
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
