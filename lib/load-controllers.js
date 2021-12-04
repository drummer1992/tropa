"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = loadControllers;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

var _errors = require("./errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getModulesPath = /*#__PURE__*/function () {
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

  return function getModulesPath(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadModules = function loadModules(modulesPath) {
  return Promise.all(modulesPath.map(function (path) {
    return Promise.resolve("".concat(path)).then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }));
};

function loadControllers(_x2) {
  return _loadControllers.apply(this, arguments);
}

function _loadControllers() {
  _loadControllers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(pathToDir) {
    var modulesPath, controllers;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getModulesPath(pathToDir);

          case 2:
            modulesPath = _context2.sent;
            _context2.next = 5;
            return loadModules(modulesPath);

          case 5:
            controllers = _context2.sent;
            controllers.forEach(function (Controller, i) {
              var _Controller$default;

              if (!((_Controller$default = Controller["default"]) !== null && _Controller$default !== void 0 && _Controller$default.name)) {
                throw new _errors.InternalError("Default export not found for module: ".concat(modulesPath[i]));
              }

              console.log("".concat(Controller["default"].name, " controller successfully initialized"));
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadControllers.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkLWNvbnRyb2xsZXJzLmpzIl0sIm5hbWVzIjpbImdldE1vZHVsZXNQYXRoIiwicGF0aFRvRGlyIiwiZnMiLCJyZWFkZGlyIiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJkaXIiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJtYXAiLCJmaWxlTmFtZSIsImxvYWRNb2R1bGVzIiwibW9kdWxlc1BhdGgiLCJQcm9taXNlIiwiYWxsIiwibG9hZENvbnRyb2xsZXJzIiwiY29udHJvbGxlcnMiLCJmb3JFYWNoIiwiQ29udHJvbGxlciIsImkiLCJuYW1lIiwiSW50ZXJuYWxFcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjO0FBQUEsMkZBQUcsaUJBQU1DLFNBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSEMscUJBQUdDLE9BQUgsQ0FBV0MsaUJBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF3QkwsU0FBeEIsQ0FBWCxDQURHOztBQUFBO0FBQ2ZNLFlBQUFBLEdBRGU7QUFBQSw2Q0FHZEEsR0FBRyxDQUFDQyxNQUFKLENBQVcsVUFBQUMsSUFBSTtBQUFBLHFCQUFJQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxLQUFkLENBQUo7QUFBQSxhQUFmLEVBQ0pDLEdBREksQ0FDQSxVQUFBQyxRQUFRO0FBQUEscUJBQUlSLGlCQUFLQyxPQUFMLENBQWFDLFNBQWIsRUFBd0JMLFNBQXhCLEVBQW1DVyxRQUFuQyxDQUFKO0FBQUEsYUFEUixDQUhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRaLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7O0FBT0EsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsV0FBVztBQUFBLFNBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFXLENBQUNILEdBQVosQ0FBZ0IsVUFBQVAsSUFBSTtBQUFBLHFDQUFXQSxJQUFYO0FBQUE7QUFBQTtBQUFBLEdBQXBCLENBQVosQ0FBSjtBQUFBLENBQS9COztTQUU4QmEsZTs7Ozs7bUdBQWYsa0JBQStCaEIsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYUQsY0FBYyxDQUFDQyxTQUFELENBRDNCOztBQUFBO0FBQ1BhLFlBQUFBLFdBRE87QUFBQTtBQUFBLG1CQUVhRCxXQUFXLENBQUNDLFdBQUQsQ0FGeEI7O0FBQUE7QUFFUEksWUFBQUEsV0FGTztBQUliQSxZQUFBQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsVUFBQ0MsVUFBRCxFQUFhQyxDQUFiLEVBQW1CO0FBQUE7O0FBQ3JDLGtCQUFJLHlCQUFDRCxVQUFVLFdBQVgsZ0RBQUMsb0JBQW9CRSxJQUFyQixDQUFKLEVBQStCO0FBQzdCLHNCQUFNLElBQUlDLHFCQUFKLGdEQUEwRFQsV0FBVyxDQUFDTyxDQUFELENBQXJFLEVBQU47QUFDRDs7QUFFREcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVMLFVBQVUsV0FBVixDQUFtQkUsSUFBbEM7QUFDRCxhQU5EOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgSW50ZXJuYWxFcnJvciB9IGZyb20gJy4vZXJyb3JzJ1xuXG5jb25zdCBnZXRNb2R1bGVzUGF0aCA9IGFzeW5jIHBhdGhUb0RpciA9PiB7XG4gIGNvbnN0IGRpciA9IGF3YWl0IGZzLnJlYWRkaXIocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcGF0aFRvRGlyKSlcblxuICByZXR1cm4gZGlyLmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoJy5qcycpKVxuICAgIC5tYXAoZmlsZU5hbWUgPT4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcGF0aFRvRGlyLCBmaWxlTmFtZSkpXG59XG5cbmNvbnN0IGxvYWRNb2R1bGVzID0gbW9kdWxlc1BhdGggPT4gUHJvbWlzZS5hbGwobW9kdWxlc1BhdGgubWFwKHBhdGggPT4gaW1wb3J0KHBhdGgpKSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbnRyb2xsZXJzKHBhdGhUb0Rpcikge1xuICBjb25zdCBtb2R1bGVzUGF0aCA9IGF3YWl0IGdldE1vZHVsZXNQYXRoKHBhdGhUb0RpcilcbiAgY29uc3QgY29udHJvbGxlcnMgPSBhd2FpdCBsb2FkTW9kdWxlcyhtb2R1bGVzUGF0aClcblxuICBjb250cm9sbGVycy5mb3JFYWNoKChDb250cm9sbGVyLCBpKSA9PiB7XG4gICAgaWYgKCFDb250cm9sbGVyLmRlZmF1bHQ/Lm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBJbnRlcm5hbEVycm9yKGBEZWZhdWx0IGV4cG9ydCBub3QgZm91bmQgZm9yIG1vZHVsZTogJHttb2R1bGVzUGF0aFtpXX1gKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGAke0NvbnRyb2xsZXIuZGVmYXVsdC5uYW1lfSBjb250cm9sbGVyIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZGApXG4gIH0pXG59Il19