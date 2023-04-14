"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/stu_mine/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_mine/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_mine/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mine; }
/* harmony export */ });
/* unused harmony export StuMine */
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stu_mine_mineAvatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/stu_mine/mineAvatar.png */ "./src/assets/stu_mine/mineAvatar.png");
/* harmony import */ var _assets_stu_mine_editName_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/stu_mine/editName.png */ "./src/assets/stu_mine/editName.png");
/* harmony import */ var _assets_mine_mine_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/mine/mine_avatar.png */ "./src/assets/mine/mine_avatar.png");
/* harmony import */ var _assets_mine_information_avatar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/mine/information_avatar.png */ "./src/assets/mine/information_avatar.png");
/* harmony import */ var _assets_mine_organization_detail_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/mine/organization_detail.png */ "./src/assets/mine/organization_detail.png");
/* harmony import */ var _assets_mine_information_detail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/mine/information_detail.png */ "./src/assets/mine/information_detail.png");
/* harmony import */ var _assets_mine_help_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/mine/help.png */ "./src/assets/mine/help.png");
/* harmony import */ var _assets_mine_back_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mine/back.png */ "./src/assets/mine/back.png");
/* harmony import */ var _service_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);


















function ElderMine() {
  function show() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '开发中',
      icon: 'none',
      duration: 1000
    });
  }
  function toEditInfo() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/editInfo/index'
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "mine-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "mine-head",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-avatar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
          className: "mine-image",
          src: _assets_mine_mine_avatar_png__WEBPACK_IMPORTED_MODULE_4__,
          style: "width:76px;height:76px;"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-nickname",
          children: "\u6A31\u6843\u5C0F\u4E38"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-edit",
          onClick: toEditInfo,
          children: "\u70B9\u51FB\u7F16\u8F91\u4E2A\u4EBA\u4FE1\u606F"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "mine-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-child",
        onClick: show,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-linebefore",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "mine-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              className: "mine-image",
              src: _assets_mine_organization_detail_png__WEBPACK_IMPORTED_MODULE_6__,
              style: "width:44px;height:44px;border-radius=50%;"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "line-text",
            children: "\u7533\u8BC9\u8BA2\u5355"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-lineback",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: _assets_mine_back_png__WEBPACK_IMPORTED_MODULE_9__,
            style: "width:16px;height:22px;"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-child",
        onClick: show,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-linebefore",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "mine-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              className: "mine-image",
              src: _assets_mine_information_avatar_png__WEBPACK_IMPORTED_MODULE_5__,
              style: "width:44px;height:44px;"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "line-text",
            children: "\u6211\u7684\u8BFE\u7A0B"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-lineback",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: _assets_mine_back_png__WEBPACK_IMPORTED_MODULE_9__,
            style: "width:16px;height:22px;"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-child",
        onClick: show,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-linebefore",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "mine-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              className: "mine-image",
              src: _assets_mine_information_detail_png__WEBPACK_IMPORTED_MODULE_7__,
              style: "width:44px;height:44px;"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "line-text",
            children: "\u6211\u7684\u9080\u8BF7"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-lineback",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: _assets_mine_back_png__WEBPACK_IMPORTED_MODULE_9__,
            style: "width:16px;height:22px;"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "mine-child",
        onClick: show,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-linebefore",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "mine-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              className: "mine-image",
              src: _assets_mine_help_png__WEBPACK_IMPORTED_MODULE_8__,
              style: "width:44px;height:44px;"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "line-text",
            children: "\u5546\u5BB6\u534F\u8BAE"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "mine-lineback",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: _assets_mine_back_png__WEBPACK_IMPORTED_MODULE_9__,
            style: "width:16px;height:22px;"
          })
        })]
      })]
    })]
  });
}
function StuMine() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('幸福时光'),
    _useState2 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState3, 2),
    isEdit = _useState4[0],
    setIsEdit = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState6 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState5, 2),
    time = _useState6[0],
    setTime = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState7, 2),
    tab = _useState8[0],
    setTab = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState9, 2),
    isChange = _useState10[0],
    setIsChange = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('荔枝'),
    _useState12 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState11, 2),
    nickName = _useState12[0],
    setNickName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('18500229809'),
    _useState14 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState13, 2),
    phone = _useState14[0],
    setPhone = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('女'),
    _useState16 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState15, 2),
    sex = _useState16[0],
    setSex = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1999-03-21'),
    _useState18 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState17, 2),
    birthday = _useState18[0],
    setBirthday = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('403423**********02'),
    _useState20 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState19, 2),
    id = _useState20[0],
    setId = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('北京 海淀区'),
    _useState22 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState21, 2),
    address = _useState22[0],
    setAddress = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('腾达大厦30层'),
    _useState24 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState23, 2),
    detailAddress = _useState24[0],
    setDetailAddress = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState26 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState25, 2),
    userInfo = _useState26[0],
    setUserInfo = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['男', '女']),
    _useState28 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState27, 2),
    options = _useState28[0],
    setOptions = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      img: 'http://rt23tifhy.hb-bkt.clouddn.com/activity1.png',
      activity_name: '社区公益服务大集1',
      activity_time: '2021/05/06   09:00-12:00',
      activity_area: '北京市东城区西花市南里东区15号楼北侧 ',
      attendance: '13',
      total: '20',
      id: '001',
      status: '已报名'
    }, {
      img: 'http://rt23tifhy.hb-bkt.clouddn.com/activity1.png',
      activity_name: '社区公益服务大集2',
      activity_time: '2021/05/05   09:00-12:00',
      activity_area: '北京市东城区西花市南里东区15号楼北侧 ',
      attendance: '13',
      total: '20',
      id: '001',
      status: '已结束'
    }]),
    _useState30 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState29, 2),
    activities = _useState30[0],
    setActivities = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_service_fetch__WEBPACK_IMPORTED_MODULE_10__.getData)('/user/info/query').then(function (data) {
      console.log(data.userInfo);
      setUserInfo(data.userInfo);
    });
  }, []);
  var editUsername = function editUsername(e) {
    var newName = e.detail.value;
    setUsername(newName);
    setIsEdit(false);
  };
  var changeInfo = function changeInfo() {
    var newUserInfo = {
      phone: phone,
      sex: sex,
      wechat: phone,
      avatar: userInfo.avatar,
      nickName: nickName,
      birthday: birthday,
      organizationId: userInfo.organizationId,
      credit: userInfo.credit
    };
    setUserInfo(newUserInfo);
    setIsChange(!isChange);
    (0,_service_fetch__WEBPACK_IMPORTED_MODULE_10__.Fetch)('/user/info/update', newUserInfo);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "wrapper-stu-mine",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "avatar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
          src: _assets_stu_mine_mineAvatar_png__WEBPACK_IMPORTED_MODULE_2__,
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "username",
        children: [isEdit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
          onBlur: editUsername,
          value: username
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "content",
          children: username
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "edit",
          onClick: function onClick() {
            return setIsEdit(true);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: _assets_stu_mine_editName_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "time",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "number",
          children: userInfo.credit
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "text",
          children: "\u5FD7\u613F\u65F6\u957F"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "tab",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: tab === 0 ? 'active' : '',
        onClick: function onClick() {
          return setTab(0);
        },
        children: "\u4E2A\u4EBA\u4FE1\u606F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: tab === 1 ? 'active' : '',
        onClick: function onClick() {
          return setTab(1);
        },
        children: "\u5DF2\u53C2\u52A0\u6D3B\u52A8"
      })]
    }), tab === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "info",
      children: isChange ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "editInfo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "name1",
          children: ["\u59D3\u540D\uFF1A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
            value: userInfo.nickName,
            onChange: function onChange(e) {
              return setNickName(e.detail.value);
            },
            className: "input_info"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "phone1",
          children: ["\u624B\u673A\u53F7\u7801\uFF1A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
            value: userInfo.phone,
            onChange: function onChange(e) {
              return setPhone(e.detail.value);
            },
            className: "input_info"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "gender1",
          children: ["\u6027\u522B\uFF1A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
            value: userInfo.sex,
            onChange: function onChange(e) {
              return setSex(e.detail.value);
            },
            className: "input_info"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "birth1",
          children: ["\u51FA\u751F\u65E5\u671F\uFF1A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Picker, {
            mode: "date",
            onChange: function onChange(e) {
              return setBirthday(e.detail.value);
            },
            className: "input_info",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "date",
              children: userInfo.birthday
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "submit",
          onClick: function onClick() {
            return setIsChange(false);
          },
          children: "\u4FDD\u5B58"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "showInfo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "name",
          children: ["\u59D3\u540D\uFF1A", userInfo.nickName]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "phone",
          children: ["\u624B\u673A\u53F7\u7801\uFF1A", userInfo.phone]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "wechat",
          children: ["\u624B\u673A\u53F7\u7801\uFF1A", userInfo.wechat]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "gender",
          children: ["\u6027\u522B\uFF1A", userInfo.sex]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "birth",
          children: ["\u51FA\u751F\u65E5\u671F\uFF1A", userInfo.birthday]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "change-info",
          onClick: changeInfo,
          children: "\u4FEE\u6539\u4FE1\u606F"
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "activities",
      children: activities.map(function (activity) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "activity",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity_image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
              src: activity.img,
              alt: ""
            }), activity.status === '已结束' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "activity_absoluted1",
              children: "\u5DF2\u7ED3\u675F"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "activity_absoluted",
              children: "\u5DF2\u62A5\u540D"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity_name",
            children: activity.activity_name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity_time",
            children: activity.activity_time
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity_area",
            children: ["\u5730\u70B9\uFF1A", activity.activity_area]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "attendance",
            children: ["\u62A5\u540D\u4EBA\u6570\uFF1A", "".concat(activity.attendance, "/").concat(activity.total)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "activity_id",
            children: ["\u62A5\u540D\u53F7\uFF1A", activity.id]
          })]
        }, activity.activity_name);
      })
    })]
  });
}
function Mine() {
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
    _useState32 = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useState31, 2),
    type = _useState32[0],
    setType = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setType(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('type'));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: type === '0' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ElderMine, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(StuMine, {})
  });
}

