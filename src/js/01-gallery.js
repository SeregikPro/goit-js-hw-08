// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const elGalleryMarkup = createElGalleryMarkup(galleryItems);

function createElGalleryMarkup (images) {
    return images.map(image =>
        `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</div>`).join(''); 
};

gallery.innerHTML = elGalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', 
{docClose: false,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});