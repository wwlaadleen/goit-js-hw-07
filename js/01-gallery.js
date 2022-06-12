import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}"
onclick="event.preventDefault()">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
        </div>`)
    .join('');

parentEl.insertAdjacentHTML('beforeend', markup);


function onImgContainerClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(
        `
        <img src="${event.target.dataset.source}" width="800" height="600">
        `,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onClickEscape);
            },
            onClose: (instance) =>
            window.removeEventListener("keydown", onClickEscape),
        }
        );
        const onClickEscape = (event) => {
            if (event.key === "Escape") {
                instance.close();
            }
        };
        instance.show();
    }
    
    parentEl.addEventListener('click', onImgContainerClick);