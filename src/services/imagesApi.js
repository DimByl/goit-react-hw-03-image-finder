import axios from "axios";

const API_KEY = "22552656-a52d92f58f7bf96e8efb5df9f";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchGetImages = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) =>
  axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((responce) => responce.data);

export default fetchGetImages;
