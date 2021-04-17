"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

var isObject = function isObject(value) {
  return value === Object(value) && !Array.isArray(value);
};

exports.isObject = isObject;