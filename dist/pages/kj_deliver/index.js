"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/kj_deliver/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/kj_deliver/index.jsx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/kj_deliver/index.jsx ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Deliver; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);






function Deliver() {
  var name = '设备教学';
  // const [name, setName] = useState('')
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['请选择', '1', '2', '3']),
    _useState2 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options[0]),
    _useState4 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    thisOption = _useState4[0],
    setThisOption = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('日期'),
    _useState6 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    date = _useState6[0],
    setDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('开始'),
    _useState8 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    start = _useState8[0],
    setStart = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('结束'),
    _useState10 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    end = _useState10[0],
    setEnd = _useState10[1];
  // const [isCost, setIsCost] = useState(false)
  // const [content, setContent] = useState('')
  // const [attention, setAttention] = useState('')
  // const [showAttention, setShowAttention] = useState(false)
  // const params = getCurrentInstance()
  // const id = params.router.params
  // const goodsid = id.goodsid

  var changeDate = function changeDate(e) {
    setDate(e.detail.value);
    console.log(e.detail.value);
  };
  var changeStart = function changeStart(e) {
    setStart(e.detail.value);
    console.log(e.detail.value);
  };
  var changeEnd = function changeEnd(e) {
    setEnd(e.detail.value);
    console.log(e.detail.value);
  };
  var changeCost = function changeCost(e) {
    setIsCost(e.detail.value);
    console.log(e.detail.value);
  };
  var getText = function getText(e) {
    setContent(e.detail.value);
    console.log(e.detail.value);
  };

  // const deliver = () => {
  //   let newAttention = ''
  //   if(name === '') {
  //     newAttention += "请填写活动名称\n"
  //   }

  //   if(thisOption === options[0]){
  //     newAttention += "请选择活动区域\n"
  //   }

  //   if(date !== "日期" && start !== "开始" && end !== "结束"){
  //     let time = new Date();
  //     let d1 = Date.parse(date)
  //     let d2 = time.getTime()
  //     let t1 = time.setHours(start.split(":")[0],start.split(":")[1])
  //     let t2 = time.setHours(end.split(":")[0],end.split(":")[1])
  //     if(d2 < d1 || t2 <= t1){
  //       newAttention += "请选择正确的活动时间\n"
  //     }
  //   }else {
  //       newAttention += "请选择正确的活动时间\n"
  //   }

  //   if(content === ''){
  //     newAttention += "请填写活动内容\n"
  //   }

  //   if(newAttention !== ''){
  //     setAttention(newAttention)
  //     setShowAttention(true)
  //     setTimeout(() => {
  //       setShowAttention(false)
  //     }, 3000);
  //   }
  // }

  var deliver = function deliver() {
    if (date !== "日期" && start !== "开始" && end !== "结束") {
      var time = new Date();
      var d1 = Date.parse(date);
      var d2 = time.getTime();
      var t1 = time.setHours(start.split(":")[0], start.split(":")[1]);
      var t2 = time.setHours(end.split(":")[0], end.split(":")[1]);
      if (d2 < d1 || t2 <= t1) {
        return false;
      }
      showToast('发布成功');
    } else {
      showToast('请选择时间');
    }
  };
  var cancel = function cancel() {
    console.log('取消');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "wrapper-del",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "activity-name",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: "\u6D3B\u52A8\u540D\u79F0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "name",
          value: name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "activity-area",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: "\u6D3B\u52A8\u533A\u57DF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Picker, {
          mode: "selector",
          range: options,
          onChange: function onChange(e) {
            return changeOption(e);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "area",
            children: thisOption
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "activity-time",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: "\u6D3B\u52A8\u65F6\u95F4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Picker, {
          mode: "date",
          onChange: changeDate,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "date",
            children: date
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: "-"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Picker, {
          mode: "time",
          onChange: changeStart,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "start",
            children: start
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: "-"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Picker, {
          mode: "time",
          onChange: changeEnd,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "end",
            children: end
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "btn",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "deliver",
          onClick: deliver,
          children: "\u53D1\u5E03"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "cancel",
          onClick: cancel,
          children: "\u53D6\u6D88"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/kj_deliver/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/kj_deliver/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/kj_deliver/index.jsx");


var config = {"navigationBarTitleText":"快捷发布"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/kj_deliver/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/kj_deliver/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map