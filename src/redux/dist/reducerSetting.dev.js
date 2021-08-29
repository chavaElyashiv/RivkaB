"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immer = _interopRequireDefault(require("immer"));

var _reducerUtils = _interopRequireDefault(require("./reducerUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  currentPage: '',
  isAutherized: false,
  flagCon: true,
  thumbtack: false,
  // isOpenConfigurator:true,
  collapseIsOpen: '',
  anchorEl: null,
  editField: null,
  newField: null
};
var settings = {
  setFlagToggleCon: function setFlagToggleCon(state, action) {
    state.flagCon = action.payload;
  },
  setFlagthumbtack: function setFlagthumbtack(state, action) {
    state.thumbtack = action.payload;
  },
  setCurrentPage: function setCurrentPage(state, action) {
    state.currentPage = action.payload;
  },
  setAnchorEl: function setAnchorEl(state, action) {
    state.anchorEl = action.payload;
  },
  setEditField: function setEditField(state, action) {
  
    state.editField = action.payload;
  },
  setNewField: function setNewField(state, action) {
    state.newField = action.payload;
  }
};

var _default = (0, _immer["default"])(function (state, action) {
  return (0, _reducerUtils["default"])(state, action, settings);
}, initialState);

exports["default"] = _default;