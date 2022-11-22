import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItem = galleryContainer.querySelector(".gallery__item");
const galleryMarkup = createGalleryItemMarkup(galleryItems);
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", galleryImageOpen);

function createGalleryItemMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
      <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`;
		})
		.join("");
}

function galleryImageOpen(e) {
	e.preventDefault();
	const isGalleryItem = e.target.classList.contains("gallery__image");
	if (!isGalleryItem) {
		return;
	}

	console.log(lightbox);
	lightbox.open();
}
