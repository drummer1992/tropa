"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalAssert = exports.NotFoundError = exports.InternalError = void 0;

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _codes = require("./codes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotFoundError = function NotFoundError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Not Found';
  (0, _classCallCheck2["default"])(this, NotFoundError);
  this.message = message;
  this.statusCode = _codes.HttpCode.NOT_FOUND;
  this.name = this.constructor.name;
};

exports.NotFoundError = NotFoundError;

var InternalError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(InternalError, _Error);

  var _super = _createSuper(InternalError);

  function InternalError(message) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalError);
    _this = _super.call(this);
    _this.message = message;
    _this.name = InternalError.name;
    return _this;
  }

  return InternalError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.InternalError = InternalError;

var internalAssert = function internalAssert(condition, message) {
  if (!condition) {
    throw new InternalError(message);
  }
};

exports.internalAssert = internalAssert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOlsiTm90Rm91bmRFcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwiYyIsIk5PVF9GT1VORCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsIkludGVybmFsRXJyb3IiLCJFcnJvciIsImludGVybmFsQXNzZXJ0IiwiY29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVhQSxhLEdBQ1gseUJBQW1DO0FBQUEsTUFBdkJDLE9BQXVCLHVFQUFiLFdBQWE7QUFBQTtBQUNqQyxPQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxVQUFMLEdBQWtCQyxnQkFBRUMsU0FBcEI7QUFDQSxPQUFLQyxJQUFMLEdBQVksS0FBS0MsV0FBTCxDQUFpQkQsSUFBN0I7QUFDRCxDOzs7O0lBR1VFLGE7Ozs7O0FBQ1gseUJBQVlOLE9BQVosRUFBcUI7QUFBQTs7QUFBQTtBQUNuQjtBQUVBLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtJLElBQUwsR0FBWUUsYUFBYSxDQUFDRixJQUExQjtBQUptQjtBQUtwQjs7O2tEQU5nQ0csSzs7OztBQVM1QixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBWVQsT0FBWixFQUF3QjtBQUNwRCxNQUFJLENBQUNTLFNBQUwsRUFBZ0I7QUFDZCxVQUFNLElBQUlILGFBQUosQ0FBa0JOLE9BQWxCLENBQU47QUFDRDtBQUNGLENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ29kZSBhcyBjIH0gZnJvbSAnLi9jb2RlcydcblxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gJ05vdCBGb3VuZCcpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5zdGF0dXNDb2RlID0gYy5OT1RfRk9VTkRcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLm5hbWUgPSBJbnRlcm5hbEVycm9yLm5hbWVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaW50ZXJuYWxBc3NlcnQgPSAoY29uZGl0aW9uLCBtZXNzYWdlKSA9PiB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEludGVybmFsRXJyb3IobWVzc2FnZSlcbiAgfVxufSJdfQ==