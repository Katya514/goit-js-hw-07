import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");


const markup = galleryItems.map(
  ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}"> 
      <img
        class="gallery__image"
        src = "${preview}" 
        alt = "${description}"/> 
      </a>
   </div>`;
  }
).join('');

galleryRef.insertAdjacentHTML("afterbegin", markup);

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
   
    
})
