"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldLooseBase2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseBase"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseKey"));

var _querystring = _interopRequireDefault(require("querystring"));

var _regExp = (0, _classPrivateFieldLooseKey2["default"])("regExp");

var _paramsChecker = (0, _classPrivateFieldLooseKey2["default"])("paramsChecker");

var Url = /*#__PURE__*/function () {
  /**
   *
   * @type {RegExp}
   */
  function Url(pattern) {
    (0, _classCallCheck2["default"])(this, Url);
    Object.defineProperty(this, _regExp, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _paramsChecker, {
      writable: true,
      value: /{([^}{]+)}/g
    });
    this.pattern = pattern;
    this.strForRegExp = pattern;
    this.pathParamsMap = {};
    (0, _classPrivateFieldLooseBase2["default"])(this, _regExp)[_regExp] = !pattern && /^($|\?.+)/;
  }

  (0, _createClass2["default"])(Url, [{
    key: "getRegExp",
    value: function getRegExp() {
      if ((0, _classPrivateFieldLooseBase2["default"])(this, _regExp)[_regExp]) {
        return (0, _classPrivateFieldLooseBase2["default"])(this, _regExp)[_regExp];
      }

      var pathParams = (0, _classPrivateFieldLooseBase2["default"])(this, _paramsChecker)[_paramsChecker].exec(this.pattern);

      if (!pathParams) {
        return new RegExp("".concat(this.strForRegExp, "(\\?|$)"));
      }

      this.strForRegExp = this.strForRegExp.replace(pathParams[0], '([^\\?/]+)?');
      this.pathParamsMap[pathParams[1]] = null;
      return this.getRegExp();
    }
  }, {
    key: "parsePathParams",
    value: function parsePathParams(url) {
      var _this = this;

      var regExp = this.getRegExp();
      var parsed = regExp.exec(url);

      if (parsed) {
        var _parsed = (0, _toArray2["default"])(parsed),
            params = _parsed.slice(1);

        Object.keys(this.pathParamsMap).forEach(function (param, i) {
          _this.pathParamsMap[param] = params[i];
        });
      }

      return this.pathParamsMap;
    }
  }, {
    key: "parseQueryParams",
    value: function parseQueryParams(url) {
      var _url$split = url.split('?'),
          _url$split2 = (0, _slicedToArray2["default"])(_url$split, 2),
          query = _url$split2[1];

      return _querystring["default"].parse(query);
    }
  }]);
  return Url;
}();

exports["default"] = Url;