import { refs } from './refs.js';

refs.quizOpenBtn.forEach(el => el.addEventListener('click', onClickQuizToggle));
refs.quizCloseBtn.addEventListener('click', onClickQuizToggle);
refs.quizStylesImg.forEach(el => el.addEventListener('click', onImgClickStyleChecked));
refs.quizForm.addEventListener('submit', onFormSubmite);

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
};
const openForm = () => {
    refs.quiz.classList.remove('quiz-close');
    refs.quiz.classList.add('quiz-open');
};

function onImgClickStyleChecked(e) {
    console.log(refs.quizStylesInputs);

    const checkedElId = e.currentTarget.id;

    refs.quizStylesInputs.forEach(el => {
        if (el.id === checkedElId) {
            el.checked = true;
            console.log(el.id === checkedElId);
        }
    });
}

function onFormSubmite(e) {
    e.preventDefault();
   closeForm();
}
