// const { result } = require("lodash");

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const result = {
  email: '',
  message: '',
};

const savedParametrs = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedParametrs) {
  refs.email.value = savedParametrs.email;
  refs.message.value = savedParametrs.message;
  result.email = refs.email.value;
  result.message = refs.message.value;
}

refs.email.addEventListener('input', onInputEmail);
refs.message.addEventListener('input', onInputMessage);
refs.form.addEventListener('submit', onSubmit);

function onInputEmail(evt) {
  result.email = evt.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
}

function onInputMessage(evt) {
  result.message = evt.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(result);
  localStorage.removeItem('feedback-form-state');

  result.email = '';
  result.message = '';
}
