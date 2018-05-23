/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (arg) => {
  switch (typeof arg) {
    case "string":
      return getNodesList(arg);
    case "object":
      if (arg instanceof HTMLElement)
        return new DOMNodeCollection([arg]);
  };
};

getNodesList = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return nodesArray;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  //will receive an array of html elements as argument
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(html){
    if (typeof html === 'string'){
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML = html;
      }
    }
    else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }
  empty(){
    this.html('');
  }
  append(children){
    if (typeof children === 'object' && !(children instanceof DomNodeCollection))
      children = $l(children);

    if (typeof children === 'string'){
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML += children;
      }
    }
    if (children instanceof DOMNodeCollection) {
      for (var i = 0; i < this.nodes.length; i++) {
        for (var j = 0; j < children.length; j++) {
          this.nodes[i].innerHTML += children[j];
        }
      }
    }
  }
}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);