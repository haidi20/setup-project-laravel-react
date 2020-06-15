(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/src/views/Auth/Login.js":
/*!**********************************************!*\
  !*** ./resources/js/src/views/Auth/Login.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supports_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../supports/axios */ "./resources/js/src/supports/axios.js");
/* harmony import */ var _supports_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../supports/helper */ "./resources/js/src/supports/helper.js");
/* harmony import */ var _supports_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../supports/validation */ "./resources/js/src/supports/validation.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_components/Form */ "./resources/js/src/views/_components/Form/index.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // support



 // components






var Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content;

var login = function login() {
  var nameRoute = '/login';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: null,
    password: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var rules = {
    name: [_supports_validation__WEBPACK_IMPORTED_MODULE_3__["required"]],
    password: [_supports_validation__WEBPACK_IMPORTED_MODULE_3__["required"]]
  };

  var _onSubmit = function onSubmit(e) {
    console.log(e);
    Object(_supports_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'post',
      url: '/auth/login',
      data: {
        name: state.name,
        password: state.password
      }
    }).then(function (response) {
      console.log(response);
      setTimeout(function () {
        setLoading(false);
      }, 3000);
    })["catch"](function (error) {
      console.log(error);
      setLoading(false);
    });
  };

  var attributeForm = {
    state: state,
    rules: rules,
    hideBack: true,
    loading: loading,
    setLoading: setLoading,
    // back: nameRoute,
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    }
  };

  var handleOnChange = function handleOnChange(e) {
    setState(_objectSpread({}, state, _defineProperty({}, e.target.name, e.target.value)));
  };

  var styled = {
    layoutLogin: {
      paddingTop: 50
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    gutter: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    md: 8
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 24,
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    style: styled.layoutLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-layout-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_4__["default"], attributeForm, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    name: "name",
    label: "Username",
    onChange: handleOnChange,
    value: state.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    type: "password",
    name: "password",
    label: "Password",
    onChange: handleOnChange,
    value: state.password
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ })

}]);