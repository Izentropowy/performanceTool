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
function createWb() {
    console.log('wb');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWb);

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
function createEnroute() {
    console.log('enroute');
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

    const group1 = createInputGroup(blockFuelInput[0], blockFuelInput[1]);
    const group2 = createInputGroup(row1Input[0], row1Input[1], row2Input[0], row2Input[1]);
    const group3 = createInputGroup(baggage1Input[0], baggage1Input[1], baggage2Input[0], baggage2Input[1]);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);
    inputContainer.appendChild(group3);

    const resultContainer = createResultContainer(true);

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

function createResultContainer(chart) {
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

    const towRow = createTableRow('TOW', 'tow');
    const momentRow = createTableRow('Moment', 'moment');

    table.appendChild(towRow);
    table.appendChild(momentRow);

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

function createInput(title, placeholder, id) {
    const div = document.createElement('div');
    div.classList.add('input-group-text', 'input-title');
    div.textContent = title;

    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('form-control');
    input.id = id;
    input.placeholder = placeholder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOEM7QUFDakI7O0FBRTdCLHdEQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXcvLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3M/OTUxZiIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9kZXBhcnR1cmUuanMiLCJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL2Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9lbnJvdXRlLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9mdWVsLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL25ldy8uL3NyYy9pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9uZXcvLi9zcmMvd2IuanMiLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZXcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmV3L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9jbG91ZHMuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ubmF2YmFyIGltZyB7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5wbGFuZS1waG90byB7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI3LCAyNywgMzAsIDAuMyk7XG4gICAgb3BhY2l0eTogMC42NTtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4ud2FybmluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG59XG5cbi5kcm9wZG93bi1mdWxsIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4uZHJvcGRvd24taGFsZiB7XG4gICAgd2lkdGg6IDI1LjElO1xufVxuXG4uaW5wdXQtdGl0bGUge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4uY29udGFpbmVye1xuICAgIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5pbnZhbGlke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwKTtcbn1cblxuLnNoYWtle1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC41cztcbn1cblxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG4gICAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSx5REFBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2YsVUFBVTtBQUNYOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQiwwQkFBMEIsMkJBQTJCLEVBQUU7SUFDdkQscUJBQXFCLDBCQUEwQixFQUFFO0lBQ2pELE9BQU8sd0JBQXdCLEVBQUU7RUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvY2xvdWRzLmF2aWYpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhciBpbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnBsYW5lLXBob3RvIHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI3LCAyNywgMzAsIDAuMyk7XFxuICAgIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcbn1cXG5cXG4uZHJvcGRvd24tZnVsbCB7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi5kcm9wZG93bi1oYWxmIHtcXG4gICAgd2lkdGg6IDI1LjElO1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5pbnZhbGlke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCk7XFxufVxcblxcbi5zaGFrZXtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gICAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cXG4gICAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVXYigpIHtcbiAgICBjb25zb2xlLmxvZygnd2InKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2I7IiwiZnVuY3Rpb24gY3JlYXRlRGVzdGluYXRpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3RpbmF0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlc3RpbmF0aW9uOyIsImZ1bmN0aW9uIGNyZWF0ZUVucm91dGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vucm91dGUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW5yb3V0ZTsiLCJmdW5jdGlvbiBjcmVhdGVGdWVsKCkge1xuICAgIGNvbnNvbGUubG9nKCdmdWVsJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZ1ZWw7IiwiaW1wb3J0IHV0ZEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3V0ZC5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZmx1aWQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZmlyc3Qgcm93IHdpdGggdGV4dFxuICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS01JywgJ3RleHQtY2VudGVyJywgJ2Z3LW5vcm1hbCcpO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gJ1BFUkZPUk1BTkNFIFRPT0wnO1xuXG4gICAgcm93MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChyb3cxKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc2Vjb25kIHJvdyB3aXRoIHRleHRcbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Mi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktNScsICd0ZXh0LWNlbnRlcicsICdmdy1ub3JtYWwnKTtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdTUC1VVEQnO1xuXG4gICAgcm93Mi5hcHBlbmRDaGlsZCh0ZXh0Mik7XG4gICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChyb3cyKTtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBzZWNvbmQgcm93XG4gICAgY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWZsdWlkJyk7XG5cbiAgICAvLyBDcmVhdGUgYSBjb2x1bW4gd2l0aCBhbiBpbWFnZVxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wnLCAndGV4dC1jZW50ZXInKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncGxhbmUtcGhvdG8nKTtcbiAgICBpbWFnZS5zcmMgPSB1dGRJbWc7XG5cbiAgICBjb2wuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoY29sKTtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSB0aGlyZCByb3cgKGZpeGVkLWJvdHRvbSB3YXJuaW5nKVxuICAgIGNvbnN0IGNvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1mbHVpZCcsICdmaXhlZC1ib3R0b20nLCAnd2FybmluZycpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0aGlyZCByb3cgd2l0aCB3YXJuaW5nIHRleHRcbiAgICBjb25zdCByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93My5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IHdhcm5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdhcm5pbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktNicsICd0ZXh0LWNlbnRlcicsICdmdy1ub3JtYWwnLCAnZnN0LWl0YWxpYycsICd0ZXh0LWRhbmdlcicpO1xuICAgIHdhcm5pbmdUZXh0LnRleHRDb250ZW50ID0gJ05PVCBGT1IgT1BFUkFUSU9OQUwgVVNFJztcblxuICAgIHJvdzMuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xuICAgIGNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQocm93Myk7XG5cblxuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBjb250YWluZXIgdG8gaG9sZCBib3RoIHJvd3NcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIxKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcjIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMyk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJpbXBvcnQgaG9tZUltZ1BhdGggZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XG5pbXBvcnQgZmJJbWdQYXRoIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvZmItcmVtb3ZlYmctcHJldmlldy5wbmdcIjtcbmltcG9ydCBpZ0ltZ1BhdGggZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pZy5wbmdcIjtcbmltcG9ydCBja2xJbWdQYXRoIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvY2tsLnBuZ1wiO1xuXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlV2IgZnJvbSBcIi4vd2JcIjtcbmltcG9ydCBjcmVhdGVEZXBhcnR1cmUgZnJvbSBcIi4vZGVwYXJ0dXJlXCI7XG5pbXBvcnQgY3JlYXRlRW5yb3V0ZSBmcm9tIFwiLi9lbnJvdXRlXCI7XG5pbXBvcnQgY3JlYXRlRGVzdGluYXRpb24gZnJvbSBcIi4vZGVzdGluYXRpb25cIjtcbmltcG9ydCBjcmVhdGVGdWVsIGZyb20gXCIuL2Z1ZWxcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwibmF2YmFyLWV4cGFuZC1tZFwiLCBcIm5hdmJhci1kYXJrXCIsIFwiYmctZGFya1wiLCBcInB5LTRcIiwgXCJtYi1tZC00XCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyRmx1aWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJGbHVpZC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIpO1xuXG4gICAgLy8gQ3JlYXRlIG5hdmJhciB0b2dnbGVyIGJ1dHRvblxuICAgIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZiYXJUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItdG9nZ2xlclwiKTtcbiAgICBuYXZiYXJUb2dnbGVyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwiY29sbGFwc2VcIik7XG4gICAgbmF2YmFyVG9nZ2xlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNuYXZcIik7XG4gICAgY29uc3QgdG9nZ2xlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9nZ2xlckljb24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci10b2dnbGVyLWljb25cIik7XG4gICAgbmF2YmFyVG9nZ2xlci5hcHBlbmRDaGlsZCh0b2dnbGVySWNvbik7XG5cbiAgICAvLyBDcmVhdGUgbmF2YmFyIGNvbGxhcHNlIGRpdlxuICAgIGNvbnN0IG5hdmJhckNvbGxhcHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyQ29sbGFwc2UuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlXCIsIFwibmF2YmFyLWNvbGxhcHNlXCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcbiAgICBuYXZiYXJDb2xsYXBzZS5pZCA9IFwibmF2XCI7XG5cbiAgICAvLyBDcmVhdGUgbmF2YmFyIG5hdiB1bFxuICAgIGNvbnN0IG5hdmJhck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2YmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbmF2XCIsIFwibmF2LWZpbGxcIiwgXCJ3LTEwMFwiKTtcblxuICAgIC8vIENyZWF0ZSBob21lIGJ1dHRvblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnJhbmRcIiwgXCJhY3RpdmVcIik7XG4gICAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVJbWcuc3JjID0gaG9tZUltZ1BhdGg7XG4gICAgaG9tZUJ1dHRvbi5hcHBlbmRDaGlsZChob21lSW1nKTtcblxuICAgIGhvbWVCdXR0b24ub25jbGljayA9ICgpID0+IHNldEFjdGl2ZVBhZ2UoY3JlYXRlSG9tZSgpKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b25zXG4gICAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAgICAgeyBpZDogXCJ3YkJ1dHRvblwiLCB0ZXh0OiBcIldlaWdodCBBbmQgQmFsYW5jZVwiLCBhY3Rpb246ICgpID0+IHNldEFjdGl2ZVBhZ2UoY3JlYXRlV2IoKSkgfSxcbiAgICAgICAgeyBpZDogXCJkZXBhcnR1cmVCdXR0b25cIiwgdGV4dDogXCJEZXBhcnR1cmVcIiwgYWN0aW9uOiAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZURlcGFydHVyZSgpKSB9LFxuICAgICAgICB7IGlkOiBcImVucm91dGVCdXR0b25cIiwgdGV4dDogXCJFbi1Sb3V0ZVwiLCBhY3Rpb246ICgpID0+IHNldEFjdGl2ZVBhZ2UoY3JlYXRlRW5yb3V0ZSgpKSB9LFxuICAgICAgICB7IGlkOiBcImRlc3RpbmF0aW9uQnV0dG9uXCIsIHRleHQ6IFwiRGVzdGluYXRpb25cIiwgYWN0aW9uOiAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZURlc3RpbmF0aW9uKCkpIH0sXG4gICAgICAgIHsgaWQ6IFwiZnVlbEJ1dHRvblwiLCB0ZXh0OiBcIkZ1ZWxcIiwgYWN0aW9uOiAoKSA9PiBzZXRBY3RpdmVQYWdlKGNyZWF0ZUZ1ZWwoKSkgfVxuICAgIF07XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYXZCdXR0b24uaWQgPSBidXR0b24uaWQ7XG4gICAgICAgIG5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIiwgXCJidG5cIik7XG4gICAgICAgIG5hdkJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbi50ZXh0O1xuXG4gICAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2QnV0dG9uKTtcbiAgICAgICAgbmF2YmFyTmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuXG4gICAgICAgIG5hdkJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gYnV0dG9uLmFjdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byBidWlsZCB0aGUgc3RydWN0dXJlXG4gICAgY29udGFpbmVyRmx1aWQuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgY29udGFpbmVyRmx1aWQuYXBwZW5kQ2hpbGQobmF2YmFyVG9nZ2xlcik7XG4gICAgY29udGFpbmVyRmx1aWQuYXBwZW5kQ2hpbGQobmF2YmFyQ29sbGFwc2UpO1xuICAgIG5hdmJhckNvbGxhcHNlLmFwcGVuZENoaWxkKG5hdmJhck5hdik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhaW5lckZsdWlkKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIiwgXCJuYXZiYXItZXhwYW5kLW1kXCIsIFwibmF2YmFyLWRhcmtcIiwgXCJiZy1kYXJrXCIsIFwicHktMVwiLCBcImZpeGVkLWJvdHRvbVwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckZsdWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRmx1aWQuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1mbHVpZFwiKTtcblxuICAgIC8vIENyZWF0ZSBuYXZiYXIgYnJhbmQgd2l0aCB0ZXh0XG4gICAgY29uc3QgbmF2YmFyQnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXJCcmFuZC5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJyYW5kXCIsIFwidGV4dC13cmFwXCIsIFwiZm9vdGVyLXRleHRcIiwgXCJmcy02XCIpO1xuICAgIG5hdmJhckJyYW5kLnRleHRDb250ZW50ID0gXCJDZW50cnVtIEtzenRhxYJjZW5pYSBMb3RuaWN6ZWdvIFBvbGl0ZWNobmlraSBQb3puYcWEc2tpZWpcIjtcblxuICAgIC8vIENyZWF0ZSBuYXZiYXIgbmF2IHVsXG4gICAgY29uc3QgbmF2YmFyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZiYXJOYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1uYXZcIik7XG5cbiAgICAvLyBDcmVhdGUgaW5kaXZpZHVhbCBuYXYgaXRlbXMgd2l0aCBsaW5rcyBhbmQgaW1hZ2VzXG4gICAgY29uc3Qgc29jaWFsTGlua3MgPSBbXG4gICAgICAgIHsgaHJlZjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY2tsLnBvbGl0ZWNobmlrYXBvem5hbnNrYS9cIiwgc3JjOiBmYkltZ1BhdGgsIGFsdDogXCJGYWNlYm9va1wiIH0sXG4gICAgICAgIHsgaHJlZjogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NrbC5wcC9cIiwgc3JjOiBpZ0ltZ1BhdGgsIGFsdDogXCJJbnN0YWdyYW1cIiB9LFxuICAgICAgICB7IGhyZWY6IFwiaHR0cHM6Ly9ja2wucHV0LnBvem5hbi5wbC9cIiwgc3JjOiBja2xJbWdQYXRoLCBhbHQ6IFwiQ0tMIFdlYnNpdGVcIiB9XG4gICAgXTtcblxuICAgIHNvY2lhbExpbmtzLmZvckVhY2gobGlua0luZm8gPT4ge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG5cbiAgICAgICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbmF2TGluay5ocmVmID0gbGlua0luZm8uaHJlZjtcbiAgICAgICAgbmF2TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua1wiKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IGxpbmtJbmZvLnNyYztcbiAgICAgICAgaW1nLmFsdCA9IGxpbmtJbmZvLmFsdDtcblxuICAgICAgICBuYXZMaW5rLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gICAgICAgIG5hdmJhck5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgdG8gYnVpbGQgdGhlIHN0cnVjdHVyZVxuICAgIGNvbnRhaW5lckZsdWlkLmFwcGVuZENoaWxkKG5hdmJhckJyYW5kKTtcbiAgICBjb250YWluZXJGbHVpZC5hcHBlbmRDaGlsZChuYXZiYXJOYXYpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWluZXJGbHVpZCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2UocGFnZSkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhZ2UpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHNldEFjdGl2ZVBhZ2UoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiZnVuY3Rpb24gY3JlYXRlV2IoKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVUaXRsZSgnV2VpZ2h0IGFuZCBCYWxhbmNlJyk7XG5cbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUlucHV0Q29udGFpbmVyKCk7XG5cbiAgICBjb25zdCBibG9ja0Z1ZWxJbnB1dCA9IGNyZWF0ZUlucHV0KCdCbG9jayBGdWVsJywgJ2wnLCAnYmxvY2stZnVlbCcpO1xuICAgIGNvbnN0IHJvdzFJbnB1dCA9IGNyZWF0ZUlucHV0KCdSb3cgMScsICdrZycsICdyb3ctMScsKTtcbiAgICBjb25zdCByb3cySW5wdXQgPSBjcmVhdGVJbnB1dCgnUm93IDInLCAna2cnLCAncm93LTInLCk7XG4gICAgY29uc3QgYmFnZ2FnZTFJbnB1dCA9IGNyZWF0ZUlucHV0KCdCYWdnYWdlIDEnLCAna2cnLCAnYmFnZ2FnZS0xJyk7XG4gICAgY29uc3QgYmFnZ2FnZTJJbnB1dCA9IGNyZWF0ZUlucHV0KCdCYWdnYWdlIDInLCAna2cnLCAnYmFnZ2FnZS0yJyk7XG5cbiAgICBjb25zdCBncm91cDEgPSBjcmVhdGVJbnB1dEdyb3VwKGJsb2NrRnVlbElucHV0WzBdLCBibG9ja0Z1ZWxJbnB1dFsxXSk7XG4gICAgY29uc3QgZ3JvdXAyID0gY3JlYXRlSW5wdXRHcm91cChyb3cxSW5wdXRbMF0sIHJvdzFJbnB1dFsxXSwgcm93MklucHV0WzBdLCByb3cySW5wdXRbMV0pO1xuICAgIGNvbnN0IGdyb3VwMyA9IGNyZWF0ZUlucHV0R3JvdXAoYmFnZ2FnZTFJbnB1dFswXSwgYmFnZ2FnZTFJbnB1dFsxXSwgYmFnZ2FnZTJJbnB1dFswXSwgYmFnZ2FnZTJJbnB1dFsxXSk7XG5cbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cDEpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwMik7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAzKTtcblxuICAgIGNvbnN0IHJlc3VsdENvbnRhaW5lciA9IGNyZWF0ZVJlc3VsdENvbnRhaW5lcih0cnVlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBjb250YWluZXIgdG8gaG9sZCBhbGwgc2VjdGlvbnNcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZmx1aWQnKTtcblxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LTUnLCAndGV4dC1jZW50ZXInLCAnZnctbm9ybWFsJywgJ3RpdGxlJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgcm93LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgXG4gICAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRDb250YWluZXIoKSB7XG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnc2V0dGluZ3MnLCAnbWItNScpO1xuXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzdWx0Q29udGFpbmVyKGNoYXJ0KSB7XG4gICAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdWx0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnUmVzdWx0cyc7XG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcblxuICAgIGNvbnN0IHRvd1JvdyA9IGNyZWF0ZVRhYmxlUm93KCdUT1cnLCAndG93Jyk7XG4gICAgY29uc3QgbW9tZW50Um93ID0gY3JlYXRlVGFibGVSb3coJ01vbWVudCcsICdtb21lbnQnKTtcblxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRvd1Jvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobW9tZW50Um93KTtcblxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuXG4gICAgaWYgKGNoYXJ0KSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLmlkID0gJ215Q2hhcnQnO1xuICAgIFxuICAgICAgICBjYW52YXNEaXYuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzRGl2KTtcbiAgICB9XG5cbiAgICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQodGl0bGUsIHBsYWNlaG9sZGVyLCBpZCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cC10ZXh0JywgJ2lucHV0LXRpdGxlJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgIGlucHV0LmlkID0gaWQ7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuICAgIHJldHVybiBbZGl2LCBpbnB1dF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dEdyb3VwKC4uLmlucHV0cykge1xuICAgIGNvbnN0IGlucHV0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwJyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaW5wdXRHcm91cC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnB1dEdyb3VwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVSb3codGhUZXh0KSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0aC50ZXh0Q29udGVudCA9IHRoVGV4dDtcblxuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0ZC50ZXh0Q29udGVudCA9ICcwJztcblxuICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRkKTtcblxuICAgIHJldHVybiByb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWxjdWxhdGVCdXR0b24oKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdtYi0zJywgJ2QtZmxleCcsICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYWxjdWxhdGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBjYWxjdWxhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1wcmltYXJ5Jyk7XG4gICAgICAgIGNhbGN1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYWxjdWxhdGUnO1xuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxjdWxhdGVCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRpYWxpemVyXCI7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5jc3MnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==