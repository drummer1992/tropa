"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseArguments = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _constants = require("./constants");

var _bodyParser = _interopRequireDefault(require("../utils/body-parser"));

var _context3 = _interopRequireDefault(require("../context"));

var _argumentProviders;

var argumentProviders = (_argumentProviders = {}, (0, _defineProperty2["default"])(_argumentProviders, _constants.Argument.QUERY, function (url, _ref) {
  var request = _ref.request;
  return request.query = url.parseQuery(request.url);
}), (0, _defineProperty2["default"])(_argumentProviders, _constants.Argument.PARAM, function (url, _ref2) {
  var request = _ref2.request;
  return request.params = url.parseParams(request.url);
}), (0, _defineProperty2["default"])(_argumentProviders, _constants.Argument.REQUEST, function (url, _ref3) {
  var request = _ref3.request;
  return request.raw;
}), (0, _defineProperty2["default"])(_argumentProviders, _constants.Argument.RESPONSE, function (url, _ref4) {
  var response = _ref4.response;
  return response.raw;
}), (0, _defineProperty2["default"])(_argumentProviders, _constants.Argument.BODY, function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, _ref5) {
    var request;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request = _ref5.request;
            _context.next = 3;
            return (0, _bodyParser["default"])(request.raw);

          case 3:
            return _context.abrupt("return", request.body = _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref6.apply(this, arguments);
  };
}()), _argumentProviders);

var processArgument = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, meta) {
    var provide, argument;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            provide = argumentProviders[meta.type];
            _context2.next = 3;
            return provide(url, _context3["default"].get());

          case 3:
            argument = _context2.sent;
            return _context2.abrupt("return", meta.attribute ? argument === null || argument === void 0 ? void 0 : argument[meta.attribute] : argument);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function processArgument(_x3, _x4) {
    return _ref7.apply(this, arguments);
  };
}();

var parseArguments = function parseArguments(route) {
  return Promise.all(route.arguments.map(function (meta) {
    return processArgument(route.url, meta);
  }));
};

