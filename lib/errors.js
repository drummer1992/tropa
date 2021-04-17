"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InternalError = exports.ServiceError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _codes = require("./codes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ServiceError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ServiceError, _Error);

  var _super = _createSuper(ServiceError);

  function ServiceError(message, statusCode) {
    var _this;

    (0, _classCallCheck2["default"])(this, ServiceError);
    _this = _super.call(this);
    _this.statusCode = statusCode;
    _this.message = message;
    _this.name = ServiceError.name;
    return _this;
  }

  return ServiceError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.ServiceError = ServiceError;

var InternalError = /*#__PURE__*/function (_ServiceError) {
  (0, _inherits2["default"])(InternalError, _ServiceError);

  var _super2 = _createSuper(InternalError);

  function InternalError() {
    var _this2;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Internal Server Error';
    (0, _classCallCheck2["default"])(this, InternalError);
    _this2 = _super2.call(this);
    _this2.message = message;
    _this2.statusCode = _codes.StatusCode.INTERNAL_SERVER_ERROR;
    _this2.name = InternalError.name;
    return _this2;
  }

  return InternalError;
}(ServiceError);

exports.InternalError = InternalError;