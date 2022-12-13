'use strict'

import { refs } from "./refs.js";

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);
refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick)

function onModalOpenBtnClick(e) {    
    if (e.currentTarget.className === "modalOpenBtn") {
        refs.modal.classList.add("modalOpen")        
    }      
}

function onModalCloseBtnClick(e) {
    if (e.currentTarget.className === "modalCloseBtn" || e.currentTarget.nodeName === A) {
        refs.modal.classList.remove("modalOpen")
    }
}
export {onModalOpenBtnClick, onModalCloseBtnClick}