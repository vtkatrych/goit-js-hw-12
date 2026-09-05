import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.btn');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="galerry-link" href=${largeImageURL}>
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
      <div class="info-item">
      <p>Likes: ${likes}</p>
      </div>
      <div class="info-item">
      <p>Views: ${views}</p>
      </div>
      <div class="info-item">
      <p>Comments: ${comments}</p>
      </div>
      <div class="info-item">
      <p>Downloads: ${downloads}</p>
      </div>
      </div>
    </li>`;
      }
    )

    .join('');

  galleryContainer.innerHTML = galleryMarkup;

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-active');
}

export function hideLoader() {
  loader.classList.remove('is-active');
}

export function showLoadMoreButton() {
  btn.classList.add('is-here');
}

export function hideLoadMoreButton() {
  btn.classList.remove('is-here');
}