exports.parseArguments = parseArguments;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL2FyZ3VtZW50cy5qcyJdLCJuYW1lcyI6WyJhcmd1bWVudFByb3ZpZGVycyIsImEiLCJRVUVSWSIsInVybCIsInJlcXVlc3QiLCJxdWVyeSIsInBhcnNlUXVlcnkiLCJQQVJBTSIsInBhcmFtcyIsInBhcnNlUGFyYW1zIiwiUkVRVUVTVCIsInJhdyIsIlJFU1BPTlNFIiwicmVzcG9uc2UiLCJCT0RZIiwiYm9keSIsInByb2Nlc3NBcmd1bWVudCIsIm1ldGEiLCJwcm92aWRlIiwidHlwZSIsIkNvbnRleHQiLCJnZXQiLCJhcmd1bWVudCIsImF0dHJpYnV0ZSIsInBhcnNlQXJndW1lbnRzIiwicm91dGUiLCJQcm9taXNlIiwiYWxsIiwiYXJndW1lbnRzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixrRkFDcEJDLG9CQUFFQyxLQURrQixFQUNQLFVBQUNDLEdBQUQ7QUFBQSxNQUFRQyxPQUFSLFFBQVFBLE9BQVI7QUFBQSxTQUFzQkEsT0FBTyxDQUFDQyxLQUFSLEdBQWdCRixHQUFHLENBQUNHLFVBQUosQ0FBZUYsT0FBTyxDQUFDRCxHQUF2QixDQUF0QztBQUFBLENBRE8sd0RBRXBCRixvQkFBRU0sS0FGa0IsRUFFUCxVQUFDSixHQUFEO0FBQUEsTUFBUUMsT0FBUixTQUFRQSxPQUFSO0FBQUEsU0FBc0JBLE9BQU8sQ0FBQ0ksTUFBUixHQUFpQkwsR0FBRyxDQUFDTSxXQUFKLENBQWdCTCxPQUFPLENBQUNELEdBQXhCLENBQXZDO0FBQUEsQ0FGTyx3REFHcEJGLG9CQUFFUyxPQUhrQixFQUdQLFVBQUNQLEdBQUQ7QUFBQSxNQUFRQyxPQUFSLFNBQVFBLE9BQVI7QUFBQSxTQUFzQkEsT0FBTyxDQUFDTyxHQUE5QjtBQUFBLENBSE8sd0RBSXBCVixvQkFBRVcsUUFKa0IsRUFJUCxVQUFDVCxHQUFEO0FBQUEsTUFBUVUsUUFBUixTQUFRQSxRQUFSO0FBQUEsU0FBdUJBLFFBQVEsQ0FBQ0YsR0FBaEM7QUFBQSxDQUpPLHdEQUtwQlYsb0JBQUVhLElBTGtCO0FBQUEsNEZBS1AsaUJBQU9YLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWNDLFlBQUFBLE9BQWQsU0FBY0EsT0FBZDtBQUFBO0FBQUEsbUJBQ1MsNEJBQVdBLE9BQU8sQ0FBQ08sR0FBbkIsQ0FEVDs7QUFBQTtBQUFBLDZDQUNaUCxPQUFPLENBQUNXLElBREk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FMTzs7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBdkI7O0FBU0EsSUFBTUMsZUFBZTtBQUFBLDRGQUFHLGtCQUFPYixHQUFQLEVBQVljLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxZQUFBQSxPQURnQixHQUNObEIsaUJBQWlCLENBQUNpQixJQUFJLENBQUNFLElBQU4sQ0FEWDtBQUFBO0FBQUEsbUJBRUNELE9BQU8sQ0FBQ2YsR0FBRCxFQUFNaUIscUJBQVFDLEdBQVIsRUFBTixDQUZSOztBQUFBO0FBRWhCQyxZQUFBQSxRQUZnQjtBQUFBLDhDQUlmTCxJQUFJLENBQUNNLFNBQUwsR0FBaUJELFFBQWpCLGFBQWlCQSxRQUFqQix1QkFBaUJBLFFBQVEsQ0FBR0wsSUFBSSxDQUFDTSxTQUFSLENBQXpCLEdBQThDRCxRQUovQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmTixlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQU9PLElBQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSztBQUFBLFNBQ2pDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFBWixJQUFJO0FBQUEsV0FBSUQsZUFBZSxDQUFDUyxLQUFLLENBQUN0QixHQUFQLEVBQVljLElBQVosQ0FBbkI7QUFBQSxHQUF4QixDQUFaLENBRGlDO0FBQUEsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd1bWVudCBhcyBhIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICcuLi91dGlscy9ib2R5LXBhcnNlcidcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5cbmNvbnN0IGFyZ3VtZW50UHJvdmlkZXJzID0ge1xuICBbYS5RVUVSWV0gICA6ICh1cmwsIHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0LnF1ZXJ5ID0gdXJsLnBhcnNlUXVlcnkocmVxdWVzdC51cmwpLFxuICBbYS5QQVJBTV0gICA6ICh1cmwsIHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0LnBhcmFtcyA9IHVybC5wYXJzZVBhcmFtcyhyZXF1ZXN0LnVybCksXG4gIFthLlJFUVVFU1RdIDogKHVybCwgeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QucmF3LFxuICBbYS5SRVNQT05TRV06ICh1cmwsIHsgcmVzcG9uc2UgfSkgPT4gcmVzcG9uc2UucmF3LFxuICBbYS5CT0RZXSAgICA6IGFzeW5jICh1cmwsIHsgcmVxdWVzdCB9KSA9PlxuICAgIHJlcXVlc3QuYm9keSA9IGF3YWl0IGJvZHlQYXJzZXIocmVxdWVzdC5yYXcpLFxufVxuXG5jb25zdCBwcm9jZXNzQXJndW1lbnQgPSBhc3luYyAodXJsLCBtZXRhKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGUgPSBhcmd1bWVudFByb3ZpZGVyc1ttZXRhLnR5cGVdXG4gIGNvbnN0IGFyZ3VtZW50ID0gYXdhaXQgcHJvdmlkZSh1cmwsIENvbnRleHQuZ2V0KCkpXG5cbiAgcmV0dXJuIG1ldGEuYXR0cmlidXRlID8gYXJndW1lbnQ/LlttZXRhLmF0dHJpYnV0ZV0gOiBhcmd1bWVudFxufVxuXG5leHBvcnQgY29uc3QgcGFyc2VBcmd1bWVudHMgPSByb3V0ZSA9PlxuICBQcm9taXNlLmFsbChyb3V0ZS5hcmd1bWVudHMubWFwKG1ldGEgPT4gcHJvY2Vzc0FyZ3VtZW50KHJvdXRlLnVybCwgbWV0YSkpKSJdfQ==