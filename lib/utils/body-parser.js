"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncIterator"));

var parse = function parse(str) {
  try {
    return str ? JSON.parse(str) : null;
  } catch (_unused) {
    return null;
  }
};

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buffer = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = (0, _asyncIterator2["default"])(req);

          case 5:
            _context.next = 7;
            return _iterator.next();

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _step.value;

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 18;
              break;
            }

            chunk = _value;
            buffer.push(chunk);

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return _iterator["return"]();

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(24);

          case 34:
            return _context.abrupt("return", parse(Buffer.concat(buffer).toString()));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;