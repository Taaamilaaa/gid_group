const styles = getComputedStyle(document.documentElement);
const borderColor = String(styles.getPropertyValue('--border-color')).trim();
const accentColor = String(styles.getPropertyValue('--toast-color')).trim();
const benefitsTextColor = String(styles.getPropertyValue('--benefits-text-color')).trim();

const errStyle = {
    background: accentColor,
    color: benefitsTextColor,
    border: '5px dotted black',
    borderRadius: '15px',
    padding: '50px',
    fontSize: '1.5rem',

};
const successStyle = {
    background: accentColor,
        color: benefitsTextColor,
        borderRadius: '15px',
        padding: '50px',
        fontSize: '1.5rem',
        fontWeight: '500',
}

const toastQuizSuccessPhone = Toastify({
    text: 'Ваші дані надіслані в обробку. Ми вам скоро зателефонуємо!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: successStyle
});
const toastQuizSuccessEmail = Toastify({
    text: 'Ваші дані надіслані в обробку. Не забудьте перевірити Вашу пошту!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: successStyle,
});
const toastQuizSuccessAll = Toastify({
    text: 'Ваші дані надіслані в обробку.Чекайте нашого дзвінка та не забудьте перевірити Вашу пошту!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: successStyle,
});

const toastQuizeErrorTel = Toastify({
    text: 'Залишіть номер телефону, щоб ми могли Вам зателефонувати',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: errStyle,
});
const toastQuizeErrorEmail = Toastify({
    text: 'Залишіть адресу пошти, щоб ми могли Вам надіслати листа',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: errStyle,
});
const toastQuizeErrorAll = Toastify({
    text: 'Залишіть Ващі контакти!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: errStyle,
});

const toastCallFormNameSuccess = Toastify({
    text: 'Скоро зв\'яжемося з Вами',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: successStyle,
});

const toastCallFormNameError = Toastify({
    text: 'Заповніть поля форми зворотнього дзвінка',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: errStyle,
});

export {
    toastQuizSuccessPhone,
    toastQuizSuccessEmail,
    toastQuizSuccessAll,
    toastQuizeErrorTel,
    toastQuizeErrorEmail,
    toastQuizeErrorAll,
    toastCallFormNameError,
    toastCallFormNameSuccess
};
