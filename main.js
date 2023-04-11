/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helperFuncs.js":
/*!****************************!*\
  !*** ./src/helperFuncs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElement\": () => (/* binding */ addElement),\n/* harmony export */   \"addHead\": () => (/* binding */ addHead),\n/* harmony export */   \"addImage\": () => (/* binding */ addImage),\n/* harmony export */   \"createBasicStructure\": () => (/* binding */ createBasicStructure)\n/* harmony export */ });\n/* harmony import */ var _groot_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groot.jpeg */ \"./src/groot.jpeg\");\n\n\nfunction createBasicStructure() {\n    const body = document.getElementById('content');\n    const head = document.createElement('div');\n    head.classList.add('head');\n    body.appendChild(head);\n    const header = document.createElement('div');\n    header.classList.add('header');\n    head.appendChild(header);\n    const navBar = document.createElement('div');\n    navBar.classList.add('nav');\n    head.appendChild(navBar);\n    const main = document.createElement('div');\n    main.classList.add('main');\n    body.appendChild(main);\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    body.appendChild(footer);\n\n    return {header, navBar, main, footer};\n}\nfunction addElement(elType, text, parent, className) {\n    const element = document.createElement(elType);\n    element.classList.add(className);\n    element.textContent = text;\n    parent.appendChild(element);\n    return element;\n}\nfunction addImage(parent, source, className) {\n    const image = new Image();\n    image.src = source;\n    image.classList.add(className);\n    const imageHolder = document.createElement('div');\n    imageHolder.classList.add('image-holder');\n    imageHolder.appendChild(image)\n    parent.appendChild(imageHolder);\n}\nfunction addHead(basicStructure, current) {\n    addImage(basicStructure.header, _groot_jpeg__WEBPACK_IMPORTED_MODULE_0__, 'groot');\n    const btnArray = [];\n    addElement('h1', `Groot's Bark Bites`, basicStructure.header, 'title');\n    const homeBtn = addElement('button', 'Home', basicStructure.navBar, 'nav-btn');\n    btnArray.push(homeBtn)\n    const menuBtn = addElement('button', 'Menu', basicStructure.navBar, 'nav-btn');\n    btnArray.push(menuBtn);\n    const aboutBtn = addElement('button', 'About', basicStructure.navBar, 'nav-btn');\n    btnArray.push(aboutBtn);\n    const reserveBtn = addElement('button', 'Reserve', basicStructure.navBar, 'nav-btn');\n    btnArray.push(reserveBtn);\n    btnArray.forEach(btn => {\n        btn.classList.add(btn.textContent.toLowerCase());\n        if(btn.classList.contains(current)) {\n            btn.classList.add('active');\n        } else {\n            btn.classList.add('inactive');\n        }\n    })\n}\n\n//# sourceURL=webpack://restaurant-page/./src/helperFuncs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n\n\nfunction renderHome() {\n    const basicStructure = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.createBasicStructure)();\n    // create head title + img\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addHead)(basicStructure, 'home');\n    // create main body section\n    const barkBiteContainer = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', basicStructure.main, 'section-container');\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('h2', 'Bark Bites', barkBiteContainer, 'section-title');\n    let paraText = `Groot's Bark Bites are an innovative new dish. Designed to pair with a multitude of cuisines, the bark brings forth an earthy flavor.`;\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('p', paraText, barkBiteContainer, 'para');\n    const reservationContainer = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', basicStructure.main, 'section-container');\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('h2', 'Reservations', reservationContainer, 'section-title');\n    paraText = `Due to current demand, all travellers are required to reserve a table and food request atleast one week in advance. While reviewing your reservation, we are authorized to perform background checks, and, if needed, notify the Sovereign.`;\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('p', paraText, reservationContainer, 'para');\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nconst content = document.getElementById('content');\ncontent.innerHTML = '';\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n/* harmony import */ var _bark_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bark.jpg */ \"./src/bark.jpg\");\n\n\n\nfunction addCard(itemName, description, parent, image) {\n    const card = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', parent, 'menu-card');\n    const head = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', card, 'img-title-container');\n    const body = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', card, 'description-container');\n    // add image + title to head of card\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addImage)(head, image, 'food-img');\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('h3', itemName, head, 'item-title');\n    // add description to body of card\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('p', description, body, 'description');\n    \n}\nfunction renderMenu() {\n    const basicStructure = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.createBasicStructure)();\n    // add header content\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addHead)(basicStructure, 'menu');\n    // add cards for menu items\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('h2', 'Our Out of The Galaxy Menu', basicStructure.main, 'title');\n    const menuGrid = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.addElement)('div', '', basicStructure.main, 'menu-grid');\n    // source: ChatGPT\n    let itemDescription = `Bark noodle soup is a hearty and flavorful dish that combines the earthy taste of tree bark with the satisfying texture of noodles and nuts. With fragrant spices that add a warm and comforting aroma, this soup is a perfect choice for a cozy and unique dining experience.`\n    addCard('Bark Noodle Soup', itemDescription, menuGrid, _bark_jpg__WEBPACK_IMPORTED_MODULE_1__);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/bark.jpg":
/*!**********************!*\
  !*** ./src/bark.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ee3685ceb01e02247de.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/bark.jpg?");

/***/ }),

/***/ "./src/groot.jpeg":
/*!************************!*\
  !*** ./src/groot.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e7bb9a9943adf0a88a8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/groot.jpeg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;