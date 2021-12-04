"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
      throw err;
    }
  }]);
  return Hooks;
}();

exports["default"] = Hooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJuYW1lcyI6WyJIb29rcyIsImN0eCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ3FCQSxLOzs7Ozs7O1dBQ25CLG1CQUFVQyxHQUFWLEVBQWUsQ0FFZDs7O1dBRUQsb0JBQVdBLEdBQVgsRUFBZ0IsQ0FFZjs7O1dBRUQsbUJBQVVBLEdBQVYsRUFBZSxDQUVkOzs7V0FFRCxpQkFBUUMsR0FBUixFQUFhRCxHQUFiLEVBQWtCO0FBQ2hCLFlBQU1DLEdBQU47QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb29rcyB7XG4gIG9uUmVxdWVzdChjdHgpIHtcblxuICB9XG5cbiAgb25SZXNwb25zZShjdHgpIHtcblxuICB9XG5cbiAgb25IYW5kbGVyKGN0eCkge1xuXG4gIH1cblxuICBvbkVycm9yKGVyciwgY3R4KSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn0iXX0=