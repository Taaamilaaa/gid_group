import { refs } from './refs.js';
import {
    toastQuizSuccessPhone,
    toastQuizSuccessEmail,
    toastQuizSuccessAll,
    toastQuizeErrorTel,
    toastQuizeErrorEmail,
    toastQuizeErrorAll,
} from './toast.js';

const form = document.forms.quiz;

refs.quizOpenBtn.forEach(el => el.addEventListener('click', onClickQuizToggle));
refs.quizCloseBtn.addEventListener('click', onClickQuizToggle);
refs.quizStylesImg.forEach(el => el.addEventListener('click', imgChecked));

form.addEventListener('submit', onFormSubmite);

// open/close
function onClickQuizToggle(e) {
    if (refs.quiz.className.includes('quiz-close')) {
        openForm();
    } else if (refs.quiz.className.includes('quiz-open')) {
        closeForm();
    }
}
const closeForm = () => {
    refs.quiz.classList.remove('quiz-open');
    refs.quiz.classList.add('quiz-close');
    return;
};
const openForm = () => {
    refs.quiz.classList.remove('quiz-close');
    refs.quiz.classList.add('quiz-open');
    return;
};
// end

// checking by img click

function imgChecked(e) {
    const allFormVlues = form.interiorStyle;

    allFormVlues.forEach(el => {
        if (el.id === e.currentTarget.id) {
            el.checked = true;
        }
    });
    return;
}

function onFormSubmite(e) {
    e.preventDefault();

    const userName = form.userName.value;
    const userPhone = form.userPhone.value;
    const userEmail = form.userEmail.value;
    const userContact = form.contact.value;

    const user = {
        name: userName,
        phone: userPhone,
        email: userEmail,
    };

    const data = {
        type: form.type.value,
        service: form.service.value,
        style: form.interiorStyle.value,
        square: form.square.value,
    };
    const userData = {
        userInfo: user,
        data: data,
    }

    if (userContact === 'tel' && userPhone) {

        toastQuizSuccessPhone.showToast();
        closeForm();
    } else if (userContact === 'tel' && !userPhone) {
        toastQuizeErrorTel.showToast();
    } else if (userContact === 'email' && userEmail) {
        toastQuizSuccessEmail.showToast();
        closeForm();
    } else if (userContact === 'email' && !userEmail) {
        toastQuizeErrorEmail.showToast();
    } else if (userContact === 'all' && userPhone && userEmail) {
        toastQuizSuccessAll.showToast();
        closeForm();
    } else if ((userContact === 'all' && !userPhone) || (userContact === 'all' && !userEmail)) {
        toastQuizeErrorAll.showToast();
    }

    console.log(userData);
    return userData;
}
