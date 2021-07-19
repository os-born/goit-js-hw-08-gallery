
import { galleryItems } from "./app.js";

const refs = {
    ulRef: document.querySelector('.js-gallery'),
    divModalRef: document.querySelector('.js-lightbox'),
    modalCloseButtonRef: document.querySelector('button[data-action=close-lightbox]'),
    modalImgRef: document.querySelector('.lightbox__image')
  };

const createListMarkup = function (array) {
    return array.reduce((acc, {preview, original, description}) => {
       acc += 
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/></a>
        </li>`;

        return acc;
    }, "");
} 

refs.ulRef.innerHTML = createListMarkup(galleryItems);

const onClickListener = e => {
  if (!e.target.classList.contains('gallery__image')) {
    return;}
    e.preventDefault();
    refs.divModalRef.classList.add('is-open');
    refs.modalImgRef.src=e.target.dataset.source;
    refs.modalImgRef.alt=e.target.alt;
  }

refs.ulRef.addEventListener('click', onClickListener);


const onClickModalClose = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;}
    refs.divModalRef.classList.remove('is-open');
    refs.modalImgRef.src="";
    refs.modalImgRef.alt="";
};

refs.modalCloseButtonRef.addEventListener('click', onClickModalClose);