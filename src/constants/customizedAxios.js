import axios from 'axios';

export const cusomizedAxios = axios.create({
    baseURL: 'http://localhost:8081',
    // 다른 옵션들도 필요에 따라 추가 가능
});