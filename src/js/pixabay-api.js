import axios from 'axios';

export const searchParams = {
  key: '57290092-a2317ab3b0fbf392f64df49e7',
  q: query,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  page: 1,
  per_page: 15,

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

export function getImagesByQuery(query) {
  const base_url = 'https://pixabay.com/api/';

  searchParams.q = query;

  return axios.get(base_url, { params: searchParams }).then(response => {
    return response.data;
  });
}
