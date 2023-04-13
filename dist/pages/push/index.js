"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/push/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/push/index.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/push/index.jsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Push; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _assets_main_img1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/main/img1.png */ "./src/assets/main/img1.png");
/* harmony import */ var _assets_main_img2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/main/img2.png */ "./src/assets/main/img2.png");
/* harmony import */ var _assets_main_img3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/main/img3.png */ "./src/assets/main/img3.png");
/* harmony import */ var _assets_main_img4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/main/img4.png */ "./src/assets/main/img4.png");
/* harmony import */ var _assets_main_img5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/main/img5.png */ "./src/assets/main/img5.png");
/* harmony import */ var _assets_main_img6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/main/img6.png */ "./src/assets/main/img6.png");
/* harmony import */ var _assets_main_img7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/main/img7.png */ "./src/assets/main/img7.png");
/* harmony import */ var _assets_main_img8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/main/img8.png */ "./src/assets/main/img8.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);


















var Push = /*#__PURE__*/function (_Component) {
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Push, _Component);
  var _super = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Push);
  function Push() {
    var _this;
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, Push);
    _this = _super.apply(this, arguments);
    _this.state = {
      currentBoxId: 'one'
    };
    return _this;
  }
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__["default"])(Push, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {}
  }, {
    key: "changeBox",
    value: function changeBox(e) {
      var currentFlag = e.currentTarget.id;
      switch (currentFlag) {
        case 'one':
          this.setState({
            currentBoxId: 'one'
          });
          break;
        case 'two':
          this.setState({
            currentBoxId: 'two'
          });
      }
    }
  }, {
    key: "toDeliver",
    value: function toDeliver() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/kj_deliver/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "push_btns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            id: "one",
            onClick: this.changeBox.bind(this),
            className: this.state.currentBoxId === "one" ? "push_btn active2" : "push_btn",
            children: "\u514D\u8D39\u670D\u52A1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            id: "two",
            onClick: this.changeBox.bind(this),
            className: this.state.currentBoxId === "two" ? "push_btn active2" : "push_btn",
            children: "\u6536\u8D39\u670D\u52A1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            id: "one",
            className: this.state.currentBoxId === "one" ? "show" : "hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "boxxs",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                onClick: this.toDeliver.bind(this),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img5_png__WEBPACK_IMPORTED_MODULE_6__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u8BBE\u5907\u6559\u5B66"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img6_png__WEBPACK_IMPORTED_MODULE_7__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u804A\u5929\u966A\u4F34"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img7_png__WEBPACK_IMPORTED_MODULE_8__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u5FC3\u7406\u758F\u5BFC"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img8_png__WEBPACK_IMPORTED_MODULE_9__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u793E\u533A\u6D3B\u52A8"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img7_png__WEBPACK_IMPORTED_MODULE_8__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u5FC3\u7406\u758F\u5BFC"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img8_png__WEBPACK_IMPORTED_MODULE_9__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u793E\u533A\u6D3B\u52A8"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            id: "two",
            className: this.state.currentBoxId === "two" ? "show" : "hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "boxxs",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img1_png__WEBPACK_IMPORTED_MODULE_2__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u5065\u5EB7\u4F53\u68C0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img2_png__WEBPACK_IMPORTED_MODULE_3__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u770B\u75C5\u4E70\u836F"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img3_png__WEBPACK_IMPORTED_MODULE_4__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u6838\u9178\u68C0\u6D4B"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img4_png__WEBPACK_IMPORTED_MODULE_5__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u4EE3\u4E70\u4EE3\u529E"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img3_png__WEBPACK_IMPORTED_MODULE_4__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u6838\u9178\u68C0\u6D4B"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "boxx",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_main_img4_png__WEBPACK_IMPORTED_MODULE_5__,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "p1",
                  children: "\u4EE3\u4E70\u4EE3\u529E"
                })]
              })]
            })
          })]
        })]
      });
    }
  }]);
  return Push;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/push/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/push/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/push/index.jsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/push/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/assets/main/img1.png":
/*!**********************************!*\
  !*** ./src/assets/main/img1.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img1.png";

/***/ }),

/***/ "./src/assets/main/img2.png":
/*!**********************************!*\
  !*** ./src/assets/main/img2.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img2.png";

/***/ }),

/***/ "./src/assets/main/img3.png":
/*!**********************************!*\
  !*** ./src/assets/main/img3.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img3.png";

/***/ }),

/***/ "./src/assets/main/img4.png":
/*!**********************************!*\
  !*** ./src/assets/main/img4.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img4.png";

/***/ }),

/***/ "./src/assets/main/img5.png":
/*!**********************************!*\
  !*** ./src/assets/main/img5.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img5.png";

/***/ }),

/***/ "./src/assets/main/img6.png":
/*!**********************************!*\
  !*** ./src/assets/main/img6.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img6.png";

/***/ }),

/***/ "./src/assets/main/img7.png":
/*!**********************************!*\
  !*** ./src/assets/main/img7.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img7.png";

/***/ }),

/***/ "./src/assets/main/img8.png":
/*!**********************************!*\
  !*** ./src/assets/main/img8.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/img8.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/push/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map