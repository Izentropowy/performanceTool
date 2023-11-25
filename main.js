/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/clouds.avif */ "./src/assets/images/clouds.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat; 
    background-size: cover;
    padding-bottom: 150px;
}

button {
    background: none;
    border: none;
	padding: 0;
}

.navbar img {
    width: 25px;
}

.plane-photo {
    aspect-ratio: 1 / 1;
    width: 20%;
    border-radius: 50%;
    border: 2px solid rgba(27, 27, 30, 0.3);
    opacity: 0.65;
}

footer img {
    border-radius: 50%;
}

.footer-text {
    max-width: 80%;
}

.warning {
    margin-bottom: 120px;
}

.dropdown-full {
    width: 75%;
}

.dropdown-half {
    width: 25.1%;
}

.input-title {
    width: 25%;
    font-size: smaller;
}

.container{
    max-width: 800px;
}

.invalid{
    border: 1px solid rgba(255, 0, 0);
}

.shake{
    animation: shake 0.5s;
}


@keyframes shake {
    0% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":";AACA;IACI,yDAAyC;IACzC,kCAAkC;IAClC,4BAA4B;IAC5B,4BAA4B;IAC5B,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,YAAY;CACf,UAAU;AACX;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,KAAK,wBAAwB,EAAE;IAC/B,0BAA0B,2BAA2B,EAAE;IACvD,qBAAqB,0BAA0B,EAAE;IACjD,OAAO,wBAAwB,EAAE;EACnC","sourcesContent":["\nbody {\n    background-image: url(images/clouds.avif);\n    background-position: center center;\n    background-attachment: fixed;\n    background-repeat: no-repeat; \n    background-size: cover;\n    padding-bottom: 150px;\n}\n\nbutton {\n    background: none;\n    border: none;\n\tpadding: 0;\n}\n\n.navbar img {\n    width: 25px;\n}\n\n.plane-photo {\n    aspect-ratio: 1 / 1;\n    width: 20%;\n    border-radius: 50%;\n    border: 2px solid rgba(27, 27, 30, 0.3);\n    opacity: 0.65;\n}\n\nfooter img {\n    border-radius: 50%;\n}\n\n.footer-text {\n    max-width: 80%;\n}\n\n.warning {\n    margin-bottom: 120px;\n}\n\n.dropdown-full {\n    width: 75%;\n}\n\n.dropdown-half {\n    width: 25.1%;\n}\n\n.input-title {\n    width: 25%;\n    font-size: smaller;\n}\n\n.container{\n    max-width: 800px;\n}\n\n.invalid{\n    border: 1px solid rgba(255, 0, 0);\n}\n\n.shake{\n    animation: shake 0.5s;\n}\n\n\n@keyframes shake {\n    0% { transform: translateX(0); }\n    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }\n    20%, 40%, 60%, 80% { transform: translateX(5px); }\n    100% { transform: translateX(0); }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/departure.js":
/*!**************************!*\
  !*** ./src/departure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wb */ "./src/wb.js");









function createDeparture() {
    const titleContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Departure');

    const inputContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputContainer)();

    // Create individual input groups
    const runwayInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Runway hdg', '°', 'runway', 0, 360);
    const surfaceDropdown = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createDropdownInput)('Surface', ['Concrete', 'Grass'], 'surface');
    const windDegreesInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Wind', '°', 'wind-degrees', 0, 360);
    const windMagnitudeInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Wind', 'kt', 'wind-magnitude', 0, 100);
    const oatInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('OAT', '°C', 'oat', -40, 40);
    const qnhInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('QNH', 'hPa', 'qnh', 950, 1050);
    const elevationInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Elevation', 'ft', 'elevation', -1250, 15000);
    const cruiseInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Cruise', 'ft', 'cruise', 500, 15000);

    const group1 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...runwayInput, ...surfaceDropdown);
    const group2 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...windDegreesInput, ...windMagnitudeInput);
    const group3 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...oatInput, ...qnhInput);
    const group4 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...elevationInput, ...cruiseInput);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);
    inputContainer.appendChild(group3);
    inputContainer.appendChild(group4);

    const calculateButton = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createCalculateButton)();

    const tableRows = [
        { label: 'Takeoff Run', id: 'tor' },
        { label: 'Takeoff Distance', id: 'tod' },
        { label: 'Rate of Climb', id: 'roc' },
        { label: 'Time to Top of Climb', id: 'time' },
        { label: 'Distance to Top of Climb', id: 'distance' },
        { label: 'Fuel Burn to Top of Climb', id: 'fuel' }
    ];

    const resultContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createResultContainer)(tableRows, false);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(calculateButton);
    mainContainer.appendChild(resultContainer);

    return mainContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDeparture);

/***/ }),

/***/ "./src/destination.js":
/*!****************************!*\
  !*** ./src/destination.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createDestination() {
    console.log('destination');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDestination);

/***/ }),

/***/ "./src/enroute.js":
/*!************************!*\
  !*** ./src/enroute.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wb */ "./src/wb.js");









function createEnroute() {
    const titleContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Enroute');

    const inputContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputContainer)();

    const mcpDropdown = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createDropdownInput)('MCP', ['max', '75%', '65%', '55%', '45%', 'min'], 'mcp');
    const qnhInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('QNH', 'hPa', 'qnh', 950, 1050);
    const cruiseInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('Cruise', 'ft', 'cruise', 2000, 15000);
    const isaDevInput = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInput)('ISA dev', '°C', 'dev', -20, 20);
    
    const group1 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...mcpDropdown, ...qnhInput);
    const group2 = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createInputGroup)(...cruiseInput, ...isaDevInput);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);

    const calculateButton = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createCalculateButton)();

    const tableRows = [
        { label: 'RPM', id: 'rpm' },
        { label: 'TAS', id: 'tas' },
        { label: 'Fuel Burn', id: 'fuel' },
        { label: 'Range', id: 'range' },
        { label: 'Endurance', id: 'endurance' }
    ];
    

    const resultContainer = (0,_wb__WEBPACK_IMPORTED_MODULE_0__.createResultContainer)(tableRows, false);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(calculateButton);
    mainContainer.appendChild(resultContainer);

    return mainContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEnroute);

/***/ }),

