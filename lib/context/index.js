"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _storage = require("./storage");

var _random = require("../utils/random");

var _symbols = _interopRequireDefault(require("../symbols"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Request = /*#__PURE__*/function () {
  function Request(req) {
    (0, _classCallCheck2["default"])(this, Request);
    this[_symbols["default"].kRequest] = req;
    this.id = (0, _random.randomCode)(4);
    this.url = req.url;
    this.method = req.method;
    this.headers = _objectSpread({}, req.headers);
    this.params = undefined;
    this.query = undefined;
    this.body = undefined;
  }

  (0, _createClass2["default"])(Request, [{
    key: "raw",
    get: function get() {
      return this[_symbols["default"].kRequest];
    }
  }]);
  return Request;
}();

var Response = /*#__PURE__*/function () {
  function Response(res) {
    (0, _classCallCheck2["default"])(this, Response);
    this[_symbols["default"].kHandovered] = false;
    this[_symbols["default"].kResponse] = res;
    this.statusCode = undefined;
    this.headers = undefined;
    this.body = undefined;
  }

  (0, _createClass2["default"])(Response, [{
    key: "raw",
    get: function get() {
      this[_symbols["default"].kHandovered] = true;
      return this[_symbols["default"].kResponse];
    }
  }, {
    key: "handovered",
    get: function get() {
      return this[_symbols["default"].kHandovered];
    }
  }]);
  return Response;
}();

var Context = /*#__PURE__*/function () {
  function Context(req, res) {
    (0, _classCallCheck2["default"])(this, Context);
    this[_symbols["default"].kRequest] = new Request(req);
    this[_symbols["default"].kResponse] = new Response(res);

    _storage.asyncContextStorage.enterWith(this);
  }

  (0, _createClass2["default"])(Context, [{
    key: "request",
    get: function get() {
      return this[_symbols["default"].kRequest];
    }
  }, {
    key: "response",
    get: function get() {
      return this[_symbols["default"].kResponse];
    }
  }], [{
    key: "get",
    value: function get() {
      return _storage.asyncContextStorage.getStore();
    }
  }]);
  return Context;
}();

exports["default"] = Context;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3QiLCJyZXEiLCJLZXlzIiwia1JlcXVlc3QiLCJpZCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJxdWVyeSIsImJvZHkiLCJSZXNwb25zZSIsInJlcyIsImtIYW5kb3ZlcmVkIiwia1Jlc3BvbnNlIiwic3RhdHVzQ29kZSIsIkNvbnRleHQiLCJhc3luY0NvbnRleHRTdG9yYWdlIiwiZW50ZXJXaXRoIiwiZ2V0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxHQUFaLEVBQWlCO0FBQUE7QUFDZixTQUFLQyxvQkFBS0MsUUFBVixJQUFzQkYsR0FBdEI7QUFDQSxTQUFLRyxFQUFMLEdBQVUsd0JBQVcsQ0FBWCxDQUFWO0FBQ0EsU0FBS0MsR0FBTCxHQUFXSixHQUFHLENBQUNJLEdBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNMLEdBQUcsQ0FBQ0ssTUFBbEI7QUFDQSxTQUFLQyxPQUFMLHFCQUFvQk4sR0FBRyxDQUFDTSxPQUF4QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUQsU0FBYjtBQUNBLFNBQUtFLElBQUwsR0FBWUYsU0FBWjtBQUNEOzs7O1NBRUQsZUFBVTtBQUNSLGFBQU8sS0FBS1Asb0JBQUtDLFFBQVYsQ0FBUDtBQUNEOzs7OztJQUdHUyxRO0FBQ0osb0JBQVlDLEdBQVosRUFBaUI7QUFBQTtBQUNmLFNBQUtYLG9CQUFLWSxXQUFWLElBQXlCLEtBQXpCO0FBQ0EsU0FBS1osb0JBQUthLFNBQVYsSUFBdUJGLEdBQXZCO0FBQ0EsU0FBS0csVUFBTCxHQUFrQlAsU0FBbEI7QUFDQSxTQUFLRixPQUFMLEdBQWVFLFNBQWY7QUFDQSxTQUFLRSxJQUFMLEdBQVlGLFNBQVo7QUFDRDs7OztTQUVELGVBQVU7QUFDUixXQUFLUCxvQkFBS1ksV0FBVixJQUF5QixJQUF6QjtBQUVBLGFBQU8sS0FBS1osb0JBQUthLFNBQVYsQ0FBUDtBQUNEOzs7U0FFRCxlQUFpQjtBQUNmLGFBQU8sS0FBS2Isb0JBQUtZLFdBQVYsQ0FBUDtBQUNEOzs7OztJQUdrQkcsTztBQUNuQixtQkFBWWhCLEdBQVosRUFBaUJZLEdBQWpCLEVBQXNCO0FBQUE7QUFDcEIsU0FBS1gsb0JBQUtDLFFBQVYsSUFBc0IsSUFBSUgsT0FBSixDQUFZQyxHQUFaLENBQXRCO0FBQ0EsU0FBS0Msb0JBQUthLFNBQVYsSUFBdUIsSUFBSUgsUUFBSixDQUFhQyxHQUFiLENBQXZCOztBQUVBSyxpQ0FBb0JDLFNBQXBCLENBQThCLElBQTlCO0FBQ0Q7Ozs7U0FFRCxlQUFjO0FBQ1osYUFBTyxLQUFLakIsb0JBQUtDLFFBQVYsQ0FBUDtBQUNEOzs7U0FFRCxlQUFlO0FBQ2IsYUFBTyxLQUFLRCxvQkFBS2EsU0FBVixDQUFQO0FBQ0Q7OztXQUVELGVBQWE7QUFDWCxhQUFPRyw2QkFBb0JFLFFBQXBCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jQ29udGV4dFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgeyByYW5kb21Db2RlIH0gZnJvbSAnLi4vdXRpbHMvcmFuZG9tJ1xuaW1wb3J0IEtleXMgZnJvbSAnLi4vc3ltYm9scydcblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKHJlcSkge1xuICAgIHRoaXNbS2V5cy5rUmVxdWVzdF0gPSByZXFcbiAgICB0aGlzLmlkID0gcmFuZG9tQ29kZSg0KVxuICAgIHRoaXMudXJsID0gcmVxLnVybFxuICAgIHRoaXMubWV0aG9kID0gcmVxLm1ldGhvZFxuICAgIHRoaXMuaGVhZGVycyA9IHsgLi4ucmVxLmhlYWRlcnMgfVxuICAgIHRoaXMucGFyYW1zID0gdW5kZWZpbmVkXG4gICAgdGhpcy5xdWVyeSA9IHVuZGVmaW5lZFxuICAgIHRoaXMuYm9keSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IHJhdygpIHtcbiAgICByZXR1cm4gdGhpc1tLZXlzLmtSZXF1ZXN0XVxuICB9XG59XG5cbmNsYXNzIFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IocmVzKSB7XG4gICAgdGhpc1tLZXlzLmtIYW5kb3ZlcmVkXSA9IGZhbHNlXG4gICAgdGhpc1tLZXlzLmtSZXNwb25zZV0gPSByZXNcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSB1bmRlZmluZWRcbiAgICB0aGlzLmhlYWRlcnMgPSB1bmRlZmluZWRcbiAgICB0aGlzLmJvZHkgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGdldCByYXcoKSB7XG4gICAgdGhpc1tLZXlzLmtIYW5kb3ZlcmVkXSA9IHRydWVcblxuICAgIHJldHVybiB0aGlzW0tleXMua1Jlc3BvbnNlXVxuICB9XG5cbiAgZ2V0IGhhbmRvdmVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXNbS2V5cy5rSGFuZG92ZXJlZF1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVxLCByZXMpIHtcbiAgICB0aGlzW0tleXMua1JlcXVlc3RdID0gbmV3IFJlcXVlc3QocmVxKVxuICAgIHRoaXNbS2V5cy5rUmVzcG9uc2VdID0gbmV3IFJlc3BvbnNlKHJlcylcblxuICAgIGFzeW5jQ29udGV4dFN0b3JhZ2UuZW50ZXJXaXRoKHRoaXMpXG4gIH1cblxuICBnZXQgcmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpc1tLZXlzLmtSZXF1ZXN0XVxuICB9XG5cbiAgZ2V0IHJlc3BvbnNlKCkge1xuICAgIHJldHVybiB0aGlzW0tleXMua1Jlc3BvbnNlXVxuICB9XG5cbiAgc3RhdGljIGdldCgpIHtcbiAgICByZXR1cm4gYXN5bmNDb250ZXh0U3RvcmFnZS5nZXRTdG9yZSgpXG4gIH1cbn0iXX0=