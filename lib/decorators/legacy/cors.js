"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCors = void 0;

var _codes = require("../../codes");

var withCors = function withCors(fn) {
  return function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');

    if (req.method === 'OPTIONS') {
      res.statusCode = _codes.HttpCode.NO_CONTENT;
      return res.end();
    }

    return fn(req, res);
  };
};

exports.withCors = withCors;