/***/ "./src/fuel.js":
/*!*********************!*\
  !*** ./src/fuel.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createFuel() {
    console.log('fuel');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFuel);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_images_utd_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/images/utd.jpg */ "./src/assets/images/utd.jpg");


function createHome() {
    const container1 = document.createElement('div');
    container1.classList.add('container-fluid');

    // Create the first row with text
    const row1 = document.createElement('div');
    row1.classList.add('row');

    const text1 = document.createElement('p');
    text1.classList.add('display-5', 'text-center', 'fw-normal');
    text1.textContent = 'PERFORMANCE TOOL';

    row1.appendChild(text1);
    container1.appendChild(row1);

    // Create the second row with text
    const row2 = document.createElement('div');
    row2.classList.add('row');

    const text2 = document.createElement('p');
    text2.classList.add('display-5', 'text-center', 'fw-normal');
    text2.textContent = 'SP-UTD';

    row2.appendChild(text2);
    container1.appendChild(row2);

    // Create container for the second row
    const container2 = document.createElement('div');
    container2.classList.add('container-fluid');

    // Create a column with an image
    const col = document.createElement('div');
    col.classList.add('col', 'text-center');

    const image = document.createElement('img');
    image.classList.add('plane-photo');
    image.src = _src_assets_images_utd_jpg__WEBPACK_IMPORTED_MODULE_0__;

    col.appendChild(image);
    container2.appendChild(col);

    // Create container for the third row (fixed-bottom warning)
    const container3 = document.createElement('div');
    container3.classList.add('container-fluid', 'fixed-bottom', 'warning');

    // Create the third row with warning text
    const row3 = document.createElement('div');
    row3.classList.add('row');

    const warningText = document.createElement('p');
    warningText.classList.add('display-6', 'text-center', 'fw-normal', 'fst-italic', 'text-danger');
    warningText.textContent = 'NOT FOR OPERATIONAL USE';

    row3.appendChild(warningText);
    container3.appendChild(row3);


    // Create the main container to hold both rows
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(container1);
    mainContainer.appendChild(container2);
    mainContainer.appendChild(container3);

    return mainContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/initializer.js":
/*!****************************!*\
  !*** ./src/initializer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_images_home_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/images/home-removebg-preview.png */ "./src/assets/images/home-removebg-preview.png");
/* harmony import */ var _src_assets_images_fb_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/images/fb-removebg-preview.png */ "./src/assets/images/fb-removebg-preview.png");
/* harmony import */ var _src_assets_images_ig_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/images/ig.png */ "./src/assets/images/ig.png");
/* harmony import */ var _src_assets_images_ckl_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/assets/images/ckl.png */ "./src/assets/images/ckl.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _wb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wb */ "./src/wb.js");
/* harmony import */ var _departure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departure */ "./src/departure.js");
/* harmony import */ var _enroute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enroute */ "./src/enroute.js");
/* harmony import */ var _destination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./destination */ "./src/destination.js");
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fuel */ "./src/fuel.js");












function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "py-4", "mb-md-4");

    const containerFluid = document.createElement('div');
    containerFluid.classList.add("container-fluid");

    // Create navbar toggler button
    const navbarToggler = document.createElement('button');
    navbarToggler.classList.add("navbar-toggler");
    navbarToggler.setAttribute("data-bs-toggle", "collapse");
    navbarToggler.setAttribute("data-bs-target", "#nav");
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add("navbar-toggler-icon");
    navbarToggler.appendChild(togglerIcon);

    // Create navbar collapse div
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add("collapse", "navbar-collapse", "justify-content-center");
    navbarCollapse.id = "nav";

    // Create navbar nav ul
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add("navbar-nav", "nav-fill", "w-100");

    // Create home button
    const homeButton = document.createElement('button');
    homeButton.classList.add("navbar-brand", "active");
    const homeImg = document.createElement('img');
    homeImg.src = _src_assets_images_home_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__;
    homeButton.appendChild(homeImg);

    homeButton.onclick = () => setActivePage((0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])());

    // Create buttons
    const buttons = [
        { id: "wbButton", text: "Weight And Balance", action: () => setActivePage((0,_wb__WEBPACK_IMPORTED_MODULE_5__["default"])()) },
        { id: "departureButton", text: "Departure", action: () => setActivePage((0,_departure__WEBPACK_IMPORTED_MODULE_6__["default"])()) },
        { id: "enrouteButton", text: "En-Route", action: () => setActivePage((0,_enroute__WEBPACK_IMPORTED_MODULE_7__["default"])()) },
        { id: "destinationButton", text: "Destination", action: () => setActivePage((0,_destination__WEBPACK_IMPORTED_MODULE_8__["default"])()) },
        { id: "fuelButton", text: "Fuel", action: () => setActivePage((0,_fuel__WEBPACK_IMPORTED_MODULE_9__["default"])()) }
    ];

    buttons.forEach(button => {
        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        const navButton = document.createElement('button');
        navButton.id = button.id;
        navButton.classList.add("nav-link", "btn");
        navButton.textContent = button.text;

        navItem.appendChild(navButton);
        navbarNav.appendChild(navItem);

        navButton.onclick = () => button.action();
    });

    // Append all elements to build the structure
    containerFluid.appendChild(homeButton);
    containerFluid.appendChild(navbarToggler);
    containerFluid.appendChild(navbarCollapse);
    navbarCollapse.appendChild(navbarNav);
    nav.appendChild(containerFluid);

    return nav
}

function createMain() {
    const main = document.createElement('main');

    return main
}

function createFooter() {
    const footer = document.createElement('footer');

    const navbar = document.createElement('nav');
    navbar.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "py-1", "fixed-bottom");

    const containerFluid = document.createElement('div');
    containerFluid.classList.add("container-fluid");

    // Create navbar brand with text
    const navbarBrand = document.createElement('div');
    navbarBrand.classList.add("navbar-brand", "text-wrap", "footer-text", "fs-6");
    navbarBrand.textContent = "Centrum Kształcenia Lotniczego Politechniki Poznańskiej";

    // Create navbar nav ul
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add("navbar-nav");

    // Create individual nav items with links and images
    const socialLinks = [
        { href: "https://www.facebook.com/ckl.politechnikapoznanska/", src: _src_assets_images_fb_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__, alt: "Facebook" },
        { href: "https://www.instagram.com/ckl.pp/", src: _src_assets_images_ig_png__WEBPACK_IMPORTED_MODULE_2__, alt: "Instagram" },
        { href: "https://ckl.put.poznan.pl/", src: _src_assets_images_ckl_png__WEBPACK_IMPORTED_MODULE_3__, alt: "CKL Website" }
    ];

    socialLinks.forEach(linkInfo => {
        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        const navLink = document.createElement('a');
        navLink.href = linkInfo.href;
        navLink.target = "_blank";
        navLink.classList.add("nav-link");

        const img = document.createElement('img');
        img.src = linkInfo.src;
        img.alt = linkInfo.alt;

        navLink.appendChild(img);
        navItem.appendChild(navLink);
        navbarNav.appendChild(navItem);
    });

    // Append all elements to build the structure
    containerFluid.appendChild(navbarBrand);
    containerFluid.appendChild(navbarNav);
    navbar.appendChild(containerFluid);
    footer.appendChild(navbar);

    return footer
}

