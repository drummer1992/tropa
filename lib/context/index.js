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

var _codes = require("../codes");

var _constants = require("../meta/constants");

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
  }, {
    key: "end",
    value: function end() {
      var _this$statusCode, _this$headers, _this$body;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          statusCode = _ref.statusCode,
          headers = _ref.headers,
          body = _ref.body;

      if (this.handovered) return;
      (_this$statusCode = this.statusCode) !== null && _this$statusCode !== void 0 ? _this$statusCode : this.statusCode = statusCode;
      (_this$headers = this.headers) !== null && _this$headers !== void 0 ? _this$headers : this.headers = headers;
      (_this$body = this.body) !== null && _this$body !== void 0 ? _this$body : this.body = body;
      this.raw.writeHead(this.statusCode || _codes.HttpCode.OK, this.headers || (0, _defineProperty2["default"])({}, _constants.Header.Key.contentType, _constants.Header.Value.applicationJson));
      this.raw.end(JSON.stringify(this.body));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3QiLCJyZXEiLCJLZXlzIiwia1JlcXVlc3QiLCJpZCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJxdWVyeSIsImJvZHkiLCJSZXNwb25zZSIsInJlcyIsImtIYW5kb3ZlcmVkIiwia1Jlc3BvbnNlIiwic3RhdHVzQ29kZSIsImhhbmRvdmVyZWQiLCJyYXciLCJ3cml0ZUhlYWQiLCJjIiwiT0siLCJoIiwiS2V5IiwiY29udGVudFR5cGUiLCJWYWx1ZSIsImFwcGxpY2F0aW9uSnNvbiIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb250ZXh0IiwiYXN5bmNDb250ZXh0U3RvcmFnZSIsImVudGVyV2l0aCIsImdldFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsR0FBWixFQUFpQjtBQUFBO0FBQ2YsU0FBS0Msb0JBQUtDLFFBQVYsSUFBc0JGLEdBQXRCO0FBQ0EsU0FBS0csRUFBTCxHQUFVLHdCQUFXLENBQVgsQ0FBVjtBQUNBLFNBQUtDLEdBQUwsR0FBV0osR0FBRyxDQUFDSSxHQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjTCxHQUFHLENBQUNLLE1BQWxCO0FBQ0EsU0FBS0MsT0FBTCxxQkFBb0JOLEdBQUcsQ0FBQ00sT0FBeEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFELFNBQWI7QUFDQSxTQUFLRSxJQUFMLEdBQVlGLFNBQVo7QUFDRDs7OztTQUVELGVBQVU7QUFDUixhQUFPLEtBQUtQLG9CQUFLQyxRQUFWLENBQVA7QUFDRDs7Ozs7SUFHR1MsUTtBQUNKLG9CQUFZQyxHQUFaLEVBQWlCO0FBQUE7QUFDZixTQUFLWCxvQkFBS1ksV0FBVixJQUF5QixLQUF6QjtBQUNBLFNBQUtaLG9CQUFLYSxTQUFWLElBQXVCRixHQUF2QjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JQLFNBQWxCO0FBQ0EsU0FBS0YsT0FBTCxHQUFlRSxTQUFmO0FBQ0EsU0FBS0UsSUFBTCxHQUFZRixTQUFaO0FBQ0Q7Ozs7U0FFRCxlQUFVO0FBQ1IsV0FBS1Asb0JBQUtZLFdBQVYsSUFBeUIsSUFBekI7QUFFQSxhQUFPLEtBQUtaLG9CQUFLYSxTQUFWLENBQVA7QUFDRDs7O1NBRUQsZUFBaUI7QUFDZixhQUFPLEtBQUtiLG9CQUFLWSxXQUFWLENBQVA7QUFDRDs7O1dBRUQsZUFBd0M7QUFBQTs7QUFBQSxxRkFBSixFQUFJO0FBQUEsVUFBbENFLFVBQWtDLFFBQWxDQSxVQUFrQztBQUFBLFVBQXRCVCxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxVQUFiSSxJQUFhLFFBQWJBLElBQWE7O0FBQ3RDLFVBQUksS0FBS00sVUFBVCxFQUFxQjtBQUVyQiwrQkFBS0QsVUFBTCxvRUFBS0EsVUFBTCxHQUFvQkEsVUFBcEI7QUFDQSw0QkFBS1QsT0FBTCw4REFBS0EsT0FBTCxHQUFpQkEsT0FBakI7QUFDQSx5QkFBS0ksSUFBTCx3REFBS0EsSUFBTCxHQUFjQSxJQUFkO0FBRUEsV0FBS08sR0FBTCxDQUFTQyxTQUFULENBQ0UsS0FBS0gsVUFBTCxJQUFtQkksZ0JBQUVDLEVBRHZCLEVBRUUsS0FBS2QsT0FBTCx5Q0FBbUJlLGtCQUFFQyxHQUFGLENBQU1DLFdBQXpCLEVBQXVDRixrQkFBRUcsS0FBRixDQUFRQyxlQUEvQyxDQUZGO0FBS0EsV0FBS1IsR0FBTCxDQUFTUyxHQUFULENBQWFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtsQixJQUFwQixDQUFiO0FBQ0Q7Ozs7O0lBR2tCbUIsTztBQUNuQixtQkFBWTdCLEdBQVosRUFBaUJZLEdBQWpCLEVBQXNCO0FBQUE7QUFDcEIsU0FBS1gsb0JBQUtDLFFBQVYsSUFBc0IsSUFBSUgsT0FBSixDQUFZQyxHQUFaLENBQXRCO0FBQ0EsU0FBS0Msb0JBQUthLFNBQVYsSUFBdUIsSUFBSUgsUUFBSixDQUFhQyxHQUFiLENBQXZCOztBQUVBa0IsaUNBQW9CQyxTQUFwQixDQUE4QixJQUE5QjtBQUNEOzs7O1NBRUQsZUFBYztBQUNaLGFBQU8sS0FBSzlCLG9CQUFLQyxRQUFWLENBQVA7QUFDRDs7O1NBRUQsZUFBZTtBQUNiLGFBQU8sS0FBS0Qsb0JBQUthLFNBQVYsQ0FBUDtBQUNEOzs7V0FFRCxlQUFhO0FBQ1gsYUFBT2dCLDZCQUFvQkUsUUFBcEIsRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmNDb250ZXh0U3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCB7IHJhbmRvbUNvZGUgfSBmcm9tICcuLi91dGlscy9yYW5kb20nXG5pbXBvcnQgS2V5cyBmcm9tICcuLi9zeW1ib2xzJ1xuaW1wb3J0IHsgSHR0cENvZGUgYXMgYyB9IGZyb20gJy4uL2NvZGVzJ1xuaW1wb3J0IHsgSGVhZGVyIGFzIGggfSBmcm9tICcuLi9tZXRhL2NvbnN0YW50cydcblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKHJlcSkge1xuICAgIHRoaXNbS2V5cy5rUmVxdWVzdF0gPSByZXFcbiAgICB0aGlzLmlkID0gcmFuZG9tQ29kZSg0KVxuICAgIHRoaXMudXJsID0gcmVxLnVybFxuICAgIHRoaXMubWV0aG9kID0gcmVxLm1ldGhvZFxuICAgIHRoaXMuaGVhZGVycyA9IHsgLi4ucmVxLmhlYWRlcnMgfVxuICAgIHRoaXMucGFyYW1zID0gdW5kZWZpbmVkXG4gICAgdGhpcy5xdWVyeSA9IHVuZGVmaW5lZFxuICAgIHRoaXMuYm9keSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IHJhdygpIHtcbiAgICByZXR1cm4gdGhpc1tLZXlzLmtSZXF1ZXN0XVxuICB9XG59XG5cbmNsYXNzIFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IocmVzKSB7XG4gICAgdGhpc1tLZXlzLmtIYW5kb3ZlcmVkXSA9IGZhbHNlXG4gICAgdGhpc1tLZXlzLmtSZXNwb25zZV0gPSByZXNcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSB1bmRlZmluZWRcbiAgICB0aGlzLmhlYWRlcnMgPSB1bmRlZmluZWRcbiAgICB0aGlzLmJvZHkgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGdldCByYXcoKSB7XG4gICAgdGhpc1tLZXlzLmtIYW5kb3ZlcmVkXSA9IHRydWVcblxuICAgIHJldHVybiB0aGlzW0tleXMua1Jlc3BvbnNlXVxuICB9XG5cbiAgZ2V0IGhhbmRvdmVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXNbS2V5cy5rSGFuZG92ZXJlZF1cbiAgfVxuXG4gIGVuZCh7IHN0YXR1c0NvZGUsIGhlYWRlcnMsIGJvZHkgfSA9IHt9KSB7XG4gICAgaWYgKHRoaXMuaGFuZG92ZXJlZCkgcmV0dXJuXG5cbiAgICB0aGlzLnN0YXR1c0NvZGUgPz89IHN0YXR1c0NvZGVcbiAgICB0aGlzLmhlYWRlcnMgPz89IGhlYWRlcnNcbiAgICB0aGlzLmJvZHkgPz89IGJvZHlcblxuICAgIHRoaXMucmF3LndyaXRlSGVhZChcbiAgICAgIHRoaXMuc3RhdHVzQ29kZSB8fCBjLk9LLFxuICAgICAgdGhpcy5oZWFkZXJzIHx8IHsgW2guS2V5LmNvbnRlbnRUeXBlXTogaC5WYWx1ZS5hcHBsaWNhdGlvbkpzb24gfSxcbiAgICApXG5cbiAgICB0aGlzLnJhdy5lbmQoSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVxLCByZXMpIHtcbiAgICB0aGlzW0tleXMua1JlcXVlc3RdID0gbmV3IFJlcXVlc3QocmVxKVxuICAgIHRoaXNbS2V5cy5rUmVzcG9uc2VdID0gbmV3IFJlc3BvbnNlKHJlcylcblxuICAgIGFzeW5jQ29udGV4dFN0b3JhZ2UuZW50ZXJXaXRoKHRoaXMpXG4gIH1cblxuICBnZXQgcmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpc1tLZXlzLmtSZXF1ZXN0XVxuICB9XG5cbiAgZ2V0IHJlc3BvbnNlKCkge1xuICAgIHJldHVybiB0aGlzW0tleXMua1Jlc3BvbnNlXVxuICB9XG5cbiAgc3RhdGljIGdldCgpIHtcbiAgICByZXR1cm4gYXN5bmNDb250ZXh0U3RvcmFnZS5nZXRTdG9yZSgpXG4gIH1cbn0iXX0=