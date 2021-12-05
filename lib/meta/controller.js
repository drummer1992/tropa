"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _url = _interopRequireDefault(require("../utils/url"));

var _constants = require("./constants");

var _route = _interopRequireDefault(require("./route"));

var _storage = require("./storage");

var _object = require("../utils/object");

var _symbols = _interopRequireDefault(require("../symbols"));

var composeRoutes = function composeRoutes(Controller) {
  var routes = {};
  (0, _object.getPrototypeKeys)(Controller).forEach(function (property) {
    return routes[property] = new _route["default"]();
  });
  return routes;
};

var trimControllerPrefix = function trimControllerPrefix(url, regExp) {
  var withoutPrefix = url.replace(regExp, '');
  return _url["default"].isRoot(withoutPrefix) ? '' : withoutPrefix;
};

var ControllerMeta = /*#__PURE__*/function () {
  function ControllerMeta(Controller) {
    (0, _classCallCheck2["default"])(this, ControllerMeta);
    this.Class = Controller;
    this.regExp = new RegExp("^".concat(_storage.appMeta.get(_constants.App.PREFIX)));
    this.urlRegExp = new RegExp("".concat(this.regExp.source, "([^\\w]|$)"));
    this.routes = composeRoutes(Controller);
  }

  (0, _createClass2["default"])(ControllerMeta, [{
    key: "methods",
    get: function get() {
      return Object.keys(this.routes);
    }
  }, {
    key: "instance",
    get: function get() {
      if (!this[_symbols["default"].KInstance]) {
        this[_symbols["default"].KInstance] = new this.Class();
      }

      return this[_symbols["default"].KInstance];
    }
  }, {
    key: "findRoute",
    value: function findRoute(url, httpMethod) {
      var _this = this;

      var routeUrl = trimControllerPrefix(url, this.regExp);

      var byUrl = function byUrl(method) {
        return _this.getRoute(method).isSuitable(routeUrl, httpMethod);
      };

      var method = this.methods.find(byUrl);
      return this.getRoute(method);
    }
  }, {
    key: "addRoute",
    value: function addRoute(method, urlInstance) {
      var _this2 = this;

      var handler = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var _this2$instance;

          var _args = arguments;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (_this2$instance = _this2.instance)[method].apply(_this2$instance, _args);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function handler() {
          return _ref.apply(this, arguments);
        };
      }();

      this.routes[method].setUrl(urlInstance);
      this.routes[method].setHandler(handler);
    }
  }, {
    key: "setRegExp",
    value: function setRegExp(prefix) {
      this.regExp = new RegExp("^".concat(_storage.appMeta.get(_constants.App.PREFIX)).concat(prefix));
      this.urlRegExp = new RegExp("".concat(this.regExp.source, "([^\\w]|$)"));
    }
  }, {
    key: "getRoute",
    value: function getRoute(method) {
      return this.routes[method];
    }
  }, {
    key: "isSuitable",
    value: function isSuitable(url) {
      return this.urlRegExp.test(url);
    }
  }]);
  return ControllerMeta;
}();

