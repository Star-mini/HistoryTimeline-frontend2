import {cusomizedAxios as axios} from "./customizedAxios";
const { data } =  await axios.get("/countries");
export const countries = data;

export const koreaImgUrl = data.find((country) => country.countryId === 410).imgUrl;