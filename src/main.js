import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let searchQuery = '';
let currentPage = 1;
let totalPages = 0;

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const btn = document.querySelector('.btn');

hideLoadMoreButton();

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  searchQuery = input.value.trim();

  if (searchQuery === '') {
    return;
  }

  currentPage = 1;
  showLoader();
  clearGallery();
  hideLoadMoreButton();

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

    createGallery(data.hits, false);

    if (totalPages === 1) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    if (totalPages > 1) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
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
    hideLoadMoreButton();

    try {
      const data = await getImagesByQuery(searchQuery, currentPage);

      createGallery(data.hits, true);

      smoothScroll();

      if (currentPage >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      } else {
        showLoadMoreButton();
      }
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to load more images. Please try again!',
        position: 'topRight',
      });
      showLoadMoreButton();
    } finally {
      hideLoader();
    }
  });
}
