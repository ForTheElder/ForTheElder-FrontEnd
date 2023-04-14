"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/stu_xiangqing/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_xiangqing/index.jsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_xiangqing/index.jsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Xiangqing; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _assets_main_shijian_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/main/shijian.png */ "./src/assets/main/shijian.png");
/* harmony import */ var _assets_main_address_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/main/address.png */ "./src/assets/main/address.png");
/* harmony import */ var _assets_main_dianhua_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/main/dianhua.png */ "./src/assets/main/dianhua.png");
/* harmony import */ var _assets_main_touxiang_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/main/touxiang.jpg */ "./src/assets/main/touxiang.jpg");
/* harmony import */ var _service_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

















var Xiangqing = /*#__PURE__*/function (_Component) {
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Xiangqing, _Component);
  var _super = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Xiangqing);
  // 获取本页活动详情数据
  function Xiangqing() {
    var _this;
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Xiangqing);
    _this = _super.apply(this, arguments);
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "toBaoming", function (id, title, icon) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorage({
        key: 'title',
        data: title
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorage({
        key: 'icon',
        data: icon
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/stu_baoming/index?id=' + id
      });
      return 1;
    });
    _this.state = {
      activity: []
    };
    return _this;
  }
  // state={
  //   activity: ''
  //   // activity: {title:'',address:'',beginTime:'',endTime:'',num:'',count:'',content:''},
  // }
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(Xiangqing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var params = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
      var id = params.router.params;
      var activity_id = id.id;
      console.log(activity_id);
      (0,_service_fetch__WEBPACK_IMPORTED_MODULE_6__.Fetch)("/service/student/service/query/voService/".concat(activity_id),
      //获取本页活动详情数据
      {
        sid: activity_id
      }, 'POST').then(function (res) {
        console.log('999');
        console.log(res);
        _this2.setState({
          activity: res.activity,
          title: res.activity.title,
          address: res.activity.address,
          beginTime: res.activity.beginTime,
          endTime: res.activity.endTime,
          content: res.activity.content,
          count: res.activity.count,
          num: res.activity.num,
          id: res.activity.id,
          icon: res.activity.icon
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var activity = this.state;
      var title = activity.title;
      var address = activity.address;
      var beginTime = activity.beginTime;
      var endTime = activity.endTime;
      var content = activity.content;
      var id = activity.id;
      var icon = activity.icon;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "main_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "activity_image",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "activity_absoluted",
            children: "\u516C\u76CA\u52A9\u8001\u6D3B\u52A8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
            src: icon,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "buwei"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "activity_info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "activity_title",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "activity_text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: _assets_main_shijian_png__WEBPACK_IMPORTED_MODULE_2__,
              alt: ""
            }), "\u6D3B\u52A8\u65F6\u95F4\uFF1A", beginTime, "-", endTime]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "activity_text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: _assets_main_address_png__WEBPACK_IMPORTED_MODULE_3__,
              alt: ""
            }), "\u6D3B\u52A8\u5730\u70B9\uFF1A", address]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "lianxi",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: _assets_main_touxiang_jpg__WEBPACK_IMPORTED_MODULE_5__,
              alt: "",
              className: "touxiang"
            }), "\u534E\u4E2D\u5E08\u8303\u5927\u5B66\u793E\u533A"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: _assets_main_dianhua_png__WEBPACK_IMPORTED_MODULE_4__,
              alt: ""
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "content_title",
            children: "\u6D3B\u52A8\u8BE6\u60C5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "content_box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "content_text",
              children: content
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "content tip",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "content_title",
            children: "\u6E29\u99A8\u63D0\u793A"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "content_box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "content_text",
              children: "\u672C\u6D3B\u52A8\u7531\u7EC4\u7EC7\u65B9\u53D1\u8D77\uFF0C\u5E76\u5DF2\u627F\u8BFA\u8BE5\u6D3B\u52A8\u4E3A\u975E\u8425\u5229\u6027\u6D3B\u52A8\u3002\u5E73\u53F0\u65B9\u672A\u59D4\u6258\u6388\u6743\u4EFB\u4F55\u516C\u53F8\u6216\u4E2A\u4EBA\u6536\u53D6\u624B\u7EED\u8D39\u3001\u670D\u52A1\u8D39\u7B49\u5404\u7C7B\u8D39\u7528\uFF0C\u8BF7\u52FF\u8F7B\u4FE1\u975E\u5B98\u65B9\u6E20\u9053\u7684\u865A\u5047\u4FE1\u606F\u3002"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "kongbai"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "bottom",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "bottom_button",
            onClick: function onClick() {
              return _this3.toBaoming(id, title, icon);
            },
            children: "\u5728\u7EBF\u62A5\u540D"
          })
        })]
      });
    }
  }]);
  return Xiangqing;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/stu_xiangqing/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/stu_xiangqing/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_xiangqing/index.jsx");


var config = {"navigationBarTitleText":"活动详情"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/stu_xiangqing/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/stu_xiangqing/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map