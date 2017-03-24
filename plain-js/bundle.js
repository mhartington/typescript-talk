/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var leftpad_1 = __webpack_require__(1);
	var fs_1 = __webpack_require__(2);
	var Hello = (function () {
	    function Hello() {
	    }
	    Hello.prototype.parseFile = function (fileName) {
	        fs_1.readFile(fileName, function (err, data) {
	            console.log(data.toString());
	        });
	    };
	    Hello.prototype.testCall = function (msg) {
	        var formatted = leftpad_1.leftpad(msg, 15);
	        console.log(formatted);
	    };
	    return Hello;
	}());
	exports.Hello = Hello;
	var hello = new Hello();
	hello.parseFile("tsconfig.json");
	hello.testCall("Hello World");


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function leftpad(str, len, ch) {
	    if (ch === void 0) { ch = " "; }
	    var i = -1;
	    len = len - str.length;
	    while (++i < len) {
	        str = ch + str;
	    }
	    return str;
	}
	exports.leftpad = leftpad;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);