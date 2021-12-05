"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = listener;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _context2 = _interopRequireDefault(require("../context"));

var meta = _interopRequireWildcard(require("../meta"));

var _arguments = require("../meta/arguments");

var _route = require("../meta/route");

var _codes = require("../codes");

var _constants = require("../meta/constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function listener(_x, _x2) {
  return _listener.apply(this, arguments);
}

function _listener() {
  _listener = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var ctx, hooks, _ctx$response, _ctx$response$body, _ctx$response2, _ctx$response2$status, route, args, _ctx$response3, _ctx$response3$body, _ctx$response4, _ctx$response4$status, _ctx$response5, _ctx$response5$status, _ctx$response6, _ctx$response6$header;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = new _context2["default"](request, response);
            hooks = meta.getHooks();
            _context.prev = 2;
            _context.next = 5;
            return hooks.onRequest(ctx);

          case 5:
            route = meta.findRoute(request.url, request.method) || _route.notFoundRoute;
            _context.next = 8;
            return (0, _arguments.parseArguments)(route);

          case 8:
            args = _context.sent;
            _context.next = 11;
            return hooks.beforeHandler(ctx);

          case 11:
            if (!((_ctx$response$body = (_ctx$response = ctx.response).body) !== null && _ctx$response$body !== void 0)) {
              _context.next = 15;
              break;
            }

            _ctx$response$body;
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return route.handler.apply(route, (0, _toConsumableArray2["default"])(args));

          case 17:
            _ctx$response.body = _context.sent;

          case 18:
            (_ctx$response2$status = (_ctx$response2 = ctx.response).statusCode) !== null && _ctx$response2$status !== void 0 ? _ctx$response2$status : _ctx$response2.statusCode = route.statusCode;
            _context.next = 31;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);

            if (!((_ctx$response3$body = (_ctx$response3 = ctx.response).body) !== null && _ctx$response3$body !== void 0)) {
              _context.next = 27;
              break;
            }

            _ctx$response3$body;
            _context.next = 30;
            break;

          case 27:
            _context.next = 29;
            return hooks.errorHandler(_context.t0, ctx);

          case 29:
            _ctx$response3.body = _context.sent;

          case 30:
            (_ctx$response4$status = (_ctx$response4 = ctx.response).statusCode) !== null && _ctx$response4$status !== void 0 ? _ctx$response4$status : _ctx$response4.statusCode = _context.t0.statusCode;

          case 31:
            response.on('finish', function () {
              return hooks.onResponse(ctx);
            });

            if (!ctx.response.handovered) {
              (_ctx$response5$status = (_ctx$response5 = ctx.response).statusCode) !== null && _ctx$response5$status !== void 0 ? _ctx$response5$status : _ctx$response5.statusCode = _codes.HttpCode.OK;
              (_ctx$response6$header = (_ctx$response6 = ctx.response).headers) !== null && _ctx$response6$header !== void 0 ? _ctx$response6$header : _ctx$response6.headers = (0, _defineProperty2["default"])({}, _constants.Header.Key.contentType, _constants.Header.Value.applicationJson);
              response.writeHead(ctx.response.statusCode, ctx.response.headers);
              response.end(JSON.stringify(ctx.response.body));
            }

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 21]]);
  }));
  return _listener.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJsaXN0ZW5lciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImN0eCIsIkNvbnRleHQiLCJob29rcyIsIm1ldGEiLCJnZXRIb29rcyIsIm9uUmVxdWVzdCIsInJvdXRlIiwiZmluZFJvdXRlIiwidXJsIiwibWV0aG9kIiwibm90Rm91bmRSb3V0ZSIsImFyZ3MiLCJiZWZvcmVIYW5kbGVyIiwiYm9keSIsImhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiZXJyb3JIYW5kbGVyIiwib24iLCJvblJlc3BvbnNlIiwiaGFuZG92ZXJlZCIsImMiLCJPSyIsImhlYWRlcnMiLCJoIiwiS2V5IiwiY29udGVudFR5cGUiLCJWYWx1ZSIsImFwcGxpY2F0aW9uSnNvbiIsIndyaXRlSGVhZCIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O1NBRThCQSxROzs7Ozs0RkFBZixpQkFBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLFlBQUFBLEdBRE8sR0FDRCxJQUFJQyxvQkFBSixDQUFZSCxPQUFaLEVBQXFCQyxRQUFyQixDQURDO0FBR1BHLFlBQUFBLEtBSE8sR0FHQ0MsSUFBSSxDQUFDQyxRQUFMLEVBSEQ7QUFBQTtBQUFBO0FBQUEsbUJBTUxGLEtBQUssQ0FBQ0csU0FBTixDQUFnQkwsR0FBaEIsQ0FOSzs7QUFBQTtBQVFMTSxZQUFBQSxLQVJLLEdBUUdILElBQUksQ0FBQ0ksU0FBTCxDQUFlVCxPQUFPLENBQUNVLEdBQXZCLEVBQTRCVixPQUFPLENBQUNXLE1BQXBDLEtBQStDQyxvQkFSbEQ7QUFBQTtBQUFBLG1CQVVRLCtCQUFlSixLQUFmLENBVlI7O0FBQUE7QUFVTEssWUFBQUEsSUFWSztBQUFBO0FBQUEsbUJBWUxULEtBQUssQ0FBQ1UsYUFBTixDQUFvQlosR0FBcEIsQ0FaSzs7QUFBQTtBQUFBLHdDQWNYLGlCQUFBQSxHQUFHLENBQUNELFFBQUosRUFBYWMsSUFkRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWNpQlAsS0FBSyxDQUFDUSxPQUFOLE9BQUFSLEtBQUssc0NBQVlLLElBQVosRUFkdEI7O0FBQUE7QUFjWCwwQkFBYUUsSUFkRjs7QUFBQTtBQWVYLHVEQUFBYixHQUFHLENBQUNELFFBQUosRUFBYWdCLFVBQWIsd0ZBQWFBLFVBQWIsR0FBNEJULEtBQUssQ0FBQ1MsVUFBbEM7QUFmVztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSx5Q0FpQlgsa0JBQUFmLEdBQUcsQ0FBQ0QsUUFBSixFQUFhYyxJQWpCRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWlCaUJYLEtBQUssQ0FBQ2MsWUFBTixjQUF3QmhCLEdBQXhCLENBakJqQjs7QUFBQTtBQWlCWCwyQkFBYWEsSUFqQkY7O0FBQUE7QUFrQlgsdURBQUFiLEdBQUcsQ0FBQ0QsUUFBSixFQUFhZ0IsVUFBYix3RkFBYUEsVUFBYixHQUE0QixZQUFJQSxVQUFoQzs7QUFsQlc7QUFxQmJoQixZQUFBQSxRQUFRLENBQUNrQixFQUFULENBQVksUUFBWixFQUFzQjtBQUFBLHFCQUFNZixLQUFLLENBQUNnQixVQUFOLENBQWlCbEIsR0FBakIsQ0FBTjtBQUFBLGFBQXRCOztBQUVBLGdCQUFJLENBQUNBLEdBQUcsQ0FBQ0QsUUFBSixDQUFhb0IsVUFBbEIsRUFBOEI7QUFDNUIseURBQUFuQixHQUFHLENBQUNELFFBQUosRUFBYWdCLFVBQWIsd0ZBQWFBLFVBQWIsR0FBNEJLLGdCQUFFQyxFQUE5QjtBQUNBLHlEQUFBckIsR0FBRyxDQUFDRCxRQUFKLEVBQWF1QixPQUFiLHdGQUFhQSxPQUFiLHdDQUE0QkMsa0JBQUVDLEdBQUYsQ0FBTUMsV0FBbEMsRUFBZ0RGLGtCQUFFRyxLQUFGLENBQVFDLGVBQXhEO0FBRUE1QixjQUFBQSxRQUFRLENBQUM2QixTQUFULENBQW1CNUIsR0FBRyxDQUFDRCxRQUFKLENBQWFnQixVQUFoQyxFQUE0Q2YsR0FBRyxDQUFDRCxRQUFKLENBQWF1QixPQUF6RDtBQUNBdkIsY0FBQUEsUUFBUSxDQUFDOEIsR0FBVCxDQUFhQyxJQUFJLENBQUNDLFNBQUwsQ0FBZS9CLEdBQUcsQ0FBQ0QsUUFBSixDQUFhYyxJQUE1QixDQUFiO0FBQ0Q7O0FBN0JZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgbWV0YSBmcm9tICcuLi9tZXRhJ1xuaW1wb3J0IHsgcGFyc2VBcmd1bWVudHMgfSBmcm9tICcuLi9tZXRhL2FyZ3VtZW50cydcbmltcG9ydCB7IG5vdEZvdW5kUm91dGUgfSBmcm9tICcuLi9tZXRhL3JvdXRlJ1xuaW1wb3J0IHsgSHR0cENvZGUgYXMgYyB9IGZyb20gJy4uL2NvZGVzJ1xuaW1wb3J0IHsgSGVhZGVyIGFzIGggfSBmcm9tICcuLi9tZXRhL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbGlzdGVuZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgY3R4ID0gbmV3IENvbnRleHQocmVxdWVzdCwgcmVzcG9uc2UpXG5cbiAgY29uc3QgaG9va3MgPSBtZXRhLmdldEhvb2tzKClcblxuICB0cnkge1xuICAgIGF3YWl0IGhvb2tzLm9uUmVxdWVzdChjdHgpXG5cbiAgICBjb25zdCByb3V0ZSA9IG1ldGEuZmluZFJvdXRlKHJlcXVlc3QudXJsLCByZXF1ZXN0Lm1ldGhvZCkgfHwgbm90Rm91bmRSb3V0ZVxuXG4gICAgY29uc3QgYXJncyA9IGF3YWl0IHBhcnNlQXJndW1lbnRzKHJvdXRlKVxuXG4gICAgYXdhaXQgaG9va3MuYmVmb3JlSGFuZGxlcihjdHgpXG5cbiAgICBjdHgucmVzcG9uc2UuYm9keSA/Pz0gYXdhaXQgcm91dGUuaGFuZGxlciguLi5hcmdzKVxuICAgIGN0eC5yZXNwb25zZS5zdGF0dXNDb2RlID8/PSByb3V0ZS5zdGF0dXNDb2RlXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGN0eC5yZXNwb25zZS5ib2R5ID8/PSBhd2FpdCBob29rcy5lcnJvckhhbmRsZXIoZXJyLCBjdHgpXG4gICAgY3R4LnJlc3BvbnNlLnN0YXR1c0NvZGUgPz89IGVyci5zdGF0dXNDb2RlXG4gIH1cblxuICByZXNwb25zZS5vbignZmluaXNoJywgKCkgPT4gaG9va3Mub25SZXNwb25zZShjdHgpKVxuXG4gIGlmICghY3R4LnJlc3BvbnNlLmhhbmRvdmVyZWQpIHtcbiAgICBjdHgucmVzcG9uc2Uuc3RhdHVzQ29kZSA/Pz0gYy5PS1xuICAgIGN0eC5yZXNwb25zZS5oZWFkZXJzID8/PSB7IFtoLktleS5jb250ZW50VHlwZV06IGguVmFsdWUuYXBwbGljYXRpb25Kc29uIH1cblxuICAgIHJlc3BvbnNlLndyaXRlSGVhZChjdHgucmVzcG9uc2Uuc3RhdHVzQ29kZSwgY3R4LnJlc3BvbnNlLmhlYWRlcnMpXG4gICAgcmVzcG9uc2UuZW5kKEpTT04uc3RyaW5naWZ5KGN0eC5yZXNwb25zZS5ib2R5KSlcbiAgfVxufSJdfQ==