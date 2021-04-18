"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = ErrorHandler;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _errors = require("../errors");

function ErrorHandler(instance, serviceName, descriptor) {
  var method = descriptor.value;
  descriptor.value = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _len,
        args,
        _key,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }

            _context.next = 4;
            return method.apply(this, args);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            if (!(_context.t0 instanceof _errors.ServiceError)) {
              _context.next = 12;
              break;
            }

            this.setStatusCode(_context.t0.statusCode);
            return _context.abrupt("return", _context.t0);

          case 12:
            throw _context.t0;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  return descriptor;
}