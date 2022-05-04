import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea();

function onFormSubmit(e) {
e.preventDefault();
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);    
}

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

// function populateTextarea(e) {
//     const email = e.target.value;
//     localStorage.setItem(STORAGE_KEY, email);
// }