exports["default"] = ControllerMeta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29tcG9zZVJvdXRlcyIsIkNvbnRyb2xsZXIiLCJyb3V0ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJSb3V0ZU1ldGEiLCJ0cmltQ29udHJvbGxlclByZWZpeCIsInVybCIsInJlZ0V4cCIsIndpdGhvdXRQcmVmaXgiLCJyZXBsYWNlIiwiVXJsIiwiaXNSb290IiwiQ29udHJvbGxlck1ldGEiLCJDbGFzcyIsIlJlZ0V4cCIsImFwcE1ldGEiLCJnZXQiLCJBcHAiLCJQUkVGSVgiLCJ1cmxSZWdFeHAiLCJzb3VyY2UiLCJPYmplY3QiLCJrZXlzIiwiS2V5cyIsIktJbnN0YW5jZSIsImh0dHBNZXRob2QiLCJyb3V0ZVVybCIsImJ5VXJsIiwibWV0aG9kIiwiZ2V0Um91dGUiLCJpc1N1aXRhYmxlIiwibWV0aG9kcyIsImZpbmQiLCJ1cmxJbnN0YW5jZSIsImhhbmRsZXIiLCJpbnN0YW5jZSIsInNldFVybCIsInNldEhhbmRsZXIiLCJwcmVmaXgiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsVUFBVSxFQUFJO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUEsZ0NBQWlCRCxVQUFqQixFQUE2QkUsT0FBN0IsQ0FBcUMsVUFBQUMsUUFBUTtBQUFBLFdBQUlGLE1BQU0sQ0FBQ0UsUUFBRCxDQUFOLEdBQW1CLElBQUlDLGlCQUFKLEVBQXZCO0FBQUEsR0FBN0M7QUFFQSxTQUFPSCxNQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM1QyxNQUFNQyxhQUFhLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZRixNQUFaLEVBQW9CLEVBQXBCLENBQXRCO0FBRUEsU0FBT0csZ0JBQUlDLE1BQUosQ0FBV0gsYUFBWCxJQUE0QixFQUE1QixHQUFpQ0EsYUFBeEM7QUFDRCxDQUpEOztJQU1xQkksYztBQUNuQiwwQkFBWVosVUFBWixFQUF3QjtBQUFBO0FBQ3RCLFNBQUthLEtBQUwsR0FBYWIsVUFBYjtBQUNBLFNBQUtPLE1BQUwsR0FBYyxJQUFJTyxNQUFKLFlBQWVDLGlCQUFRQyxHQUFSLENBQVlDLGVBQUlDLE1BQWhCLENBQWYsRUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUwsTUFBSixXQUFjLEtBQUtQLE1BQUwsQ0FBWWEsTUFBMUIsZ0JBQWpCO0FBQ0EsU0FBS25CLE1BQUwsR0FBY0YsYUFBYSxDQUFDQyxVQUFELENBQTNCO0FBQ0Q7Ozs7U0FFRCxlQUFjO0FBQ1osYUFBT3FCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtyQixNQUFqQixDQUFQO0FBQ0Q7OztTQUVELGVBQWU7QUFDYixVQUFJLENBQUMsS0FBS3NCLG9CQUFLQyxTQUFWLENBQUwsRUFBMkI7QUFDekIsYUFBS0Qsb0JBQUtDLFNBQVYsSUFBdUIsSUFBSSxLQUFLWCxLQUFULEVBQXZCO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLVSxvQkFBS0MsU0FBVixDQUFQO0FBQ0Q7OztXQUVELG1CQUFVbEIsR0FBVixFQUFlbUIsVUFBZixFQUEyQjtBQUFBOztBQUN6QixVQUFNQyxRQUFRLEdBQUdyQixvQkFBb0IsQ0FBQ0MsR0FBRCxFQUFNLEtBQUtDLE1BQVgsQ0FBckM7O0FBRUEsVUFBTW9CLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLE1BQU07QUFBQSxlQUFJLEtBQUksQ0FBQ0MsUUFBTCxDQUFjRCxNQUFkLEVBQXNCRSxVQUF0QixDQUFpQ0osUUFBakMsRUFBMkNELFVBQTNDLENBQUo7QUFBQSxPQUFwQjs7QUFFQSxVQUFNRyxNQUFNLEdBQUcsS0FBS0csT0FBTCxDQUFhQyxJQUFiLENBQWtCTCxLQUFsQixDQUFmO0FBRUEsYUFBTyxLQUFLRSxRQUFMLENBQWNELE1BQWQsQ0FBUDtBQUNEOzs7V0FFRCxrQkFBU0EsTUFBVCxFQUFpQkssV0FBakIsRUFBOEI7QUFBQTs7QUFDNUIsVUFBTUMsT0FBTztBQUFBLGlHQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXlCLG1CQUFBLE1BQUksQ0FBQ0MsUUFBTCxFQUFjUCxNQUFkLCtCQUF6Qjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUg7O0FBQUEsd0JBQVBNLE9BQU87QUFBQTtBQUFBO0FBQUEsU0FBYjs7QUFFQSxXQUFLakMsTUFBTCxDQUFZMkIsTUFBWixFQUFvQlEsTUFBcEIsQ0FBMkJILFdBQTNCO0FBQ0EsV0FBS2hDLE1BQUwsQ0FBWTJCLE1BQVosRUFBb0JTLFVBQXBCLENBQStCSCxPQUEvQjtBQUNEOzs7V0FFRCxtQkFBVUksTUFBVixFQUFrQjtBQUNoQixXQUFLL0IsTUFBTCxHQUFjLElBQUlPLE1BQUosWUFBZUMsaUJBQVFDLEdBQVIsQ0FBWUMsZUFBSUMsTUFBaEIsQ0FBZixTQUF5Q29CLE1BQXpDLEVBQWQ7QUFDQSxXQUFLbkIsU0FBTCxHQUFpQixJQUFJTCxNQUFKLFdBQWMsS0FBS1AsTUFBTCxDQUFZYSxNQUExQixnQkFBakI7QUFDRDs7O1dBRUQsa0JBQVNRLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtBQUszQixNQUFMLENBQVkyQixNQUFaLENBQVA7QUFDRDs7O1dBRUQsb0JBQVd0QixHQUFYLEVBQWdCO0FBQ2QsYUFBTyxLQUFLYSxTQUFMLENBQWVvQixJQUFmLENBQW9CakMsR0FBcEIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVybCBmcm9tICcuLi91dGlscy91cmwnXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCBSb3V0ZU1ldGEgZnJvbSAnLi9yb3V0ZSdcbmltcG9ydCB7IGFwcE1ldGEgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgeyBnZXRQcm90b3R5cGVLZXlzIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0J1xuaW1wb3J0IEtleXMgZnJvbSAnLi4vc3ltYm9scydcblxuY29uc3QgY29tcG9zZVJvdXRlcyA9IENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCByb3V0ZXMgPSB7fVxuXG4gIGdldFByb3RvdHlwZUtleXMoQ29udHJvbGxlcikuZm9yRWFjaChwcm9wZXJ0eSA9PiByb3V0ZXNbcHJvcGVydHldID0gbmV3IFJvdXRlTWV0YSgpKVxuXG4gIHJldHVybiByb3V0ZXNcbn1cblxuY29uc3QgdHJpbUNvbnRyb2xsZXJQcmVmaXggPSAodXJsLCByZWdFeHApID0+IHtcbiAgY29uc3Qgd2l0aG91dFByZWZpeCA9IHVybC5yZXBsYWNlKHJlZ0V4cCwgJycpXG5cbiAgcmV0dXJuIFVybC5pc1Jvb3Qod2l0aG91dFByZWZpeCkgPyAnJyA6IHdpdGhvdXRQcmVmaXhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlck1ldGEge1xuICBjb25zdHJ1Y3RvcihDb250cm9sbGVyKSB7XG4gICAgdGhpcy5DbGFzcyA9IENvbnRyb2xsZXJcbiAgICB0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke2FwcE1ldGEuZ2V0KEFwcC5QUkVGSVgpfWApXG4gICAgdGhpcy51cmxSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3RoaXMucmVnRXhwLnNvdXJjZX0oW15cXFxcd118JClgKVxuICAgIHRoaXMucm91dGVzID0gY29tcG9zZVJvdXRlcyhDb250cm9sbGVyKVxuICB9XG5cbiAgZ2V0IG1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucm91dGVzKVxuICB9XG5cbiAgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpc1tLZXlzLktJbnN0YW5jZV0pIHtcbiAgICAgIHRoaXNbS2V5cy5LSW5zdGFuY2VdID0gbmV3IHRoaXMuQ2xhc3MoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzW0tleXMuS0luc3RhbmNlXVxuICB9XG5cbiAgZmluZFJvdXRlKHVybCwgaHR0cE1ldGhvZCkge1xuICAgIGNvbnN0IHJvdXRlVXJsID0gdHJpbUNvbnRyb2xsZXJQcmVmaXgodXJsLCB0aGlzLnJlZ0V4cClcblxuICAgIGNvbnN0IGJ5VXJsID0gbWV0aG9kID0+IHRoaXMuZ2V0Um91dGUobWV0aG9kKS5pc1N1aXRhYmxlKHJvdXRlVXJsLCBodHRwTWV0aG9kKVxuXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5tZXRob2RzLmZpbmQoYnlVcmwpXG5cbiAgICByZXR1cm4gdGhpcy5nZXRSb3V0ZShtZXRob2QpXG4gIH1cblxuICBhZGRSb3V0ZShtZXRob2QsIHVybEluc3RhbmNlKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGFzeW5jICguLi5hcmdzKSA9PiBhd2FpdCB0aGlzLmluc3RhbmNlW21ldGhvZF0oLi4uYXJncylcblxuICAgIHRoaXMucm91dGVzW21ldGhvZF0uc2V0VXJsKHVybEluc3RhbmNlKVxuICAgIHRoaXMucm91dGVzW21ldGhvZF0uc2V0SGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc2V0UmVnRXhwKHByZWZpeCkge1xuICAgIHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7YXBwTWV0YS5nZXQoQXBwLlBSRUZJWCl9JHtwcmVmaXh9YClcbiAgICB0aGlzLnVybFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7dGhpcy5yZWdFeHAuc291cmNlfShbXlxcXFx3XXwkKWApXG4gIH1cblxuICBnZXRSb3V0ZShtZXRob2QpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXNbbWV0aG9kXVxuICB9XG5cbiAgaXNTdWl0YWJsZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy51cmxSZWdFeHAudGVzdCh1cmwpXG4gIH1cbn0iXX0=