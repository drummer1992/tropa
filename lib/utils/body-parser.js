"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _asyncIterator(iterable) { var method, async, sync, retry = 2; if (typeof Symbol !== "undefined") { async = Symbol.asyncIterator; sync = Symbol.iterator; } while (retry--) { if (async && (method = iterable[async]) != null) { return method.call(iterable); } if (sync && (method = iterable[sync]) != null) { return new AsyncFromSyncIterator(method.call(iterable)); } async = "@@asyncIterator"; sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s; this.n = s.next; }; AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; if (ret === undefined) { return Promise.resolve({ value: value, done: true }); } return AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; if (thr === undefined) return Promise.reject(value); return AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }; function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) { return Promise.reject(new TypeError(r + " is not an object.")); } var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return new AsyncFromSyncIterator(s); }

var parse = function parse(str) {
  try {
    return str ? JSON.parse(str) : null;
  } catch (_unused) {
    return null;
  }
};

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var buffer, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buffer = [];
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(req);

          case 5:
            _context.next = 7;
            return _iterator.next();

          case 7:
            if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
              _context.next = 13;
              break;
            }

            chunk = _step.value;
            buffer.push(chunk);

          case 10:
            _iteratorAbruptCompletion = false;
            _context.next = 5;
            break;

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 19:
            _context.prev = 19;
            _context.prev = 20;

            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context.next = 24;
              break;
            }

            _context.next = 24;
            return _iterator["return"]();

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(19);

          case 29:
            return _context.abrupt("return", parse(Buffer.concat(buffer).toString()));

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 15, 19, 29], [20,, 24, 28]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9ib2R5LXBhcnNlci5qcyJdLCJuYW1lcyI6WyJwYXJzZSIsInN0ciIsIkpTT04iLCJyZXEiLCJidWZmZXIiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJjb25jYXQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxHQUFHLEVBQUk7QUFDbkIsTUFBSTtBQUNGLFdBQU9BLEdBQUcsR0FBR0MsSUFBSSxDQUFDRixLQUFMLENBQVdDLEdBQVgsQ0FBSCxHQUFxQixJQUEvQjtBQUNELEdBRkQsQ0FFRSxnQkFBTTtBQUNOLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FORDs7OzJGQVFlLGlCQUFNRSxHQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEMsWUFBQUEsTUFETyxHQUNFLEVBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FHYUQsR0FIYjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHSUUsWUFBQUEsS0FISjtBQUlYRCxZQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUQsS0FBWjs7QUFKVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQU9OTCxLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixNQUFkLEVBQXNCSyxRQUF0QixFQUFELENBUEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnNlID0gc3RyID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc3RyID8gSlNPTi5wYXJzZShzdHIpIDogbnVsbFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIHJlcSA9PiB7XG4gIGNvbnN0IGJ1ZmZlciA9IFtdXG5cbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZXEpIHtcbiAgICBidWZmZXIucHVzaChjaHVuaylcbiAgfVxuXG4gIHJldHVybiBwYXJzZShCdWZmZXIuY29uY2F0KGJ1ZmZlcikudG9TdHJpbmcoKSlcbn0iXX0=