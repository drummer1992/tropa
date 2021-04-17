"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiPrefix = exports.setApiPrefix = exports.isProperlyService = exports.addEndpoint = exports.setServiceRegExp = exports.getServiceMethod = exports.RegExpByServiceMap = exports.EndpointsByServiceMap = void 0;

var _errors = require("./errors");

var _this = void 0;

var EndpointsByServiceMap = new Map();
exports.EndpointsByServiceMap = EndpointsByServiceMap;
var RegExpByServiceMap = new Map();
exports.RegExpByServiceMap = RegExpByServiceMap;
var API_PREFIX = '';

var getServiceMethod = function getServiceMethod(serviceInstance) {
  var Service = serviceInstance.constructor;
  var serviceRegExp = RegExpByServiceMap.get(Service);
  var path = serviceInstance.request.url.replace(serviceRegExp, '');
  var ENDPOINTS = EndpointsByServiceMap.get(Service);
  var endpoint = ENDPOINTS.find(function (endpoint) {
    var sameMethod = endpoint.method === serviceInstance.request.method;
    var regexpIsMatched = endpoint.regExp.test(path);
    return sameMethod && regexpIsMatched;
  });
  return endpoint === null || endpoint === void 0 ? void 0 : endpoint.serviceMethod;
};

exports.getServiceMethod = getServiceMethod;

var setServiceRegExp = function setServiceRegExp(Service, regExp) {
  if (RegExpByServiceMap.has(Service)) {
    throw new _errors.InternalError('RegExp has already been set');
  }

  RegExpByServiceMap.set(Service, regExp);
};

exports.setServiceRegExp = setServiceRegExp;

var addEndpoint = function addEndpoint(Service, endpoint) {
  if (!EndpointsByServiceMap.has(Service)) {
    EndpointsByServiceMap.set(Service, []);
  }

  var endpoints = EndpointsByServiceMap.get(Service);
  endpoints.push(endpoint);
};

exports.addEndpoint = addEndpoint;

var isProperlyService = function isProperlyService(Service, url) {
  var regExp = RegExpByServiceMap.get(Service);

  if (!regExp) {
    throw new _errors.InternalError("".concat(_this.name, " service doesn't have pattern"));
  }

  return new RegExp(regExp.source + '([^\\w]|$)').test(url);
};

exports.isProperlyService = isProperlyService;

var setApiPrefix = function setApiPrefix(apiPrefix) {
  if (API_PREFIX) {
    throw new _errors.InternalError("Api Prefix already defined '".concat(API_PREFIX, "'"));
  }

  API_PREFIX = apiPrefix;
};

exports.setApiPrefix = setApiPrefix;

var getApiPrefix = function getApiPrefix() {
  return API_PREFIX;
};

exports.getApiPrefix = getApiPrefix;