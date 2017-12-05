'use strict';

var link = document.querySelector('.button-contacts');

var popup = document.querySelector('.modal-contacts');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('form');
var clientName = popup.querySelector('input[name="contact-name"]');
// strange bug, if variable has 'name' title, then HtmlInputElement is returned and .focus() does not work
var email = popup.querySelector('input[name="contact-email"]');
var comment = popup.querySelector('[name=contact-comment]');

var storageName = localStorage.getItem('clientName');
var storageEmail = localStorage.getItem('email');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

  if (storageName) {
    clientName.value = storageName;
    email.value = storageEmail;

    comment.focus();
  } else {
    clientName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (!clientName.value || !email.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('clientName', clientName.value);
    localStorage.setItem('email', email.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) { // ESC key
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  }
});
