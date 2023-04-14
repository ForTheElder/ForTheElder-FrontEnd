"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/service/fetch.jsx":
/*!*******************************!*\
  !*** ./src/service/fetch.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fetch": function() { return /* binding */ Fetch; },
/* harmony export */   "getData": function() { return /* binding */ getData; }
/* harmony export */ });
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);



var preHttp = 'https://www.q-yt.top';
var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
function Fetch(_x) {
  return _Fetch.apply(this, arguments);
}
function _Fetch() {
  _Fetch = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee(url) {
    var data,
      method,
      header,
      _args = arguments;
    return (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'POST';
            console.log(url, data, method, token);
            header = {
              'content-type': 'application/json',
              // Authorization:Taro.getStorageSync('token')
              //Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIwMjEyMTQ2NzIiLCJleHAiOjE2NTA3ODcyMTQsImlzcyI6Inl5aiIsIm5iZiI6MTY1MDE4MjQxNH0.uJwGl6O6P0Wf1WKpheoFylLX4S-K7ChTU4o8hsdpvpk'
              // token:
              //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzUyMDg3MDIsImlkIjoxLCJuYmYiOjE1NzUyMDg3MDJ9.erNdOrNTLCD56D2UW0RmuYGGdfrPuO7hLZdtMtj1CdY'
              token: token
            };
            return _context.abrupt("return", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: preHttp + url,
              data: data,
              method: method,
              header: header
            }).then(function (res) {
              console.log(res.statusCode);
              switch (res.statusCode) {
                case 200:
                  if (res.data) {
                    return res.data;
                  } else {
                    return res.code; // 业务逻辑错误，返回业务错误码
                  }

                case 400:
                  throw new Error('没有权限访问');
                case 401:
                  throw new Error('未授权');
                case 404:
                  throw new Error('not found');
                case 500:
                  throw new Error('服务器错误');
              }
            }).catch(function (e) {
              console.log(e);
            }));
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Fetch.apply(this, arguments);
}
;
function getData(_x2) {
  return _getData.apply(this, arguments);
}

// const func = (goodsid) {
//   return Fetch(`http://dauidhaskda?goodsid=${goodsid}`);
// }
function _getData() {
  _getData = (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2(url) {
    var method,
      header,
      _args2 = arguments;
    return (0,D_web_work_e_elder_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            method = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'GET';
            console.log(url, method, token);
            header = {
              'content-type': 'application/json',
              // Authorization:Taro.getStorageSync('token')
              //Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIwMjEyMTQ2NzIiLCJleHAiOjE2NTA3ODcyMTQsImlzcyI6Inl5aiIsIm5iZiI6MTY1MDE4MjQxNH0.uJwGl6O6P0Wf1WKpheoFylLX4S-K7ChTU4o8hsdpvpk'
              // token:
              //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzUyMDg3MDIsImlkIjoxLCJuYmYiOjE1NzUyMDg3MDJ9.erNdOrNTLCD56D2UW0RmuYGGdfrPuO7hLZdtMtj1CdY'
              token: token
            };
            return _context2.abrupt("return", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: preHttp + url,
              method: method,
              header: header
            }).then(function (res) {
              console.log(res.statusCode);
              switch (res.statusCode) {
                case 200:
                  if (res.data) {
                    return res.data;
                  } else {
                    return res.code; // 业务逻辑错误，返回业务错误码
                  }

                case 400:
                  throw new Error('没有权限访问');
                case 401:
                  throw new Error('未授权');
                case 404:
                  throw new Error('not found');
                case 500:
                  throw new Error('服务器错误');
              }
            }).catch(function (e) {
              console.log(e);
            }));
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getData.apply(this, arguments);
}

/***/ }),

/***/ "./src/assets/main/address.png":
/*!*************************************!*\
  !*** ./src/assets/main/address.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/address.png";

/***/ }),

/***/ "./src/assets/main/dianhua.png":
/*!*************************************!*\
  !*** ./src/assets/main/dianhua.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/dianhua.png";

/***/ }),

/***/ "./src/assets/main/shijian.png":
/*!*************************************!*\
  !*** ./src/assets/main/shijian.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/shijian.png";

/***/ }),

/***/ "./src/assets/main/touxiang.jpg":
/*!**************************************!*\
  !*** ./src/assets/main/touxiang.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/main/touxiang.jpg";

/***/ }),

