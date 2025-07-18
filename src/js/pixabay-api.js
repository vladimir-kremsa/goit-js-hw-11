import axios from 'axios';

const API_KEY = '51375874-08b60e99a61a885b42830ac73';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
