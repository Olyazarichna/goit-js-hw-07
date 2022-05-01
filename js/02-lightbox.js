import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

console.log(listGallery);

function markupListGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${origin}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join('');
  listGallery.insertAdjacentHTML('beforeend', markup);
}
markupListGallery();


listGallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if(event.target.nobename !== 'IMG') {
        return;
    } else {
        let gallery = new SimpleLightbox('.gallery a');
        gallery.on('show.simplelightbox', function () {
           console.log("njk")
        });
        
        gallery.on('error.simplelightbox', function (e) {
            console.log(e); // Some usefull information
        });
  
    }};