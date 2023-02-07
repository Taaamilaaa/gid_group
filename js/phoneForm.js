'use strict';

import { refs } from './refs.js';
import { toastCallFormNameError, toastCallFormNameSuccess } from './toast.js';

const callForm = document.forms.callForm;

refs.phoneBtn.addEventListener('click', callFormOpen);
refs.callFormCloseBtn.addEventListener('click', callFormClose);
callForm.addEventListener('submit', callFormSubmit);

function callFormOpen(e) {
    refs.callFormContainer.classList.add('call-form__containerOpen');
    refs.phoneBtn.removeEventListener('click', callFormOpen);
}

function callFormClose(e) {
    refs.callFormContainer.classList.remove('call-form__containerOpen');
    refs.phoneBtn.addEventListener('click', callFormOpen);
}

function callFormSubmit(e) {
    e.preventDefault();

    const userName = e.currentTarget.userName.value.trim();
    const userTel = e.currentTarget.userTel.value.trim();

    if (userName.length < 3 || userName.length === 0) {
        toastCallFormNameError.showToast();
    } else if (userTel.length < 6 || userTel.length === 0) {
        toastCallFormNameError.showToast();
    } else if (userName.length > 2 && userTel.length > 5) {
        const user = {
            name: userName,
            tel: userTel,
        };
        toastCallFormNameSuccess.showToast();
        callFormClose();
        return user;
    }
}
