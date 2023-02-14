import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");


const images = galleryItems.map(
  ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}"> 
      <img
        class="gallery__image"
        src = "${preview}" 
        data-source = "${original}"
        alt = "${description}" /> 
      </a>
   </div>`;
  }
).join('');

galleryRef.insertAdjacentHTML("afterbegin", images);


galleryRef.addEventListener('click', openOriginalImg);

function openOriginalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    //  {
    //   onShow: () => document.addEventListener("keydown", closeOriginalImg),
    //   onClose: () => document.removeEventListener("keydown", closeOriginalImg),
    // };
    instance.show()

  function closeOriginalImg(event) {
  if (event.code === "Escape") {
    instance.close();
  }
};
}

