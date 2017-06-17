
          window.__NEXT_REGISTER_PAGE('/hello', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(545);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hailinjiang/web/study/simple-next/pages/hello.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']);

var MyDiv = _styledComponents2.default.div(_templateObject, {
  fontsize: '30px',
  color: 'green',
  '@media screen and (min-width: 22em)': {
    color: 'blue',
    fontsize: '50px'
  }
});

var Hello = function Hello() {
  return _react2.default.createElement(MyDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Hello object');
};

exports.default = Hello;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hailinjiang/web/study/simple-next/pages/hello.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hailinjiang/web/study/simple-next/pages/hello.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/hello")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ })

},[552]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9oZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2hlbGxvLmpzPzA2YmM5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTXlEaXYgPSBzdHlsZWQuZGl2YFxuICAke3tcbiAgICBmb250c2l6ZTogJzMwcHgnLFxuICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMmVtKSc6IHtcbiAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICBmb250c2l6ZTogJzUwcHgnLFxuICAgIH0sXG4gIH19XG5gXG5cbmNvbnN0IEhlbGxvID0gKCkgPT4gPE15RGl2PkhlbGxvIG9iamVjdDwvTXlEaXY+XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9oZWxsby5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFEQTtBQUhBO0FBQ0E7QUFRQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        