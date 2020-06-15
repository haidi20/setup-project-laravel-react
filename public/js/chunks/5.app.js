(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/_components/Datatable/style.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/src/views/_components/Datatable/style.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\n  height: 1px;\n  border: none;\n  background-color: #dddbdb;\n}\n\n.components-table-demo-control-bar .ant-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n\n.ant-table-pagination {\n  display: none;\n}\n\n.ant-pagination-options-size-changer.ant-select {\n  display: none !important;\n}\n\n@media only screen and (max-width: 600px) {\n  .pagination {\n    text-align: center;\n  }\n}", ""]);

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

/***/ "./resources/js/src/views/_components/Datatable/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/_components/Datatable/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useDatatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDatatable */ "./resources/js/src/views/_components/Datatable/useDatatable.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./resources/js/src/views/_components/Datatable/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/antd/lib/table/style/css.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/pagination/style/css */ "./node_modules/antd/lib/pagination/style/css.js");
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



 // IMPORTANT, how use tag datatable in below.












var Content = antd__WEBPACK_IMPORTED_MODULE_13__["Layout"].Content;
var Option = antd__WEBPACK_IMPORTED_MODULE_13__["Select"].Option;

var datatable = function datatable(props) {
  var _useDatatable = Object(_useDatatable__WEBPACK_IMPORTED_MODULE_1__["default"])(props),
      pagination = _useDatatable.pagination,
      source = _useDatatable.source,
      loading = _useDatatable.loading,
      columns = _useDatatable.columns,
      openPopup = _useDatatable.openPopup,
      selectItem = _useDatatable.selectItem,
      handleAdd = _useDatatable.handleAdd,
      handleSearch = _useDatatable.handleSearch,
      handleOpenPopup = _useDatatable.handleOpenPopup,
      handleClosePopup = _useDatatable.handleClosePopup,
      handleShowPage = _useDatatable.handleShowPage,
      handlePagination = _useDatatable.handlePagination,
      allButtonAction = _useDatatable.allButtonAction; // useEffect(() => {
  //     console.log(pagination.current);
  // }, [pagination.current])


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
    title: "Detail Tombol Action",
    width: 350,
    visible: openPopup,
    onCancel: handleClosePopup,
    okButtonProps: {
      style: {
        display: 'none'
      }
    },
    cancelButtonProps: {
      style: {
        display: 'none'
      }
    }
  }, allButtonAction(selectItem, false)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    span: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    size: "large",
    className: "btn-success",
    onClick: function onClick() {
      return handleAdd();
    }
  }, "Tambah"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], {
    type: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 24,
    sm: 24,
    md: 6
  }, "Show \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Select"], {
    defaultValue: "5",
    style: {
      width: 70
    },
    onChange: handleShowPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "5"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "50"
  }, "50")), "\xA0 entries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 0,
    sm: 0,
    md: 12
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 24,
    sm: 24,
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginRight: 5,
      "float": 'right'
    }
  }, "Search :")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 24,
    sm: 24,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    onChange: function onChange(e) {
      return handleSearch(e);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Table"], {
    size: "small",
    loading: loading // handle column from useDatatable
    ,
    columns: columns // agar pagination bawaan hilang
    ,
    pagination: pagination,
    style: {
      minHeight: 270
    },
    dataSource: source.data,
    locale: {
      emptyText: 'Data Tidak Ada'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 24,
    sm: 24,
    md: 12
  }, "Showing ", pagination.current, " of ", pagination.total, " entries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 0,
    sm: 0,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Pagination"], {
    style: {
      "float": 'right'
    },
    total: pagination.total,
    onChange: handlePagination,
    current: pagination.current,
    pageSize: pagination.pageSize
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    xs: 24,
    sm: 24,
    md: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Pagination"], {
    size: "small",
    total: pagination.total,
    onChange: handlePagination,
    current: pagination.current,
    pageSize: pagination.pageSize
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (datatable); // how use tag datatable

/*
    <Datatable
        title="name_datatable" // e.g. table user
        hideEdit // hide button edit
        hideDelete // hide button delete
        hideAction // hide button column action
        disabledEdit
        disabledDelete
        columns={columns} // insert all column table
        nameRoute={nameRoute} // name route modul e.g /user, /document, dll
    />
*/

/***/ }),

/***/ "./resources/js/src/views/_components/Datatable/style.scss":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/_components/Datatable/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/_components/Datatable/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/_components/Datatable/useDatatable.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/_components/Datatable/useDatatable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _supports_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../supports/axios */ "./resources/js/src/supports/axios.js");
/* harmony import */ var _supports_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../supports/helper */ "./resources/js/src/supports/helper.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // third party

 // antd





var useDatatable = function useDatatable(props) {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.datatable;
  });
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  var typingTimer = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var addFilter = props.addFilter; // how use in below

  var addAction = props.addAction ? props.addAction : [];
  var nameRoute = props.nameRoute ? props.nameRoute : '/';
  var propsColumns = props.columns ? props.columns : []; // columns from menu e.g. menu user

  var allEffect = [state.remove, state.search, state.pagination.pageSize, state.pagination.current, addFilter];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchData();
    insertColumns();
  }, allEffect);

  var handleOpenPopup = function handleOpenPopup() {
    dispatch({
      type: 'OPEN_POPUP'
    });
  };

  var handleClosePopup = function handleClosePopup() {
    dispatch({
      type: 'CLOSE_POPUP'
    });
  };

  var insertColumns = function insertColumns() {
    propsColumns = [{
      key: 'no',
      title: 'No',
      width: '4%',
      dataIndex: '',
      render: function render(text, record, index) {
        return handleNumber(index, record);
      }
    }].concat(_toConsumableArray(propsColumns)); // if hideAction = true, hide column action

    if (!props.hideAction) {
      var width = 8;

      if (!props.usePopup) {
        width += 3 * addAction.length;
      }

      propsColumns = [].concat(_toConsumableArray(propsColumns), [{
        key: 'x',
        width: width + '%',
        dataIndex: '',
        title: 'Action',
        render: function render(_, record) {
          return allButtonAction(record);
        }
      }]);
    }

    setColumns(propsColumns);
  };

  var handleNumber = function handleNumber(index, record) {
    var per_page = Number(state.pagination.pageSize);
    var current_page = Number(state.pagination.current);
    var number = index + current_page * per_page;
    return number - per_page + 1 + '.';
  };

  var allButtonAction = function allButtonAction(record) {
    var usePopup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.usePopup;
    var actions = [{
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["EditOutlined"], null),
      color: 'primary',
      handle: function handle(e) {
        return handleEdit(e);
      },
      hide: props.hideEdit,
      disabled: props.disabledEdit
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteOutlined"], null),
      color: 'danger',
      handle: function handle(e) {
        return handleDelete(e);
      },
      hide: props.hideDelete,
      disabled: props.disabledDelete
    }];
    actions = [].concat(_toConsumableArray(addAction), _toConsumableArray(actions));

    if (usePopup) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        onClick: function onClick() {
          return handleDetail(record);
        }
      }, "Detail");
    } else {
      var data = record;
      var size = 'small';

      if (props.usePopup) {
        data = state.selectItem;
        size = 'large';
      }

      return actions.filter(function (item) {
        return !item.hide;
      }).map(function (item, index) {
        var attributes = {
          key: index,
          size: size,
          type: item.color,
          style: {
            margin: '1px'
          },
          disabled: item.disabled,
          className: "btn-".concat(item.color),
          onClick: function onClick() {
            return item.handle(data);
          } // how can addAction get data

        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], _extends({}, attributes, {
          block: props.usePopup
        }), item.title);
      });
    }
  };

  var handleDetail = function handleDetail(record) {
    dispatch({
      type: 'OPEN_POPUP'
    });
    dispatch({
      type: 'SELECT_ITEM',
      payload: record
    });
  };

  var handleAdd = function handleAdd() {
    history.push({
      pathname: nameRoute + "/form"
    });
  };

  var handleEdit = function handleEdit(data) {
    history.push({
      pathname: nameRoute + "/form",
      state: data
    });
    dispatch({
      type: 'CLOSE_POPUP'
    });
  };

  var handleDelete = function handleDelete(data) {
    dispatch({
      type: 'CLOSE_POPUP'
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
      icon: 'question',
      text: 'Anda yakin ingin menghapus data ini ?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Ya, Yakin.",
      cancelButtonText: "Tidak."
    }).then(function (result) {
      if (result.value) {
        dispatch({
          type: 'LOADING'
        });
        _supports_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(nameRoute + "/delete/" + data.id).then(function (response) {
          Object(_supports_helper__WEBPACK_IMPORTED_MODULE_5__["alert"])(response);
          dispatch({
            type: 'DELETE_DATA',
            payload: data.id
          });
        })["catch"](function (e) {
          dispatch({
            type: 'REMOVE_LOADING'
          });
          Object(_supports_helper__WEBPACK_IMPORTED_MODULE_5__["handleError"])(e);
        });
      }
    });
  };

  var handleSearch = function handleSearch(e) {
    var search = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      dispatch({
        type: 'SEARCH',
        payload: search
      });
    }, 800);
  };

  var handlePagination = function handlePagination(e) {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: e
    });
  };

  var handleShowPage = function handleShowPage(e) {
    dispatch({
      type: 'SHOW_PAGE',
      payload: e
    });
  };

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _objectSpread({
                search: state.search,
                page: state.pagination.current,
                per_page: state.pagination.pageSize
              }, addFilter);
              dispatch({
                type: 'LOADING'
              });
              _context.next = 4;
              return _supports_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(nameRoute, {
                params: params
              }).then(function (response) {
                var data = response.data;
                dispatch({
                  type: 'FETCH_DATA',
                  payload: data
                });
              })["catch"](function (e) {
                dispatch({
                  type: 'REMOVE_LOADING'
                });
                Object(_supports_helper__WEBPACK_IMPORTED_MODULE_5__["handleError"])(e);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  return _objectSpread({}, state, {
    columns: columns,
    // function
    handleAdd: handleAdd,
    handleSearch: handleSearch,
    handleShowPage: handleShowPage,
    allButtonAction: allButtonAction,
    handleOpenPopup: handleOpenPopup,
    handleClosePopup: handleClosePopup,
    handlePagination: handlePagination
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useDatatable);
/*
const addFilter = {name: null, address: null};
const addAction = [
    {title: <BarsOutlined />, color: 'info', handle:e => handleDetail(e)},
];
const columns = [
    {title: 'Name', dataIndex: 'name', key: 'name'},
];
*/

/***/ })

}]);