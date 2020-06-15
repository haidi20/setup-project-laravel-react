(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/antd/lib/modal/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/modal/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/antd/lib/modal/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/UserGroup/styles.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/src/views/UserGroup/styles.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/antd/lib/modal/style/index.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/antd/lib/modal/style/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-modal {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  position: relative;\n  top: 100px;\n  width: auto;\n  margin: 0 auto;\n  padding-bottom: 24px;\n  pointer-events: none;\n}\n.ant-modal-wrap {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n.ant-modal-title {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  word-wrap: break-word;\n}\n.ant-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  pointer-events: auto;\n}\n.ant-modal-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.ant-modal-close-x {\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 56px;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n}\n.ant-modal-close:focus,\n.ant-modal-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n  text-decoration: none;\n}\n.ant-modal-header {\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border-bottom: 1px solid #f0f0f0;\n  border-radius: 2px 2px 0 0;\n}\n.ant-modal-body {\n  padding: 24px;\n  font-size: 14px;\n  line-height: 1.5715;\n  word-wrap: break-word;\n}\n.ant-modal-footer {\n  padding: 10px 16px;\n  text-align: right;\n  background: transparent;\n  border-top: 1px solid #f0f0f0;\n  border-radius: 0 0 2px 2px;\n}\n.ant-modal-footer button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal.zoom-enter,\n.ant-modal.zoom-appear {\n  -webkit-transform: none;\n          transform: none;\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ant-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  filter: alpha(opacity=50);\n}\n.ant-modal-mask-hidden {\n  display: none;\n}\n.ant-modal-open {\n  overflow: hidden;\n}\n.ant-modal-centered {\n  text-align: center;\n}\n.ant-modal-centered::before {\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.ant-modal-centered .ant-modal {\n  top: 0;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .ant-modal {\n    max-width: calc(100vw - 16px);\n    margin: 8px auto;\n  }\n  .ant-modal-centered .ant-modal {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n}\n.ant-modal-confirm .ant-modal-header {\n  display: none;\n}\n.ant-modal-confirm .ant-modal-close {\n  display: none;\n}\n.ant-modal-confirm .ant-modal-body {\n  padding: 32px 32px 24px;\n}\n.ant-modal-confirm-body-wrapper::before {\n  display: table;\n  content: '';\n}\n.ant-modal-confirm-body-wrapper::after {\n  display: table;\n  clear: both;\n  content: '';\n}\n.ant-modal-confirm-body .ant-modal-confirm-title {\n  display: block;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.ant-modal-confirm-body .ant-modal-confirm-content {\n  margin-top: 8px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n}\n.ant-modal-confirm-body > .anticon {\n  float: left;\n  margin-right: 16px;\n  font-size: 22px;\n}\n.ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {\n  margin-left: 38px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns {\n  float: right;\n  margin-top: 24px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {\n  color: #ff4d4f;\n}\n.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,\n.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {\n  color: #faad14;\n}\n.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {\n  color: #1890ff;\n}\n.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {\n  color: #52c41a;\n}\n.ant-modal-wrap-rtl {\n  direction: rtl;\n}\n.ant-modal-wrap-rtl .ant-modal-close {\n  right: initial;\n  left: 0;\n}\n.ant-modal-wrap-rtl .ant-modal-footer {\n  text-align: left;\n}\n.ant-modal-wrap-rtl .ant-modal-footer button + button {\n  margin-right: 8px;\n  margin-left: 0;\n}\n.ant-modal-wrap-rtl .ant-modal-confirm-body {\n  direction: rtl;\n}\n.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon {\n  float: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {\n  margin-right: 38px;\n  margin-left: 0;\n}\n.ant-modal-wrap-rtl .ant-modal-confirm-btns {\n  float: left;\n}\n.ant-modal-wrap-rtl .ant-modal-confirm-btns button + button {\n  margin-right: 8px;\n  margin-left: 0;\n}\n.ant-modal-wrap-rtl.ant-modal-centered .ant-modal {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/views/UserGroup/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/UserGroup/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/Datatable */ "./resources/js/src/views/_components/Datatable/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./resources/js/src/views/UserGroup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

 // components









var Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content;

var userGroup = function userGroup(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var nameRoute = '/user-group';
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }];

  var access = function access(data) {
    history.push({
      pathname: nameRoute + "/access",
      state: data
    });
  };

  var addAction = [{
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["ControlOutlined"], null),
    color: 'info',
    handle: function handle(e) {
      return access(e);
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-content"
  }, "User Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: "4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-layout-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Datatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columns: columns,
    nameRoute: nameRoute,
    addAction: addAction
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(userGroup));

/***/ }),

/***/ "./resources/js/src/views/UserGroup/styles.scss":
/*!******************************************************!*\
  !*** ./resources/js/src/views/UserGroup/styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/views/UserGroup/styles.scss");

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