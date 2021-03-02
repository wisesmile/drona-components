"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hello = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello(_ref) {
  var say = _ref.say;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: "Hello"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["say: ", say]
    })]
  });
};

exports.Hello = Hello;
Hello.propTypes = {
  /**
   * What to say
   */
  say: _propTypes.default.string.isRequired
};

//# sourceMappingURL=hello.js.map