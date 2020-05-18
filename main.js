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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ \"./src/style.js\");\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.js */ \"./src/pages.js\");\n\n_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add('../assets/reset.css');\n_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add('../assets/style.css');\n\n\n\nconst container = _pages_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].render(document.body);\n_pages_js__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"].render(container);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/*! exports provided: template, homePage, contactPage, menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nconst lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n\nconst template = (function(){\n    const render = function(parent){\n        const root = _createElement(parent, 'div', {id:'root'})\n\n        const banner_img = _createElement(root, 'img', {id:'banner_img', src:'../assets/banner.png'});\n\n        const header = _createElement(root, 'div',{id:'header'});\n\n        const title = _createElement(header, 'div', {class: 'title'});\n        title.textContent = 'The Fig Leaf Cafe';\n      \n        const icon = _createElement(header, 'img', {class:'icon', src:'../assets/noun_fig_1510215.svg'});\n\n        const nav_bar = _createElement(header, 'nav', {id:'navbar'});\n\n        const home_link = _createElement(nav_bar, 'a', {class: 'navlink'});\n        home_link.textContent = 'Home';\n        home_link.addEventListener('click', () => homePage.render(content_container));\n\n\n        const menu_link = _createElement(nav_bar, 'a', {class: 'navlink'});\n        menu_link.textContent = 'Menu';\n        menu_link.addEventListener('click', () => menuPage.render(content_container));\n\n        const contact_link = _createElement(nav_bar, 'a', {class: 'navlink'});\n        contact_link.textContent = 'Contact';\n        contact_link.addEventListener('click', () => contactPage.render(content_container));\n\n        const content_container = _createElement(root, 'div', {id:'container'});\n\n        return content_container;\n    };\n    return {render};\n})();\n\nconst homePage = (function(){\n    const render = function(parent){\n        parent.innerHTML = '';\n        const txt = _createElement(parent, 'p', {class:'about'});\n        txt.textContent = lorem+lorem+lorem+lorem+lorem+lorem;\n    };\n    return {render};\n})();\n\n\nconst contactPage = (function(){\n    const render = function(parent){\n        parent.innerHTML = '';\n\n        const contact = [\n            'The Fig Leaf Cafe',\n            '1 Main Street, Seattle, WA',\n            '867-5309',\n            'johndoe@figleafcafe.com',\n        ];\n\n        contact.forEach((line) => _createElement(parent,'p',{class:'contactinfo'}).textContent = line);\n\n    };\n    return {render};\n})();\n\n\nconst menuPage = (function(){\n    const render = function(parent){\n        parent.innerHTML = '';\n        const cheezewhiz = _menuItem('Cheese Platter', 'Generous portion of mozarella cheese slices with a side spread of CheezeWiz', '$3.50');\n        const spaghettios = _menuItem('')\n        const breakfastcereal = _menuItem('Breakfast Option', 'A freshly poured bowl of Fruit Loops with whole milk made from happy cows in Wisconsin', '$4.95');\n        const pulledpork = _menuItem('BBQ Platter','3-1/2lbs of protein-free pulled pork with a side of lentil fries','$22.00');\n        cheezewhiz.render(parent);\n        spaghettios.render(parent);\n        breakfastcereal.render(parent);\n        pulledpork.render(parent);\n    };\n    return {render};\n})();\n\n\nconst _createElement = function(parent, type, attrs){\n    const child = document.createElement(type);\n    parent.append(child)\n    Object.keys(attrs).forEach(key => {\n        child.setAttribute(key.toString(), attrs[key])\n    });\n    return child;\n}\n\n\nconst _menuItem = function(name, desc, price){\n\n    const render = function(parent){\n        const menu_item = _createElement(parent, 'div', {class:'menuitem'});\n        _createElement(menu_item, 'h1',{}).textContent = name;\n        _createElement(menu_item, 'p',{}).textContent = desc;\n        _createElement(menu_item, 'p',{}).textContent = price;\n    }\n    return {render}\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/pages.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst cascadingStyleSheets = (function(){\n\n    function add(file){\n        const link = document.createElement('link');\n        link.setAttribute('type', 'text/css');\n        link.setAttribute('rel', 'stylesheet');\n        link.setAttribute('href', file);\n        document.head.append(link);\n    }\n\n    return {\n        add,\n    }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cascadingStyleSheets);\n\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ })

/******/ });