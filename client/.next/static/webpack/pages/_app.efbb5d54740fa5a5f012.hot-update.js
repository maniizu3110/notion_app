"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _features_kanye_kanyeSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/kanye/kanyeSlice */ \"./src/features/kanye/kanyeSlice.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n // import counterReducer from \"../features/counter/counterSlice\"; 分解せずに書くときのお\n\n\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n  reducer: {\n    counter: counterReducer,\n    kanyeQuote: _features_kanye_kanyeSlice__WEBPACK_IMPORTED_MODULE_0__.default\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUVPLElBQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztBQUNsQ0csRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRUMsY0FESjtBQUVMQyxJQUFBQSxVQUFVLEVBQUVMLCtEQUFZQTtBQUZuQjtBQUR5QixDQUFELENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3RvcmUudHM/NThkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbi8vIGltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tIFwiLi4vZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2VcIjsg5YiG6Kej44Gb44Ga44Gr5pu444GP44Go44GN44Gu44GKXG5pbXBvcnQga2FueWVSZWR1Y2VyIGZyb20gXCIuLi9mZWF0dXJlcy9rYW55ZS9rYW55ZVNsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgICAgY291bnRlcjogY291bnRlclJlZHVjZXIsXG4gICAgICBrYW55ZVF1b3RlOiBrYW55ZVJlZHVjZXJcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwia2FueWVSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiY291bnRlciIsImNvdW50ZXJSZWR1Y2VyIiwia2FueWVRdW90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ })

});