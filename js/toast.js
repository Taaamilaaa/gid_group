    const styles = getComputedStyle(document.documentElement);
    const borderColor = String(styles.getPropertyValue('--border-color')).trim();
 const accentColor = String(styles.getPropertyValue('--accent-color')).trim();
    const benefitsTextColor = String(styles.getPropertyValue('--benefits-text-color')).trim();

const toastQuizSuccessPhone = Toastify({
    text: 'Ваші дані надіслані в обробку. Ми вам скоро зателефонуємо!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        borderRadius: '15px',
        padding: '50px',
        fontSize: '1rem',
        fontWeight: '500',
    },
});
const toastQuizSuccessEmail = Toastify({
    text: 'Ваші дані надіслані в обробку. Не забудьте перевірити Вашу пошту!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        borderRadius: '15px',
        padding: '50px',
        fontSize: '1rem',
        fontWeight: '500',
    },
});
const toastQuizSuccessAll = Toastify({
    text: 'Ваші дані надіслані в обробку.Чекайте нашого дзвінка та не забудьте перевірити Вашу пошту!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        borderRadius: '15px',
        padding: '50px',
        fontSize: '1rem',
        fontWeight: '500',
    },
});


const toastQuizeErrorTel = Toastify({
    text: 'Залишіть номер телефону, щоб ми могли Вам зателефонувати',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        border: "5px dotted black",
        borderRadius: '15px',
        padding: '50px',
    },
});
const toastQuizeErrorEmail = Toastify({
    text: 'Залишіть адресу пошти, щоб ми могли Вам надіслати листа',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        border: "5px dotted black",
        borderRadius: '15px',
        padding: '50px',
    },
});
const toastQuizeErrorAll = Toastify({
    text: 'Залишіть Ващі контакти!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background: accentColor,
        color: benefitsTextColor,
        border: "5px dotted black",
        borderRadius: '15px',
        padding: '50px',
    },
});


export { toastQuizSuccessPhone, toastQuizSuccessEmail, toastQuizSuccessAll, toastQuizeErrorTel, toastQuizeErrorEmail, toastQuizeErrorAll};