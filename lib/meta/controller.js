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

var composeRoutes = function composeRoutes(Controller) {
  var routes = {};
  Object.getOwnPropertyNames(Controller.prototype).forEach(function (property) {
    if (property !== 'constructor') {
      routes[property] = new _route["default"]();
    }
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
    this.instance = new Controller();
    this.regExp = new RegExp("^".concat(_storage.appMeta.get(_constants.App.PREFIX)));
    this.urlRegExp = new RegExp("".concat(this.regExp.source, "([^\\w]|$)"));
    this.routes = composeRoutes(Controller, this);
  }

  (0, _createClass2["default"])(ControllerMeta, [{
    key: "methods",
    get: function get() {
      return Object.keys(this.routes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29tcG9zZVJvdXRlcyIsIkNvbnRyb2xsZXIiLCJyb3V0ZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvdG90eXBlIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiUm91dGVNZXRhIiwidHJpbUNvbnRyb2xsZXJQcmVmaXgiLCJ1cmwiLCJyZWdFeHAiLCJ3aXRob3V0UHJlZml4IiwicmVwbGFjZSIsIlVybCIsImlzUm9vdCIsIkNvbnRyb2xsZXJNZXRhIiwiaW5zdGFuY2UiLCJSZWdFeHAiLCJhcHBNZXRhIiwiZ2V0IiwiQXBwIiwiUFJFRklYIiwidXJsUmVnRXhwIiwic291cmNlIiwia2V5cyIsImh0dHBNZXRob2QiLCJyb3V0ZVVybCIsImJ5VXJsIiwibWV0aG9kIiwiZ2V0Um91dGUiLCJpc1N1aXRhYmxlIiwibWV0aG9kcyIsImZpbmQiLCJ1cmxJbnN0YW5jZSIsImhhbmRsZXIiLCJzZXRVcmwiLCJzZXRIYW5kbGVyIiwicHJlZml4IiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLFVBQVUsRUFBSTtBQUNsQyxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVBQyxFQUFBQSxNQUFNLENBQUNDLG1CQUFQLENBQTJCSCxVQUFVLENBQUNJLFNBQXRDLEVBQWlEQyxPQUFqRCxDQUF5RCxVQUFBQyxRQUFRLEVBQUk7QUFDbkUsUUFBSUEsUUFBUSxLQUFLLGFBQWpCLEVBQWdDO0FBQzlCTCxNQUFBQSxNQUFNLENBQUNLLFFBQUQsQ0FBTixHQUFtQixJQUFJQyxpQkFBSixFQUFuQjtBQUNEO0FBQ0YsR0FKRDtBQU1BLFNBQU9OLE1BQVA7QUFDRCxDQVZEOztBQVlBLElBQU1PLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQzVDLE1BQU1DLGFBQWEsR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlGLE1BQVosRUFBb0IsRUFBcEIsQ0FBdEI7QUFFQSxTQUFPRyxnQkFBSUMsTUFBSixDQUFXSCxhQUFYLElBQTRCLEVBQTVCLEdBQWlDQSxhQUF4QztBQUNELENBSkQ7O0lBTXFCSSxjO0FBQ25CLDBCQUFZZixVQUFaLEVBQXdCO0FBQUE7QUFDdEIsU0FBS2dCLFFBQUwsR0FBZ0IsSUFBSWhCLFVBQUosRUFBaEI7QUFDQSxTQUFLVSxNQUFMLEdBQWMsSUFBSU8sTUFBSixZQUFlQyxpQkFBUUMsR0FBUixDQUFZQyxlQUFJQyxNQUFoQixDQUFmLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlMLE1BQUosV0FBYyxLQUFLUCxNQUFMLENBQVlhLE1BQTFCLGdCQUFqQjtBQUNBLFNBQUt0QixNQUFMLEdBQWNGLGFBQWEsQ0FBQ0MsVUFBRCxFQUFhLElBQWIsQ0FBM0I7QUFDRDs7OztTQUVELGVBQWM7QUFDWixhQUFPRSxNQUFNLENBQUNzQixJQUFQLENBQVksS0FBS3ZCLE1BQWpCLENBQVA7QUFDRDs7O1dBRUQsbUJBQVVRLEdBQVYsRUFBZWdCLFVBQWYsRUFBMkI7QUFBQTs7QUFDekIsVUFBTUMsUUFBUSxHQUFHbEIsb0JBQW9CLENBQUNDLEdBQUQsRUFBTSxLQUFLQyxNQUFYLENBQXJDOztBQUVBLFVBQU1pQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxNQUFNO0FBQUEsZUFBSSxLQUFJLENBQUNDLFFBQUwsQ0FBY0QsTUFBZCxFQUFzQkUsVUFBdEIsQ0FBaUNKLFFBQWpDLEVBQTJDRCxVQUEzQyxDQUFKO0FBQUEsT0FBcEI7O0FBRUEsVUFBTUcsTUFBTSxHQUFHLEtBQUtHLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkwsS0FBbEIsQ0FBZjtBQUVBLGFBQU8sS0FBS0UsUUFBTCxDQUFjRCxNQUFkLENBQVA7QUFDRDs7O1dBRUQsa0JBQVNBLE1BQVQsRUFBaUJLLFdBQWpCLEVBQThCO0FBQUE7O0FBQzVCLFVBQU1DLE9BQU87QUFBQSxpR0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF5QixtQkFBQSxNQUFJLENBQUNsQixRQUFMLEVBQWNZLE1BQWQsK0JBQXpCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSDs7QUFBQSx3QkFBUE0sT0FBTztBQUFBO0FBQUE7QUFBQSxTQUFiOztBQUVBLFdBQUtqQyxNQUFMLENBQVkyQixNQUFaLEVBQW9CTyxNQUFwQixDQUEyQkYsV0FBM0I7QUFDQSxXQUFLaEMsTUFBTCxDQUFZMkIsTUFBWixFQUFvQlEsVUFBcEIsQ0FBK0JGLE9BQS9CO0FBQ0Q7OztXQUVELG1CQUFVRyxNQUFWLEVBQWtCO0FBQ2hCLFdBQUszQixNQUFMLEdBQWMsSUFBSU8sTUFBSixZQUFlQyxpQkFBUUMsR0FBUixDQUFZQyxlQUFJQyxNQUFoQixDQUFmLFNBQXlDZ0IsTUFBekMsRUFBZDtBQUNBLFdBQUtmLFNBQUwsR0FBaUIsSUFBSUwsTUFBSixXQUFjLEtBQUtQLE1BQUwsQ0FBWWEsTUFBMUIsZ0JBQWpCO0FBQ0Q7OztXQUVELGtCQUFTSyxNQUFULEVBQWlCO0FBQ2YsYUFBTyxLQUFLM0IsTUFBTCxDQUFZMkIsTUFBWixDQUFQO0FBQ0Q7OztXQUVELG9CQUFXbkIsR0FBWCxFQUFnQjtBQUNkLGFBQU8sS0FBS2EsU0FBTCxDQUFlZ0IsSUFBZixDQUFvQjdCLEdBQXBCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcmwgZnJvbSAnLi4vdXRpbHMvdXJsJ1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgUm91dGVNZXRhIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgeyBhcHBNZXRhIH0gZnJvbSAnLi9zdG9yYWdlJ1xuXG5jb25zdCBjb21wb3NlUm91dGVzID0gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IHJvdXRlcyA9IHt9XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQ29udHJvbGxlci5wcm90b3R5cGUpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcm91dGVzW3Byb3BlcnR5XSA9IG5ldyBSb3V0ZU1ldGEoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcm91dGVzXG59XG5cbmNvbnN0IHRyaW1Db250cm9sbGVyUHJlZml4ID0gKHVybCwgcmVnRXhwKSA9PiB7XG4gIGNvbnN0IHdpdGhvdXRQcmVmaXggPSB1cmwucmVwbGFjZShyZWdFeHAsICcnKVxuXG4gIHJldHVybiBVcmwuaXNSb290KHdpdGhvdXRQcmVmaXgpID8gJycgOiB3aXRob3V0UHJlZml4XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNZXRhIHtcbiAgY29uc3RydWN0b3IoQ29udHJvbGxlcikge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpXG4gICAgdGhpcy5yZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHthcHBNZXRhLmdldChBcHAuUFJFRklYKX1gKVxuICAgIHRoaXMudXJsUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt0aGlzLnJlZ0V4cC5zb3VyY2V9KFteXFxcXHddfCQpYClcbiAgICB0aGlzLnJvdXRlcyA9IGNvbXBvc2VSb3V0ZXMoQ29udHJvbGxlciwgdGhpcylcbiAgfVxuXG4gIGdldCBtZXRob2RzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJvdXRlcylcbiAgfVxuXG4gIGZpbmRSb3V0ZSh1cmwsIGh0dHBNZXRob2QpIHtcbiAgICBjb25zdCByb3V0ZVVybCA9IHRyaW1Db250cm9sbGVyUHJlZml4KHVybCwgdGhpcy5yZWdFeHApXG5cbiAgICBjb25zdCBieVVybCA9IG1ldGhvZCA9PiB0aGlzLmdldFJvdXRlKG1ldGhvZCkuaXNTdWl0YWJsZShyb3V0ZVVybCwgaHR0cE1ldGhvZClcblxuICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMubWV0aG9kcy5maW5kKGJ5VXJsKVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um91dGUobWV0aG9kKVxuICB9XG5cbiAgYWRkUm91dGUobWV0aG9kLCB1cmxJbnN0YW5jZSkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoLi4uYXJncykgPT4gYXdhaXQgdGhpcy5pbnN0YW5jZVttZXRob2RdKC4uLmFyZ3MpXG5cbiAgICB0aGlzLnJvdXRlc1ttZXRob2RdLnNldFVybCh1cmxJbnN0YW5jZSlcbiAgICB0aGlzLnJvdXRlc1ttZXRob2RdLnNldEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHNldFJlZ0V4cChwcmVmaXgpIHtcbiAgICB0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke2FwcE1ldGEuZ2V0KEFwcC5QUkVGSVgpfSR7cHJlZml4fWApXG4gICAgdGhpcy51cmxSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3RoaXMucmVnRXhwLnNvdXJjZX0oW15cXFxcd118JClgKVxuICB9XG5cbiAgZ2V0Um91dGUobWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVzW21ldGhvZF1cbiAgfVxuXG4gIGlzU3VpdGFibGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUmVnRXhwLnRlc3QodXJsKVxuICB9XG59Il19