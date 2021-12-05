"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFoundRoute = exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _errors = require("../errors");

var _codes = require("../codes");

var _constants = require("./constants");

/* eslint-disable require-await */
var RouteMeta = /*#__PURE__*/function () {
  function RouteMeta() {
    (0, _classCallCheck2["default"])(this, RouteMeta);
    this.url = undefined;
    this.handler = undefined;
    this.statusCode = undefined;
    this.headers = undefined;
    this.arguments = [];
  }

  (0, _createClass2["default"])(RouteMeta, [{
    key: "addArgument",
    value: function addArgument(type, attribute, index) {
      this.arguments[index] = {
        type: type,
        attribute: attribute
      };
    }
  }, {
    key: "setUrl",
    value: function setUrl(urlInstance) {
      this.url = urlInstance;
    }
  }, {
    key: "setHandler",
    value: function setHandler(handler) {
      this.handler = handler;
    }
  }, {
    key: "setStatusCode",
    value: function setStatusCode(code) {
      this.statusCode = code;
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.headers = headers;
    }
  }, {
    key: "isSuitable",
    value: function isSuitable(url, method) {
      return this.url.method === method && this.url.regExp.test(url);
    }
  }]);
  return RouteMeta;
}();

exports["default"] = RouteMeta;
var notFoundRoute = new RouteMeta();
exports.notFoundRoute = notFoundRoute;
notFoundRoute.setHandler( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          throw _errors.NOT_FOUND_ERROR;

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
notFoundRoute.setStatusCode(_codes.HttpCode.NOT_FOUND);
notFoundRoute.setHeaders((0, _defineProperty2["default"])({}, _constants.Header.Key.contentType, _constants.Header.Value.applicationJson));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL3JvdXRlLmpzIl0sIm5hbWVzIjpbIlJvdXRlTWV0YSIsInVybCIsInVuZGVmaW5lZCIsImhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiaGVhZGVycyIsImFyZ3VtZW50cyIsInR5cGUiLCJhdHRyaWJ1dGUiLCJpbmRleCIsInVybEluc3RhbmNlIiwiY29kZSIsIm1ldGhvZCIsInJlZ0V4cCIsInRlc3QiLCJub3RGb3VuZFJvdXRlIiwic2V0SGFuZGxlciIsIk5PVF9GT1VORF9FUlJPUiIsInNldFN0YXR1c0NvZGUiLCJjIiwiTk9UX0ZPVU5EIiwic2V0SGVhZGVycyIsImgiLCJLZXkiLCJjb250ZW50VHlwZSIsIlZhbHVlIiwiYXBwbGljYXRpb25Kc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSEE7SUFLcUJBLFM7QUFDbkIsdUJBQWM7QUFBQTtBQUNaLFNBQUtDLEdBQUwsR0FBV0MsU0FBWDtBQUNBLFNBQUtDLE9BQUwsR0FBZUQsU0FBZjtBQUNBLFNBQUtFLFVBQUwsR0FBa0JGLFNBQWxCO0FBQ0EsU0FBS0csT0FBTCxHQUFlSCxTQUFmO0FBQ0EsU0FBS0ksU0FBTCxHQUFpQixFQUFqQjtBQUNEOzs7O1dBRUQscUJBQVlDLElBQVosRUFBa0JDLFNBQWxCLEVBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxXQUFLSCxTQUFMLENBQWVHLEtBQWYsSUFBd0I7QUFBRUYsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLFFBQUFBLFNBQVMsRUFBVEE7QUFBUixPQUF4QjtBQUNEOzs7V0FFRCxnQkFBT0UsV0FBUCxFQUFvQjtBQUNsQixXQUFLVCxHQUFMLEdBQVdTLFdBQVg7QUFDRDs7O1dBRUQsb0JBQVdQLE9BQVgsRUFBb0I7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OztXQUVELHVCQUFjUSxJQUFkLEVBQW9CO0FBQ2xCLFdBQUtQLFVBQUwsR0FBa0JPLElBQWxCO0FBQ0Q7OztXQUVELG9CQUFXTixPQUFYLEVBQW9CO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7V0FFRCxvQkFBV0osR0FBWCxFQUFnQlcsTUFBaEIsRUFBd0I7QUFDdEIsYUFBTyxLQUFLWCxHQUFMLENBQVNXLE1BQVQsS0FBb0JBLE1BQXBCLElBQThCLEtBQUtYLEdBQUwsQ0FBU1ksTUFBVCxDQUFnQkMsSUFBaEIsQ0FBcUJiLEdBQXJCLENBQXJDO0FBQ0Q7Ozs7OztBQUdILElBQU1jLGFBQWEsR0FBRyxJQUFJZixTQUFKLEVBQXRCOztBQUVBZSxhQUFhLENBQUNDLFVBQWQsNkZBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDakJDLHVCQURpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQUlBRixhQUFhLENBQUNHLGFBQWQsQ0FBNEJDLGdCQUFFQyxTQUE5QjtBQUNBTCxhQUFhLENBQUNNLFVBQWQsc0NBQTRCQyxrQkFBRUMsR0FBRixDQUFNQyxXQUFsQyxFQUFnREYsa0JBQUVHLEtBQUYsQ0FBUUMsZUFBeEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF3YWl0ICovXG5pbXBvcnQgeyBOT1RfRk9VTkRfRVJST1IgfSBmcm9tICcuLi9lcnJvcnMnXG5pbXBvcnQgeyBIdHRwQ29kZSBhcyBjIH0gZnJvbSAnLi4vY29kZXMnXG5pbXBvcnQgeyBIZWFkZXIgYXMgaCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZU1ldGEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICAgIHRoaXMuaGFuZGxlciA9IHVuZGVmaW5lZFxuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHVuZGVmaW5lZFxuICAgIHRoaXMuaGVhZGVycyA9IHVuZGVmaW5lZFxuICAgIHRoaXMuYXJndW1lbnRzID0gW11cbiAgfVxuXG4gIGFkZEFyZ3VtZW50KHR5cGUsIGF0dHJpYnV0ZSwgaW5kZXgpIHtcbiAgICB0aGlzLmFyZ3VtZW50c1tpbmRleF0gPSB7IHR5cGUsIGF0dHJpYnV0ZSB9XG4gIH1cblxuICBzZXRVcmwodXJsSW5zdGFuY2UpIHtcbiAgICB0aGlzLnVybCA9IHVybEluc3RhbmNlXG4gIH1cblxuICBzZXRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBzZXRTdGF0dXNDb2RlKGNvZGUpIHtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBjb2RlXG4gIH1cblxuICBzZXRIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzXG4gIH1cblxuICBpc1N1aXRhYmxlKHVybCwgbWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsLm1ldGhvZCA9PT0gbWV0aG9kICYmIHRoaXMudXJsLnJlZ0V4cC50ZXN0KHVybClcbiAgfVxufVxuXG5jb25zdCBub3RGb3VuZFJvdXRlID0gbmV3IFJvdXRlTWV0YSgpXG5cbm5vdEZvdW5kUm91dGUuc2V0SGFuZGxlcihhc3luYyAoKSA9PiB7XG4gIHRocm93IE5PVF9GT1VORF9FUlJPUlxufSlcblxubm90Rm91bmRSb3V0ZS5zZXRTdGF0dXNDb2RlKGMuTk9UX0ZPVU5EKVxubm90Rm91bmRSb3V0ZS5zZXRIZWFkZXJzKHsgW2guS2V5LmNvbnRlbnRUeXBlXTogaC5WYWx1ZS5hcHBsaWNhdGlvbkpzb24gfSlcblxuZXhwb3J0IHsgbm90Rm91bmRSb3V0ZSB9Il19