"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

var _errors = require("../errors");

var getJsFilesInDir = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pathToDir) {
    var dir;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promises["default"].readdir(_path["default"].resolve(__dirname, pathToDir));

          case 2:
            dir = _context.sent;
            return _context.abrupt("return", dir.filter(function (item) {
              return item.includes('.js');
            }).map(function (fileName) {
              return _path["default"].resolve(__dirname, pathToDir, fileName);
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getJsFilesInDir(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadModules = function loadModules(modules) {
  return Promise.all(modules.map(function (path) {
    return Promise.resolve("".concat(path)).then(function (s) {
      return (0, _interopRequireWildcard2["default"])(require(s));
    });
  }));
};

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(pathToDir) {
    var servicesPath, services;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getJsFilesInDir(pathToDir);

          case 2:
            servicesPath = _context2.sent;
            _context2.next = 5;
            return loadModules(servicesPath);

          case 5:
            services = _context2.sent;
            services.forEach(function (Service, i) {
              var _Service$default;

              if (!((_Service$default = Service["default"]) !== null && _Service$default !== void 0 && _Service$default.name)) {
                throw new _errors.InternalError("Default export not found for module: ".concat(servicesPath[i]));
              }

              console.log("".concat(Service["default"].name, " service successfully initialized"));
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;