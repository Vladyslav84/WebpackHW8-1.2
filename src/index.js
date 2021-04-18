import './styles.css';
import images from '../src/js/gallary';
import Siema from 'siema';

const gallery = document.querySelector('.siema');
const galleryEl = document.querySelector('.js-gallery');
const ModalWindow = document.querySelector('.js-lightbox');
const ModalWindowClose = document.querySelector('.lightbox__button');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxOverlayEl = document.querySelector('.lightbox__overlay');
const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

galleryEl.addEventListener('click', onGalleryElClick);
ModalWindowClose.addEventListener('click', onModalWindowCloseClick);
lightboxOverlayEl.addEventListener('click', onOverlayClick);

buttonNext.addEventListener('click', () => siema.next());
buttonPrev.addEventListener('click', () => siema.prev());


let currentInd = null;

function createImgList(images) {

    return images.map(({ preview, original, description }) => {

        // return `<img class="gallery__image" src="${ original }" data-source="${ original }" alt="${ description }">`;

        return ` <li class="gallery__item">
            <a class="gallery__link" 
            href="${ original }">
        <img class="gallery__image"
             src="${ preview }"
             data-source="${ original }"
             alt="${ description }"/>
          </a>
        </li>`

    }).join('');

};

galleryEl.insertAdjacentHTML('beforeend', createImgList(images));

function onGalleryElClick(evt) {
    evt.preventDefault();

    window.addEventListener('keydown', onEscPressClose)

    images.forEach((el, ind) => {

        if (el.preview.includes(evt.target.src))
        {
            currentInd = ind;
        }
    });

    lightboxImage.src = evt.target.getAttribute('data-source');

    ModalWindow.classList.add('is-open');

    // window.addEventListener('keydown', onImgGalleryScroll);
};

// function onImgGalleryScroll(evt) {
//     evt.preventDefault;

//     if (evt.code == 'ArrowLeft' && currentInd > 0)
//     {
//         currentInd -= 1;
//         lightboxImage.alt = images[currentInd].description;
//         lightboxImage.src = images[currentInd].original;
//         return;
//     }
//     if (evt.code == 'ArrowLeft' && currentInd === 0)
//     {
//         currentInd = images.length;
//         lightboxImage.alt = images[currentInd].description;
//         lightboxImage.src = images[currentInd - 1].original;
//         return;
//     }
//     if (evt.code == 'ArrowRight' && currentInd < images.length - 1)
//     {
//         currentInd += 1;
//         lightboxImage.alt = images[currentInd].description;
//         lightboxImage.src = images[currentInd].original;
//         return;
//     }
//     if (evt.code == 'ArrowRight' && currentInd === images.length - 1)
//     {
//         currentInd = 0;
//         lightboxImage.alt = images[currentInd].description;
//         lightboxImage.src = images[currentInd].original;
//     }

// };

function onModalWindowCloseClick() {

    window.removeEventListener('keydown', onEscPressClose);
    // window.removeEventListener('keydown', onImgGalleryScroll);

    ModalWindow.classList.remove('is-open');

    lightboxImage.src = '';

};

function onOverlayClick(evt) {
    evt.preventDefault();
    if (evt.currentTarget === evt.target)
    {
        onModalWindowCloseClick();
    }
};

function onEscPressClose(evt) {

    if (evt.code === 'Escape')
    {
        onModalWindowCloseClick();
    };
};

const siema = new Siema();