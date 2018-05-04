import AXIOS from "./AxiosConfig";

const BASE_URI = "/Products";

const Search = {
  data: () => {
    return AXIOS.get(`${BASE_URI}`);
  }
};

export default Search;
