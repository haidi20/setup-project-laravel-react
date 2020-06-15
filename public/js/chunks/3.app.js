(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/_components/Form/style.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/src/views/_components/Form/style.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

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

/***/ "./resources/js/src/supports/validation.js":
/*!*************************************************!*\
  !*** ./resources/js/src/supports/validation.js ***!
  \*************************************************/
/*! exports provided: number, email, required, minChar, minNumber, validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minChar", function() { return minChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minNumber", function() { return minNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return validator; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var number = {
  type: 'number'
};
var email = {
  type: 'email'
};
var required = {
  required: true
};
var minChar = function minChar(min) {
  return {
    min: min
  };
};
var minNumber = function minNumber(min) {
  return _objectSpread({}, number, {
    min: min
  });
};
var validator = function validator(func) {
  return {
    validator: func
  };
};

/***/ }),

/***/ "./resources/js/src/views/_components/Form/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/_components/Form/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./resources/js/src/views/_components/Form/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var layout = {// labelCol: {
  //     span: 8,
  // },
  // wrapperCol: {
  //     span: 16,
  // },
};
var tailLayout = {// wrapperCol: {
  //   span: 16,
  // },
};

var customForm = function customForm(props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var hideBack = props.hideBack ? 'none' : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = props.state;

    var passing = _objectSpread({}, data);

    form.setFieldsValue(passing);
  }, [props.state]);
  var rules = props.rules ? props.rules : null;
  var validateMessages = {
    required: 'Maaf, ${label} harus diisi.',
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "Maaf, ${label} minimal ${min} digit",
      max: "Maaf, ${label} maksimal ${max} digit",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    types: {
      email: 'Maaf, ${label} harus berupa E-mail.',
      number: 'Maaf, ${label} harus berupa Nomor.'
    },
    number: {
      min: "Maaf, ${label} minimal ${min} digit",
      max: "Maaf, ${label} maksimal ${max} digit",
      range: '${label} harus di antara ${min} and ${max}'
    }
  };
  var attributeForm = {
    form: form,
    name: "user",
    size: 'middle',
    layout: 'vertical',
    onFinish: function onFinish(e) {
      return handleOnFinish(e);
    },
    validateMessages: validateMessages,
    onFinishFailed: function onFinishFailed(e) {
      return props.onSubmit(e);
    }
  };

  var handleOnFinish = function handleOnFinish(e) {
    props.setLoading(true);
    return props.onSubmit(e);
  };

  var back = function back() {
    history.push({
      pathname: props.back
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "btn-info",
    onClick: function onClick() {
      return back();
    },
    style: {
      marginBottom: 20,
      display: hideBack
    }
  }, " Kembali "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], attributeForm, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child, index) {
    var attribute = child.props;
    var name = attribute.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, _extends({}, attribute, {
      rules: rules[name]
    }), child);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "btn-info",
    style: {
      display: hideBack
    },
    onClick: function onClick() {
      return back();
    }
  }, " Kembali "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "btn-success",
    style: {
      "float": 'right'
    },
    htmlType: "submit",
    loading: props.loading
  }, " Kirim "))));
};

/* harmony default export */ __webpack_exports__["default"] = (customForm); // const handleRules = () => {
//     let result      = {};
//     let validation  = {};
//     props.children && React.Children.map(props.children, (child, index) => {
//         const {number, name, email, userequired} = child.props;
//         const setRequired = () => {
//             return userequired === 'true' ? {required: true} : {required: false};
//         }
//         const setType = () => {
//             if(number === 'true'){
//                 return {type: 'number'};
//             }else if(email === 'true'){
//                 return {type: 'email'};
//             }else{
//                 return null;
//             }
//         }
//         result = {
//             ...result,
//             [name] : [
//                 setRequired(),
//                 setType()
//             ],
//         }
//     });
//     setRules(result);  
// }

/***/ }),

/***/ "./resources/js/src/views/_components/Form/style.scss":
/*!************************************************************!*\
  !*** ./resources/js/src/views/_components/Form/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/_components/Form/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);