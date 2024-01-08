import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
  
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;
  
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.setAttribute('data-source', item.original);
  
    link.appendChild(image);
    listItem.appendChild(link);
    return listItem;
  }
  
  function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
  
    const largeImageURL = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);
  
    instance.show();
  }
  
  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
  
  gallery.addEventListener('click', openModal);