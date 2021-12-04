"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _querystring = _interopRequireDefault(require("querystring"));

var _symbols = _interopRequireDefault(require("../symbols"));

var parsePathParams = function parsePathParams(url, regExp, paramsKeys) {
  var parsed = regExp.exec(url);
  var pathParams = {};

  if (parsed) {
    var _parsed = (0, _toArray2["default"])(parsed),
        parsedParams = _parsed.slice(1);

    paramsKeys.forEach(function (param, i) {
      pathParams[param] = parsedParams[i];
    });
  }

  return pathParams;
};

var parseQueryParams = function parseQueryParams(url) {
  var _url$split = url.split('?'),
      _url$split2 = (0, _slicedToArray2["default"])(_url$split, 2),
      query = _url$split2[1];

  return _querystring["default"].parse(query);
};

var QUERY_PARAMS_STR_REGEXP = '$|\\?.+';
var PATH_PARAM_STR_REGEXP = '([^\\?/]+)?';
var ROOT_REGEXP = new RegExp("^(".concat(QUERY_PARAMS_STR_REGEXP, ")"));

var compilePattern = function compilePattern(pattern) {
  var syntaxRegExp = /{([^}{]+)}/g;
  var params = [];
  var analysed,
      regExpStr = pattern;

  while (analysed = syntaxRegExp.exec(pattern)) {
    var _analysed = analysed,
        _analysed2 = (0, _slicedToArray2["default"])(_analysed, 2),
        paramInBrackets = _analysed2[0],
        param = _analysed2[1];

    params.push(param);
    regExpStr = regExpStr.replace(paramInBrackets, PATH_PARAM_STR_REGEXP);
  }

  return {
    params: params,
    regExp: regExpStr ? new RegExp("".concat(regExpStr, "(").concat(QUERY_PARAMS_STR_REGEXP, ")")) : ROOT_REGEXP
  };
};

var trimIfRoot = function trimIfRoot(pattern) {
  return Url.isRoot(pattern) ? Url.trim(pattern) : pattern;
};

var Url = /*#__PURE__*/function () {
  function Url(method) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck2["default"])(this, Url);
    var trimmed = trimIfRoot(pattern);
    var compiled = compilePattern(trimmed);
    this[_symbols["default"].kMethod] = method;
    this[_symbols["default"].kRegExp] = compiled.regExp;
    this[_symbols["default"].kParams] = compiled.params;
  }

  (0, _createClass2["default"])(Url, [{
    key: "regExp",
    get: function get() {
      return this[_symbols["default"].kRegExp];
    }
  }, {
    key: "method",
    get: function get() {
      return this[_symbols["default"].kMethod];
    }
  }, {
    key: "parseParams",
    value: function parseParams(url) {
      return parsePathParams(url, this.regExp, this[_symbols["default"].kParams]);
    }
  }, {
    key: "parseQuery",
    value: function parseQuery(url) {
      return parseQueryParams(url);
    }
  }], [{
    key: "trim",
    value: function trim() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var last = url[url.length - 1];

      if (last === '/') {
        return url.slice(0, -1);
      }

      return url;
    }
  }, {
    key: "isRoot",
    value: function isRoot(url) {
      return !url || url === '/';
    }
  }]);
  return Url;
}();

