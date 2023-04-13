"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/organization/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/organization/index.jsx":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/organization/index.jsx ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Organization; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _assets_organization_org_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/organization/org.png */ "./src/assets/organization/org.png");
/* harmony import */ var _assets_organization_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/organization/arrow.png */ "./src/assets/organization/arrow.png");
/* harmony import */ var _assets_organization_member_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/organization/member.png */ "./src/assets/organization/member.png");
/* harmony import */ var _assets_organization_message_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/organization/message.png */ "./src/assets/organization/message.png");
/* harmony import */ var _assets_organization_activity_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/organization/activity.png */ "./src/assets/organization/activity.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);















var Organization = /*#__PURE__*/function (_Component) {
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Organization, _Component);
  var _super = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Organization);
  function Organization() {
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Organization);
    return _super.apply(this, arguments);
  }
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Organization, [{
    key: "toOrgmember",
    value: function toOrgmember() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/orglist/index'
      });
    }
  }, {
    key: "toOrgactivity",
    value: function toOrgactivity() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/orgfound/index'
      });
    }
  }, {
    key: "toOrgmessage",
    value: function toOrgmessage() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/orgmessage/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "wrapper-org",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
          src: _assets_organization_org_png__WEBPACK_IMPORTED_MODULE_2__,
          style: "width:100%;height:180px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "member",
            onClick: this.toOrgmember.bind(this),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                src: _assets_organization_member_png__WEBPACK_IMPORTED_MODULE_4__,
                style: "height:40px;width:40px;margin-top:6px"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "text",
                children: "\u7EC4\u7EC7\u5217\u8868"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              src: _assets_organization_arrow_png__WEBPACK_IMPORTED_MODULE_3__,
              style: "height:40px;width:40px;margin-top:6px"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "message",
            onClick: this.toOrgmessage.bind(this),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                src: _assets_organization_message_png__WEBPACK_IMPORTED_MODULE_5__,
                style: "height:40px;width:40px;margin-top:6px"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "text",
                children: "\u7EC4\u7EC7\u4FE1\u606F"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              src: _assets_organization_arrow_png__WEBPACK_IMPORTED_MODULE_3__,
              style: "height:40px;width:40px;margin-top:6px"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity",
            onClick: this.toOrgactivity.bind(this),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                src: _assets_organization_activity_png__WEBPACK_IMPORTED_MODULE_6__,
                style: "height:40px;width:40px;margin-top:6px"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "text",
                children: "\u521B\u5EFA\u7EC4\u7EC7"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              src: _assets_organization_arrow_png__WEBPACK_IMPORTED_MODULE_3__,
              style: "height:40px;width:40px;margin-top:6px"
            })]
          })]
        })]
      });
    }
  }]);
  return Organization;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/organization/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/organization/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/organization/index.jsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/organization/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/assets/organization/activity.png":
/*!**********************************************!*\
  !*** ./src/assets/organization/activity.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/organization/activity.png";

/***/ }),

/***/ "./src/assets/organization/arrow.png":
/*!*******************************************!*\
  !*** ./src/assets/organization/arrow.png ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAMAAAAAPFkHAAAAk1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAACampoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZmZkAAAAAAAAAAACZmZkAAAAAAAAAAAB1dXUAAABubm6YmJhra2tycnJoaGh9fX13d3eZmZlVVVVwcHCCgoJ0dHR5eXlqamqYmJh2dnZmZmaDg4OGhoZYWFh7e3uKUsmeAAAAMXRSTlMAAQIDBAYF/wcJCw0IEg8KFRDxDBEX8A4ZFD8cQ/FFQUc7PtEeQjlAPRjTVBlxNx08Y/fiiwAAAZ1JREFUeJzt1st6gjAQBeC2KKAIhpsopVqvVXt9/6frmQli3ZhMs+pXZ/97JphMcnerv1X3lyV2D1QieyFF9sw81A9uLT2vp4t/wMqepa+LtZVlSZG+3+cizY2bbJtJMAxHVGHYt7K6Xc9DYjga6BqR7RktU1onyfGQagyMto1WU5aAeYTKgTkY1kAhez7JPKqqJEkqjY2WV0qhA8jNPi2KIgWGNea2FAsdRptjVsco4Cgfo+d2uVcprTT/PAZBtlBqBpwgt2vZQBG6nASwW0WYLLWst5WRJiu2TVkqFacVtUyxVrSo2c6nJXJ17LWOL+hs21kd2+dNZaZprMrmiS1iabWnD2VFp3O2Tdl2LKGPz9qiYzFt7UJOyYIGWS1uGPSd6GQl+Uz4c8i+sqxFf05SILZsMpIv0i0RK6UlPpJoI1ZpPFu0mZLtj0NXpUXNspYcOn3Uk72WoqOuB8yS5cp+wHRjbcfySzDWumH6toZcioZpN8IP68lOOsJPF8fhQ3JxOFxXLpek49X82weBwzPE5fHj8uRyeejd6r/XN6nbKn4olAoXAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/organization/member.png":
/*!********************************************!*\
  !*** ./src/assets/organization/member.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/organization/member.png";

/***/ }),

/***/ "./src/assets/organization/message.png":
/*!*********************************************!*\
  !*** ./src/assets/organization/message.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/organization/message.png";

/***/ }),

/***/ "./src/assets/organization/org.png":
/*!*****************************************!*\
  !*** ./src/assets/organization/org.png ***!
  \*****************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAADdCAMAAAC8GeRLAAAAPFBMVEXo6OgzMzONjY27u7uOjo5hYWGkpKR2dnbd3d2wsLCZmZnOzs5VVVWHh4dKSkrGxsZTU1M2NjbR0dGQkJBHa2+rAAAA20lEQVR4nO3XSQrDMAxA0ShtnHSe7n/X2g2h0BwgKry30lLwEcYdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/2Uq+8Vu611YKfE1bb0Mv/pYpl04n3RqntdwapM8CdU8QxzaJE9CNc+p1nnKk9L89pS43uRJ6JNnjOMQozz5tDxjlDbIk0/N86nTdUd58ilxftyH5uxbms9U+ks/czwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDaGwIYAepbF0EZAAAAAElFTkSuQmCC";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/organization/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map