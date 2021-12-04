"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalAssert = exports.NotFoundError = exports.InternalError = exports.ControllerError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _codes = require("./codes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ControllerError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ControllerError, _Error);

  var _super = _createSuper(ControllerError);

  function ControllerError(message, statusCode) {
    var _this;

    (0, _classCallCheck2["default"])(this, ControllerError);
    _this = _super.call(this);
    _this.statusCode = statusCode;
    _this.message = message;
    _this.name = _this.constructor.name;
    return _this;
  }

  return ControllerError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.ControllerError = ControllerError;

var NotFoundError = /*#__PURE__*/function (_ControllerError) {
  (0, _inherits2["default"])(NotFoundError, _ControllerError);

  var _super2 = _createSuper(NotFoundError);

  function NotFoundError() {
    (0, _classCallCheck2["default"])(this, NotFoundError);
    return _super2.call(this, 'Not Found', _codes.HttpCode.NOT_FOUND);
  }

  return NotFoundError;
}(ControllerError);

exports.NotFoundError = NotFoundError;

var InternalError = /*#__PURE__*/function (_Error2) {
  (0, _inherits2["default"])(InternalError, _Error2);

  var _super3 = _createSuper(InternalError);

  function InternalError(message) {
    var _this2;

    (0, _classCallCheck2["default"])(this, InternalError);
    _this2 = _super3.call(this);
    _this2.message = message;
    _this2.name = InternalError.name;
    return _this2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlckVycm9yIiwibWVzc2FnZSIsInN0YXR1c0NvZGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJFcnJvciIsIk5vdEZvdW5kRXJyb3IiLCJjIiwiTk9UX0ZPVU5EIiwiSW50ZXJuYWxFcnJvciIsImludGVybmFsQXNzZXJ0IiwiY29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVhQSxlOzs7OztBQUNYLDJCQUFZQyxPQUFaLEVBQXFCQyxVQUFyQixFQUFpQztBQUFBOztBQUFBO0FBQy9CO0FBRUEsVUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLRSxJQUFMLEdBQVksTUFBS0MsV0FBTCxDQUFpQkQsSUFBN0I7QUFMK0I7QUFNaEM7OztrREFQa0NFLEs7Ozs7SUFVeEJDLGE7Ozs7O0FBQ1gsMkJBQWM7QUFBQTtBQUFBLDhCQUNOLFdBRE0sRUFDT0MsZ0JBQUVDLFNBRFQ7QUFFYjs7O0VBSGdDUixlOzs7O0lBTXRCUyxhOzs7OztBQUNYLHlCQUFZUixPQUFaLEVBQXFCO0FBQUE7O0FBQUE7QUFDbkI7QUFFQSxXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLRSxJQUFMLEdBQVlNLGFBQWEsQ0FBQ04sSUFBMUI7QUFKbUI7QUFLcEI7OztrREFOZ0NFLEs7Ozs7QUFTNUIsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQVlWLE9BQVosRUFBd0I7QUFDcEQsTUFBSSxDQUFDVSxTQUFMLEVBQWdCO0FBQ2QsVUFBTSxJQUFJRixhQUFKLENBQWtCUixPQUFsQixDQUFOO0FBQ0Q7QUFDRixDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvZGUgYXMgYyB9IGZyb20gJy4vY29kZXMnXG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgQ29udHJvbGxlckVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ05vdCBGb3VuZCcsIGMuTk9UX0ZPVU5EKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IEludGVybmFsRXJyb3IubmFtZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbnRlcm5hbEFzc2VydCA9IChjb25kaXRpb24sIG1lc3NhZ2UpID0+IHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihtZXNzYWdlKVxuICB9XG59Il19