exports["default"] = Url;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91cmwuanMiXSwibmFtZXMiOlsicGFyc2VQYXRoUGFyYW1zIiwidXJsIiwicmVnRXhwIiwicGFyYW1zS2V5cyIsInBhcnNlZCIsImV4ZWMiLCJwYXRoUGFyYW1zIiwicGFyc2VkUGFyYW1zIiwiZm9yRWFjaCIsInBhcmFtIiwiaSIsInBhcnNlUXVlcnlQYXJhbXMiLCJzcGxpdCIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJwYXJzZSIsIlFVRVJZX1BBUkFNU19TVFJfUkVHRVhQIiwiUEFUSF9QQVJBTV9TVFJfUkVHRVhQIiwiUk9PVF9SRUdFWFAiLCJSZWdFeHAiLCJjb21waWxlUGF0dGVybiIsInBhdHRlcm4iLCJzeW50YXhSZWdFeHAiLCJwYXJhbXMiLCJhbmFseXNlZCIsInJlZ0V4cFN0ciIsInBhcmFtSW5CcmFja2V0cyIsInB1c2giLCJyZXBsYWNlIiwidHJpbUlmUm9vdCIsIlVybCIsImlzUm9vdCIsInRyaW0iLCJtZXRob2QiLCJ0cmltbWVkIiwiY29tcGlsZWQiLCJLZXlzIiwia01ldGhvZCIsImtSZWdFeHAiLCJrUGFyYW1zIiwibGFzdCIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWNDLFVBQWQsRUFBNkI7QUFDbkQsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUosR0FBWixDQUFmO0FBRUEsTUFBTUssVUFBVSxHQUFHLEVBQW5COztBQUVBLE1BQUlGLE1BQUosRUFBWTtBQUNWLDRDQUE0QkEsTUFBNUI7QUFBQSxRQUFZRyxZQUFaOztBQUVBSixJQUFBQSxVQUFVLENBQUNLLE9BQVgsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDL0JKLE1BQUFBLFVBQVUsQ0FBQ0csS0FBRCxDQUFWLEdBQW9CRixZQUFZLENB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Q0Q7O0FBRUQsYUFBT3pDLEdBQVA7QUFDRDs7O1dBRUQsZ0JBQWNBLEdBQWQsRUFBbUI7QUFDakIsYUFBTyxDQUFDQSxHQUFELElBQVNBLEdBQUcsS0FBSyxHQUF4QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IEtleXMgZnJvbSAnLi4vc3ltYm9scydcblxuY29uc3QgcGFyc2VQYXRoUGFyYW1zID0gKHVybCwgcmVnRXhwLCBwYXJhbXNLZXlzKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHJlZ0V4cC5leGVjKHVybClcblxuICBjb25zdCBwYXRoUGFyYW1zID0ge31cblxuICBpZiAocGFyc2VkKSB7XG4gICAgY29uc3QgWywgLi4ucGFyc2VkUGFyYW1zXSA9IHBhcnNlZFxuXG4gICAgcGFyYW1zS2V5cy5mb3JFYWNoKChwYXJhbSwgaSkgPT4ge1xuICAgICAgcGF0aFBhcmFtc1twYXJhbV0gPSBwYXJzZWRQYXJhbXNbaV1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHBhdGhQYXJhbXNcbn1cblxuY29uc3QgcGFyc2VRdWVyeVBhcmFtcyA9IHVybCA9PiB7XG4gIGNvbnN0IFssIHF1ZXJ5XSA9IHVybC5zcGxpdCgnPycpXG5cbiAgcmV0dXJuIHF1ZXJ5c3RyaW5nLnBhcnNlKHF1ZXJ5KVxufVxuXG5jb25zdCBRVUVSWV9QQVJBTVNfU1RSX1JFR0VYUCA9ICckfFxcXFw/LisnXG5jb25zdCBQQVRIX1BBUkFNX1NUUl9SRUdFWFAgPSAnKFteXFxcXD8vXSspPydcbmNvbnN0IFJPT1RfUkVHRVhQID0gbmV3IFJlZ0V4cChgXigke1FVRVJZX1BBUkFNU19TVFJfUkVHRVhQfSlgKVxuXG5jb25zdCBjb21waWxlUGF0dGVybiA9IHBhdHRlcm4gPT4ge1xuICBjb25zdCBzeW50YXhSZWdFeHAgPSAveyhbXn17XSspfS9nXG5cbiAgY29uc3QgcGFyYW1zID0gW11cblxuICBsZXQgYW5hbHlzZWQsIHJlZ0V4cFN0ciA9IHBhdHRlcm5cblxuICB3aGlsZSAoKGFuYWx5c2VkID0gc3ludGF4UmVnRXhwLmV4ZWMocGF0dGVybikpKSB7XG4gICAgY29uc3QgW3BhcmFtSW5CcmFja2V0cywgcGFyYW1dID0gYW5hbHlzZWRcblxuICAgIHBhcmFtcy5wdXNoKHBhcmFtKVxuXG4gICAgcmVnRXhwU3RyID0gcmVnRXhwU3RyLnJlcGxhY2UocGFyYW1JbkJyYWNrZXRzLCBQQVRIX1BBUkFNX1NUUl9SRUdFWFApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZWdFeHA6IHJlZ0V4cFN0clxuICAgICAgPyBuZXcgUmVnRXhwKGAke3JlZ0V4cFN0cn0oJHtRVUVSWV9QQVJBTVNfU1RSX1JFR0VYUH0pYClcbiAgICAgIDogUk9PVF9SRUdFWFAsXG4gIH1cbn1cblxuY29uc3QgdHJpbUlmUm9vdCA9IHBhdHRlcm4gPT4gVXJsLmlzUm9vdChwYXR0ZXJuKVxuICA/IFVybC50cmltKHBhdHRlcm4pXG4gIDogcGF0dGVyblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwge1xuICBjb25zdHJ1Y3RvcihtZXRob2QsIHBhdHRlcm4gPSAnJykge1xuICAgIGNvbnN0IHRyaW1tZWQgPSB0cmltSWZSb290KHBhdHRlcm4pXG4gICAgY29uc3QgY29tcGlsZWQgPSBjb21waWxlUGF0dGVybih0cmltbWVkKVxuXG4gICAgdGhpc1tLZXlzLmtNZXRob2RdID0gbWV0aG9kXG4gICAgdGhpc1tLZXlzLmtSZWdFeHBdID0gY29tcGlsZWQucmVnRXhwXG4gICAgdGhpc1tLZXlzLmtQYXJhbXNdID0gY29tcGlsZWQucGFyYW1zXG4gIH1cblxuICBnZXQgcmVnRXhwKCkge1xuICAgIHJldHVybiB0aGlzW0tleXMua1JlZ0V4cF1cbiAgfVxuXG4gIGdldCBtZXRob2QoKSB7XG4gICAgcmV0dXJuIHRoaXNbS2V5cy5rTWV0aG9kXVxuICB9XG5cbiAgc3RhdGljIHRyaW0odXJsID0gJycpIHtcbiAgICBjb25zdCBsYXN0ID0gdXJsW3VybC5sZW5ndGggLSAxXVxuXG4gICAgaWYgKGxhc3QgPT09ICcvJykge1xuICAgICAgcmV0dXJuIHVybC5zbGljZSgwLCAtMSlcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG4gIH1cblxuICBzdGF0aWMgaXNSb290KHVybCkge1xuICAgIHJldHVybiAhdXJsIHx8ICh1cmwgPT09ICcvJylcbiAgfVxuXG4gIHBhcnNlUGFyYW1zKHVybCkge1xuICAgIHJldHVybiBwYXJzZVBhdGhQYXJhbXModXJsLCB0aGlzLnJlZ0V4cCwgdGhpc1tLZXlzLmtQYXJhbXNdKVxuICB9XG5cbiAgcGFyc2VRdWVyeSh1cmwpIHtcbiAgICByZXR1cm4gcGFyc2VRdWVyeVBhcmFtcyh1cmwpXG4gIH1cbn1cbiJdfQ==