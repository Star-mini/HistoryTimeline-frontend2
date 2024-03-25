import React, { useState, useEffect } from 'react';
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import { CheckContentType } from './CheckContentType';

const API_KEY = '0decfffb82411d82c9af75fdfaba9b34';

function FetchMovieID({ movieTitle, onMovieIdFetched }) {
    const [contentId, setContentId] = useState('');
    const [error, setError] = useState('');
    const [contentType, setContentType] = useState(''); // 컨텐츠 타입을 저장할 상태 추가

    useEffect(() => {
        const fetchContentId = async () => {
            if (!movieTitle) return;

            try {
                // 영화 검색
                let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`;
                let response = await axios.get(url);
                let contents = response.data.results;

                if (contents.length === 0) {
                    // TV 시리즈 검색
                    url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`;
                    response = await axios.get(url);
                    contents = response.data.results;
                }

                if (contents.length > 0) {
                    const id = contents[0].id;
                    setContentId(id);
                    // 컨텐츠 타입 확인
                    const type = await CheckContentType(id, API_KEY);
                    setContentType(type); // 컨텐츠 타입 저장
                    onMovieIdFetched(id, type); // 컨텐츠 ID와 타입을 콜백으로 전달
                } else {
                    console.log('해당하는 컨텐츠를 찾을 수 없습니다.');
                    setError('해당하는 컨텐츠를 찾을 수 없습니다.');
                }
            } catch (error) {
                console.error('컨텐츠 정보를 가져오는 중 에러가 발생했습니다.', error);
                setError('컨텐츠 정보를 가져오는 중 에러가 발생했습니다.');
            }
        };

        fetchContentId();
    }, [movieTitle, onMovieIdFetched]);

    return (
        <div>
        </div>
    );
}

export default FetchMovieID;
