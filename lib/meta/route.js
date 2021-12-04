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
          return _context.abrupt("return", new _errors.NotFoundError());

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
notFoundRoute.setStatusCode(_codes.HttpCode.NOT_FOUND);
notFoundRoute.setHeaders((0, _defineProperty2["default"])({}, _constants.Header.Key.contentType, _constants.Header.Value.applicationJson));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL3JvdXRlLmpzIl0sIm5hbWVzIjpbIlJvdXRlTWV0YSIsInVybCIsInVuZGVmaW5lZCIsImhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiaGVhZGVycyIsImFyZ3VtZW50cyIsInR5cGUiLCJhdHRyaWJ1dGUiLCJpbmRleCIsInVybEluc3RhbmNlIiwiY29kZSIsIm1ldGhvZCIsInJlZ0V4cCIsInRlc3QiLCJub3RGb3VuZFJvdXRlIiwic2V0SGFuZGxlciIsIk5vdEZvdW5kRXJyb3IiLCJzZXRTdGF0dXNDb2RlIiwiYyIsIk5PVF9GT1VORCIsInNldEhlYWRlcnMiLCJoIiwiS2V5IiwiY29udGVudFR5cGUiLCJWYWx1ZSIsImFwcGxpY2F0aW9uSnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUhBO0lBS3FCQSxTO0FBQ25CLHVCQUFjO0FBQUE7QUFDWixTQUFLQyxHQUFMLEdBQVdDLFNBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWVELFNBQWY7QUFDQSxTQUFLRSxVQUFMLEdBQWtCRixTQUFsQjtBQUNBLFNBQUtHLE9BQUwsR0FBZUgsU0FBZjtBQUNBLFNBQUtJLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7OztXQUVELHFCQUFZQyxJQUFaLEVBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsV0FBS0gsU0FBTCxDQUFlRyxLQUFmLElBQXdCO0FBQUVGLFFBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxRQUFBQSxTQUFTLEVBQVRBO0FBQVIsT0FBeEI7QUFDRDs7O1dBRUQsZ0JBQU9FLFdBQVAsRUFBb0I7QUFDbEIsV0FBS1QsR0FBTCxHQUFXUyxXQUFYO0FBQ0Q7OztXQUVELG9CQUFXUCxPQUFYLEVBQW9CO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7V0FFRCx1QkFBY1EsSUFBZCxFQUFvQjtBQUNsQixXQUFLUCxVQUFMLEdBQWtCTyxJQUFsQjtBQUNEOzs7V0FFRCxvQkFBV04sT0FBWCxFQUFvQjtBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O1dBRUQsb0JBQVdKLEdBQVgsRUFBZ0JXLE1BQWhCLEVBQXdCO0FBQ3RCLGFBQU8sS0FBS1gsR0FBTCxDQUFTVyxNQUFULEtBQW9CQSxNQUFwQixJQUE4QixLQUFLWCxHQUFMLENBQVNZLE1BQVQsQ0FBZ0JDLElBQWhCLENBQXFCYixHQUFyQixDQUFyQztBQUNEOzs7Ozs7QUFHSCxJQUFNYyxhQUFhLEdBQUcsSUFBSWYsU0FBSixFQUF0Qjs7QUFFQWUsYUFBYSxDQUFDQyxVQUFkLDZGQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQVksSUFBSUMscUJBQUosRUFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQUNBRixhQUFhLENBQUNHLGFBQWQsQ0FBNEJDLGdCQUFFQyxTQUE5QjtBQUNBTCxhQUFhLENBQUNNLFVBQWQsc0NBQTRCQyxrQkFBRUMsR0FBRixDQUFNQyxXQUFsQyxFQUFnREYsa0JBQUVHLEtBQUYsQ0FBUUMsZUFBeEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF3YWl0ICovXG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzJ1xuaW1wb3J0IHsgSHR0cENvZGUgYXMgYyB9IGZyb20gJy4uL2NvZGVzJ1xuaW1wb3J0IHsgSGVhZGVyIGFzIGggfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVNZXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWRcbiAgICB0aGlzLmhhbmRsZXIgPSB1bmRlZmluZWRcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSB1bmRlZmluZWRcbiAgICB0aGlzLmhlYWRlcnMgPSB1bmRlZmluZWRcbiAgICB0aGlzLmFyZ3VtZW50cyA9IFtdXG4gIH1cblxuICBhZGRBcmd1bWVudCh0eXBlLCBhdHRyaWJ1dGUsIGluZGV4KSB7XG4gICAgdGhpcy5hcmd1bWVudHNbaW5kZXhdID0geyB0eXBlLCBhdHRyaWJ1dGUgfVxuICB9XG5cbiAgc2V0VXJsKHVybEluc3RhbmNlKSB7XG4gICAgdGhpcy51cmwgPSB1cmxJbnN0YW5jZVxuICB9XG5cbiAgc2V0SGFuZGxlcihoYW5kbGVyKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgc2V0U3RhdHVzQ29kZShjb2RlKSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gY29kZVxuICB9XG5cbiAgc2V0SGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc1xuICB9XG5cbiAgaXNTdWl0YWJsZSh1cmwsIG1ldGhvZCkge1xuICAgIHJldHVybiB0aGlzLnVybC5tZXRob2QgPT09IG1ldGhvZCAmJiB0aGlzLnVybC5yZWdFeHAudGVzdCh1cmwpXG4gIH1cbn1cblxuY29uc3Qgbm90Rm91bmRSb3V0ZSA9IG5ldyBSb3V0ZU1ldGEoKVxuXG5ub3RGb3VuZFJvdXRlLnNldEhhbmRsZXIoYXN5bmMgKCkgPT4gbmV3IE5vdEZvdW5kRXJyb3IoKSlcbm5vdEZvdW5kUm91dGUuc2V0U3RhdHVzQ29kZShjLk5PVF9GT1VORClcbm5vdEZvdW5kUm91dGUuc2V0SGVhZGVycyh7IFtoLktleS5jb250ZW50VHlwZV06IGguVmFsdWUuYXBwbGljYXRpb25Kc29uIH0pXG5cbmV4cG9ydCB7IG5vdEZvdW5kUm91dGUgfSJdfQ==