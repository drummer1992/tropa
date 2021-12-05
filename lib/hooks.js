"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _errors = require("./errors");

/* eslint-disable no-unused-vars */
var Hooks = /*#__PURE__*/function () {
  function Hooks() {
    (0, _classCallCheck2["default"])(this, Hooks);
  }

  (0, _createClass2["default"])(Hooks, [{
    key: "onRequest",
    value: function onRequest(ctx) {}
  }, {
    key: "onResponse",
    value: function onResponse(ctx) {}
  }, {
    key: "onHandler",
    value: function onHandler(ctx) {}
  }, {
    key: "onError",
    value: function onError(err, ctx) {
      if (!(err instanceof _errors.TropaError)) {
        console.error(err.stack);
        err = _errors.INTERNAL_SERVER_ERROR;
      }

      return err;
    }
  }]);
  return Hooks;
}();

exports["default"] = Hooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJuYW1lcyI6WyJIb29rcyIsImN0eCIsImVyciIsIlRyb3BhRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBO0lBR3FCQSxLOzs7Ozs7O1dBQ25CLG1CQUFVQyxHQUFWLEVBQWUsQ0FFZDs7O1dBRUQsb0JBQVdBLEdBQVgsRUFBZ0IsQ0FFZjs7O1dBRUQsbUJBQVVBLEdBQVYsRUFBZSxDQUVkOzs7V0FFRCxpQkFBUUMsR0FBUixFQUFhRCxHQUFiLEVBQWtCO0FBQ2hCLFVBQUksRUFBRUMsR0FBRyxZQUFZQyxrQkFBakIsQ0FBSixFQUFrQztBQUNoQ0MsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILEdBQUcsQ0FBQ0ksS0FBbEI7QUFFQUosUUFBQUEsR0FBRyxHQUFHSyw2QkFBTjtBQUNEOztBQUVELGFBQU9MLEdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBJTlRFUk5BTF9TRVJWRVJfRVJST1IsIFRyb3BhRXJyb3IgfSBmcm9tICcuL2Vycm9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9va3Mge1xuICBvblJlcXVlc3QoY3R4KSB7XG5cbiAgfVxuXG4gIG9uUmVzcG9uc2UoY3R4KSB7XG5cbiAgfVxuXG4gIG9uSGFuZGxlcihjdHgpIHtcblxuICB9XG5cbiAgb25FcnJvcihlcnIsIGN0eCkge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIFRyb3BhRXJyb3IpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjaylcblxuICAgICAgZXJyID0gSU5URVJOQUxfU0VSVkVSX0VSUk9SXG4gICAgfVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG59Il19