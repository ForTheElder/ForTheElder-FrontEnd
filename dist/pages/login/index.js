"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/login/index.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/login/index.jsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);









function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['老人', '学生']),
    _useState2 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 1),
    selector = _useState2[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('老人'),
    _useState4 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    code = _useState6[0],
    setCode = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    formState = _useState8[0],
    setFormState = _useState8[1];
  var telRef1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var psRef1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var telRef2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var psRef2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var checkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var select = function select(e) {
    setSelected(selector[e.detail.value]);
  };
  function login() {
    return _login.apply(this, arguments);
  }
  function _login() {
    _login = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var phone, password, data, header;
      return (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(formState === 1)) {
                _context.next = 3;
                break;
              }
              setFormState(0);
              return _context.abrupt("return");
            case 3:
              phone = '';
              password = '';
              if (!(telRef1 && telRef1.current.value.length === 11)) {
                _context.next = 9;
                break;
              }
              phone = telRef1.current.value;
              _context.next = 10;
              break;
            case 9:
              return _context.abrupt("return");
            case 10:
              if (psRef1) {
                password = psRef1.current.value;
              }
              data = {
                phone: phone,
                password: password
              };
              header = {
                'content-type': 'application/json'
              };
              console.log(data);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
                url: 'http://124.70.208.213:9001/user/user/login',
                data: data,
                method: 'POST',
                header: header
              }).then(function (res) {
                if (res.statusCode === 200) {
                  console.log(res.statusCode);
                  console.log(res.data);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('token', res.data.token);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('type', res.data.type);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000
                  });
                  if (res.data.type === '0') {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
                      url: '/pages/main/index'
                    });
                  } else {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
                      url: '/pages/stu_main/index'
                    });
                  }
                } else if (res.statusCode === 500) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '登录超时',
                    icon: 'loading',
                    duration: 2000
                  });
                } else {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '登录失败',
                    icon: 'error',
                    duration: 2000
                  });
                }
              });
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _login.apply(this, arguments);
  }
  function getCode() {
    return _getCode.apply(this, arguments);
  }
  function _getCode() {
    _getCode = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2() {
      var phone, header;
      return (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              phone = '';
              if (!(telRef2 && telRef2.current.value.length === 11)) {
                _context2.next = 5;
                break;
              }
              phone = telRef2.current.value;
              _context2.next = 6;
              break;
            case 5:
              return _context2.abrupt("return");
            case 6:
              header = {
                'content-type': 'application/json'
              };
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
                url: "http://124.70.208.213:9001/user/user/sendCode/".concat(phone),
                method: 'GET',
                header: header
              }).then(function (res) {
                console.log(res.statusCode);
                if (res.statusCode === 200) {
                  console.log(res.data);
                  setCode(res.data.code);
                }
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getCode.apply(this, arguments);
  }
  function register() {
    return _register.apply(this, arguments);
  }
  function _register() {
    _register = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3() {
      var phone, password, type, data, header;
      return (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(formState === 0)) {
                _context3.next = 3;
                break;
              }
              setFormState(1);
              return _context3.abrupt("return");
            case 3:
              phone = '';
              password = '';
              console.log(11111);
              type = selected === '老人' ? '0' : '1';
              console.log(22222);
              if (!(telRef2 && telRef2.current.value.length === 11)) {
                _context3.next = 12;
                break;
              }
              phone = telRef2.current.value;
              _context3.next = 13;
              break;
            case 12:
              return _context3.abrupt("return");
            case 13:
              if (!(psRef2 && psRef2.current.value)) {
                _context3.next = 17;
                break;
              }
              password = psRef2.current.value;
              _context3.next = 18;
              break;
            case 17:
              return _context3.abrupt("return");
            case 18:
              if (!(checkRef.current.value.toLowerCase() !== code.toLowerCase())) {
                _context3.next = 20;
                break;
              }
              return _context3.abrupt("return");
            case 20:
              data = {
                phone: phone,
                password: password,
                code: code,
                type: type
              };
              header = {
                'content-type': 'application/json'
              };
              console.log(data);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
                url: 'http://124.70.208.213:9001/user/user/register',
                data: data,
                method: 'POST',
                header: header
              }).then(function (res) {
                if (res.statusCode === 200) {
                  // console.log(res.statusCode);
                  // console.log(res.data)
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '注册成功',
                    icon: 'success',
                    duration: 2000
                  });
                  setFormState(0);
                }
              });
            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _register.apply(this, arguments);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "wrapper",
    children: formState === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "login-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: "title",
        children: "\u767B\u5F55"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "username",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u624B\u673A\u53F7:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
            ref: telRef1,
            type: "text",
            className: "username-input"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "password",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u5BC6\u7801:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
            ref: psRef1,
            type: "password",
            className: "password-input"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "btn",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "btn-login",
          onClick: login,
          children: "\u767B\u5F55"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "btn-register",
          onClick: register,
          children: "\u6CE8\u518C"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "register-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: "title",
        children: "\u6CE8\u518C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "username",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u624B\u673A\u53F7:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
            ref: telRef2,
            type: "text",
            className: "username-input"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "password",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u5BC6\u7801:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
            ref: psRef2,
            type: "password",
            className: "password-input"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "check",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u9A8C\u8BC1\u7801:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
            ref: checkRef,
            type: "text",
            className: "check-input"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "getCode",
            onClick: getCode,
            children: code === '' ? '获取验证码' : code
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "type",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            children: "\u7528\u6237\u7C7B\u578B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "picker-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Picker, {
              className: "picker",
              mode: "selector",
              range: selector,
              onChange: select,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
                className: "pick-view",
                children: selected
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "btn",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "btn-login",
          onClick: login,
          children: "\u767B\u5F55"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "btn-register",
          onClick: register,
          children: "\u6CE8\u518C"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/login/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/login/index.jsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/login/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map