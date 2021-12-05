"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = listener;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _context3 = _interopRequireDefault(require("../context"));

var meta = _interopRequireWildcard(require("../meta"));

var _arguments = require("../meta/arguments");

var _route = require("../meta/route");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function listener(_x, _x2) {
  return _listener.apply(this, arguments);
}

function _listener() {
  _listener = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
    var ctx, hooks, route, args, _yield$route$handler$, body, headers, statusCode;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = new _context3["default"](request, response);
            hooks = meta.getHooks();
            _context2.next = 4;
            return hooks.onRequest(ctx);

          case 4:
            route = meta.findRoute(ctx.request.url, ctx.request.method) || _route.notFoundRoute;
            _context2.next = 7;
            return (0, _arguments.parseArguments)(route);

          case 7:
            args = _context2.sent;
            _context2.next = 10;
            return hooks.onHandler(ctx);

          case 10:
            _context2.next = 12;
            return route.handler.apply(route, (0, _toConsumableArray2["default"])(args)).then(function (result) {
              return {
                statusCode: route.statusCode,
                headers: route.headers,
                body: result
              };
            }, /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return hooks.onError(error, ctx);

                      case 2:
                        _context.t0 = _context.sent;
                        return _context.abrupt("return", {
                          body: _context.t0
                        });

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }());

          case 12:
            _yield$route$handler$ = _context2.sent;
            body = _yield$route$handler$.body;
            headers = _yield$route$handler$.headers;
            statusCode = _yield$route$handler$.statusCode;
            ctx.response.end({
              statusCode: statusCode,
              headers: headers,
              body: body
            });
            _context2.next = 19;
            return hooks.onResponse(ctx);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _listener.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJsaXN0ZW5lciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImN0eCIsIkNvbnRleHQiLCJob29rcyIsIm1ldGEiLCJnZXRIb29rcyIsIm9uUmVxdWVzdCIsInJvdXRlIiwiZmluZFJvdXRlIiwidXJsIiwibWV0aG9kIiwibm90Rm91bmRSb3V0ZSIsImFyZ3MiLCJvbkhhbmRsZXIiLCJoYW5kbGVyIiwidGhlbiIsInJlc3VsdCIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiYm9keSIsImVycm9yIiwib25FcnJvciIsImVuZCIsIm9uUmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztTQUU4QkEsUTs7Ozs7NEZBQWYsa0JBQXdCQyxPQUF4QixFQUFpQ0MsUUFBakM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQyxZQUFBQSxHQURPLEdBQ0QsSUFBSUMsb0JBQUosQ0FBWUgsT0FBWixFQUFxQkMsUUFBckIsQ0FEQztBQUdQRyxZQUFBQSxLQUhPLEdBR0NDLElBQUksQ0FBQ0MsUUFBTCxFQUhEO0FBQUE7QUFBQSxtQkFLUEYsS0FBSyxDQUFDRyxTQUFOLENBQWdCTCxHQUFoQixDQUxPOztBQUFBO0FBT1BNLFlBQUFBLEtBUE8sR0FPQ0gsSUFBSSxDQUFDSSxTQUFMLENBQWVQLEdBQUcsQ0FBQ0YsT0FBSixDQUFZVSxHQUEzQixFQUFnQ1IsR0FBRyxDQUFDRixPQUFKLENBQVlXLE1BQTVDLEtBQXVEQyxvQkFQeEQ7QUFBQTtBQUFBLG1CQVNNLCtCQUFlSixLQUFmLENBVE47O0FBQUE7QUFTUEssWUFBQUEsSUFUTztBQUFBO0FBQUEsbUJBV1BULEtBQUssQ0FBQ1UsU0FBTixDQUFnQlosR0FBaEIsQ0FYTzs7QUFBQTtBQUFBO0FBQUEsbUJBYStCTSxLQUFLLENBQUNPLE9BQU4sT0FBQVAsS0FBSyxzQ0FBWUssSUFBWixFQUFMLENBQ3pDRyxJQUR5QyxDQUNwQyxVQUFBQyxNQUFNO0FBQUEscUJBQUs7QUFDZkMsZ0JBQUFBLFVBQVUsRUFBRVYsS0FBSyxDQUFDVSxVQURIO0FBRWZDLGdCQUFBQSxPQUFPLEVBQUtYLEtBQUssQ0FBQ1csT0FGSDtBQUdmQyxnQkFBQUEsSUFBSSxFQUFRSDtBQUhHLGVBQUw7QUFBQSxhQUQ4QjtBQUFBLHVHQUt0QyxpQkFBTUksS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDVWpCLEtBQUssQ0FBQ2tCLE9BQU4sQ0FBY0QsS0FBZCxFQUFxQm5CLEdBQXJCLENBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQ0ZrQiwwQkFBQUEsSUFERTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTHNDOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWIvQjs7QUFBQTtBQUFBO0FBYUxBLFlBQUFBLElBYksseUJBYUxBLElBYks7QUFhQ0QsWUFBQUEsT0FiRCx5QkFhQ0EsT0FiRDtBQWFVRCxZQUFBQSxVQWJWLHlCQWFVQSxVQWJWO0FBc0JiaEIsWUFBQUEsR0FBRyxDQUFDRCxRQUFKLENBQWFzQixHQUFiLENBQWlCO0FBQUVMLGNBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxjQUFBQSxPQUFPLEVBQVBBLE9BQWQ7QUFBdUJDLGNBQUFBLElBQUksRUFBSkE7QUFBdkIsYUFBakI7QUF0QmE7QUFBQSxtQkF3QlBoQixLQUFLLENBQUNvQixVQUFOLENBQWlCdEIsR0FBakIsQ0F4Qk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBtZXRhIGZyb20gJy4uL21ldGEnXG5pbXBvcnQgeyBwYXJzZUFyZ3VtZW50cyB9IGZyb20gJy4uL21ldGEvYXJndW1lbnRzJ1xuaW1wb3J0IHsgbm90Rm91bmRSb3V0ZSB9IGZyb20gJy4uL21ldGEvcm91dGUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxpc3RlbmVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGN0eCA9IG5ldyBDb250ZXh0KHJlcXVlc3QsIHJlc3BvbnNlKVxuXG4gIGNvbnN0IGhvb2tzID0gbWV0YS5nZXRIb29rcygpXG5cbiAgYXdhaXQgaG9va3Mub25SZXF1ZXN0KGN0eClcblxuICBjb25zdCByb3V0ZSA9IG1ldGEuZmluZFJvdXRlKGN0eC5yZXF1ZXN0LnVybCwgY3R4LnJlcXVlc3QubWV0aG9kKSB8fCBub3RGb3VuZFJvdXRlXG5cbiAgY29uc3QgYXJncyA9IGF3YWl0IHBhcnNlQXJndW1lbnRzKHJvdXRlKVxuXG4gIGF3YWl0IGhvb2tzLm9uSGFuZGxlcihjdHgpXG5cbiAgY29uc3QgeyBib2R5LCBoZWFkZXJzLCBzdGF0dXNDb2RlIH0gPSBhd2FpdCByb3V0ZS5oYW5kbGVyKC4uLmFyZ3MpXG4gICAgLnRoZW4ocmVzdWx0ID0+ICh7XG4gICAgICBzdGF0dXNDb2RlOiByb3V0ZS5zdGF0dXNDb2RlLFxuICAgICAgaGVhZGVycyAgIDogcm91dGUuaGVhZGVycyxcbiAgICAgIGJvZHkgICAgICA6IHJlc3VsdCxcbiAgICB9KSwgYXN5bmMgZXJyb3IgPT4gKHtcbiAgICAgIGJvZHk6IGF3YWl0IGhvb2tzLm9uRXJyb3IoZXJyb3IsIGN0eCksXG4gICAgfSkpXG5cbiAgY3R4LnJlc3BvbnNlLmVuZCh7IHN0YXR1c0NvZGUsIGhlYWRlcnMsIGJvZHkgfSlcblxuICBhd2FpdCBob29rcy5vblJlc3BvbnNlKGN0eClcbn0iXX0=