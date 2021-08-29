"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immer = _interopRequireDefault(require("immer"));

var _reducerUtils = _interopRequireDefault(require("./reducerUtils"));

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  user: {
    userId: ""
  },
  dashboard: {
    _id: "",
    title: "",
    fields: [{
      value: "",
      name: "",
      label: "",
      required: false,
      placeholder1: "",
      type: "",
      width: 4,
      defaultvalue: "",
      options: [],
      rows: 1
    }],
    contactDetails: []
  },
  dashboards: [],
  field: {
    index: 0,
    value: "",
    name: "",
    label: "",
    required: false,
    placeholder1: "",
    type: "",
    width: 4,
    defaultvalue: "",
    options: [],
    rows: 1,
    min: 0,
    max: 100,
    step: 1,
    message: ""
  },
  contactDetails: {},
  contactValues: {},
  contactEmail: "",
  contactsDetails: false,
  newContact: false,
  nameFieldOfFile: "",
  currentProfile: "",
  file: "",
  files: [],
  filesProfile: [{
    email: "",
    file: []
  }],
  map: {
    render: false,
    lat: 0,
    lng: 0
  },
  currentAddress: null,
  index: 0,
  currentDashboard: {},
  currentContact: {}
};
var agent = {
  setColor: function setColor(state, action) {
    state.color = action.payload;
  },
  setImage: function setImage(state, action) {
    state.image = action.payload;
  },
  addFieldToArray: function addFieldToArray(state, action) {
    var newField = _objectSpread({}, action.payload); // if(state.dashboard.fields[state.dashboard.fields.length-1].index>=0)
    // newField.index=state.dashboard.fields[state.dashboard.fields.length-1].index+1


    newField.index = state.index++;
    state.dashboard.fields.push(newField);
    state.field = newField;
  },
  duplicateField: function duplicateField(state, action) {
    var duplicateField = _objectSpread({}, action.payload);

    var flag = false;
    delete duplicateField._id; // if(state.dashboard.fields[state.dashboard.fields.length-1].index>=0)
    // duplicateField.index=state.dashboard.fields[state.dashboard.fields.length-1].index+1
    // else
    // duplicateField.index=0

    duplicateField.index = state.index++; // state.dashboard.fields.push(duplicateField)

    state.field = duplicateField;

    for (var i = state.dashboard.fields.length - 1; !flag; i--) {
      if (state.dashboard.fields[i]._id === action.payload._id && state.dashboard.fields[i].index === action.payload.index) {
        flag = true;
        
        state.dashboard.fields[i + 1] = state.field;
      } else state.dashboard.fields[i + 1] = state.dashboard.fields[i];
    }
  },
  updateFieldInArray: function updateFieldInArray(state, action) {
    state.dashboard.fields = state.dashboard.fields.map(function (x) {
      return x._id == action.payload._id && x.index == action.payload.index ? x = action.payload : x;
    });
  },
  setFields: function setFields(state, action) {
    // state.dashboard._id = action.payload._id;
    // state.dashboard.title = action.payload.title;
    // state.dashboard.fields = []
    // action.payload.fields.map(item => {
    //     state.dashboard.fields.push(item)
    // })
    state.dashboard = action.payload;
  },
  deleteField: function deleteField(state, action) {
    state.dashboard.fields = state.dashboard.fields.filter(function (x) {
      return x._id != action.payload._id || x.index != action.payload.index;
    });
  },
  editField: function editField(state, action) {
    state.field = action.payload;
  },
  editTypeField: function editTypeField(state, action) {
    state.field.type = action.payload.type;
    state.field.name = action.payload.name;
    state.field.label = action.payload.name;
  },
  replaceFields: function replaceFields(state, action) {
    if (action.payload.index1 < action.payload.index2) {
      for (var i = action.payload.index1; i < action.payload.index2; i++) {
        state.dashboard.fields[i] = state.dashboard.fields[i + 1];
      }

      state.dashboard.fields[action.payload.index2] = action.payload.first;
    } else {
      for (var _i = action.payload.index1; _i > action.payload.index2; _i--) {
        state.dashboard.fields[_i] = state.dashboard.fields[_i - 1];
      }

      state.dashboard.fields[action.payload.index2] = action.payload.first;
    }
  },
  setDashboards: function setDashboards(state, action) {
    state.dashboards = action.payload.dashboards;
  },
  setDuplicateDashboard: function setDuplicateDashboard(state, action) {
    state.dashboards.push(action.payload.dashboard2);
  },
  setDeleteDashboard: function setDeleteDashboard(state, action) {
    state.dashboards = state.dashboards.filter(function (d) {
      return d._id != action.payload.dashboard._id;
    });
  },
  fieldsOfDashboard: function fieldsOfDashboard(state, action) {
    state.dashboard = state.dashboards.find(function (d) {
      return d._id == action.payload;
    });
    state.contactsDetails = false;
    state.newContact = false;
  },
  lastDashboard: function lastDashboard(state, action) {
    state.dashboard = state.dashboards[state.dashboards.length - 1];
  },
  contactsDetails: function contactsDetails(state, action) {
    state.dashboard = state.dashboards.find(function (d) {
      return d._id == action.payload;
    });
    state.contactsDetails = true;
    state.newContact = false;
  },
  contactDetails: function contactDetails(state, action) {
    state.contactDetails = state.dashboard["contactDetails"].find(function (c) {
      return c._id == action.payload;
    }); //state.contactDetails=action.payload

    state.contactValues = JSON.parse(state.contactDetails.values);
    state.contactEmail = state.contactDetails.contactEmail;
    state.contactsDetails = false;
    state.newContact = true;
  },
  newContact: function newContact(state, action) {
    state.contactsDetails = false;
    state.newContact = true;
  },
  nameFieldOfFile: function nameFieldOfFile(state, action) {
    state.nameFieldOfFile = action.payload;
  },
  setUserId: function setUserId(state, action) {
    state.user.userId = action.payload;
  },
  setAttached: function setAttached(state, action) {
    state.file = action.payload;
  },
  setFiles: function setFiles(state, action) {
    state.files = action.payload;
  },
  setFilesProfile: function setFilesProfile(state, action) {
    state.dashboard.contactDetails.map(function (c) {
      if (action.payload.file.length > 0 && c.contactEmail === action.payload.email) {
        var p = action.payload.file[action.payload.file.length - 1];
        c["profile"] = p.url;
      }
    });
    
    state.filesProfile.push(action.payload);
  },
  setProfile: function setProfile(state, action) {
    state.currentProfile = action.payload[action.payload.length - 1];
  },
  updateMap: function updateMap(state, action) {
    state.map.render = true;
    state.map.lng = action.payload.latLng.lng;
    state.map.lat = action.payload.latLng.lat;
    state.currentAddress = action.payload;
  },
  currentDashboard: function currentDashboard(state, action) {
    state.currentDashboard = action.payload;
  },
  currentContact: function currentContact(state, action) {
    state.currentContact = action.payload;
  }
};

