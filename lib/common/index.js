"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Request = exports.Query = exports.Put = exports.Prefix = exports.Post = exports.Patch = exports.Param = exports.Headers = exports.Get = exports.Delete = exports.Code = exports.Body = void 0;

var meta = _interopRequireWildcard(require("../meta"));

var _url = _interopRequireDefault(require("../utils/url"));

var _constants = require("../meta/constants");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXguanMiXSwibmFtZXMiOlsiUHJlZml4IiwicHJlZml4IiwiQ29udHJvbGxlciIsIm1ldGEiLCJzZXRDb250cm9sbGVyUHJlZml4IiwiVXJsIiwidHJpbSIsIkNvZGUiLCJjb2RlIiwidGFyZ2V0IiwicHJvcGVydHkiLCJzZXRSb3V0ZVN0YXR1c0NvZGUiLCJjb25zdHJ1Y3RvciIsIkhlYWRlcnMiLCJoZWFkZXJzIiwic2V0Um91dGVIZWFkZXJzIiwiZW5kcG9pbnQiLCJodHRwTWV0aG9kIiwicGF0dGVybiIsIm1ldGhvZCIsImFkZFJvdXRlTWV0YSIsIkdldCIsInBhdGgiLCJQb3N0IiwiUGF0Y2giLCJQdXQiLCJEZWxldGUiLCJhZGRBcmd1bWVudE1ldGEiLCJ0eXBlIiwiYXR0cmlidXRlIiwibWV0aG9kTmFtZSIsImluZGV4IiwiQm9keSIsImEiLCJCT0RZIiwiUGFyYW0iLCJQQVJBTSIsIlF1ZXJ5IiwiUVVFUlkiLCJSZXF1ZXN0IiwiUkVRVUVTVCIsIlJlc3BvbnNlIiwiUkVTUE9OU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLE1BQU07QUFBQSxTQUFJLFVBQUFDLFVBQVUsRUFBSTtBQUM1Q0MsSUFBQUEsSUFBSSxDQUFDQyxtQkFBTCxDQUF5QkYsVUFBekIsRUFBcUNHLGdCQUFJQyxJQUFKLENBQVNMLE1BQVQsQ0FBckM7QUFDRCxHQUYyQjtBQUFBLENBQXJCOzs7O0FBSUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsSUFBSTtBQUFBLFNBQUksVUFBQ0MsTUFBRCxFQUFTQyxRQUFUO0FBQUEsV0FDMUJQLElBQUksQ0FBQ1Esa0JBQUwsQ0FBd0JGLE1BQU0sQ0FBQ0csV0FBL0IsRUFBNENGLFFBQTVDLEVBQXNERixJQUF0RCxDQUQwQjtBQUFBLEdBQUo7QUFBQSxDQUFqQjs7OztBQUdBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLE9BQU87QUFBQSxTQUFJLFVBQUNMLE1BQUQsRUFBU0MsUUFBVDtBQUFBLFdBQ2hDUCxJQUFJLENBQUNZLGVBQUwsQ0FBcUJOLE1BQU0sQ0FBQ0csV0FBNUIsRUFBeUNGLFFBQXpDLEVBQW1ESSxPQUFuRCxDQURnQztBQUFBLEdBQUo7QUFBQSxDQUF2Qjs7OztBQUdQLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFVBQUQsRUFBYUMsT0FBYjtBQUFBLFNBQXlCLFVBQUNULE1BQUQsRUFBU1UsTUFBVDtBQUFBLFdBQ3hDaEIsSUFBSSxDQUFDaUIsWUFBTCxDQUFrQlgsTUFBTSxDQUFDRyxXQUF6QixFQUFzQ08sTUFBdEMsRUFBOEMsSUFBSWQsZUFBSixDQUFRWSxVQUFSLEVBQW9CQyxPQUFwQixDQUE5QyxDQUR3QztBQUFBLEdBQXpCO0FBQUEsQ0FBakI7O0FBR08sSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUMsSUFBSTtBQUFBLFNBQUlOLFFBQVEsQ0FBQyxLQUFELEVBQVFNLElBQVIsQ0FBWjtBQUFBLENBQWhCOzs7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUQsSUFBSTtBQUFBLFNBQUlOLFFBQVEsQ0FBQyxNQUFELEVBQVNNLElBQVQsQ0FBWjtBQUFBLENBQWpCOzs7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUYsSUFBSTtBQUFBLFNBQUlOLFFBQVEsQ0FBQyxPQUFELEVBQVVNLElBQVYsQ0FBWjtBQUFBLENBQWxCOzs7O0FBQ0EsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUgsSUFBSTtBQUFBLFNBQUlOLFFBQVEsQ0FBQyxLQUFELEVBQVFNLElBQVIsQ0FBWjtBQUFBLENBQWhCOzs7O0FBQ0EsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUosSUFBSTtBQUFBLFNBQUlOLFFBQVEsQ0FBQyxRQUFELEVBQVdNLElBQVgsQ0FBWjtBQUFBLENBQW5COzs7O0FBRVAsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQU9DLFNBQVA7QUFBQSxTQUFxQixVQUFDcEIsTUFBRCxFQUFTcUIsVUFBVCxFQUFxQkMsS0FBckI7QUFBQSxXQUMzQzVCLElBQUksQ0FBQ3dCLGVBQUwsQ0FBcUJsQixNQUFNLENBQUNHLFdBQTVCLEVBQXlDa0IsVUFBekMsRUFBcUQ7QUFDbkRDLE1BQUFBLEtBQUssRUFBTEEsS0FEbUQ7QUFFbkRILE1BQUFBLElBQUksRUFBSkEsSUFGbUQ7QUFHbkRDLE1BQUFBLFNBQVMsRUFBVEE7QUFIbUQsS0FBckQsQ0FEMkM7QUFBQSxHQUFyQjtBQUFBLENBQXhCOztBQU9PLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFILFNBQVM7QUFBQSxTQUFJRixlQUFlLENBQUNNLG9CQUFFQyxJQUFILEVBQVNMLFNBQVQsQ0FBbkI7QUFBQSxDQUF0Qjs7OztBQUNBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFOLFNBQVM7QUFBQSxTQUFJRixlQUFlLENBQUNNLG9CQUFFRyxLQUFILEVBQVVQLFNBQVYsQ0FBbkI7QUFBQSxDQUF2Qjs7OztBQUNBLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFSLFNBQVM7QUFBQSxTQUFJRixlQUFlLENBQUNNLG9CQUFFSyxLQUFILEVBQVVULFNBQVYsQ0FBbkI7QUFBQSxDQUF2Qjs7OztBQUNBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTVosZUFBZSxDQUFDTSxvQkFBRU8sT0FBSCxDQUFyQjtBQUFBLENBQWhCOzs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNZCxlQUFlLENBQUNNLG9CQUFFUyxRQUFILENBQXJCO0FBQUEsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtZXRhIGZyb20gJy4uL21ldGEnXG5pbXBvcnQgVXJsIGZyb20gJy4uL3V0aWxzL3VybCdcbmltcG9ydCB7IEFyZ3VtZW50IGFzIGEgfSBmcm9tICcuLi9tZXRhL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IFByZWZpeCA9IHByZWZpeCA9PiBDb250cm9sbGVyID0+IHtcbiAgbWV0YS5zZXRDb250cm9sbGVyUHJlZml4KENvbnRyb2xsZXIsIFVybC50cmltKHByZWZpeCkpXG59XG5cbmV4cG9ydCBjb25zdCBDb2RlID0gY29kZSA9PiAodGFyZ2V0LCBwcm9wZXJ0eSkgPT5cbiAgbWV0YS5zZXRSb3V0ZVN0YXR1c0NvZGUodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgY29kZSlcblxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSBoZWFkZXJzID0+ICh0YXJnZXQsIHByb3BlcnR5KSA9PlxuICBtZXRhLnNldFJvdXRlSGVhZGVycyh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBoZWFkZXJzKVxuXG5jb25zdCBlbmRwb2ludCA9IChodHRwTWV0aG9kLCBwYXR0ZXJuKSA9PiAodGFyZ2V0LCBtZXRob2QpID0+XG4gIG1ldGEuYWRkUm91dGVNZXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgbWV0aG9kLCBuZXcgVXJsKGh0dHBNZXRob2QsIHBhdHRlcm4pKVxuXG5leHBvcnQgY29uc3QgR2V0ID0gcGF0aCA9PiBlbmRwb2ludCgnR0VUJywgcGF0aClcbmV4cG9ydCBjb25zdCBQb3N0ID0gcGF0aCA9PiBlbmRwb2ludCgnUE9TVCcsIHBhdGgpXG5leHBvcnQgY29uc3QgUGF0Y2ggPSBwYXRoID0+IGVuZHBvaW50KCdQQVRDSCcsIHBhdGgpXG5leHBvcnQgY29uc3QgUHV0ID0gcGF0aCA9PiBlbmRwb2ludCgnUFVUJywgcGF0aClcbmV4cG9ydCBjb25zdCBEZWxldGUgPSBwYXRoID0+IGVuZHBvaW50KCdERUxFVEUnLCBwYXRoKVxuXG5jb25zdCBhZGRBcmd1bWVudE1ldGEgPSAodHlwZSwgYXR0cmlidXRlKSA9PiAodGFyZ2V0LCBtZXRob2ROYW1lLCBpbmRleCkgPT5cbiAgbWV0YS5hZGRBcmd1bWVudE1ldGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBtZXRob2ROYW1lLCB7XG4gICAgaW5kZXgsXG4gICAgdHlwZSxcbiAgICBhdHRyaWJ1dGUsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gYXR0cmlidXRlID0+IGFkZEFyZ3VtZW50TWV0YShhLkJPRFksIGF0dHJpYnV0ZSlcbmV4cG9ydCBjb25zdCBQYXJhbSA9IGF0dHJpYnV0ZSA9PiBhZGRBcmd1bWVudE1ldGEoYS5QQVJBTSwgYXR0cmlidXRlKVxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gYXR0cmlidXRlID0+IGFkZEFyZ3VtZW50TWV0YShhLlFVRVJZLCBhdHRyaWJ1dGUpXG5leHBvcnQgY29uc3QgUmVxdWVzdCA9ICgpID0+IGFkZEFyZ3VtZW50TWV0YShhLlJFUVVFU1QpXG5leHBvcnQgY29uc3QgUmVzcG9uc2UgPSAoKSA9PiBhZGRBcmd1bWVudE1ldGEoYS5SRVNQT05TRSkiXX0=