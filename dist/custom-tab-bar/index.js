"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomTabBar; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);








function CustomTabBar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
    _useState2 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      pagePath: 'pages/main/index',
      text: '首页',
      iconPath: '/assets/tab/home.png',
      selectedIconPath: '/assets/tab/home_selected.png'
    }, {
      pagePath: 'pages/order/index',
      text: '订单',
      iconPath: '/assets/tab/sort.png',
      selectedIconPath: '/assets/tab/sort_selected.png'
    }, {
      pagePath: 'pages/stu_mine/index',
      text: '我的',
      iconPath: '/assets/tab/user.png',
      selectedIconPath: '/assets/tab/user_selected.png'
    }]),
    _useState6 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 1),
    elder = _useState6[0];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      pagePath: 'pages/stu_main/index',
      text: '首页',
      iconPath: '/assets/tab/home.png',
      selectedIconPath: '/assets/tab/home_selected.png'
    }, {
      pagePath: 'pages/stu_signIn/index',
      text: '签到',
      iconPath: '/assets/tab/location.png',
      selectedIconPath: '/assets/tab/location_selected.png'
    }, {
      pagePath: 'pages/stu_mine/index',
      text: '我的',
      iconPath: '/assets/tab/user.png',
      selectedIconPath: '/assets/tab/user_selected.png'
    }]),
    _useState8 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 1),
    student = _useState8[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(elder),
    _useState10 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
    list = _useState10[0],
    setList = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('type', _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('type'));
    setType(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('type'));
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('type') === '0') {
      setList(elder);
      console.log('elder');
    } else {
      setList(student);
      console.log('stu');
    }
  }, [type]);
  var changeSelected = function changeSelected(index) {
    setSelected(index);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: '/' + list[index].pagePath
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.CoverView, {
    className: "bottom-tab",
    children: list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.CoverView, {
        onClick: function onClick() {
          return changeSelected(index);
        },
        className: "bottom-tab-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.CoverImage, {
          className: "bottom-tab-item-img",
          src: item.iconPath
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.CoverView, {
          className: "bottom-tab-item-text",
          style: {
            color: '#000000'
          },
          children: item.text
        })]
      }, "".concat(item.text));
    })
  });
}

/***/ }),

/***/ "./src/custom-tab-bar/index.jsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.jsx");


var inst = Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createComponentConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'custom-tab-bar/index'))



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/custom-tab-bar/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map