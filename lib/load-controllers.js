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
                throw new Error("Default export not found for module: ".concat(modulesPath[i]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkLWNvbnRyb2xsZXJzLmpzIl0sIm5hbWVzIjpbImdldE1vZHVsZXNQYXRoIiwicGF0aFRvRGlyIiwiZnMiLCJyZWFkZGlyIiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJkaXIiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJtYXAiLCJmaWxlTmFtZSIsImxvYWRNb2R1bGVzIiwibW9kdWxlc1BhdGgiLCJQcm9taXNlIiwiYWxsIiwibG9hZENvbnRyb2xsZXJzIiwiY29udHJvbGxlcnMiLCJmb3JFYWNoIiwiQ29udHJvbGxlciIsImkiLCJuYW1lIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYztBQUFBLDJGQUFHLGlCQUFNQyxTQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hDLHFCQUFHQyxPQUFILENBQVdDLGlCQUFLQyxPQUFMLENBQWFDLFNBQWIsRUFBd0JMLFNBQXhCLENBQVgsQ0FERzs7QUFBQTtBQUNmTSxZQUFBQSxHQURlO0FBQUEsNkNBR2RBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLFVBQUFDLElBQUk7QUFBQSxxQkFBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWMsS0FBZCxDQUFKO0FBQUEsYUFBZixFQUNKQyxHQURJLENBQ0EsVUFBQUMsUUFBUTtBQUFBLHFCQUFJUixpQkFBS0MsT0FBTCxDQUFhQyxTQUFiLEVBQXdCTCxTQUF4QixFQUFtQ1csUUFBbkMsQ0FBSjtBQUFBLGFBRFIsQ0FIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkWixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCOztBQU9BLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFdBQVc7QUFBQSxTQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBVyxDQUFDSCxHQUFaLENBQWdCLFVBQUFQLElBQUk7QUFBQSxxQ0FBV0EsSUFBWDtBQUFBO0FBQUE7QUFBQSxHQUFwQixDQUFaLENBQUo7QUFBQSxDQUEvQjs7U0FFOEJhLGU7Ozs7O21HQUFmLGtCQUErQmhCLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FELGNBQWMsQ0FBQ0MsU0FBRCxDQUQzQjs7QUFBQTtBQUNQYSxZQUFBQSxXQURPO0FBQUE7QUFBQSxtQkFFYUQsV0FBVyxDQUFDQyxXQUFELENBRnhCOztBQUFBO0FBRVBJLFlBQUFBLFdBRk87QUFJYkEsWUFBQUEsV0FBVyxDQUFDQyxPQUFaLENBQW9CLFVBQUNDLFVBQUQsRUFBYUMsQ0FBYixFQUFtQjtBQUFBOztBQUNyQyxrQkFBSSx5QkFBQ0QsVUFBVSxXQUFYLGdEQUFDLG9CQUFvQkUsSUFBckIsQ0FBSixFQUErQjtBQUM3QixzQkFBTSxJQUFJQyxLQUFKLGdEQUFrRFQsV0FBVyxDQUFDTyxDQUFELENBQTdELEVBQU47QUFDRDs7QUFFREcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVMLFVBQVUsV0FBVixDQUFtQkUsSUFBbEM7QUFDRCxhQU5EOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBnZXRNb2R1bGVzUGF0aCA9IGFzeW5jIHBhdGhUb0RpciA9PiB7XG4gIGNvbnN0IGRpciA9IGF3YWl0IGZzLnJlYWRkaXIocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcGF0aFRvRGlyKSlcblxuICByZXR1cm4gZGlyLmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoJy5qcycpKVxuICAgIC5tYXAoZmlsZU5hbWUgPT4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcGF0aFRvRGlyLCBmaWxlTmFtZSkpXG59XG5cbmNvbnN0IGxvYWRNb2R1bGVzID0gbW9kdWxlc1BhdGggPT4gUHJvbWlzZS5hbGwobW9kdWxlc1BhdGgubWFwKHBhdGggPT4gaW1wb3J0KHBhdGgpKSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbnRyb2xsZXJzKHBhdGhUb0Rpcikge1xuICBjb25zdCBtb2R1bGVzUGF0aCA9IGF3YWl0IGdldE1vZHVsZXNQYXRoKHBhdGhUb0RpcilcbiAgY29uc3QgY29udHJvbGxlcnMgPSBhd2FpdCBsb2FkTW9kdWxlcyhtb2R1bGVzUGF0aClcblxuICBjb250cm9sbGVycy5mb3JFYWNoKChDb250cm9sbGVyLCBpKSA9PiB7XG4gICAgaWYgKCFDb250cm9sbGVyLmRlZmF1bHQ/Lm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVmYXVsdCBleHBvcnQgbm90IGZvdW5kIGZvciBtb2R1bGU6ICR7bW9kdWxlc1BhdGhbaV19YClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgJHtDb250cm9sbGVyLmRlZmF1bHQubmFtZX0gY29udHJvbGxlciBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWRgKVxuICB9KVxufSJdfQ==