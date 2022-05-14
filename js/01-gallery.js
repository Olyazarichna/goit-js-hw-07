import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

// розмітка для галереї
function markupGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
}

markupGallery();

galleryContainer.addEventListener('click', onGalleryContainerClick);

// callback ф-ція для click
function onGalleryContainerClick(event) {
  event.preventDefault();
  // console.log(event.target.nodeName);
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    //з бібліотеки
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
         `);
    //  console.log(event.target.dataset.source);
    instance.show(() => {
      galleryContainer.addEventListener('keydown', onEscapeClick);
    });

    function onEscapeClick(event) {
      if (event.code !== 'Escape') {
        return;
      } else {
        console.log('close');
        instance.close();
      }
    }
    console.log(event.target.dataset.source);
  }
}
