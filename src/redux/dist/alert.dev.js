"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immer = _interopRequireDefault(require("immer"));

var _reducerUtils = _interopRequireDefault(require("./reducerUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// var url = window.location;
// var userId = (url.pathname.split('/')[1]);
var initialState = {
  alertStatuse: 0,
  alert2Statuse: 0
};
var agent = {
  setAlertstatuse: function setAlertstatuse(state, action) {
    state.alertStatuse = action.payload;
  },
  setAlert2Statuse: function setAlert2Statuse(state, action) {
    ;
    state.alert2Statuse = action.payload;
  }
};

var _default = (0, _immer["default"])(function (state, action) {
  return (0, _reducerUtils["default"])(state, action, agent);
}, initialState);

exports["default"] = _default;