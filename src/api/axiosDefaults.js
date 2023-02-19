import axios from "axios";

axios.defaults.baseURL = "https://campers-social-site.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;