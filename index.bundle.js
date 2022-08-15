"use strict";
(self["webpackChunkset_up_project_with_webpack"] = self["webpackChunkset_up_project_with_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_activities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activities.js */ "./src/modules/activities.js");
/* harmony import */ var _modules_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/constructor.js */ "./src/modules/constructor.js");



const listItem = JSON.parse(localStorage.getItem('todoList'));

if (listItem) {
  listItem.forEach(item => new _modules_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"](item.description, item.complete));
}

const addInputItems = document.getElementById('add-input');
addInputItems.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    (0,_modules_activities_js__WEBPACK_IMPORTED_MODULE_1__.addItem)(addInputItems.value);
    addInputItems.value = '';
    (0,_modules_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
  }
});
const removeData = document.getElementById('remove-btn');
removeData.addEventListener('click', () => {
  (0,_modules_activities_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)(_modules_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  (0,_modules_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
(0,_modules_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();

/***/ }),

/***/ "./src/modules/activities.js":
/*!***********************************!*\
  !*** ./src/modules/activities.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "displayList": () => (/* binding */ displayList),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ "./src/modules/constructor.js");

const addItem = data => {
  const newListItem = new _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  localStorage.setItem('todoList', JSON.stringify(newListItem.getList()));
};
const clear = index => {
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list = _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.filter(item => item !== _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index]);
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const update = (index, text) => {
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].description = text;
  localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const displayList = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';
    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span class ="spn">${item.description}</span>
    <textarea class="text-area" maxlength="25">${item.description}</textarea>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    <i class="fa fa-trash trash-btn" aria-hidden="true"></i>
    `;
    todoList.appendChild(listItem);
    const textInput = listItem.querySelector('.text-area');
    const trashButton = listItem.querySelector('.trash-btn');
    const checkboxInput = listItem.querySelector('.checkbox');
    const descriptionText = listItem.querySelector('.spn');
    checkboxInput.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].update();
      descriptionText.classList.toggle('complete');
      textInput.classList.toggle('complete');
      listItem.classList.toggle('active');
      localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
    });
    descriptionText.addEventListener('click', () => {
      descriptionText.style.display = 'none';
      textInput.classList.toggle('update-item');
    });
    textInput.addEventListener('keydown', e => {
      descriptionText.innerHTML = textInput.value;
      const index = parseInt(listItem.id, 10);
      update(index, descriptionText.innerHTML);

      if (e.code === 'Enter') {
        descriptionText.style.display = 'block';
        textInput.classList.toggle('update-item');
      }
    });
    trashButton.addEventListener('click', () => {
      const index = parseInt(listItem.id, 10);
      clear(index);
      displayList();
    });

    if (item.complete) {
      checkboxInput.checked = true;
      descriptionText.classList = 'complete';
    }
  });
};
const clearAll = allTasks => {
  allTasks.list = allTasks.list.filter(item => item.complete === false);
  allTasks.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(allTasks.list));
};

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
  static list = [];

  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = ToDoList.list.length;
    ToDoList.list.push(this);

    this.getList = () => ToDoList.list;
  }

  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n  padding-right: 25px;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n  outline: none;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: #fffed3;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,QAAQ;EACR,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,cAAc;AAChB","sourcesContent":["body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n  padding-right: 25px;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n  outline: none;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: #fffed3;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvYWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWRkSXRlbSwgY2xlYXJBbGwsIGRpc3BsYXlMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL2FjdGl2aXRpZXMuanMnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi9tb2R1bGVzL2NvbnN0cnVjdG9yLmpzJztcblxuY29uc3QgbGlzdEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKTtcbmlmIChsaXN0SXRlbSkge1xuICBsaXN0SXRlbS5mb3JFYWNoKChpdGVtKSA9PiBuZXcgVG9EbyhpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmNvbXBsZXRlKSk7XG59XG5cbmNvbnN0IGFkZElucHV0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWlucHV0Jyk7XG5hZGRJbnB1dEl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgIGFkZEl0ZW0oYWRkSW5wdXRJdGVtcy52YWx1ZSk7XG4gICAgYWRkSW5wdXRJdGVtcy52YWx1ZSA9ICcnO1xuICAgIGRpc3BsYXlMaXN0KCk7XG4gIH1cbn0pO1xuXG5jb25zdCByZW1vdmVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1idG4nKTtcbnJlbW92ZURhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsZWFyQWxsKFRvRG8pO1xuICBkaXNwbGF5TGlzdCgpO1xufSk7XG5kaXNwbGF5TGlzdCgpO1xuIiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xuXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IG5ld0xpc3RJdGVtID0gbmV3IFRvRG9MaXN0KGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0SXRlbS5nZXRMaXN0KCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhciA9IChpbmRleCkgPT4ge1xuICBUb0RvTGlzdC5saXN0ID0gVG9Eb0xpc3QubGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFRvRG9MaXN0Lmxpc3RbaW5kZXhdKTtcbiAgVG9Eb0xpc3QubGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgaXRlbS5pbmRleCA9IGk7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShUb0RvTGlzdC5saXN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKGluZGV4LCB0ZXh0KSA9PiB7XG4gIFRvRG9MaXN0Lmxpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gdGV4dDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoVG9Eb0xpc3QubGlzdCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgVG9Eb0xpc3QubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLmluZGV4KTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QgPSAnaXRlbS1jb250YWluZXInO1xuXG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgPHNwYW4gY2xhc3MgPVwic3BuXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0ZXh0LWFyZWFcIiBtYXhsZW5ndGg9XCIyNVwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtZWxsaXBzaXMtdlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoIHRyYXNoLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICBgO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWFyZWEnKTtcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1idG4nKTtcbiAgICBjb25zdCBjaGVja2JveElucHV0ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnNwbicpO1xuXG4gICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGxpc3RJdGVtLmlkLCAxMCk7XG4gICAgICBUb0RvTGlzdC5saXN0W2luZGV4XS51cGRhdGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFRvRG9MaXN0Lmxpc3QpKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9uVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ3VwZGF0ZS1pdGVtJyk7XG4gICAgfSk7XG5cbiAgICB0ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gdGV4dElucHV0LnZhbHVlO1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbS5pZCwgMTApO1xuICAgICAgdXBkYXRlKGluZGV4LCBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MKTtcbiAgICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgndXBkYXRlLWl0ZW0nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbS5pZCwgMTApO1xuICAgICAgY2xlYXIoaW5kZXgpO1xuICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICB9KTtcbiAgICBpZiAoaXRlbS5jb21wbGV0ZSkge1xuICAgICAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc0xpc3QgPSAnY29tcGxldGUnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJBbGwgPSAoYWxsVGFza3MpID0+IHtcbiAgYWxsVGFza3MubGlzdCA9IGFsbFRhc2tzLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlID09PSBmYWxzZSk7XG4gIGFsbFRhc2tzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGl0ZW0uaW5kZXggPSBpO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MubGlzdCkpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgc3RhdGljIGxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGUgPSBmYWxzZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgdGhpcy5pbmRleCA9IFRvRG9MaXN0Lmxpc3QubGVuZ3RoO1xuICAgIFRvRG9MaXN0Lmxpc3QucHVzaCh0aGlzKTtcbiAgICB0aGlzLmdldExpc3QgPSAoKSA9PiBUb0RvTGlzdC5saXN0O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzg4ODtcXHJcXG4gIG1pbi13aWR0aDogNDIlO1xcclxcbiAgbWF4LXdpZHRoOiA3NyU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0LFxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0LFxcclxcbi5pdGVtLWNvbnRhaW5lcixcXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMWFmYWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzgwODA4MDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICM4MDgwODA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWFyZWEge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWQzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXIge1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB0ZXh0YXJlYSxcXHJcXG4uaXRlbS1jb250YWluZXIgc3BhbiB7XFxyXFxuICB3aWR0aDogMjAycHg7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50cmFzaC1idG4ge1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGNvbG9yOiAjYjFhZmFmO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjODg4O1xcclxcbiAgbWluLXdpZHRoOiA0MiU7XFxyXFxuICBtYXgtd2lkdGg6IDc3JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLml0ZW0tY29udGFpbmVyLFxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODA4MDgwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogIzgwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZDM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBnYXA6IDZweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHRleHRhcmVhLFxcclxcbi5pdGVtLWNvbnRhaW5lciBzcGFuIHtcXHJcXG4gIHdpZHRoOiAyMDJweDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoLWJ0biB7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjFhZmFmO1xcclxcbiAgY29sb3I6ICNiMWFmYWY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImFkZEl0ZW0iLCJjbGVhckFsbCIsImRpc3BsYXlMaXN0IiwiVG9EbyIsImxpc3RJdGVtIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZm9yRWFjaCIsImRlc2NyaXB0aW9uIiwiY29tcGxldGUiLCJhZGRJbnB1dEl0ZW1zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInZhbHVlIiwicmVtb3ZlRGF0YSIsIlRvRG9MaXN0IiwibmV3TGlzdEl0ZW0iLCJzZXRJdGVtIiwiZ2V0TGlzdCIsImNsZWFyIiwiaW5kZXgiLCJmaWx0ZXIiLCJ1cGRhdGUiLCJ0ZXh0IiwidG9kb0xpc3QiLCJpbm5lckhUTUwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0SW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidHJhc2hCdXR0b24iLCJjaGVja2JveElucHV0IiwiZGVzY3JpcHRpb25UZXh0IiwicGFyc2VJbnQiLCJ0b2dnbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwiY29kZSIsImNoZWNrZWQiLCJhbGxUYXNrcyIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==