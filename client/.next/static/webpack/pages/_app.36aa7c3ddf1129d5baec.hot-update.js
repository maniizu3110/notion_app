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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _features_kanye_kanyeSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/kanye/kanyeSlice */ \"./src/features/kanye/kanyeSlice.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n // import counterReducer from \"../features/counter/counterSlice\"; cleanにする前の\n\n\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n  reducer: {\n    counter: counterReducer,\n    kanyeQuote: _features_kanye_kanyeSlice__WEBPACK_IMPORTED_MODULE_0__.default\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUVPLElBQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztBQUNsQ0csRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRUMsY0FESjtBQUVMQyxJQUFBQSxVQUFVLEVBQUVMLCtEQUFZQTtBQUZuQjtBQUR5QixDQUFELENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3RvcmUudHM/NThkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbi8vIGltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tIFwiLi4vZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2VcIjsgY2xlYW7jgavjgZnjgovliY3jga5cbmltcG9ydCBrYW55ZVJlZHVjZXIgZnJvbSBcIi4uL2ZlYXR1cmVzL2thbnllL2thbnllU2xpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgICBjb3VudGVyOiBjb3VudGVyUmVkdWNlcixcbiAgICAgIGthbnllUXVvdGU6IGthbnllUmVkdWNlclxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XG4gIFJldHVyblR5cGUsXG4gIFJvb3RTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uPHN0cmluZz5cbj47XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJrYW55ZVJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJjb3VudGVyIiwiY291bnRlclJlZHVjZXIiLCJrYW55ZVF1b3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ })

});