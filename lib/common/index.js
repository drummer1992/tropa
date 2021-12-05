"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Request = exports.Query = exports.Put = exports.Prefix = exports.Post = exports.Patch = exports.Param = exports.Intercept = exports.Headers = exports.Get = exports.Delete = exports.Code = exports.Body = void 0;

var meta = _interopRequireWildcard(require("../meta"));

var _url = _interopRequireDefault(require("../utils/url"));

var _constants = require("../meta/constants");

var _context = _interopRequireDefault(require("../context"));

var _object = require("../utils/object");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Prefix = function Prefix(prefix) {
  return function (Controller) {
    meta.setControllerPrefix(Controller, _url["default"].trim(prefix));
  };
};

exports.Prefix = Prefix;

var Code = function Code(code) {
  return function (target, property) {
    return meta.setRouteStatusCode(target.constructor, property, code);
  };
};

exports.Code = Code;

var Headers = function Headers(headers) {
  return function (target, property) {
    return meta.setRouteHeaders(target.constructor, property, headers);
  };
};

exports.Headers = Headers;

var endpoint = function endpoint(httpMethod, pattern) {
  return function (target, method) {
    return meta.addRouteMeta(target.constructor, method, new _url["default"](httpMethod, pattern));
  };
};

var Get = function Get(path) {
  return endpoint('GET', path);
};

exports.Get = Get;

var Post = function Post(path) {
  return endpoint('POST', path);
};

exports.Post = Post;

var Patch = function Patch(path) {
  return endpoint('PATCH', path);
};

exports.Patch = Patch;

var Put = function Put(path) {
  return endpoint('PUT', path);
};

exports.Put = Put;

var Delete = function Delete(path) {
  return endpoint('DELETE', path);
};

exports.Delete = Delete;

var addArgumentMeta = function addArgumentMeta(type, attribute) {
  return function (target, methodName, index) {
    return meta.addArgumentMeta(target.constructor, methodName, {
      index: index,
      type: type,
      attribute: attribute
    });
  };
};

var Body = function Body(attribute) {
  return addArgumentMeta(_constants.Argument.BODY, attribute);
};

exports.Body = Body;

var Param = function Param(attribute) {
  return addArgumentMeta(_constants.Argument.PARAM, attribute);
};

exports.Param = Param;

var Query = function Query(attribute) {
  return addArgumentMeta(_constants.Argument.QUERY, attribute);
};

exports.Query = Query;

var Request = function Request() {
  return addArgumentMeta(_constants.Argument.REQUEST);
};

exports.Request = Request;

var Response = function Response() {
  return addArgumentMeta(_constants.Argument.RESPONSE);
};

exports.Response = Response;

var registerInterceptor = function registerInterceptor(interceptor, descriptor) {
  var method = descriptor.value;

  descriptor.value = function () {
    var _arguments = arguments,
        _this = this;

    return interceptor(_context["default"].get(), function () {
      return method.apply(_this, _arguments);
    });
  };

  return descriptor;
};

var Intercept = function Intercept(interceptor) {
  return function () {
    var _ref;

    var calledOnController = arguments.length === 1;

    if (calledOnController) {
      var Controller = arguments.length <= 0 ? undefined : arguments[0];
      return (0, _object.getPrototypeKeys)(Controller).forEach(function (property) {
        var descriptor = Object.getOwnPropertyDescriptor(Controller.prototype, property);
        Object.defineProperty(Controller.prototype, property, registerInterceptor(interceptor, descriptor));
      });
    }

    return registerInterceptor(interceptor, (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]));
  };
};

