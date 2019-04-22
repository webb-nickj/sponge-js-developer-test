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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/es5/spongetest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/es5/lib/content.js":
/*!********************************!*\
  !*** ./app/es5/lib/content.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentInstance; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n =====================================================\r\n\r\n   _____                                _    _ _  __\r\n  / ____|                              | |  | | |/ /\r\n | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /\r\n  \\___ \\| '_ \\ / _ \\| '_ \\ / _` |/ _ \\ | |  | |  <\r\n  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \\\r\n |_____/| .__/ \\___/|_| |_|\\__, |\\___|  \\____/|_|\\_\\\r\n        | |                 __/ |\r\n        |_|                |___/\r\n\r\n =====================================================\r\n SPONGE UK DEVELOPER TEST\r\n JSON parser and event handler\r\n =====================================================\r\n*/\nvar ContentInstance =\n/*#__PURE__*/\nfunction () {\n  function ContentInstance(strDataLocation) {\n    var _this = this;\n\n    _classCallCheck(this, ContentInstance);\n\n    //initialise variables\n    this._objContent = {};\n    this._arrOnReady = [];\n    this._blReady = false; //load data\n\n    $.getJSON(strDataLocation, function (objResponse) {\n      _this._onDataLoaded(objResponse);\n    });\n  }\n  /**\r\n   * Once data is loaded store global reference and \r\n   * attempt to render content\r\n   */\n\n\n  _createClass(ContentInstance, [{\n    key: \"_onDataLoaded\",\n    value: function _onDataLoaded(objResponse) {\n      this._objContent = objResponse; //iterate over keys in the data Object and attempt\n      //to render into the content\n\n      $.each(this._objContent, this._populateContentArea); //finally call any registered \n\n      this._triggerOnReady();\n    }\n    /**\r\n     * For each data key, attempt to find a corresponding \r\n     * target content area and Handlebars template and render\r\n     * out data using these.  \r\n     */\n\n  }, {\n    key: \"_populateContentArea\",\n    value: function _populateContentArea(strDataKey, objDataItem) {\n      //no data, so nothing else to do\n      if (objDataItem === undefined) return;\n      var fnTemplate = undefined;\n      var strOutputHtml = '';\n      var strContentId = '#' + strDataKey;\n      var strTemplateId = '#' + strDataKey + '-template';\n      var strTemplate = $(strTemplateId).html(); //no template found\n\n      if (strTemplate === '') {\n        console.warn(\"Failed to find template: #\" + strTemplateId);\n        return;\n      }\n\n      var targetEle = $(strContentId); //no target element found\n\n      if (targetEle.length === 0) {\n        console.warn(\"Failed to find content area: #\" + strContentId);\n        return;\n      } //try compiling the Handlebars template \n\n\n      try {\n        fnTemplate = Handlebars.compile(strTemplate);\n      } catch (e) {\n        console.warn(\"Failed to compile template: #\" + strTemplateId);\n        return;\n      } //try executng the Handlebars template with the given data set\n\n\n      try {\n        strOutputHtml = fnTemplate(objDataItem);\n      } catch (e) {\n        console.warn(\"Failed to execute template: #\" + strTemplateId);\n        return;\n      }\n\n      targetEle.html(strOutputHtml);\n    }\n    /**\r\n     * Execute all the ready functions once loaded\r\n     */\n\n  }, {\n    key: \"_triggerOnReady\",\n    value: function _triggerOnReady() {\n      $.each(this._arrOnReady, function (intIndex, fnDoOnReady) {\n        fnDoOnReady.call();\n      });\n    }\n    /**\r\n     * Register a function to execute once loaded\r\n     */\n\n  }, {\n    key: \"onReady\",\n    value: function onReady(fnDoOnReady) {\n      if (this._blReady) {\n        fnDoOnReady.call();\n      } else {\n        this._arrOnReady.push(fnDoOnReady);\n      }\n    }\n    /**\r\n     * Get an item from the content data\r\n     */\n\n  }, {\n    key: \"getItem\",\n    value: function getItem(strItemKey) {\n      return this._objContent[strItemKey];\n    }\n  }]);\n\n  return ContentInstance;\n}();\n\n\n\n\n//# sourceURL=webpack:///./app/es5/lib/content.js?");

/***/ }),

/***/ "./app/es5/spongetest.js":
/*!*******************************!*\
  !*** ./app/es5/spongetest.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/content.js */ \"./app/es5/lib/content.js\");\n/*\r\n =====================================================\r\n\r\n   _____                                _    _ _  __\r\n  / ____|                              | |  | | |/ /\r\n | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /\r\n  \\___ \\| '_ \\ / _ \\| '_ \\ / _` |/ _ \\ | |  | |  <\r\n  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \\\r\n |_____/| .__/ \\___/|_| |_|\\__, |\\___|  \\____/|_|\\_\\\r\n        | |                 __/ |\r\n        |_|                |___/\r\n\r\n=====================================================\r\n SPONGE UK DEVELOPER TEST\r\n Page-specific JS\r\n=====================================================\r\n*/\n\n\n\njQuery(function ($) {\n  /**\r\n   * A new instance of the content parser using the content JSON file\r\n   */\n  var resContent = new _lib_content_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('app/data/content.json');\n  /**\r\n   * Register a Handlebars helper for the difficulty stars\r\n   */\n\n  Handlebars.registerHelper('difficulty', function (intStars) {\n    var strHTMLStarsOut = '';\n\n    for (var intStar = 0; intStar < intStars; intStar++) {\n      strHTMLStarsOut += '<i class=\"fa fa-star\"></i>';\n    }\n\n    for (var intBlankStar = intStars; intBlankStar < 5; intBlankStar++) {\n      strHTMLStarsOut += '<i class=\"fa fa-star-o\"></i>';\n    }\n\n    return strHTMLStarsOut;\n  });\n  /**\r\n   * When the content file is ready, actually populate the content\r\n   */\n\n  resContent.onReady(function () {\n    //configure tabs\n    new tabs(document.getElementById('about-me'));\n  });\n});\n\n\n//# sourceURL=webpack:///./app/es5/spongetest.js?");

/***/ })

/******/ });