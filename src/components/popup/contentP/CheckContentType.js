import { cusomizedAxios as axios } from "../../../constants/customizedAxios";

// 컨텐츠 타입을 확인하는 함수
export const CheckContentType = async (contentId, apiKey) => {
  try {
    // 영화 정보를 먼저 확인.
    await axios.get(`https://api.themoviedb.org/3/movie/${contentId}?api_key=${apiKey}&language=ko-KR`);
    // 여기까지 오면 영화 정보가 있는 것이므로, 'movie'를 반환
    return 'movie'; // 영화
  } catch (movieError) {
    // 영화 정보가 없을 경우, 드라마 정보를 확인
    try {
      await axios.get(`https://api.themoviedb.org/3/tv/${contentId}?api_key=${apiKey}&language=ko-KR`);
      // 여기까지 오면 드라마 정보가 있는 것이므로, 'tv'를 반환
      return 'tv'; // 드라마
    } catch (tvError) {
      // 드라마 정보도 없을 경우, 에러를 반환
      console.error("Content 타입 확인 중 에러 발생:", tvError);
      throw new Error("Content 타입을 확인할 수 없습니다.");
    }
  }
};
