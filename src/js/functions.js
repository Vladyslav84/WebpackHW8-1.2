// function createImgList(images) {

//     return images.map(({ preview, original, description }) => {

//         return ` <li class="gallery__item">
//             <a class="gallery__link" 
//             href="${ original }">
//         <img class="gallery__image"
//              src="${ preview }"
//              data-source="${ original }"
//              alt="${ description }"/>
//           </a>
//         </li>`

//     }).join('');

// };


// function onGalleryElClick(evt) {
//     evt.preventDefault();

//     window.addEventListener('keydown', onEscPressClose)

//     images.forEach((el, ind) => {

//         if (el.preview.includes(evt.target.src))
//         {
//             currentInd = ind;
//         }
//     });

//     lightboxImage.src = evt.target.getAttribute('data-source');

//     ModalWindow.classList.add('is-open');

//     window.addEventListener('keydown', onImgGalleryScroll)
// };

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

// function onModalWindowCloseClick() {

//     window.removeEventListener('keydown', onEscPressClose);
//     window.removeEventListener('keydown', onImgGalleryScroll);

//     ModalWindow.classList.remove('is-open');

//     lightboxImage.src = '';

// };

// function onOverlayClick(evt) {
//     evt.preventDefault();
//     if (evt.currentTarget === evt.target)
//     {
//         onModalWindowCloseClick();
//     }
// };

// function onEscPressClose(evt) {

//     if (evt.code === 'Escape')
//     {
//         onModalWindowCloseClick();
//     };
// };

// export {
//     createImgList,
//     onGalleryElClick,
//     onImgGalleryScroll,
//     onModalWindowCloseClick,
//     onOverlayClick,
//     onEscPressClose
// };