"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./reducer"));

var _reducerCRM = _interopRequireDefault(require("./reducerCRM"));

var _reducerType = _interopRequireDefault(require("./reducerType"));

var _alert = _interopRequireDefault(require("./alert"));

var _get = require("../middleWare/get");

var _getFileds = require("../middleWare/getFileds");

var _reducerSetting = _interopRequireDefault(require("./reducerSetting"));

var _reduxForm = require("redux-form");

var _immer = require("immer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _immer.enableMapSet)();
var reducer = (0, _redux.combineReducers)({
  pdfReducer: _reducer["default"],
  settingReducer: _reducerSetting["default"],
  CRMReducer: _reducerCRM["default"],
  typeReducer: _reducerType["default"],
  alert: _alert["default"],
  form: _reduxForm.reducer.plugin({
    contact: function contact(state, action) {
      // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case "ACCOUNT_SAVE_SUCCESS":
          return undefined;
        // <--- blow away form data

        default:
          return state;
      }
    }
  })
});
var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_getFileds.getContactFromServer, _get.getDashboardsByUser, _get.duplicateDashboard, _getFileds.createDashboard, _getFileds.updateDashboard, _get.deleteDashboard, _get.changeFromUNToUID, _get.getUrlOfFile, _get.getFiles, _get.getFilesProfile, _get.getProfile, _getFileds.updateContact, _getFileds.deleteContact));
store.dispatch({
  type: 'GET_CRM'
});
store.dispatch({
  type: 'CHANGE_UMTOUID'
});
window.store = store;
var _default = store;
exports["default"] = _default;