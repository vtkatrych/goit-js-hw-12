import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = input.value.trim();

  if (searchQuery === '') {
    return;
  }
  showLoader();
  clearGallery();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);

      iziToast.error({
        title: 'Error',
        message: "'Something went wrong. Please try again!",
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
