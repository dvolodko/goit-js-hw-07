import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", galleryImageOpen);

function createGalleryItemMarkup(galleryItems) {
	return galleryItems
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
    </div>`;
		})
		.join("");
}

function galleryImageOpen(e) {
	e.preventDefault();
	const isGalleryItem = e.target.classList.contains("gallery__image");
	if (!isGalleryItem) {
		return;
	}

	const selectedImage = e.target.dataset.source;
	const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

	instance.show();

	window.addEventListener("keydown", e => {
		if (e.code !== "Escape") {
			return;
		}

		instance.close();
	});
}
