import axios from "axios";

const URL = "http://beta.lb-api.chiper.co";

const AXIOS = axios.create({
  baseURL: URL,
  timeout: 30000
});

export default AXIOS;
