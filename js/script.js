'use strict';

var link = document.querySelector('.button-contacts');

var popup = document.querySelector('.modal-contacts');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('.contact-form');
var clientName = popup.querySelector('.contact-name');
var email = popup.querySelector('.contact-email');
var comment = popup.querySelector('.contact-comment');

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

var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.interactive-map'), {
    zoom: 16,
    center: new google.maps.LatLng(59.9393719, 30.328083),
    mapTypeId: 'roadmap'
  });

  var markerImage = new google.maps.MarkerImage(
      'img/pin-marker.png',
      null,
      new google.maps.Point(0, 0),
      new google.maps.Point(45, 125)
  );

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.938794, 30.323083),
    icon: markerImage,
    map: map
  });
}
