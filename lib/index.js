"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var meta = _interopRequireWildcard(require("./meta"));

var _listener = _interopRequireDefault(require("./listener"));

var _loadControllers = _interopRequireDefault(require("./load-controllers"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var tropa = {
  listener: _listener["default"],
  loadControllers: _loadControllers["default"],
  setApiPrefix: meta.setApiPrefix,
  useHooks: meta.setHooks
};
var _default = tropa;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0cm9wYSIsImxpc3RlbmVyIiwibG9hZENvbnRyb2xsZXJzIiwic2V0QXBpUHJlZml4IiwibWV0YSIsInVzZUhvb2tzIiwic2V0SG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxFQUFBQSxRQUFRLEVBQVJBLG9CQURZO0FBRVpDLEVBQUFBLGVBQWUsRUFBZkEsMkJBRlk7QUFHWkMsRUFBQUEsWUFBWSxFQUFFQyxJQUFJLENBQUNELFlBSFA7QUFJWkUsRUFBQUEsUUFBUSxFQUFNRCxJQUFJLENBQUNFO0FBSlAsQ0FBZDtlQU9lTixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbWV0YSBmcm9tICcuL21ldGEnXG5pbXBvcnQgbGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcidcbmltcG9ydCBsb2FkQ29udHJvbGxlcnMgZnJvbSAnLi9sb2FkLWNvbnRyb2xsZXJzJ1xuXG5jb25zdCB0cm9wYSA9IHtcbiAgbGlzdGVuZXIsXG4gIGxvYWRDb250cm9sbGVycyxcbiAgc2V0QXBpUHJlZml4OiBtZXRhLnNldEFwaVByZWZpeCxcbiAgdXNlSG9va3MgICAgOiBtZXRhLnNldEhvb2tzLFxufVxuXG5leHBvcnQgZGVmYXVsdCB0cm9wYSJdfQ==