/***/ "./src/assets/mine/back.png":
/*!**********************************!*\
  !*** ./src/assets/mine/back.png ***!
  \**********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAIAAAAxCktQAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAADrSURBVDiNY/z//z8DKYCJJNWjGkjXcKZX3Sp1yp5bH//g1fEfDn6/PLWmJ9ZIQEDNLGXirgcf/mMFDBgiP16eXlQToi8goGaWPHnXXXR9mBpg+p6eWlQXqi8goGaZMvnQyx8ENcDtOzizJNRIQEDN7M7b3////yccSpzCEvzsYgwMEgwM/1A9jQZenlrdlWKmJqDmmzt780W4m7BoeHl6dU+ymZqAmlny5E2XEK7H0PD7w8XNPSmWagJqZikTN118iqYSU8PpHjXLlJ41p9DNRAWM/+E57s/Pnwzs7CwEwgBJA3FgcCfvwaIBAAmcWuLPH/wSAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/mine/help.png":
/*!**********************************!*\
  !*** ./src/assets/mine/help.png ***!
  \**********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJ1BMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBRrHqnAAAADXRSTlMA/5AwoM/wIEDgEMBwRxCOqgAAAIhJREFUeJxjwABFgaLqMDaTIBAoQNhcgUIGzI6iUAkxAwYG5kSIVKEwiDQUB3McwWIsImBOIFAVUB1IE0eiIESroGQDA5sgjCM4gYFRAMZhFCCWAzLgSMMKH7ABHBMFuRIFBcUWgIwGgZKNou5gS2GARQiJA3UoGMC8AGY7SiMk4N4GAUSAwAEAuawRFWl6T5QAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/mine/information_avatar.png":
/*!************************************************!*\
  !*** ./src/assets/mine/information_avatar.png ***!
  \************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAVFBMVEUAAAAQEBAODg4REREQEBAPDw8QEBAPDw8PDw8QEBAQEBAREREQEBAQEBAQEBAPDw8REREPDw8ODg4PDw8QEBASEhIPDw8PDw8QEBAQEBAQEBARERGu6uUeAAAAHHRSTlMD5Uo7rXSQZtiCuy0fyawRyGVY1586V9rhzq61g69/BAAAAitJREFUeJzFVtmWgyAMdRSsthb3zvb//zncREkQnPZlztwnJVzIHop/w822zg2Dc629vbK/rOc3hbkunxEGvZ8x/EaqXEoAXHXGGPct19ZOVTXZ9rqvjHlGzVIzdbLWXQyv1hlCzyfeE8WnO9/cJxRmXHLXX5iT1ao5MbNsMrrRQVcJXL9au4oqN+JEKlR0hzAs22wPHK0ExSMsdMG31+C8kuKjdI2v3fwabyLVxZ3IknssvBtDzpWD8DtEl8gBkME7/aI3FZPeBQebIOohImfRl6gPfXdHI9unICHv8WfsJSg88+cNEskr+hWKCDr8ciAQBJ0N4WyyUQngew5V679aJYHV82OtRii8KAE2MgVmSZy9AhRpRqMKgdRhN4Ei1ofMTTMb60xBIOMU5sz1d8TFA19ynBC6Q9b3rWka0x6qChROkkSxM4hiR/NPIebHTu4ei5Pkd8tDfCYbdSi7rc1o1DtJQqkSJnSyGNzFVMIUcCnZn7lCdTFY32wXYifKjxmNsWW1obSGQwQOqn1P/q3EOOjLIRhUaEiDqMS4RnsaEpkuTyfOfVzttPj9e7f8Ohy49xSd6gqsm672rXjFhUdQGDyiTGTT3/OMonjP9Xhy8EfGeKD8yI6Yz/NpxTnxmerLMUtn6YMn7pyzc0sXN+rBN24TNzf4PELN+/E6ruuoxms2XkCler6GOR3iHiXP0gjpxE0eJKqN+bx++iAh+GePny5+wrz47PkT/ADDHA/6BJp6JwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/mine/information_detail.png":
/*!************************************************!*\
  !*** ./src/assets/mine/information_detail.png ***!
  \************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAhFBMVEUAAAAQEBAREREPDw8QEBAQEBAREREPDw8QEBAPDw8QEBAPDw8QEBAQEBAODg4QEBAQEBAREREPDw8ODg4PDw8LCwsNDQ0PDw8WFhYQEBAODg4QEBATExMQEBAREREQEBAAAAAPDw8AAAAODg4REREREREPDw8QEBASEhITExMNDQ0ODg6PHjRfAAAALHRSTlMD5Tt0rJAt2NJl4hGBy1i9o8RCJHcXFIgLH0owG4zInAlXBVmYuVOfOShQXvI/+UkAAAEeSURBVHic7ZXXFoIwEEQJEAgoxd571///P7coCocI8cmjztOczVxIyJJY3yVPuhUKKLduJu6ekYOolIe5FN2GkGpCxBA7ktvVRPwGxMZkVYYE9itRbETINkO4+loB5JKREWKdLuebq4089HHImPbUBJkL0TRDPAjOzRAbkwVkCTvd4+GJbU/Y9aC41CGdCFzYRjvD4gxdOwQXdTRIl7poAW7K7TgFuyDX1SDYREIMwA3x0SIcgh1QkX6ysrVIpVTaR7dqKdVaoeunUJTa5b/xxf7IH6mJSOdZfDmAglxZ5pCCuHMtyhREA76OKSMi7bOQKa3zodSIczN2HHqtJMIvDMV405TIy6bq307Hat2Z+sSdMSGYMSOASVxD4ld0BQoQCyykR5GfAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/mine/mine_avatar.png":
/*!*****************************************!*\
  !*** ./src/assets/mine/mine_avatar.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mine/mine_avatar.png";

/***/ }),