function setActivePage(page) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(page);
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActivePage((0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/wb.js":
/*!*******************!*\
  !*** ./src/wb.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalculateButton: () => (/* binding */ createCalculateButton),
/* harmony export */   createDropdownInput: () => (/* binding */ createDropdownInput),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createInputContainer: () => (/* binding */ createInputContainer),
/* harmony export */   createInputGroup: () => (/* binding */ createInputGroup),
/* harmony export */   createResultContainer: () => (/* binding */ createResultContainer),
/* harmony export */   createTableRow: () => (/* binding */ createTableRow),
/* harmony export */   createTitle: () => (/* binding */ createTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createWb() {
    const titleContainer = createTitle('Weight and Balance');

    const inputContainer = createInputContainer();

    const blockFuelInput = createInput('Block Fuel', 'l', 'block-fuel');
    const row1Input = createInput('Row 1', 'kg', 'row-1',);
    const row2Input = createInput('Row 2', 'kg', 'row-2',);
    const baggage1Input = createInput('Baggage 1', 'kg', 'baggage-1');
    const baggage2Input = createInput('Baggage 2', 'kg', 'baggage-2');

    const group1 = createInputGroup(...blockFuelInput);
    const group2 = createInputGroup(...row1Input, ...row2Input);
    const group3 = createInputGroup(...baggage1Input, ...baggage2Input);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);
    inputContainer.appendChild(group3);

    const tableRows = [
        { label: 'TOW', id: 'tow' },
        { label: 'Moment', id: 'moment' },
    ];

    const resultContainer = createResultContainer(tableRows, true);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(resultContainer);

    return mainContainer
}

function createTitle(title) {
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('container-fluid');

    const row = document.createElement('div');
    row.classList.add('row');

    const para = document.createElement('p');
    para.classList.add('display-5', 'text-center', 'fw-normal', 'title');
    para.textContent = title;

    row.appendChild(para);
    titleContainer.appendChild(row);
    
    return titleContainer;
}

function createInputContainer() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('container', 'settings', 'mb-5');

    return inputContainer;
}

function createResultContainer(tableRows, chart) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('container');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Results';

    const table = document.createElement('table');
    table.classList.add('table');

    // Create table rows based on the provided array
    tableRows.forEach(rowData => {
        const row = createTableRow(rowData.label, rowData.id);
        table.appendChild(row);
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(table);
    card.appendChild(cardBody);

    if (chart) {
        const canvasDiv = document.createElement('div');
        const canvas = document.createElement('canvas');
        canvas.id = 'myChart';
    
        canvasDiv.appendChild(canvas);
        cardBody.appendChild(canvasDiv);
    }

    resultContainer.appendChild(card);

    return resultContainer;
}

function createInput(title, placeholder, id, min = undefined, max = undefined) {
    const div = document.createElement('div');
    div.classList.add('input-group-text', 'input-title');
    div.textContent = title;

    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('form-control');
    input.id = id;
    input.placeholder = placeholder;

    // Set min and max attributes if provided
    if (min !== undefined) {
        input.min = min;
    }

    if (max !== undefined) {
        input.max = max;
    }

    return [div, input];
}

function createInputGroup(...inputs) {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');

    inputs.forEach(element => {
        inputGroup.appendChild(element);
    });

    return inputGroup;
}

function createTableRow(thText) {
    const row = document.createElement('tr');

    const th = document.createElement('th');
    th.textContent = thText;

    const td = document.createElement('th');
    td.textContent = '0';

    row.appendChild(th);
    row.appendChild(td);

    return row;
}

function createCalculateButton() {
        // Create the button container
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('container', 'mb-3', 'd-flex', 'justify-content-center');
    
        // Create the button
        const calculateButton = document.createElement('button');
        calculateButton.type = 'button';
        calculateButton.classList.add('btn', 'btn-primary');
        calculateButton.textContent = 'Calculate';

        buttonContainer.appendChild(calculateButton);

        return buttonContainer;
}

function createDropdownInput(title, options, id) {
    // Create the title div
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('input-group-text', 'input-title');
    titleDiv.textContent = title;

    // Create the form group div with the dropdown
    const formGroupDiv = document.createElement('div');
    formGroupDiv.classList.add('form-group', 'dropdown-half');

    const select = document.createElement('select');
    select.classList.add('form-control');
    select.id = id;

    // Add options to the dropdown
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        select.appendChild(option);
    });

    // Append the select element to the form group div
    formGroupDiv.appendChild(select);

    return [titleDiv, formGroupDiv];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWb);

/***/ }),

/***/ "./src/assets/images/ckl.png":
/*!***********************************!*\
  !*** ./src/assets/images/ckl.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ckl.png";

/***/ }),

/***/ "./src/assets/images/clouds.avif":
/*!***************************************!*\
  !*** ./src/assets/images/clouds.avif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clouds.avif";

/***/ }),

/***/ "./src/assets/images/fb-removebg-preview.png":
/*!***************************************************!*\
  !*** ./src/assets/images/fb-removebg-preview.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fb-removebg-preview.png";

/***/ }),

/***/ "./src/assets/images/home-removebg-preview.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/home-removebg-preview.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/home-removebg-preview.png";

/***/ }),

/***/ "./src/assets/images/ig.png":
/*!**********************************!*\
  !*** ./src/assets/images/ig.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ig.png";

/***/ }),

/***/ "./src/assets/images/utd.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/utd.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/utd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializer */ "./src/initializer.js");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");



