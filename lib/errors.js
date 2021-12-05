"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TropaError = exports.NotFoundError = exports.NOT_FOUND_ERROR = exports.InternalServerError = exports.INTERNAL_SERVER_ERROR = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _codes = require("./codes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TropaError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(TropaError, _Error);

  var _super = _createSuper(TropaError);

  function TropaError(message, statusCode) {
    var _this;

    (0, _classCallCheck2["default"])(this, TropaError);
    _this = _super.call(this);
    _this.message = message;
    _this.statusCode = statusCode;
    _this.name = _this.constructor.name;
    return _this;
  }

  return TropaError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.TropaError = TropaError;

var NotFoundError = /*#__PURE__*/function (_TropaError) {
  (0, _inherits2["default"])(NotFoundError, _TropaError);

  var _super2 = _createSuper(NotFoundError);

  function NotFoundError() {
    (0, _classCallCheck2["default"])(this, NotFoundError);
    return _super2.call(this, 'Not Found', _codes.HttpCode.NOT_FOUND);
  }

  return NotFoundError;
}(TropaError);

exports.NotFoundError = NotFoundError;

var InternalServerError = /*#__PURE__*/function (_TropaError2) {
  (0, _inherits2["default"])(InternalServerError, _TropaError2);

  var _super3 = _createSuper(InternalServerError);

  function InternalServerError() {
    (0, _classCallCheck2["default"])(this, InternalServerError);
    return _super3.call(this, 'Internal Server Error', _codes.HttpCode.INTERNAL_SERVER_ERROR);
  }

  return InternalServerError;
}(TropaError);

exports.InternalServerError = InternalServerError;
var NOT_FOUND_ERROR = new NotFoundError();
exports.NOT_FOUND_ERROR = NOT_FOUND_ERROR;
var INTERNAL_SERVER_ERROR = new InternalServerError();
exports.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;
Object.freeze(NOT_FOUND_ERROR);
Object.freeze(INTERNAL_SERVER_ERROR);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOlsiVHJvcGFFcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwibmFtZSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJOb3RGb3VuZEVycm9yIiwiYyIsIk5PVF9GT1VORCIsIkludGVybmFsU2VydmVyRXJyb3IiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJOT1RfRk9VTkRfRVJST1IiLCJPYmplY3QiLCJmcmVlemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRWFBLFU7Ozs7O0FBQ1gsc0JBQVlDLE9BQVosRUFBcUJDLFVBQXJCLEVBQWlDO0FBQUE7O0FBQUE7QUFDL0I7QUFFQSxVQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQyxXQUFMLENBQWlCRCxJQUE3QjtBQUwrQjtBQU1oQzs7O2tEQVA2QkUsSzs7OztJQVVuQkMsYTs7Ozs7QUFDWCwyQkFBYztBQUFBO0FBQUEsOEJBQ04sV0FETSxFQUNPQyxnQkFBRUMsU0FEVDtBQUViOzs7RUFIZ0NSLFU7Ozs7SUFNdEJTLG1COzs7OztBQUNYLGlDQUFjO0FBQUE7QUFBQSw4QkFDTix1QkFETSxFQUNtQkYsZ0JBQUVHLHFCQURyQjtBQUViOzs7RUFIc0NWLFU7OztBQU1sQyxJQUFNVyxlQUFlLEdBQUcsSUFBSUwsYUFBSixFQUF4Qjs7QUFDQSxJQUFNSSxxQkFBcUIsR0FBRyxJQUFJRCxtQkFBSixFQUE5Qjs7QUFFUEcsTUFBTSxDQUFDQyxNQUFQLENBQWNGLGVBQWQ7QUFDQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNILHFCQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvZGUgYXMgYyB9IGZyb20gJy4vY29kZXMnXG5cbmV4cG9ydCBjbGFzcyBUcm9wYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGVcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIFRyb3BhRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignTm90IEZvdW5kJywgYy5OT1RfRk9VTkQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVybmFsU2VydmVyRXJyb3IgZXh0ZW5kcyBUcm9wYUVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0ludGVybmFsIFNlcnZlciBFcnJvcicsIGMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfRVJST1IgPSBuZXcgTm90Rm91bmRFcnJvcigpXG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SID0gbmV3IEludGVybmFsU2VydmVyRXJyb3IoKVxuXG5PYmplY3QuZnJlZXplKE5PVF9GT1VORF9FUlJPUilcbk9iamVjdC5mcmVlemUoSU5URVJOQUxfU0VSVkVSX0VSUk9SKSJdfQ==