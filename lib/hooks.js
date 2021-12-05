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
    key: "beforeHandler",
    value: function beforeHandler(ctx) {}
  }, {
    key: "errorHandler",
    value: function errorHandler(err, ctx) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJuYW1lcyI6WyJIb29rcyIsImN0eCIsImVyciIsIlRyb3BhRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBO0lBR3FCQSxLOzs7Ozs7O1dBQ25CLG1CQUFVQyxHQUFWLEVBQWUsQ0FFZDs7O1dBRUQsb0JBQVdBLEdBQVgsRUFBZ0IsQ0FFZjs7O1dBRUQsdUJBQWNBLEdBQWQsRUFBbUIsQ0FFbEI7OztXQUVELHNCQUFhQyxHQUFiLEVBQWtCRCxHQUFsQixFQUF1QjtBQUNyQixVQUFJLEVBQUVDLEdBQUcsWUFBWUMsa0JBQWpCLENBQUosRUFBa0M7QUFDaENDLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFHLENBQUNJLEtBQWxCO0FBRUFKLFFBQUFBLEdBQUcsR0FBR0ssNkJBQU47QUFDRDs7QUFFRCxhQUFPTCxHQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBUcm9wYUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvb2tzIHtcbiAgb25SZXF1ZXN0KGN0eCkge1xuXG4gIH1cblxuICBvblJlc3BvbnNlKGN0eCkge1xuXG4gIH1cblxuICBiZWZvcmVIYW5kbGVyKGN0eCkge1xuXG4gIH1cblxuICBlcnJvckhhbmRsZXIoZXJyLCBjdHgpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBUcm9wYUVycm9yKSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spXG5cbiAgICAgIGVyciA9IElOVEVSTkFMX1NFUlZFUl9FUlJPUlxuICAgIH1cblxuICAgIHJldHVybiBlcnJcbiAgfVxufSJdfQ==