module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speakers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.js\");\n/* harmony import */ var _src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Speakers/Speakers */ \"./src/components/Speakers/Speakers.js\");\n/* harmony import */ var _src_components_SpeakersSearchBar_SpeakersSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SpeakersSearchBar/SpeakersSearchBar */ \"./src/components/SpeakersSearchBar/SpeakersSearchBar.js\");\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/pages/speakers.js\";\n\n\n\n\n\n\nconst SpeakersPage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Speakers page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_SpeakersSearchBar_SpeakersSearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2Vycy5qcz9lYjU5Il0sIm5hbWVzIjpbIlNwZWFrZXJzUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDdkIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsMkZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUgsQ0FYRDs7QUFhZUEsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzJztcbmltcG9ydCBTcGVha2Vyc1NlYXJjaEJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1NlYXJjaEJhci9TcGVha2Vyc1NlYXJjaEJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuXG5jb25zdCBTcGVha2Vyc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TcGVha2VycyBwYWdlPC9oMT5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8U3BlYWtlcnNTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIDxTcGVha2VycyAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/speakers.js\n");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/Footer/Footer.js\";\n\nconst Footer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Footer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzPzA4ZGYiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixzQkFDSTtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Rm9vdGVyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer/Footer.js\n");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/Header/Header.js\";\n\nconst Header = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Header\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzPzY4MjkiXSwibmFtZXMiOlsiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixzQkFDSTtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+SGVhZGVyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.js\n");

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/Menu/Menu.js\";\n\nconst Menu = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Menu\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanM/NzUzMyJdLCJuYW1lcyI6WyJNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFlQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5NZW51PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.js\n");

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/Speakers/Speakers.js\";\n\n\n\nconst Speakers = ({\n  speakers\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: speakers.map(speaker => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: speaker.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 38\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_2__[\"withData\"])(2)(Speakers));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcz8wYmVjIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJtYXAiLCJzcGVha2VyIiwibmFtZSIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBRy9CLHNCQUNJO0FBQUEsY0FDS0EsUUFBUSxDQUFDQyxHQUFULENBQWFDLE9BQU8saUJBQUk7QUFBQSxnQkFBSUEsT0FBTyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FSRDs7QUFVZUMseUhBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUwsUUFBWixDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tICcuL3dpdGhEYXRhJ1xuXG5jb25zdCBTcGVha2VycyA9ICh7IHNwZWFrZXJzIH0pID0+IHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtzcGVha2Vycy5tYXAoc3BlYWtlciA9PiA8cD57c3BlYWtlci5uYW1lfTwvcD4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgyKShTcGVha2Vycyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ }),

/***/ "./src/components/Speakers/withData.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/withData.js ***!
  \*********************************************/
/*! exports provided: withData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withData\", function() { return withData; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/Speakers/withData.js\";\nconst withData = maxSpeakersToShow => {\n  return Component => {\n    const speakers = [{\n      imageSrc: 'speaker-component-1124',\n      name: 'Douglas Crockford'\n    }, {\n      imageSrc: 'speaker-component-1530',\n      name: 'Tamara Baker'\n    }, {\n      imageSrc: 'speaker-component-10803',\n      name: 'Eugene Chuvyrov'\n    }];\n    return () => {\n      const limitSpeakers = speakers.slice(0, maxSpeakersToShow);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {\n        speakers: limitSpeakers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 20\n      }, undefined);\n    };\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy93aXRoRGF0YS5qcz9jZTM1Il0sIm5hbWVzIjpbIndpdGhEYXRhIiwibWF4U3BlYWtlcnNUb1Nob3ciLCJDb21wb25lbnQiLCJzcGVha2VycyIsImltYWdlU3JjIiwibmFtZSIsImxpbWl0U3BlYWtlcnMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHQyxpQkFBaUIsSUFBSTtBQUV6QyxTQUFPQyxTQUFTLElBQUk7QUFDaEIsVUFBTUMsUUFBUSxHQUFHLENBQ2I7QUFBRUMsY0FBUSxFQUFFLHdCQUFaO0FBQXNDQyxVQUFJLEVBQUU7QUFBNUMsS0FEYSxFQUViO0FBQUVELGNBQVEsRUFBRSx3QkFBWjtBQUFzQ0MsVUFBSSxFQUFFO0FBQTVDLEtBRmEsRUFHYjtBQUFFRCxjQUFRLEVBQUUseUJBQVo7QUFBdUNDLFVBQUksRUFBRTtBQUE3QyxLQUhhLENBQWpCO0FBS0EsV0FBTyxNQUFNO0FBQ1QsWUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNJLEtBQVQsQ0FBZSxDQUFmLEVBQWtCTixpQkFBbEIsQ0FBdEI7QUFDQSwwQkFBTyxxRUFBQyxTQUFEO0FBQVcsZ0JBQVEsRUFBRUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILEtBSEQ7QUFJSCxHQVZEO0FBV0gsQ0FiTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL3dpdGhEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHdpdGhEYXRhID0gbWF4U3BlYWtlcnNUb1Nob3cgPT4ge1xuICAgIFxuICAgIHJldHVybiBDb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zdCBzcGVha2VycyA9IFtcbiAgICAgICAgICAgIHsgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMTI0JywgbmFtZTogJ0RvdWdsYXMgQ3JvY2tmb3JkJyB9LFxuICAgICAgICAgICAgeyBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLCBuYW1lOiAnVGFtYXJhIEJha2VyJyB9LFxuICAgICAgICAgICAgeyBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTEwODAzJywgbmFtZTogJ0V1Z2VuZSBDaHV2eXJvdicgfSxcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGltaXRTcGVha2VycyA9IHNwZWFrZXJzLnNsaWNlKDAsIG1heFNwZWFrZXJzVG9TaG93KTtcbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHNwZWFrZXJzPXtsaW1pdFNwZWFrZXJzfT48L0NvbXBvbmVudD5cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers/withData.js\n");

/***/ }),

/***/ "./src/components/SpeakersSearchBar/SpeakersSearchBar.js":
/*!***************************************************************!*\
  !*** ./src/components/SpeakersSearchBar/SpeakersSearchBar.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/starter-designing-react-components/src/components/SpeakersSearchBar/SpeakersSearchBar.js\";\n\nconst SpeakersSearchBar = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"SpeakersSearchBar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersSearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1NlYXJjaEJhci9TcGVha2Vyc1NlYXJjaEJhci5qcz85YzYyIl0sIm5hbWVzIjpbIlNwZWFrZXJzU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFlQSxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzU2VhcmNoQmFyL1NwZWFrZXJzU2VhcmNoQmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3BlYWtlcnNTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TcGVha2Vyc1NlYXJjaEJhcjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzU2VhcmNoQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersSearchBar/SpeakersSearchBar.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });