import React from 'react';

// third party
import Swal from 'sweetalert2';

let baseDomain  = document.head.querySelector('meta[name="api-base-url"]').content;

export const handleError = error => {
  let response = error.response;

  if(Number(response.status) >= 500 && Number(response.status) <= 599){
    let message = {
      data: 'Maaf, Ada Kesalahan Sistem',
      status: 500,
    }

    alert(message);
  }if(Number(response.status) >= 404){
    let message = {
      data: 'Maaf, Tidak Ditemukan',
      status: 404,
    }

    alert(message);
  }else{
    alert(response);
  }
}

export const alert = (response, type) => {
  let icon = '', title = '';

  let audioError    = new Audio(baseDomain + '/audio/error.ogg');
  let audioSuccess  = new Audio(baseDomain + '/audio/success.ogg');
  let audioWarning  = new Audio(baseDomain + '/audio/warning.ogg');

  if(Number(response.status) >= 200 && Number(response.status) <= 299){
      audioSuccess.play();

      icon    = 'success';
      title   = 'Notification';
  }else if(Number(response.status) >= 400 && Number(response.status) <= 499){
      audioWarning.play();

      icon    = 'warning';
      title   = 'Attention';
  }
  else if(Number(response.status) >= 500 && Number(response.status) <= 599){
      audioError.play();

      icon    = 'error';
      title   = 'Warning';
  }   

  if(type === 'popup'){
      Swal.fire({
          icon: icon,
          timer: 2000,
          title: title,
          text: response.data,
          showConfirmButton: false,
      });
  }else{
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      });

      Toast.fire({
          icon: icon,
          title: response.data,
      });
  }

  return response.status;
}

export const addClass = (elements, myClass) => {
    // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {

    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

      // add class
      elements[i].className += ' ' + myClass;
    }
  }
}

export const isEmpty = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}