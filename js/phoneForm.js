"use strict"

import { refs } from "./refs.js"

refs.phoneBtn.addEventListener("click", onPhoneBtnClick);
refs.heroFormCloseBtn.addEventListener("click", onHeroFormCloseBtnClick)

function onPhoneBtnClick(e) {
    if (e.currentTarget.className === "phoneBtn") {
       refs.heroFormContainer.classList.add("hero-form__containerOpen")
   }
}

function onHeroFormCloseBtnClick(e) {
   if (e.currentTarget.className === "hero-form__btn") {
       refs.heroFormContainer.classList.remove("hero-form__containerOpen")
   }
}

export {onPhoneBtnClick, onHeroFormCloseBtnClick}