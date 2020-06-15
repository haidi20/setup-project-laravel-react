(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/src/supports/accessMenu.js":
/*!*************************************************!*\
  !*** ./resources/js/src/supports/accessMenu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accessMenu = [{
  name: 'Dashboard',
  index: 'dashboard',
  access: ['read']
}, {
  name: 'User',
  index: 'user',
  access: ['read', 'create', 'edit', 'delete']
}, {
  name: 'User Group',
  index: 'userGroup',
  access: ['read', 'create', 'edit', 'delete', 'access']
}];
/* harmony default export */ __webpack_exports__["default"] = (accessMenu);

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

/***/ "./resources/js/src/views/UserGroup/partials/Access/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/UserGroup/partials/Access/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _useAccess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAccess */ "./resources/js/src/views/UserGroup/partials/Access/useAccess.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/antd/lib/table/style/css.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content;

var access = function access(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useAccess = Object(_useAccess__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      state = _useAccess.state,
      setState = _useAccess.setState;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getUserGroup();
  }, []);

  var getUserGroup = function getUserGroup() {
    if (props.location.state != undefined) {
      var data = props.location.state;
      setState(function (prev) {
        return _objectSpread({}, prev, {
          userGroup: data
        });
      });
    }
  };

  var back = function back() {
    history.push('/user-group');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-content"
  }, "Access"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    size: "large",
    className: "btn-success",
    style: {
      marginBottom: 10
    },
    onClick: function onClick() {
      return back();
    }
  }, "Kembali"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-layout-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Table"], {
    size: "small",
    columns: state.columns,
    style: {
      minHeight: 270
    },
    dataSource: state.data,
    locale: {
      emptyText: 'Data Tidak Ada'
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(access));

/***/ }),

/***/ "./resources/js/src/views/UserGroup/partials/Access/useAccess.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/UserGroup/partials/Access/useAccess.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supports_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../supports/axios */ "./resources/js/src/supports/axios.js");
/* harmony import */ var _supports_accessMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../supports/accessMenu */ "./resources/js/src/supports/accessMenu.js");
/* harmony import */ var _supports_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../supports/helper */ "./resources/js/src/supports/helper.js");
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/checkbox/style/css */ "./node_modules/antd/lib/checkbox/style/css.js");
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 //supports







var useAccess = function useAccess(props) {
  var nameRoute = '/permission';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      clickMenu = _useState4[0],
      setClickMenu = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    userGroup: {},
    data: [],
    columns: [{
      title: 'Name Menus',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Access',
      dataIndex: 'data',
      key: 'date'
    }]
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sendPermissions();
  }, [clickMenu]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    insertData(); // console.log(checked);
  }, [checked]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getAccess();
  }, [state.userGroup]);

  var getAccess = function getAccess() {
    !Object(_supports_helper__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(state.userGroup) && Object(_supports_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'get',
      url: nameRoute,
      params: state.userGroup
    }).then(function (response) {
      var data = response.data;

      if (data.length != 0) {
        data.map(function (item) {
          if (item.access != null) {
            var access = item.access.split(',');
            access.map(function (value) {
              setChecked(function (prev) {
                return _objectSpread({}, prev, _defineProperty({}, item.menu, _objectSpread({}, prev[item.menu], _defineProperty({}, value, true))));
              });
            });
          } // console.log(data);

        });
      }
    })["catch"](function (error) {
      console.log(error); // handleError(error);
    });
  };

  var handleChecked = function handleChecked(menu, item) {
    if (checked[menu]) {
      if (checked[menu][item]) {
        return checked[menu][item];
      }
    }
  };

  var choose = function choose(e, menu, access) {
    setChecked(function (prev) {
      return _objectSpread({}, prev, _defineProperty({}, menu, _objectSpread({}, prev[menu], _defineProperty({}, access, e.target.checked))));
    });
    setClickMenu({
      menu: menu
    });
  };

  var customAccess = function customAccess(menu) {
    return menu.access.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
        key: index,
        name: item,
        onChange: function onChange(e) {
          return choose(e, menu.index, item);
        },
        checked: handleChecked(menu.index, item)
      }, item);
    });
  };

  var insertData = function insertData() {
    var data = _supports_accessMenu__WEBPACK_IMPORTED_MODULE_2__["default"].filter(function (item) {
      return item.index != null;
    }).map(function (item, index) {
      return _objectSpread({}, item, {
        key: index,
        data: customAccess(item)
      });
    });
    setState(function (prev) {
      return _objectSpread({}, prev, {
        data: data
      });
    });
  };

  var sendPermissions = function sendPermissions() {
    var access = checked[clickMenu.menu] && Object.keys(checked[clickMenu.menu]).filter(function (item) {
      return checked[clickMenu.menu][item] != false;
    }).toString();
    var data = {
      menu: clickMenu.menu,
      access: access,
      user_group_id: state.userGroup.id
    };
    !Object(_supports_helper__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(clickMenu) && Object(_supports_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'post',
      url: nameRoute + '/store',
      data: data
    }).then(function (response) {
      // console.log(response);
      Object(_supports_helper__WEBPACK_IMPORTED_MODULE_3__["alert"])(response);
    })["catch"](function (error) {
      console.log(error); // handleError(error);
    });
  };

  return {
    state: state,
    setState: setState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useAccess);

/***/ })

}]);