/***/ "./src/assets/mine/organization_detail.png":
/*!*************************************************!*\
  !*** ./src/assets/mine/organization_detail.png ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAPFBMVEUAAAAQEBAQEBASEhIQEBASEhIQEBAPDw8QEBASEhIPDw8QEBASEhIPDw8PDw8ODg4QEBAQEBAQEBARERH4cX8CAAAAFHRSTlMA5aw5cw6B2J4rZZAd11ZIuo/JyD4NF5kAAAGbSURBVHic7ZTBeoQgDIQFBBFR1vX937VMAqJYu2wPPezXnJDwQzIMdh8f2lkp7aLbiX4WFHPfSlgGELaNWAshxNpCKFo6OTfRQDUgMq4baKEa2krT2Nrx2GH8WjaqK3+0VQZkyx9bM/LmKb/ohRSbWTGY4EfFlBrLvazO8ZUSPKrvyluw5RbiiK8wxRQnAlSYkTpFn5YscVx5bEnjyqM+r5k9eFw7TIBVPtlaCKRKGEw9d7H0Ut4LyUYpc5HJUBco/hQ8iT3lBbGewSposUd/Z4RO3/vXDrCQDpXl7vcLTqFTw+IZV+V3zC9ZUx8Qo/JBYGYYO00n5JC6G1Pqcpuodpiijo8jIcQjpqYI2bPEF7nFFLwPbIOLHnWMqTz+oJJutx+NlLFwiJmJxNjYnpRmn8yKkW1j3RDrICasN3cdibaeFNPcs2XnH1L04FQy6uPIJL/3XeCzSkBxlX1+MBP3bALnTr4A0sfXZ0iJ0g+E5Z5vkKxEEbzY8R6pvMwFv0DQ5psIxPxH/hTBU2H7LHgZRwQp/HSiY+rUJ8QXubALOUTublEAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/organization/orgimg.png":
/*!********************************************!*\
  !*** ./src/assets/organization/orgimg.png ***!
  \********************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAABACAMAAAA0ytwUAAAAPFBMVEXo6OgzMzONjY27u7uOjo5hYWGkpKR2dnbd3d2wsLCZmZnOzs5VVVWHh4dKSkrGxsZTU1M2NjbR0dGQkJBHa2+rAAAAmElEQVR4nO3XSQ6DMAxAUUxLoPN0/7s2AaHewEjlvZWX1pcVKR0AAAAAAAAAAAD/byrH1WHrXXahxM+09TJ70Mc6HcKJJ6jBP8OlTYKnqMGHOLVJ8BQ1+KX2fgueZHnDS9wfgqeYg49xHmIUPEMLPkZpg+AZavC5d9edBc9Q4vp6Ds3VxyfDVPpbv3DgAAAAAAAAAAAAO/AFoOYB6swOA/MAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/organization/orglogo.png":
/*!*********************************************!*\
  !*** ./src/assets/organization/orglogo.png ***!
  \*********************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHhe7Zuvb8JQFEbvm8CQYElIyBY8aOQEvh4cAofAgUCDgj9hMxCCRwEZDg14kiIIRYPBdOvbtx/JtkztdeG7J2lO363qSVNeApggCB7DMLwVQowxvjkcDk8v5/evIzoWNzihRQPAtGgAmBYNANOiAWBaNABMiwaAadEAMC0aAKZFA8C0aACYFg0A00IfwMkXI+fzWZbLpRyPR0x+Jp/P28MRCycBZrOZ9Pt9rH5nPB5LMpnE6k9xE2AwGMhwOJTJZILJ92w2G2k2m9Ltdl09Be6/GhuNRtJqtWS/32MSL84DrFYrWa/XstvtMIkX5wHq9bq0220pFot2HQSBdVw4D5DJZN5vPno5VqtVe2y3WztzTWz7gF6vZz8ZarWapNNp+2RMp1NcdUcsAaKbn8/n0mg0xPM86XQ6Ui6X7cw1zgN8vvlSqYSpSKVSsU+Da5xuhHK5nPi+L9lsVlKpFK5+cDqd7Lvg6jZCb1vh6I1/uVwkkUjgylcKhcL1bYX/MfojKQ0A06IBYFo0AEyLBoBp0QAwLRoApkUDwLRoAJgWDQDTogFgWjQATAt9gOjv8w9hGN5hTYUxxn8GnC+byCWeQy8AAAAASUVORK5CYII=";

/***/ })

}]);
//# sourceMappingURL=common.js.map