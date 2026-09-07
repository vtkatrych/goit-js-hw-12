import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ментор просить вибирати і керувати кнопкою САМЕ ТУТ
const btn = document.querySelector('.btn');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images, isAppend = false) {
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
        <a class="gallery-link" href="${largeImageURL}"> 
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${downloads}</p>
          </div>
        </div>
      </li>`;
      }
    )
    .join('');

  if (isAppend) {
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
    smoothScroll();
  } else {
    galleryContainer.innerHTML = galleryMarkup;
  }

  lightbox.refresh();
}

function smoothScroll() {
  const firstCard = galleryContainer.querySelector('.gallery-item');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2, // Прокрутка на дві висоти картки
      behavior: 'smooth',
    });
  }
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
  if (btn) btn.style.display = 'block';
}

export function hideLoadMoreButton() {
  if (btn) btn.style.display = 'none';
}
