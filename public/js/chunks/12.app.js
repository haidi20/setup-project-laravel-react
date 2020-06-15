(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/User/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/src/views/User/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/views/User/FormUser.js":
/*!*************************************************!*\
  !*** ./resources/js/src/views/User/FormUser.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _supports_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../supports/axios */ "./resources/js/src/supports/axios.js");
/* harmony import */ var _supports_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../supports/helper */ "./resources/js/src/supports/helper.js");
/* harmony import */ var _supports_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../supports/validation */ "./resources/js/src/supports/validation.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_components/Form */ "./resources/js/src/views/_components/Form/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./resources/js/src/views/User/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/antd/lib/input-number/style/css.js");
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
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

 //partials
// import rules from './partials/Rules';










var Content = antd__WEBPACK_IMPORTED_MODULE_13__["Layout"].Content;

var formUser = function formUser(props) {
  var nameRoute = '/user';
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: null,
    age: null,
    name: null,
    email: null,
    address: null,
    password: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    insertDataEdit();
  }, []);

  var insertDataEdit = function insertDataEdit() {
    if (props.location.state != undefined) {
      var data = props.location.state;
      setState(function (prev) {
        return _objectSpread({}, prev, {}, data);
      });
    }
  };

  var url = function url() {
    if (props.location.state != undefined) {
      return nameRoute + '/update/' + state.id;
    } else {
      return nameRoute + '/store';
    }
  };

  var _onSubmit = function onSubmit(e) {
    if (e.outOfDate === false) return false;
    Object(_supports_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
      method: 'post',
      url: url(),
      data: e
    }).then(function (response) {
      Object(_supports_helper__WEBPACK_IMPORTED_MODULE_3__["alert"])(response);
      history.push(nameRoute);
    })["catch"](function (error) {
      Object(_supports_helper__WEBPACK_IMPORTED_MODULE_3__["handleError"])(error);
    });
  };

  var handleRePass = function handleRePass(rule, value) {
    return new Promise(function (resolve, reject) {
      if (value !== state.password) {
        reject('Maaf, tidak sama dengan password');
      }

      resolve();
    });
  };

  var handleOnChange = function handleOnChange(e) {
    if (e != null && e.currentTarget != null) {
      var _e$currentTarget = e.currentTarget,
          name = _e$currentTarget.name,
          value = _e$currentTarget.value;
      setState(function (prev) {
        return _objectSpread({}, prev, _defineProperty({}, name, value));
      });
    }
  };

  var handleChangeNumber = function handleChangeNumber(name) {
    return function (value) {
      // console.log(name, value)
      if (!isNaN(value)) {
        setState(function (prev) {
          return _objectSpread({}, prev, _defineProperty({}, name, value));
        });
      }
    };
  };

  var rules = {
    name: [_supports_validation__WEBPACK_IMPORTED_MODULE_4__["required"]],
    password: [_supports_validation__WEBPACK_IMPORTED_MODULE_4__["required"], Object(_supports_validation__WEBPACK_IMPORTED_MODULE_4__["minChar"])(8)],
    rePassword: [Object(_supports_validation__WEBPACK_IMPORTED_MODULE_4__["validator"])(handleRePass), Object(_supports_validation__WEBPACK_IMPORTED_MODULE_4__["minChar"])(8)],
    age: [_supports_validation__WEBPACK_IMPORTED_MODULE_4__["required"], _supports_validation__WEBPACK_IMPORTED_MODULE_4__["number"]],
    email: [_supports_validation__WEBPACK_IMPORTED_MODULE_4__["required"], _supports_validation__WEBPACK_IMPORTED_MODULE_4__["email"]],
    address: [_supports_validation__WEBPACK_IMPORTED_MODULE_4__["required"]]
  };
  var attributeForm = {
    state: state,
    rules: rules,
    back: nameRoute,
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], {
    className: "header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    span: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-content"
  }, "Form User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    span: "4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-layout-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_5__["default"], attributeForm, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    name: "name",
    label: "Nama",
    onChange: handleOnChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    type: "password",
    name: "password",
    label: "Password",
    onChange: handleOnChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    type: "password",
    name: "rePassword",
    label: "Konfirmasi Password",
    onChange: handleOnChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["InputNumber"], {
    name: "age",
    label: "Umur",
    onChange: handleChangeNumber('age')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    name: "email",
    label: "Email",
    onChange: handleOnChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    name: "address",
    label: "Alamat",
    onChange: handleOnChange
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(formUser));

/***/ }),

/***/ "./resources/js/src/views/User/styles.scss":
/*!*************************************************!*\
  !*** ./resources/js/src/views/User/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/User/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);