(0,_initializer__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsR0FBRyxPQUFPLG9GQUFvRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLHNCQUFzQix5QkFBeUIseUJBQXlCLHVCQUF1QixrQ0FBa0MsZ0RBQWdELHlDQUF5QyxtQ0FBbUMsb0NBQW9DLDZCQUE2Qiw0QkFBNEIsR0FBRyxZQUFZLHVCQUF1QixtQkFBbUIsZUFBZSxHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxrQkFBa0IsMEJBQTBCLGlCQUFpQix5QkFBeUIsOENBQThDLG9CQUFvQixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLGtCQUFrQixpQkFBaUIseUJBQXlCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxhQUFhLHdDQUF3QyxHQUFHLFdBQVcsNEJBQTRCLEdBQUcsd0JBQXdCLFdBQVcsMkJBQTJCLGdDQUFnQyw4QkFBOEIsMkJBQTJCLDZCQUE2QixhQUFhLDJCQUEyQixLQUFLLG1CQUFtQjtBQUN4eEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqRjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2I2QztBQUNWO0FBQ1M7QUFDSjtBQUNLO0FBQ1A7QUFDSDtBQUNROztBQUUzQztBQUNBLDJCQUEyQixnREFBVzs7QUFFdEMsMkJBQTJCLHlEQUFvQjs7QUFFL0M7QUFDQSx3QkFBd0IsZ0RBQVc7QUFDbkMsNEJBQTRCLHdEQUFtQjtBQUMvQyw2QkFBNkIsZ0RBQVc7QUFDeEMsK0JBQStCLGdEQUFXO0FBQzFDLHFCQUFxQixnREFBVztBQUNoQyxxQkFBcUIsZ0RBQVc7QUFDaEMsMkJBQTJCLGdEQUFXO0FBQ3RDLHdCQUF3QixnREFBVzs7QUFFbkMsbUJBQW1CLHFEQUFnQjtBQUNuQyxtQkFBbUIscURBQWdCO0FBQ25DLG1CQUFtQixxREFBZ0I7QUFDbkMsbUJBQW1CLHFEQUFnQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLDBEQUFxQjs7QUFFakQ7QUFDQSxVQUFVLGlDQUFpQztBQUMzQyxVQUFVLHNDQUFzQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLDJDQUEyQztBQUNyRCxVQUFVLG1EQUFtRDtBQUM3RCxVQUFVO0FBQ1Y7O0FBRUEsNEJBQTRCLDBEQUFxQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN6RDlCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0phO0FBQ1Y7QUFDUztBQUNKO0FBQ0s7QUFDUDtBQUNIO0FBQ1E7O0FBRTNDO0FBQ0EsMkJBQTJCLGdEQUFXOztBQUV0QywyQkFBMkIseURBQW9COztBQUUvQyx3QkFBd0Isd0RBQW1CO0FBQzNDLHFCQUFxQixnREFBVztBQUNoQyx3QkFBd0IsZ0RBQVc7QUFDbkMsd0JBQXdCLGdEQUFXO0FBQ25DO0FBQ0EsbUJBQW1CLHFEQUFnQjtBQUNuQyxtQkFBbUIscURBQWdCOztBQUVuQztBQUNBOztBQUVBLDRCQUE0QiwwREFBcUI7O0FBRWpEO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkMsVUFBVSx5QkFBeUI7QUFDbkMsVUFBVSxnQ0FBZ0M7QUFDMUMsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsNEJBQTRCLDBEQUFxQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNoRDVCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNKdUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1REFBTTs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEU4QztBQUNKO0FBQ2pCO0FBQ0U7O0FBRXBCO0FBQ0o7QUFDYztBQUNKO0FBQ1E7QUFDZDs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUVBQVc7QUFDN0I7O0FBRUEsNkNBQTZDLGlEQUFVOztBQUV2RDtBQUNBO0FBQ0EsVUFBVSx3RUFBd0UsK0NBQVEsS0FBSztBQUMvRixVQUFVLHNFQUFzRSxzREFBZSxLQUFLO0FBQ3BHLFVBQVUsbUVBQW1FLG9EQUFhLEtBQUs7QUFDL0YsVUFBVSwwRUFBMEUsd0RBQWlCLEtBQUs7QUFDMUcsVUFBVSw0REFBNEQsaURBQVU7QUFDaEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0VBQWtFLHVFQUFTLG1CQUFtQjtBQUN4RyxVQUFVLGdEQUFnRCxzREFBUyxvQkFBb0I7QUFDdkYsVUFBVSx5Q0FBeUMsdURBQVU7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpREFBVTtBQUM1Qjs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSmhDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkMsVUFBVSwrQkFBK0I7QUFDekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hNdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNqQjs7QUFFN0Isd0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcz85NTFmIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2RlcGFydHVyZS5qcyIsIndlYnBhY2s6Ly9uZXcvLi9zcmMvZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2Vucm91dGUuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2Z1ZWwuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2luaXRpYWxpemVyLmpzIiwid2VicGFjazovL25ldy8uL3NyYy93Yi5qcyIsIndlYnBhY2s6Ly9uZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9uZXcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ldy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2Nsb3Vkcy5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXIgaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLnBsYW5lLXBob3RvIHtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjcsIDI3LCAzMCwgMC4zKTtcbiAgICBvcGFjaXR5OiAwLjY1O1xufVxuXG5mb290ZXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi53YXJuaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbn1cblxuLmRyb3Bkb3duLWZ1bGwge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi5kcm9wZG93bi1oYWxmIHtcbiAgICB3aWR0aDogMjUuMSU7XG59XG5cbi5pbnB1dC10aXRsZSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmludmFsaWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDApO1xufVxuXG4uc2hha2V7XG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xufVxuXG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gICAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cbiAgICAyMCUsIDQwJSwgNjAlLCA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHlEQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLDBCQUEwQiwyQkFBMkIsRUFBRTtJQUN2RCxxQkFBcUIsMEJBQTBCLEVBQUU7SUFDakQsT0FBTyx3QkFBd0IsRUFBRTtFQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9jbG91ZHMuYXZpZik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2YmFyIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4ucGxhbmUtcGhvdG8ge1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjcsIDI3LCAzMCwgMC4zKTtcXG4gICAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi53YXJuaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxufVxcblxcbi5kcm9wZG93bi1mdWxsIHtcXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLmRyb3Bkb3duLWhhbGYge1xcbiAgICB3aWR0aDogMjUuMSU7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmludmFsaWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnNoYWtle1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxcbiAgICAyMCUsIDQwJSwgNjAlLCA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUNhbGN1bGF0ZUJ1dHRvbiB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dCB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dENvbnRhaW5lciB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEdyb3VwIH0gZnJvbSBcIi4vd2JcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3VsdENvbnRhaW5lciB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZVJvdyB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVUaXRsZSB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVEcm9wZG93bklucHV0IH0gZnJvbSBcIi4vd2JcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGVwYXJ0dXJlKCkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlVGl0bGUoJ0RlcGFydHVyZScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcigpO1xuXG4gICAgLy8gQ3JlYXRlIGluZGl2aWR1YWwgaW5wdXQgZ3JvdXBzXG4gICAgY29uc3QgcnVud2F5SW5wdXQgPSBjcmVhdGVJbnB1dCgnUnVud2F5IGhkZycsICfCsCcsICdydW53YXknLCAwLCAzNjApO1xuICAgIGNvbnN0IHN1cmZhY2VEcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duSW5wdXQoJ1N1cmZhY2UnLCBbJ0NvbmNyZXRlJywgJ0dyYXNzJ10sICdzdXJmYWNlJyk7XG4gICAgY29uc3Qgd2luZERlZ3JlZXNJbnB1dCA9IGNyZWF0ZUlucHV0KCdXaW5kJywgJ8KwJywgJ3dpbmQtZGVncmVlcycsIDAsIDM2MCk7XG4gICAgY29uc3Qgd2luZE1hZ25pdHVkZUlucHV0ID0gY3JlYXRlSW5wdXQoJ1dpbmQnLCAna3QnLCAnd2luZC1tYWduaXR1ZGUnLCAwLCAxMDApO1xuICAgIGNvbnN0IG9hdElucHV0ID0gY3JlYXRlSW5wdXQoJ09BVCcsICfCsEMnLCAnb2F0JywgLTQwLCA0MCk7XG4gICAgY29uc3QgcW5oSW5wdXQgPSBjcmVhdGVJbnB1dCgnUU5IJywgJ2hQYScsICdxbmgnLCA5NTAsIDEwNTApO1xuICAgIGNvbnN0IGVsZXZhdGlvbklucHV0ID0gY3JlYXRlSW5wdXQoJ0VsZXZhdGlvbicsICdmdCcsICdlbGV2YXRpb24nLCAtMTI1MCwgMTUwMDApO1xuICAgIGNvbnN0IGNydWlzZUlucHV0ID0gY3JlYXRlSW5wdXQoJ0NydWlzZScsICdmdCcsICdjcnVpc2UnLCA1MDAsIDE1MDAwKTtcblxuICAgIGNvbnN0IGdyb3VwMSA9IGNyZWF0ZUlucHV0R3JvdXAoLi4ucnVud2F5SW5wdXQsIC4uLnN1cmZhY2VEcm9wZG93bik7XG4gICAgY29uc3QgZ3JvdXAyID0gY3JlYXRlSW5wdXRHcm91cCguLi53aW5kRGVncmVlc0lucHV0LCAuLi53aW5kTWFnbml0dWRlSW5wdXQpO1xuICAgIGNvbnN0IGdyb3VwMyA9IGNyZWF0ZUlucHV0R3JvdXAoLi4ub2F0SW5wdXQsIC4uLnFuaElucHV0KTtcbiAgICBjb25zdCBncm91cDQgPSBjcmVhdGVJbnB1dEdyb3VwKC4uLmVsZXZhdGlvbklucHV0LCAuLi5jcnVpc2VJbnB1dCk7XG5cbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cDEpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwMik7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAzKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cDQpO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY3JlYXRlQ2FsY3VsYXRlQnV0dG9uKCk7XG5cbiAgICBjb25zdCB0YWJsZVJvd3MgPSBbXG4gICAgICAgIHsgbGFiZWw6ICdUYWtlb2ZmIFJ1bicsIGlkOiAndG9yJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVGFrZW9mZiBEaXN0YW5jZScsIGlkOiAndG9kJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUmF0ZSBvZiBDbGltYicsIGlkOiAncm9jJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVGltZSB0byBUb3Agb2YgQ2xpbWInLCBpZDogJ3RpbWUnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdEaXN0YW5jZSB0byBUb3Agb2YgQ2xpbWInLCBpZDogJ2Rpc3RhbmNlJyB9LFxuICAgICAgICB7IGxhYmVsOiAnRnVlbCBCdXJuIHRvIFRvcCBvZiBDbGltYicsIGlkOiAnZnVlbCcgfVxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHRDb250YWluZXIgPSBjcmVhdGVSZXN1bHRDb250YWluZXIodGFibGVSb3dzLCBmYWxzZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIHRvIGhvbGQgYWxsIHNlY3Rpb25zXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlQnV0dG9uKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVwYXJ0dXJlOyIsImZ1bmN0aW9uIGNyZWF0ZURlc3RpbmF0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXN0aW5hdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZXN0aW5hdGlvbjsiLCJpbXBvcnQgeyBjcmVhdGVDYWxjdWxhdGVCdXR0b24gfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXQgfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRDb250YWluZXIgfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRHcm91cCB9IGZyb20gXCIuL3diXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXN1bHRDb250YWluZXIgfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlVGFibGVSb3cgfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi93YlwiO1xuaW1wb3J0IHsgY3JlYXRlRHJvcGRvd25JbnB1dCB9IGZyb20gXCIuL3diXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVucm91dGUoKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVUaXRsZSgnRW5yb3V0ZScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgbWNwRHJvcGRvd24gPSBjcmVhdGVEcm9wZG93bklucHV0KCdNQ1AnLCBbJ21heCcsICc3NSUnLCAnNjUlJywgJzU1JScsICc0NSUnLCAnbWluJ10sICdtY3AnKTtcbiAgICBjb25zdCBxbmhJbnB1dCA9IGNyZWF0ZUlucHV0KCdRTkgnLCAnaFBhJywgJ3FuaCcsIDk1MCwgMTA1MCk7XG4gICAgY29uc3QgY3J1aXNlSW5wdXQgPSBjcmVhdGVJbnB1dCgnQ3J1aXNlJywgJ2Z0JywgJ2NydWlzZScsIDIwMDAsIDE1MDAwKTtcbiAgICBjb25zdCBpc2FEZXZJbnB1dCA9IGNyZWF0ZUlucHV0KCdJU0EgZGV2JywgJ8KwQycsICdkZXYnLCAtMjAsIDIwKTtcbiAgICBcbiAgICBjb25zdCBncm91cDEgPSBjcmVhdGVJbnB1dEdyb3VwKC4uLm1jcERyb3Bkb3duLCAuLi5xbmhJbnB1dCk7XG4gICAgY29uc3QgZ3JvdXAyID0gY3JlYXRlSW5wdXRHcm91cCguLi5jcnVpc2VJbnB1dCwgLi4uaXNhRGV2SW5wdXQpO1xuXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAxKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cDIpO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY3JlYXRlQ2FsY3VsYXRlQnV0dG9uKCk7XG5cbiAgICBjb25zdCB0YWJsZVJvd3MgPSBbXG4gICAgICAgIHsgbGFiZWw6ICdSUE0nLCBpZDogJ3JwbScgfSxcbiAgICAgICAgeyBsYWJlbDogJ1RBUycsIGlkOiAndGFzJyB9LFxuICAgICAgICB7IGxhYmVsOiAnRnVlbCBCdXJuJywgaWQ6ICdmdWVsJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUmFuZ2UnLCBpZDogJ3JhbmdlJyB9LFxuICAgICAgICB7IGxhYmVsOiAnRW5kdXJhbmNlJywgaWQ6ICdlbmR1cmFuY2UnIH1cbiAgICBdO1xuICAgIFxuXG4gICAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gY3JlYXRlUmVzdWx0Q29udGFpbmVyKHRhYmxlUm93cywgZmFsc2UpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIGNvbnRhaW5lciB0byBob2xkIGFsbCBzZWN0aW9uc1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGN1bGF0ZUJ1dHRvbik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVucm91dGU7IiwiZnVuY3Rpb24gY3JlYXRlRnVlbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVlbCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGdWVsOyIsImltcG9ydCB1dGRJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy91dGQuanBnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWZsdWlkJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IHJvdyB3aXRoIHRleHRcbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93MS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktNScsICd0ZXh0LWNlbnRlcicsICdmdy1ub3JtYWwnKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9ICdQRVJGT1JNQU5DRSBUT09MJztcblxuICAgIHJvdzEuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQocm93MSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCByb3cgd2l0aCB0ZXh0XG4gICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LTUnLCAndGV4dC1jZW50ZXInLCAnZnctbm9ybWFsJyk7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSAnU1AtVVREJztcblxuICAgIHJvdzIuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgc2Vjb25kIHJvd1xuICAgIGNvbnN0IGNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1mbHVpZCcpO1xuXG4gICAgLy8gQ3JlYXRlIGEgY29sdW1uIHdpdGggYW4gaW1hZ2VcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sJywgJ3RleHQtY2VudGVyJyk7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3BsYW5lLXBob3RvJyk7XG4gICAgaW1hZ2Uuc3JjID0gdXRkSW1nO1xuXG4gICAgY29sLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGNvbCk7XG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgdGhpcmQgcm93IChmaXhlZC1ib3R0b20gd2FybmluZylcbiAgICBjb25zdCBjb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZmx1aWQnLCAnZml4ZWQtYm90dG9tJywgJ3dhcm5pbmcnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGhpcmQgcm93IHdpdGggd2FybmluZyB0ZXh0XG4gICAgY29uc3Qgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzMuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCB3YXJuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3YXJuaW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LTYnLCAndGV4dC1jZW50ZXInLCAnZnctbm9ybWFsJywgJ2ZzdC1pdGFsaWMnLCAndGV4dC1kYW5nZXInKTtcbiAgICB3YXJuaW5nVGV4dC50ZXh0Q29udGVudCA9ICdOT1QgRk9SIE9QRVJBVElPTkFMIFVTRSc7XG5cbiAgICByb3czLmFwcGVuZENoaWxkKHdhcm5pbmdUZXh0KTtcbiAgICBjb250YWluZXIzLmFwcGVuZENoaWxkKHJvdzMpO1xuXG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIHRvIGhvbGQgYm90aCByb3dzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcjMpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IGhvbWVJbWdQYXRoIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1yZW1vdmViZy1wcmV2aWV3LnBuZ1wiO1xuaW1wb3J0IGZiSW1nUGF0aCBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2ZiLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XG5pbXBvcnQgaWdJbWdQYXRoIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaWcucG5nXCI7XG5pbXBvcnQgY2tsSW1nUGF0aCBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2NrbC5wbmdcIjtcblxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZVdiIGZyb20gXCIuL3diXCI7XG5pbXBvcnQgY3JlYXRlRGVwYXJ0dXJlIGZyb20gXCIuL2RlcGFydHVyZVwiO1xuaW1wb3J0IGNyZWF0ZUVucm91dGUgZnJvbSBcIi4vZW5yb3V0ZVwiO1xuaW1wb3J0IGNyZWF0ZURlc3RpbmF0aW9uIGZyb20gXCIuL2Rlc3RpbmF0aW9uXCI7XG5pbXBvcnQgY3JlYXRlRnVlbCBmcm9tIFwiLi9mdWVsXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiLCBcIm5hdmJhci1leHBhbmQtbWRcIiwgXCJuYXZiYXItZGFya1wiLCBcImJnLWRhcmtcIiwgXCJweS00XCIsIFwibWItbWQtNFwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckZsdWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRmx1aWQuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1mbHVpZFwiKTtcblxuICAgIC8vIENyZWF0ZSBuYXZiYXIgdG9nZ2xlciBidXR0b25cbiAgICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmF2YmFyVG9nZ2xlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLXRvZ2dsZXJcIik7XG4gICAgbmF2YmFyVG9nZ2xlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcImNvbGxhcHNlXCIpO1xuICAgIG5hdmJhclRvZ2dsZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbmF2XCIpO1xuICAgIGNvbnN0IHRvZ2dsZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZ2dsZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItdG9nZ2xlci1pY29uXCIpO1xuICAgIG5hdmJhclRvZ2dsZXIuYXBwZW5kQ2hpbGQodG9nZ2xlckljb24pO1xuXG4gICAgLy8gQ3JlYXRlIG5hdmJhciBjb2xsYXBzZSBkaXZcbiAgICBjb25zdCBuYXZiYXJDb2xsYXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhckNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZVwiLCBcIm5hdmJhci1jb2xsYXBzZVwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XG4gICAgbmF2YmFyQ29sbGFwc2UuaWQgPSBcIm5hdlwiO1xuXG4gICAgLy8gQ3JlYXRlIG5hdmJhciBuYXYgdWxcbiAgICBjb25zdCBuYXZiYXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdmJhck5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW5hdlwiLCBcIm5hdi1maWxsXCIsIFwidy0xMDBcIik7XG5cbiAgICAvLyBDcmVhdGUgaG9tZSBidXR0b25cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJyYW5kXCIsIFwiYWN0aXZlXCIpO1xuICAgIGNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lSW1nLnNyYyA9IGhvbWVJbWdQYXRoO1xuICAgIGhvbWVCdXR0b24uYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG5cbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZUhvbWUoKSk7XG5cbiAgICAvLyBDcmVhdGUgYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICAgIHsgaWQ6IFwid2JCdXR0b25cIiwgdGV4dDogXCJXZWlnaHQgQW5kIEJhbGFuY2VcIiwgYWN0aW9uOiAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZVdiKCkpIH0sXG4gICAgICAgIHsgaWQ6IFwiZGVwYXJ0dXJlQnV0dG9uXCIsIHRleHQ6IFwiRGVwYXJ0dXJlXCIsIGFjdGlvbjogKCkgPT4gc2V0QWN0aXZlUGFnZShjcmVhdGVEZXBhcnR1cmUoKSkgfSxcbiAgICAgICAgeyBpZDogXCJlbnJvdXRlQnV0dG9uXCIsIHRleHQ6IFwiRW4tUm91dGVcIiwgYWN0aW9uOiAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZUVucm91dGUoKSkgfSxcbiAgICAgICAgeyBpZDogXCJkZXN0aW5hdGlvbkJ1dHRvblwiLCB0ZXh0OiBcIkRlc3RpbmF0aW9uXCIsIGFjdGlvbjogKCkgPT4gc2V0QWN0aXZlUGFnZShjcmVhdGVEZXN0aW5hdGlvbigpKSB9LFxuICAgICAgICB7IGlkOiBcImZ1ZWxCdXR0b25cIiwgdGV4dDogXCJGdWVsXCIsIGFjdGlvbjogKCkgPT4gc2V0QWN0aXZlUGFnZShjcmVhdGVGdWVsKCkpIH1cbiAgICBdO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcblxuICAgICAgICBjb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmF2QnV0dG9uLmlkID0gYnV0dG9uLmlkO1xuICAgICAgICBuYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIsIFwiYnRuXCIpO1xuICAgICAgICBuYXZCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b24udGV4dDtcblxuICAgICAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkJ1dHRvbik7XG4gICAgICAgIG5hdmJhck5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcblxuICAgICAgICBuYXZCdXR0b24ub25jbGljayA9ICgpID0+IGJ1dHRvbi5hY3Rpb24oKTtcbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgdG8gYnVpbGQgdGhlIHN0cnVjdHVyZVxuICAgIGNvbnRhaW5lckZsdWlkLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIGNvbnRhaW5lckZsdWlkLmFwcGVuZENoaWxkKG5hdmJhclRvZ2dsZXIpO1xuICAgIGNvbnRhaW5lckZsdWlkLmFwcGVuZENoaWxkKG5hdmJhckNvbGxhcHNlKTtcbiAgICBuYXZiYXJDb2xsYXBzZS5hcHBlbmRDaGlsZChuYXZiYXJOYXYpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWluZXJGbHVpZCk7XG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIHJldHVybiBtYWluXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwibmF2YmFyLWV4cGFuZC1tZFwiLCBcIm5hdmJhci1kYXJrXCIsIFwiYmctZGFya1wiLCBcInB5LTFcIiwgXCJmaXhlZC1ib3R0b21cIik7XG5cbiAgICBjb25zdCBjb250YWluZXJGbHVpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckZsdWlkLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItZmx1aWRcIik7XG5cbiAgICAvLyBDcmVhdGUgbmF2YmFyIGJyYW5kIHdpdGggdGV4dFxuICAgIGNvbnN0IG5hdmJhckJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyQnJhbmQuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1icmFuZFwiLCBcInRleHQtd3JhcFwiLCBcImZvb3Rlci10ZXh0XCIsIFwiZnMtNlwiKTtcbiAgICBuYXZiYXJCcmFuZC50ZXh0Q29udGVudCA9IFwiQ2VudHJ1bSBLc3p0YcWCY2VuaWEgTG90bmljemVnbyBQb2xpdGVjaG5pa2kgUG96bmHFhHNraWVqXCI7XG5cbiAgICAvLyBDcmVhdGUgbmF2YmFyIG5hdiB1bFxuICAgIGNvbnN0IG5hdmJhck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2YmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbmF2XCIpO1xuXG4gICAgLy8gQ3JlYXRlIGluZGl2aWR1YWwgbmF2IGl0ZW1zIHdpdGggbGlua3MgYW5kIGltYWdlc1xuICAgIGNvbnN0IHNvY2lhbExpbmtzID0gW1xuICAgICAgICB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2NrbC5wb2xpdGVjaG5pa2Fwb3puYW5za2EvXCIsIHNyYzogZmJJbWdQYXRoLCBhbHQ6IFwiRmFjZWJvb2tcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ja2wucHAvXCIsIHNyYzogaWdJbWdQYXRoLCBhbHQ6IFwiSW5zdGFncmFtXCIgfSxcbiAgICAgICAgeyBocmVmOiBcImh0dHBzOi8vY2tsLnB1dC5wb3puYW4ucGwvXCIsIHNyYzogY2tsSW1nUGF0aCwgYWx0OiBcIkNLTCBXZWJzaXRlXCIgfVxuICAgIF07XG5cbiAgICBzb2NpYWxMaW5rcy5mb3JFYWNoKGxpbmtJbmZvID0+IHtcbiAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIG5hdkxpbmsuaHJlZiA9IGxpbmtJbmZvLmhyZWY7XG4gICAgICAgIG5hdkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBsaW5rSW5mby5zcmM7XG4gICAgICAgIGltZy5hbHQgPSBsaW5rSW5mby5hbHQ7XG5cbiAgICAgICAgbmF2TGluay5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgICAgICBuYXZiYXJOYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIHRvIGJ1aWxkIHRoZSBzdHJ1Y3R1cmVcbiAgICBjb250YWluZXJGbHVpZC5hcHBlbmRDaGlsZChuYXZiYXJCcmFuZCk7XG4gICAgY29udGFpbmVyRmx1aWQuYXBwZW5kQ2hpbGQobmF2YmFyTmF2KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyRmx1aWQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQYWdlKHBhZ2UpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBzZXRBY3RpdmVQYWdlKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsImZ1bmN0aW9uIGNyZWF0ZVdiKCkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlVGl0bGUoJ1dlaWdodCBhbmQgQmFsYW5jZScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgYmxvY2tGdWVsSW5wdXQgPSBjcmVhdGVJbnB1dCgnQmxvY2sgRnVlbCcsICdsJywgJ2Jsb2NrLWZ1ZWwnKTtcbiAgICBjb25zdCByb3cxSW5wdXQgPSBjcmVhdGVJbnB1dCgnUm93IDEnLCAna2cnLCAncm93LTEnLCk7XG4gICAgY29uc3Qgcm93MklucHV0ID0gY3JlYXRlSW5wdXQoJ1JvdyAyJywgJ2tnJywgJ3Jvdy0yJywpO1xuICAgIGNvbnN0IGJhZ2dhZ2UxSW5wdXQgPSBjcmVhdGVJbnB1dCgnQmFnZ2FnZSAxJywgJ2tnJywgJ2JhZ2dhZ2UtMScpO1xuICAgIGNvbnN0IGJhZ2dhZ2UySW5wdXQgPSBjcmVhdGVJbnB1dCgnQmFnZ2FnZSAyJywgJ2tnJywgJ2JhZ2dhZ2UtMicpO1xuXG4gICAgY29uc3QgZ3JvdXAxID0gY3JlYXRlSW5wdXRHcm91cCguLi5ibG9ja0Z1ZWxJbnB1dCk7XG4gICAgY29uc3QgZ3JvdXAyID0gY3JlYXRlSW5wdXRHcm91cCguLi5yb3cxSW5wdXQsIC4uLnJvdzJJbnB1dCk7XG4gICAgY29uc3QgZ3JvdXAzID0gY3JlYXRlSW5wdXRHcm91cCguLi5iYWdnYWdlMUlucHV0LCAuLi5iYWdnYWdlMklucHV0KTtcblxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwMSk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAyKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cDMpO1xuXG4gICAgY29uc3QgdGFibGVSb3dzID0gW1xuICAgICAgICB7IGxhYmVsOiAnVE9XJywgaWQ6ICd0b3cnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdNb21lbnQnLCBpZDogJ21vbWVudCcgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gY3JlYXRlUmVzdWx0Q29udGFpbmVyKHRhYmxlUm93cywgdHJ1ZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIHRvIGhvbGQgYWxsIHNlY3Rpb25zXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWZsdWlkJyk7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS01JywgJ3RleHQtY2VudGVyJywgJ2Z3LW5vcm1hbCcsICd0aXRsZScpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIHJvdy5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgIFxuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3NldHRpbmdzJywgJ21iLTUnKTtcblxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdENvbnRhaW5lcih0YWJsZVJvd3MsIGNoYXJ0KSB7XG4gICAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdWx0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnUmVzdWx0cyc7XG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcblxuICAgIC8vIENyZWF0ZSB0YWJsZSByb3dzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBhcnJheVxuICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvd0RhdGEgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVUYWJsZVJvdyhyb3dEYXRhLmxhYmVsLCByb3dEYXRhLmlkKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9KTtcblxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuXG4gICAgaWYgKGNoYXJ0KSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLmlkID0gJ215Q2hhcnQnO1xuICAgIFxuICAgICAgICBjYW52YXNEaXYuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzRGl2KTtcbiAgICB9XG5cbiAgICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQodGl0bGUsIHBsYWNlaG9sZGVyLCBpZCwgbWluID0gdW5kZWZpbmVkLCBtYXggPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtdGV4dCcsICdpbnB1dC10aXRsZScpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICBpbnB1dC5pZCA9IGlkO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cbiAgICAvLyBTZXQgbWluIGFuZCBtYXggYXR0cmlidXRlcyBpZiBwcm92aWRlZFxuICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnB1dC5taW4gPSBtaW47XG4gICAgfVxuXG4gICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0Lm1heCA9IG1heDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2RpdiwgaW5wdXRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRHcm91cCguLi5pbnB1dHMpIHtcbiAgICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRHcm91cC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cCcpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXRHcm91cDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlUm93KHRoVGV4dCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdGgudGV4dENvbnRlbnQgPSB0aFRleHQ7XG5cbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdGQudGV4dENvbnRlbnQgPSAnMCc7XG5cbiAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XG5cbiAgICByZXR1cm4gcm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FsY3VsYXRlQnV0dG9uKCkge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBjb250YWluZXJcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnbWItMycsICdkLWZsZXgnLCAnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FsY3VsYXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2FsY3VsYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tcHJpbWFyeScpO1xuICAgICAgICBjYWxjdWxhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FsY3VsYXRlJztcblxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25JbnB1dCh0aXRsZSwgb3B0aW9ucywgaWQpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGRpdlxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtdGV4dCcsICdpbnB1dC10aXRsZScpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZ3JvdXAgZGl2IHdpdGggdGhlIGRyb3Bkb3duXG4gICAgY29uc3QgZm9ybUdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnLCAnZHJvcGRvd24taGFsZicpO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgIHNlbGVjdC5pZCA9IGlkO1xuXG4gICAgLy8gQWRkIG9wdGlvbnMgdG8gdGhlIGRyb3Bkb3duXG4gICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvblRleHQgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNlbGVjdCBlbGVtZW50IHRvIHRoZSBmb3JtIGdyb3VwIGRpdlxuICAgIGZvcm1Hcm91cERpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG4gICAgcmV0dXJuIFt0aXRsZURpdiwgZm9ybUdyb3VwRGl2XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2I7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vaW5pdGlhbGl6ZXJcIjtcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLmNzcyc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9