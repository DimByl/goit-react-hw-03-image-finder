const API_BASE = {
  URL: "https://pixabay.com/api",
  KEY: "22552656-a52d92f58f7bf96e8efb5df9f",
  PER_PAGE: 12,
};

const fetchGetImages = ({ query, page }) => {
  return fetch(
    `${API_BASE.URL}?q=${query}&page=${page}&key=${API_BASE.KEY}&image_type=photo&orientation=horizontal&per_page=${API_BASE.PER_PAGE}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something went wrong...`));
  });
};

export default fetchGetImages;
