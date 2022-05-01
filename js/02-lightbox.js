import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

function markupListGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join('');
  listGallery.insertAdjacentHTML('beforeend', markup);
}
markupListGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});
