import {cusomizedAxios as axios} from "./customizedAxios";
const { data } =  await axios.get("/countries");
export const countries = data;