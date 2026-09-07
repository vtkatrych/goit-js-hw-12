import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const base_url = 'https://pixabay.com/api/';

  const axiosOptions = {
    params: {
      key: '57290092-a2317ab3b0fbf392f64df49e7',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  const response = await axios.get(base_url, axiosOptions);

  return response.data;
}
