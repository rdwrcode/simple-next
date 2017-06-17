'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

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