import axios from "axios";

axios.defaults.baseURL = "https://campers-api.herokuapp.com/";
// axios.defaults.baseURL = "https://8000-annekammenhe-campersapi-tv64278kqhf.ws-eu89.gitpod.io";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();