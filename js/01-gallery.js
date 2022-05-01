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
  console.log(event.target.nodeName);
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    //з бібліотеки
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
         `);
    instance.show();
    // console.log(event.target.dataset.source);
    // document.addEventListener('keydown', onModalKeydown);
  }
}

//Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

// document.addEventListener('keydown', onModalKeydown);

// function onModalKeydown(event) {

//     if(event.code !== "Escape") {
//         return;
//     } else {

//          console.log("code: ", event.code);
// const instance = basicLightbox.create(`
       
//      instance.close();
//     }

// };
