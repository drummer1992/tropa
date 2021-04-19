"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = Service;
exports.ApiPrefix = ApiPrefix;
exports.StatusCode = StatusCode;
exports.Get = Get;
exports.Post = Post;
exports.Patch = Patch;
exports.Put = Put;
exports.Delete = Delete;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _metaMethods___ = require("../service/___meta-methods___");

var _object = require("../utils/object");

var _url = _interopRequireDefault(require("../utils/url"));

var _bodyParser = _interopRequireDefault(require("../utils/body-parser"));

function Service(name) {
  return function (Clazz) {
    (0, _metaMethods___.setServiceRegExp)(Clazz, new RegExp("^".concat((0, _metaMethods___.getApiPrefix)()).concat(name === '/' ? '' : name)));
  };
}

function ApiPrefix(prefix) {
  (0, _metaMethods___.setApiPrefix)(prefix);
  return function (Clazz) {
    return Clazz;
  };
}

function StatusCode(code) {
  return function (instance, serviceMethod, descriptor) {
    var endpoint = descriptor.value;
    descriptor.value = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _len,
          args,
          _key,
          response,
          _args = arguments;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              _context.next = 3;
              return endpoint.apply(this, args);

            case 3:
              response = _context.sent;
              this.setStatusCode(code);
              return _context.abrupt("return", response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return descriptor;
  };
}

var resolveOptions = function resolveOptions(pathOrOptions) {
  return (0, _object.isObject)(pathOrOptions) ? pathOrOptions : {
    path: pathOrOptions,
    parseBody: true
  };
};

function Endpoint(method, pathOrOptions) {
  var options = resolveOptions(pathOrOptions);
  var url = new _url["default"](options.path);
  return function (instance, serviceMethod, descriptor) {
    var endpoint = descriptor.value;
    (0, _metaMethods___.addEndpoint)(instance.constructor, {
      method: method,
      serviceMethod: serviceMethod,
      regExp: url.getRegExp()
    });
    descriptor.value = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.request.pathParams = url.parsePathParams(this.request.url);
              this.request.queryParams = url.parseQueryParams(this.request.url);

              if (!options.parseBody) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return (0, _bodyParser["default"])(this.req);

            case 5:
              this.request.body = _context2.sent;

            case 6:
              return _context2.abrupt("return", endpoint.call(this, {
                body: this.request.body,
                pathParams: this.request.pathParams,
                queryParams: this.request.queryParams
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return descriptor;
  };
}

function Get(pathOrOptions) {
  return Endpoint('GET', pathOrOptions);
}

function Post(pathOrOptions) {
  return Endpoint('POST', pathOrOptions);
}

function Patch(pathOrOptions) {
  return Endpoint('PATCH', pathOrOptions);
}

function Put(pathOrOptions) {
  return Endpoint('PUT', pathOrOptions);
}

function Delete(pathOrOptions) {
  return Endpoint('DELETE', pathOrOptions);
}