/***/ }),

/***/ "./src/pages/stu_mine/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/stu_mine/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/stu_mine/index.jsx");


var config = {"navigationBarTitleText":"e养千年"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/stu_mine/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/assets/stu_mine/editName.png":
/*!******************************************!*\
  !*** ./src/assets/stu_mine/editName.png ***!
  \******************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAXVBMVEUAAAAkJCQkJCQkJCQAAAAAAAAkJCQkJCQpKSkXFxcjIyMgICAjIyMfHx8jIyMiIiIlJSUqKioaGhokJCQkJCQlJSUoKCghISEkJCQkJCQkJCQjIyMqKiolJSUcHBwJHhBMAAAAH3RSTlMAcmsVAgUjXRkLVwheGW1oWgYKDmpoEy4HVTllDG4JSo/0qAAAAJxJREFUeJyVkFkSgyAQBR2CSVRi9n25/zGjgGW9J4Nl/3ZNM0yxmPvrqEtbi7izZquNdLhKmfVWpE36vhxI9UM5+sn8UI592n8sB7ZgTzArcvno5c42ufJ+B+UDWgPWssXyE+0Vlm54Fr+0zpVZY5k1lUlzGTVegzVeg7V5JGxx+8byZKtI6bGKzWGdUah9uMWbjrz9+G+lUM6+/AcT1gWb4ybrAwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/stu_mine/mineAvatar.png":
/*!********************************************!*\
  !*** ./src/assets/stu_mine/mineAvatar.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/stu_mine/mineAvatar.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/stu_mine/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map