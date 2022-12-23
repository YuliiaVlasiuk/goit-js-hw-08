// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery=document.querySelector('.gallery');
const arrayOfPictures=createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',arrayOfPictures);

function createGalleryMarkup(array){
return array.map(({preview,original,description})=>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});