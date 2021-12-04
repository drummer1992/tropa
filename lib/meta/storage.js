"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controllersMeta = exports.appMeta = void 0;

var _constants = require("./constants");

var _hooks = _interopRequireDefault(require("../hooks"));

var appMeta = new Map([[_constants.App.PREFIX, ''], [_constants.App.HOOKS, new _hooks["default"]()]]);
exports.appMeta = appMeta;
var controllersMeta = new Map();
exports.controllersMeta = controllersMeta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhL3N0b3JhZ2UuanMiXSwibmFtZXMiOlsiYXBwTWV0YSIsIk1hcCIsIkFwcCIsIlBSRUZJWCIsIkhPT0tTIiwiSG9va3MiLCJjb250cm9sbGVyc01ldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDN0IsQ0FBQ0MsZUFBSUMsTUFBTCxFQUFhLEVBQWIsQ0FENkIsRUFFN0IsQ0FBQ0QsZUFBSUUsS0FBTCxFQUFZLElBQUlDLGlCQUFKLEVBQVosQ0FGNkIsQ0FBUixDQUFoQjs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsSUFBSUwsR0FBSixFQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IEhvb2tzIGZyb20gJy4uL2hvb2tzJ1xuXG5leHBvcnQgY29uc3QgYXBwTWV0YSA9IG5ldyBNYXAoW1xuICBbQXBwLlBSRUZJWCwgJyddLFxuICBbQXBwLkhPT0tTLCBuZXcgSG9va3MoKV0sXG5dKVxuXG5leHBvcnQgY29uc3QgY29udHJvbGxlcnNNZXRhID0gbmV3IE1hcCgpIl19