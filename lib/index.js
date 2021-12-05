"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function get() {
    return _common.Body;
  }
});
Object.defineProperty(exports, "Code", {
  enumerable: true,
  get: function get() {
    return _common.Code;
  }
});
Object.defineProperty(exports, "Delete", {
  enumerable: true,
  get: function get() {
    return _common.Delete;
  }
});
Object.defineProperty(exports, "Get", {
  enumerable: true,
  get: function get() {
    return _common.Get;
  }
});
Object.defineProperty(exports, "Headers", {
  enumerable: true,
  get: function get() {
    return _common.Headers;
  }
});
Object.defineProperty(exports, "Hooks", {
  enumerable: true,
  get: function get() {
    return _hooks["default"];
  }
});
Object.defineProperty(exports, "HttpCode", {
  enumerable: true,
  get: function get() {
    return _codes.HttpCode;
  }
});
Object.defineProperty(exports, "Param", {
  enumerable: true,
  get: function get() {
    return _common.Param;
  }
});
Object.defineProperty(exports, "Patch", {
  enumerable: true,
  get: function get() {
    return _common.Patch;
  }
});
Object.defineProperty(exports, "Post", {
  enumerable: true,
  get: function get() {
    return _common.Post;
  }
});
Object.defineProperty(exports, "Prefix", {
  enumerable: true,
  get: function get() {
    return _common.Prefix;
  }
});
Object.defineProperty(exports, "Put", {
  enumerable: true,
  get: function get() {
    return _common.Put;
  }
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _common.Query;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function get() {
    return _common.Request;
  }
});
Object.defineProperty(exports, "Response", {
  enumerable: true,
  get: function get() {
    return _common.Response;
  }
});
exports["default"] = void 0;

var _hooks = _interopRequireDefault(require("./hooks"));

var _listener = _interopRequireDefault(require("./listener"));

var _loadControllers = _interopRequireDefault(require("./load-controllers"));

var _meta = require("./meta");

var _common = require("./common");

var _codes = require("./codes");

var tropa = {
  listener: _listener["default"],
  loadControllers: _loadControllers["default"],
  setHooks: _meta.setHooks,
  setApiPrefix: _meta.setApiPrefix
};
var _default = tropa;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0cm9wYSIsImxpc3RlbmVyIiwibG9hZENvbnRyb2xsZXJzIiwic2V0SG9va3MiLCJzZXRBcGlQcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQWlCQTs7QUFyQkEsSUFBTUEsS0FBSyxHQUFHO0FBQUVDLEVBQUFBLFFBQVEsRUFBUkEsb0JBQUY7QUFBWUMsRUFBQUEsZUFBZSxFQUFmQSwyQkFBWjtBQUE2QkMsRUFBQUEsUUFBUSxFQUFSQSxjQUE3QjtBQUF1Q0MsRUFBQUEsWUFBWSxFQUFaQTtBQUF2QyxDQUFkO2VBRWVKLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9va3MgZnJvbSAnLi9ob29rcydcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuL2xpc3RlbmVyJ1xuaW1wb3J0IGxvYWRDb250cm9sbGVycyBmcm9tICcuL2xvYWQtY29udHJvbGxlcnMnXG5pbXBvcnQgeyBzZXRIb29rcywgc2V0QXBpUHJlZml4IH0gZnJvbSAnLi9tZXRhJ1xuXG5jb25zdCB0cm9wYSA9IHsgbGlzdGVuZXIsIGxvYWRDb250cm9sbGVycywgc2V0SG9va3MsIHNldEFwaVByZWZpeCB9XG5cbmV4cG9ydCBkZWZhdWx0IHRyb3BhXG5cbmV4cG9ydCB7XG4gIFByZWZpeCxcbiAgQ29kZSxcbiAgSGVhZGVycyxcbiAgR2V0LFxuICBQb3N0LFxuICBQYXRjaCxcbiAgUHV0LFxuICBEZWxldGUsXG4gIEJvZHksXG4gIFBhcmFtLFxuICBRdWVyeSxcbiAgUmVxdWVzdCxcbiAgUmVzcG9uc2UsXG59IGZyb20gJy4vY29tbW9uJ1xuXG5leHBvcnQgeyBIb29rcyB9XG5leHBvcnQgeyBIdHRwQ29kZSB9IGZyb20gJy4vY29kZXMnIl19