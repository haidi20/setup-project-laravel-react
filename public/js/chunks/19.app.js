(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/src/supports/axios.js":
/*!********************************************!*\
  !*** ./resources/js/src/supports/axios.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseDomain = document.head.querySelector('meta[name="api-base-url"]').content;
var baseUrl = baseDomain + '/api';
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseUrl
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./resources/js/src/supports/helper.js":
/*!*********************************************!*\
  !*** ./resources/js/src/supports/helper.js ***!
  \*********************************************/
/*! exports provided: handleError, alert, addClass, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
 // third party


var baseDomain = document.head.querySelector('meta[name="api-base-url"]').content;
var handleError = function handleError(error) {
  var response = error.response;

  if (Number(response.status) >= 500 && Number(response.status) <= 599) {
    var message = {
      data: 'Maaf, Ada Kesalahan Sistem',
      status: 500
    };
    alert(message);
  }

  if (Number(response.status) >= 404) {
    var _message = {
      data: 'Maaf, Tidak Ditemukan',
      status: 404
    };
    alert(_message);
  } else {
    alert(response);
  }
};
var alert = function alert(response, type) {
  var icon = '',
      title = '';
  var audioError = new Audio(baseDomain + '/audio/error.ogg');
  var audioSuccess = new Audio(baseDomain + '/audio/success.ogg');
  var audioWarning = new Audio(baseDomain + '/audio/warning.ogg');

  if (Number(response.status) >= 200 && Number(response.status) <= 299) {
    audioSuccess.play();
    icon = 'success';
    title = 'Notification';
  } else if (Number(response.status) >= 400 && Number(response.status) <= 499) {
    audioWarning.play();
    icon = 'warning';
    title = 'Attention';
  } else if (Number(response.status) >= 500 && Number(response.status) <= 599) {
    audioError.play();
    icon = 'error';
    title = 'Warning';
  }

  if (type === 'popup') {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
      icon: icon,
      timer: 2000,
      title: title,
      text: response.data,
      showConfirmButton: false
    });
  } else {
    var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: function onOpen(toast) {
        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
      }
    });
    Toast.fire({
      icon: icon,
      title: response.data
    });
  }

  return response.status;
};
var addClass = function addClass(elements, myClass) {
  // if there are no elements, we're done
  if (!elements) {
    return;
  } // if we have a selector, get the chosen elements


  if (typeof elements === 'string') {
    elements = document.querySelectorAll(elements);
  } // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) {
      elements = [elements];
    } // add class to all chosen elements


  for (var i = 0; i < elements.length; i++) {
    // if class is not already found
    if ((' ' + elements[i].className + ' ').indexOf(' ' + myClass + ' ') < 0) {
      // add class
      elements[i].className += ' ' + myClass;
    }
  }
};
var isEmpty = function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

/***/ }),

/***/ "./resources/js/src/views/Dashboard/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/Dashboard/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supports_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../supports/axios */ "./resources/js/src/supports/axios.js");
/* harmony import */ var _supports_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../supports/helper */ "./resources/js/src/supports/helper.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
 // supports









var Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content;

var dashboard = function dashboard(props) {
  var send = function send(props) {
    // console.log('terkirim');
    _supports_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('notification').then(function (response) {// alert(response);
    })["catch"](function (e) {
      Object(_supports_helper__WEBPACK_IMPORTED_MODULE_2__["handleError"])(e);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-content"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: "4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-layout-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "btn-success",
    onClick: function onClick() {
      return send();
    },
    style: {
      marginBottom: 20
    }
  }, " Send "))));
};

/* harmony default export */ __webpack_exports__["default"] = (dashboard);

/***/ })

}]);