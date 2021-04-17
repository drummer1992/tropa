"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBody = void 0;

var parse = function parse(str) {
  try {
    return str ? JSON.parse(str) : null;
  } catch (_unused) {
    return null;
  }
};

var parseBody = function parseBody(req) {
  return new Promise(function (resolve, reject) {
    var buffer = [];
    req.on('error', reject);
    req.on('data', function (chunk) {
      return buffer.push(chunk);
    });
    req.on('end', function () {
      resolve(parse(Buffer.concat(buffer).toString()));
    });
  });
};

exports.parseBody = parseBody;