"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/stu_main/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_main/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_main/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _service_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);














var Main = /*#__PURE__*/function (_Component) {
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);
  var _super = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Main);
  function Main() {
    var _this;
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Main);
    _this = _super.apply(this, arguments);
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleitem", function (id) {
      console.log((0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_9__["default"])(id));
      console.log(id, '111111111111111');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorage({
        key: 'id',
        data: id
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/stu_xiangqing/index?id=' + id
      });
      return 1;
    });
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleitem1", function (id) {
      console.log(id, '111111111111111');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorage({
        key: 'id',
        data: id
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/stu_xiangqing1/index?id=' + id
      });
      return 1;
    });
    (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onPullDownRefresh", function () {
      _this.setState({
        offset: (_this.offset + 1).toString()
      });
      console.log(_this.offset);
    });
    _this.state = {
      currentBoxId: 'one',
      activities: [],
      activities1: [],
      offset: '0',
      id: ''
    };
    return _this;
  }

  //获取活动数据
  (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Main, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;
      var offset = this.state.offset;
      (0,_service_fetch__WEBPACK_IMPORTED_MODULE_2__.Fetch)("/service/student/service/query/all/".concat(offset), {}, 'GET', {
        Authorization: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('token')
      }).then(function (res) {
        console.log(res.orActivityDTOS);
        if (res.orActivityDTOS !== null) {
          _this2.setState({
            activities: res.orActivityDTOS
          });
        }
      }).catch(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          icon: 'none',
          title: '跳转错误'
        });
      });
      (0,_service_fetch__WEBPACK_IMPORTED_MODULE_2__.Fetch)("/organization/service/query/all/".concat(offset), {}, 'GET', {
        Authorization: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('token')
      }).then(function (res) {
        console.log(res.orActivityDTOS);
        if (res.orActivityDTOS !== null) {
          _this2.setState({
            activities1: res.orActivityDTOS
          });
        }
      }).catch(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          icon: 'none',
          title: '跳转错误'
        });
      });
    }
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

    // toXiangqing() {
    //   Taro.navigateTo({ url: '/pages/xiangqing/index' })
    // }
    // 上面代码改为
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        activities = _this$state.activities,
        activities1 = _this$state.activities1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "main_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "activity_btns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            id: "one",
            onClick: this.changeBox.bind(this),
            className: this.state.currentBoxId === "one" ? "activity_btn active2" : "activity_btn",
            children: "\u4E2A\u4EBA\u6D3B\u52A8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            id: "two",
            onClick: this.changeBox.bind(this),
            className: this.state.currentBoxId === "two" ? "activity_btn active2" : "activity_btn",
            children: "\u56E2\u4F53\u6D3B\u52A8"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            id: "one",
            className: this.state.currentBoxId === "one" ? "show" : "hidden",
            children: [activities.map(function (activity) {
              // const id = activity.id
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_box",
                onClick: function onClick() {
                  return _this3.handleitem(activity.id);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_image",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                    src: "".concat(activity.icon),
                    alt: ""
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: "activity_absoluted",
                    children: activity.isCompleted == '0' ? '活动报名中' : '报名已结束'
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_title",
                  children: activity.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_text",
                  children: ["\u65F6\u95F4\uFF1A", activity.beginTime, "-", activity.endTime]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_text last",
                  children: ["\u5730\u70B9\uFF1A", activity.address]
                })]
              }, activity.id);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "activity_box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_image",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: "http://rt23tifhy.hb-bkt.clouddn.com/bg1.png",
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_absoluted",
                  children: "\u6D3B\u52A8\u62A5\u540D\u4E2D"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_title",
                children: "\u5BB6\u5EAD\u516C\u76CA\u670D\u52A1\uFF08\u5E2E\u52A9\u7406\u53D1\uFF09"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u65F6\u95F4\uFF1A2021/05/06  09:00-12:00"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u5730\u70B9\uFF1A\u534E\u4E2D\u5E08\u8303\u5927\u5B66\u897F\u533A\u6559\u5DE5\u5BBF\u820D14"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text last",
                children: "\u62A5\u540D\u4EBA\u6570\uFF1A0/2"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "activity_box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_image",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: "http://rt23tifhy.hb-bkt.clouddn.com/bg1.png",
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_absoluted",
                  children: "\u6D3B\u52A8\u62A5\u540D\u4E2D"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_title",
                children: "\u4EE3\u4E70\u4EE3\u529E"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u65F6\u95F4\uFF1A2021/05/06  09:00-12:00"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u5730\u70B9\uFF1A\u534E\u4E2D\u5E08\u8303\u5927\u5B66\u897F\u533A\u6559\u5DE5\u5BBF\u820D14"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text last",
                children: "\u62A5\u540D\u4EBA\u6570\uFF1A0/2"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            id: "two",
            className: this.state.currentBoxId === "two" ? "show" : "hidden",
            children: [activities1.map(function (activity) {
              // const id = activity.id
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_box",
                onClick: function onClick() {
                  return _this3.handleitem1(activity.id);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_image",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                    src: "".concat(activity.icon),
                    alt: ""
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: "activity_absoluted",
                    children: activity.status == '0' ? '活动报名中' : '报名已结束'
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_title",
                  children: activity.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_text",
                  children: ["\u65F6\u95F4\uFF1A", activity.beginTime, "-", activity.endTime]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_text",
                  children: ["\u5730\u70B9\uFF1A", activity.address]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_text last",
                  children: ["\u62DB\u52DF\u4EBA\u6570\uFF1A", activity.count, "/", activity.num]
                })]
              }, activity.id);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "activity_box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_image",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: "http://rt23tifhy.hb-bkt.clouddn.com/bg2.png",
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_absoluted",
                  children: "\u6D3B\u52A8\u62A5\u540D\u4E2D"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_title",
                children: "\u793E\u533A\u516C\u76CA\u670D\u52A1\u5927\u96C6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u65F6\u95F4\uFF1A2021/05/06  09:00-12:00"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u5730\u70B9\uFF1A\u6B66\u6C49\u5E02\u6D2A\u5C71\u533A\u6D2A\u5C71\u8857\u97F5\u6E56\u793E\u533A"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text last",
                children: "\u62A5\u540D\u4EBA\u6570\uFF1A101/200"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "activity_box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_image",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: "http://rt23tifhy.hb-bkt.clouddn.com/bg2.png",
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "activity_absoluted",
                  children: "\u6D3B\u52A8\u62A5\u540D\u4E2D"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_title",
                children: "\u793E\u533A\u516C\u76CA\u670D\u52A1\u5927\u96C6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u65F6\u95F4\uFF1A2021/05/06  09:00-12:00"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text",
                children: "\u5730\u70B9\uFF1A\u6B66\u6C49\u5E02\u6D2A\u5C71\u533A\u6D2A\u5C71\u8857\u97F5\u6E56\u793E\u533A"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "activity_text last",
                children: "\u62A5\u540D\u4EBA\u6570\uFF1A0/200"
              })]
            })]
          })]
        })]
      });
    }
  }]);
  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/stu_main/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/stu_main/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_main/index.jsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/stu_main/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/stu_main/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map