"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _codes = require("./codes");

var _errors = require("./errors");

var _cors = require("./decorators/legacy/cors");

var _default = function _default(AppService, options) {
  var corsEnabled = options.cors;

  var requestListener = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var response, statusCode, headers, Service, service;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Service = AppService.getCurrentService(req.url);

              if (!Service) {
                _context.next = 10;
                break;
              }

              // noinspection JSValidateTypes
              service = new Service(req, res);
              _context.next = 5;
              return service.execute();

            case 5:
              response = _context.sent;
              statusCode = service.response.statusCode;
              headers = service.response.headers;
              _context.next = 12;
              break;

            case 10:
              response = new _errors.ServiceError('Service not found');
              statusCode = _codes.HttpCode.NOT_FOUND;

            case 12:
              res.writeHead(statusCode, headers);
              res.end(response && JSON.stringify(response));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function requestListener(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return corsEnabled ? (0, _cors.withCors)(requestListener) : requestListener;
};

exports["default"] = _default;