var _default = (0, _immer["default"])(function (state, action) {
  return (0, _reducerUtils["default"])(state, action, agent);
}, initialState); // default: [{
//     value: "Email",
//     placholder: "Email",
//     type: "email",
// },{
//     value: "FullName",
//     placholder: "FullName",
//     type: "text",
// },{
//     value: "Whatsapp",
//     placholder: "Whatsapp",
//     type: "text",
// },{
//     value: "leadSource",
//     placholder: "leadSource",
//     type: "text",
// },{
//     value: "companySize",
//     placholder: "companySize",
//     type: "text",
// },{
//     value: "Whatsapp",
//     placholder: "Whatsapp",
//     type: "text",
// },{
//     value: "state",
//     placholder: "state",
//     type: "text",
// },{
//     value: "companyAddress",
//     placholder: "companyAddress",
//     type: "text",
// },{
//     value: "mobileNumber",
//     placholder: "mobileNumber",
//     type: "text",
// },{
//     value: "telephon",
//     placholder: "telephon",
//     type: "text",
// },{
//     value: "companyName",
//     placholder: "companyName",
//     type: "text",
// },{
//     value: "leadOwner",
//     placholder: "leadOwner",
//     type: "text",
// },{
//     value: "customerType",
//     placholder: "customerType",
//     type: "text",
// },{
//     value: "zipcode",
//     placholder: "zipcode",
//     type: "text",
// },{
//     value: "website",
//     placholder: "website",
//     type: "text",
// },{
//     value: "linkedIn",
//     placholder: "linkedIn",
//     type: "text",
// },{
//     value: "facebook",
//     placholder: "facebook",
//     type: "text",
// },{
//     value: "instagram",
//     placholder: "instagram",
//     type: "text",
// },{
//     value: "youTube",
//     placholder: "youTube",
//     type: "text",
// },{
//     value: "bestTimeToCallTo",
//     placholder: "bestTimeToCallTo",
//     type: "text",
// },{
//     value: "bestTimeToCallFrom",
//     placholder: "bestTimeToCallFrom",
//     type: "text",
// },{
//     value: "Whatsapp",
//     placholder: "Whatsapp",
//     type: "text",
// },{
//     value: "Whatsapp",
//     placholder: "Whatsapp",
//     type: "text",
// }]
// },


exports["default"] = _default;