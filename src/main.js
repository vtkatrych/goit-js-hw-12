import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let searchQuery = '';
let currentPage = 1;
let totalPages = 0;

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const btn = document.querySelector('.btn');

form.addEventListener('submit', async event => {
  event.preventDefault();

  searchQuery = input.value.trim();

  if (searchQuery === '') {
    return;
  }

  currentPage = 1;
  showLoader();
  clearGallery();
  if (btn) btn.classList.add('btn');

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / 15);

    createGallery(data.hits);

    if (totalPages > 1 && btn) {
      btn.classList.remove('btn');
    }
  } catch (error) {
    console.log(error);

    iziToast.error({
      title: 'Error',
      message: "'Something went wrong. Please try again!",
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

if (btn) {
  btn.addEventListener('click', async () => {
    currentPage += 1;
    showLoader();

    try {
      const data = await getImagesByQuery(searchQuery, currentPage);

      createGallery(data.hits);

      if (currentPage >= totalPages) {
        btn.classList.add('btn');
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  });
}
