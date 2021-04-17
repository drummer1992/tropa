"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _metaMethods___ = require("./___meta-methods___");

var _codes = require("../codes");

var _errors = require("../errors");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BaseService = /*#__PURE__*/function () {
  function BaseService(req, res) {
    (0, _classCallCheck2["default"])(this, BaseService);
    this._req = req;
    this._res = res;
    this.request = {
      url: req.url,
      method: req.method,
      headers: _objectSpread({}, req.headers),
      pathParams: null,
      queryParams: null,
      body: null
    };
    this.response = {
      statusCode: _codes.HttpCode.OK,
      headers: {}
    };
  }

  (0, _createClass2["default"])(BaseService, [{
    key: "setStatusCode",
    value: function setStatusCode(code) {
      this.response.statusCode = code;
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.response.headers = _objectSpread(_objectSpread({}, this.response.headers), headers);
    }
  }, {
    key: "execute",
    value: function execute() {
      var serviceMethod = (0, _metaMethods___.getServiceMethod)(this);

      if (!this[serviceMethod]) {
        throw new _errors.ServiceError('Service Method Not Found', _codes.HttpCode.NOT_FOUND);
      }

      return this[serviceMethod]();
    }
  }], [{
    key: "getCurrentService",
    value: function getCurrentService(url) {
      var _iterator = _createForOfIteratorHelper(_metaMethods___.EndpointsByServiceMap.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Service = _step.value;

          if ((0, _metaMethods___.isProperlyService)(Service, url)) {
            return Service;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return BaseService;
}();

exports["default"] = BaseService;