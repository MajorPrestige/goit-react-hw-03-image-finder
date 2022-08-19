import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28742881-7ed4fdaa96807499761d63f05';

const api = async (searchQuery, searchPage) => {
  const { data } = await axios.get('', {
    params: {
      key: API_KEY,
      q: searchQuery,
      page: searchPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};

export default api;
