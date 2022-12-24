
import throttle from 'lodash.throttle';

const NAME_OF_KEY='feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const result = {
  email: '',
  message: '',
};

const savedParametrs = JSON.parse(localStorage.getItem(NAME_OF_KEY));

if (savedParametrs) {
  refs.email.value = savedParametrs.email;
  refs.message.value = savedParametrs.message;
  result.email = refs.email.value;
  result.message = refs.message.value;
}

refs.email.addEventListener('input', throttle(onInputEmail,500));
refs.message.addEventListener('input', throttle(onInputMessage,500));
refs.form.addEventListener('submit', onSubmit);

function onInputEmail(evt) {
  result.email = evt.currentTarget.value;
  localStorage.setItem(FNAME_OF_KEY, JSON.stringify(result));
}

function onInputMessage(evt) {
  result.message = evt.currentTarget.value;
  localStorage.setItem(NAME_OF_KEY, JSON.stringify(result));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(result);
  localStorage.removeItem(NAME_OF_KEY);

  result.email = '';
  result.message = '';
}
