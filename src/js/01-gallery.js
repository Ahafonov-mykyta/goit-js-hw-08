// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);
const container = document.querySelector(".gallery");


function createGalleryList (items) {
 return items.map( item  => 
     `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
    ).join("")
}

container.insertAdjacentHTML("afterbegin", createGalleryList(galleryItems) )
let lightbox = new SimpleLightbox(".gallery a", {
    enableKeyboard:	true,
    captionsData: 'alt',
    captionDelay: 250,
  });