exports.Intercept = Intercept;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXguanMiXSwibmFtZXMiOlsiUHJlZml4IiwicHJlZml4IiwiQ29udHJvbGxlciIsIm1ldGEiLCJzZXRDb250cm9sbGVyUHJlZml4IiwiVXJsIiwidHJpbSIsIkNvZGUiLCJjb2RlIiwidGFyZ2V0IiwicHJvcGVydHkiLCJzZXRSb3V0ZVN0YXR1c0NvZGUiLCJjb25zdHJ1Y3RvciIsIkhlYWRlcnMiLCJoZWFkZXJzIiwic2V0Um91dGVIZWFkZXJzIiwiZW5kcG9pbnQiLCJodHRwTWV0aG9kIiwicGF0dGVybiIsIm1ldGhvZCIsImFkZFJvdXRlTWV0YSIsIkdldCIsInBhdGgiLCJQb3N0IiwiUGF0Y2giLCJQdXQiLCJEZWxldGUiLCJhZGRBcmd1bWVudE1ldGEiLCJ0eXBlIiwiYXR0cmlidXRlIiwibWV0aG9kTmFtZSIsImluZGV4IiwiQm9keSIsImEiLCJCT0RZIiwiUGFyYW0iLCJQQVJBTSIsIlF1ZXJ5IiwiUVVFUlkiLCJSZXF1ZXN0IiwiUkVRVUVTVCIsIlJlc3BvbnNlIiwiUkVTUE9OU0UiLCJyZWdpc3RlckludGVyY2VwdG9yIiwiaW50ZXJjZXB0b3IiLCJkZXNjcmlwdG9yIiwidmFsdWUiLCJDb250ZXh0IiwiZ2V0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJJbnRlcmNlcHQiLCJjYWxsZWRPbkNvbnRyb2xsZXIiLCJsZW5ndGgiLCJmb3JFYWNoIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLE1BQU07QUFBQSxTQUFJLFVBQUFDLFVBQVUsRUFBSTtBQUM1Q0MsSUFBQUEsSUFBSSxDQUFDQyxtQkFBTCxDQUF5QkYsVUFBekIsRUFBcUNHLGdCQUFJQyxJQUFKLENBQVNMLE1B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LENBQUNDLFdBQUQsVUFBbUIsVUFBS1MsTUFBTCxHQUFjLENBQWpDLHNFQUExQjtBQUNELEdBZG1DO0FBQUEsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtZXRhIGZyb20gJy4uL21ldGEnXG5pbXBvcnQgVXJsIGZyb20gJy4uL3V0aWxzL3VybCdcbmltcG9ydCB7IEFyZ3VtZW50IGFzIGEgfSBmcm9tICcuLi9tZXRhL2NvbnN0YW50cydcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgeyBnZXRQcm90b3R5cGVLZXlzIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0J1xuXG5leHBvcnQgY29uc3QgUHJlZml4ID0gcHJlZml4ID0+IENvbnRyb2xsZXIgPT4ge1xuICBtZXRhLnNldENvbnRyb2xsZXJQcmVmaXgoQ29udHJvbGxlciwgVXJsLnRyaW0ocHJlZml4KSlcbn1cblxuZXhwb3J0IGNvbnN0IENvZGUgPSBjb2RlID0+ICh0YXJnZXQsIHByb3BlcnR5KSA9PlxuICBtZXRhLnNldFJvdXRlU3RhdHVzQ29kZSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBjb2RlKVxuXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IGhlYWRlcnMgPT4gKHRhcmdldCwgcHJvcGVydHkpID0+XG4gIG1ldGEuc2V0Um91dGVIZWFkZXJzKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIGhlYWRlcnMpXG5cbmNvbnN0IGVuZHBvaW50ID0gKGh0dHBNZXRob2QsIHBhdHRlcm4pID0+ICh0YXJnZXQsIG1ldGhvZCkgPT5cbiAgbWV0YS5hZGRSb3V0ZU1ldGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBtZXRob2QsIG5ldyBVcmwoaHR0cE1ldGhvZCwgcGF0dGVybikpXG5cbmV4cG9ydCBjb25zdCBHZXQgPSBwYXRoID0+IGVuZHBvaW50KCdHRVQnLCBwYXRoKVxuZXhwb3J0IGNvbnN0IFBvc3QgPSBwYXRoID0+IGVuZHBvaW50KCdQT1NUJywgcGF0aClcbmV4cG9ydCBjb25zdCBQYXRjaCA9IHBhdGggPT4gZW5kcG9pbnQoJ1BBVENIJywgcGF0aClcbmV4cG9ydCBjb25zdCBQdXQgPSBwYXRoID0+IGVuZHBvaW50KCdQVVQnLCBwYXRoKVxuZXhwb3J0IGNvbnN0IERlbGV0ZSA9IHBhdGggPT4gZW5kcG9pbnQoJ0RFTEVURScsIHBhdGgpXG5cbmNvbnN0IGFkZEFyZ3VtZW50TWV0YSA9ICh0eXBlLCBhdHRyaWJ1dGUpID0+ICh0YXJnZXQsIG1ldGhvZE5hbWUsIGluZGV4KSA9PlxuICBtZXRhLmFkZEFyZ3VtZW50TWV0YSh0YXJnZXQuY29uc3RydWN0b3IsIG1ldGhvZE5hbWUsIHtcbiAgICBpbmRleCxcbiAgICB0eXBlLFxuICAgIGF0dHJpYnV0ZSxcbiAgfSlcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBhdHRyaWJ1dGUgPT4gYWRkQXJndW1lbnRNZXRhKGEuQk9EWSwgYXR0cmlidXRlKVxuZXhwb3J0IGNvbnN0IFBhcmFtID0gYXR0cmlidXRlID0+IGFkZEFyZ3VtZW50TWV0YShhLlBBUkFNLCBhdHRyaWJ1dGUpXG5leHBvcnQgY29uc3QgUXVlcnkgPSBhdHRyaWJ1dGUgPT4gYWRkQXJndW1lbnRNZXRhKGEuUVVFUlksIGF0dHJpYnV0ZSlcbmV4cG9ydCBjb25zdCBSZXF1ZXN0ID0gKCkgPT4gYWRkQXJndW1lbnRNZXRhKGEuUkVRVUVTVClcbmV4cG9ydCBjb25zdCBSZXNwb25zZSA9ICgpID0+IGFkZEFyZ3VtZW50TWV0YShhLlJFU1BPTlNFKVxuXG5jb25zdCByZWdpc3RlckludGVyY2VwdG9yID0gKGludGVyY2VwdG9yLCBkZXNjcmlwdG9yKSA9PiB7XG4gIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWVcblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnRlcmNlcHRvcihDb250ZXh0LmdldCgpLCAoKSA9PiBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yXG59XG5cbmV4cG9ydCBjb25zdCBJbnRlcmNlcHQgPSBpbnRlcmNlcHRvciA9PiAoLi4uYXJncykgPT4ge1xuICBjb25zdCBjYWxsZWRPbkNvbnRyb2xsZXIgPSBhcmdzLmxlbmd0aCA9PT0gMVxuXG4gIGlmIChjYWxsZWRPbkNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBDb250cm9sbGVyID0gYXJnc1swXVxuXG4gICAgcmV0dXJuIGdldFByb3RvdHlwZUtleXMoQ29udHJvbGxlcikuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDb250cm9sbGVyLnByb3RvdHlwZSwgcHJvcGVydHkpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sbGVyLnByb3RvdHlwZSwgcHJvcGVydHksIHJlZ2lzdGVySW50ZXJjZXB0b3IoaW50ZXJjZXB0b3IsIGRlc2NyaXB0b3IpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRvciwgYXJnc1thcmdzLmxlbmd0aCAtIDFdKVxufSJdfQ==