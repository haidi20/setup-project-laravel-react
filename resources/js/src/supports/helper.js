import React from 'react';

// third party
import Swal from 'sweetalert2';

export const alert = (result, type) => {
  let icon = '', title = '';

  if(Number(result.status) >= 200 && Number(result.status) <= 299){
      icon    = 'success';
      title   = 'Notification';
  }else if(Number(result.status) >= 400 && Number(result.status) <= 499){
      icon    = 'warning';
      title   = 'Attention';
  }
  else if(Number(result.status) >= 500 && Number(result.status) <= 599){
      icon    = 'error';
      title   = 'Warning';
  }   

  if(type === 'popup'){
      Swal.fire({
          icon: icon,
          timer: 2000,
          title: title,
          text: result.data,
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
          title: result.data,
      });
  }

  return result.status;
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