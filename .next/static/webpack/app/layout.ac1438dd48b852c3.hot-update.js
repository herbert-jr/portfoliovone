"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/buttons/HamburguerButton/index.tsx":
/*!***********************************************************!*\
  !*** ./app/components/buttons/HamburguerButton/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _btn_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn.module.scss */ \"(app-pages-browser)/./app/components/buttons/HamburguerButton/btn.module.scss\");\n/* harmony import */ var _btn_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_btn_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_context_porfolioContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/context/porfolioContext */ \"(app-pages-browser)/./app/context/porfolioContext/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Hamburger() {\n    _s();\n    const { openMenu, handleClickOpenMenu } = (0,_app_context_porfolioContext__WEBPACK_IMPORTED_MODULE_2__.useApi)();\n    const classBtn = openMenu ? \"\".concat((_btn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container), \" \").concat((_btn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open)) : (_btn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classBtn,\n        onClick: handleClickOpenMenu,\n        \"aria-label\": \"Abrir menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/home/herbert/\\xc1rea de Trabalho/portfoliovone/app/components/buttons/HamburguerButton/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/home/herbert/\\xc1rea de Trabalho/portfoliovone/app/components/buttons/HamburguerButton/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/home/herbert/\\xc1rea de Trabalho/portfoliovone/app/components/buttons/HamburguerButton/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/herbert/\\xc1rea de Trabalho/portfoliovone/app/components/buttons/HamburguerButton/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Hamburger, \"Vc1zSvus23p7AsE+R8Kj4a73kVI=\", false, function() {\n    return [\n        _app_context_porfolioContext__WEBPACK_IMPORTED_MODULE_2__.useApi\n    ];\n});\n_c = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);\nvar _c;\n$RefreshReg$(_c, \"Hamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2J1dHRvbnMvSGFtYnVyZ3VlckJ1dHRvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBQ2E7QUFDZ0I7QUFFdkQsU0FBU0c7O0lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdILG9FQUFNQTtJQUNoRCxNQUFNSSxXQUFXRixXQUNiLEdBQXVCSCxPQUFwQkEsbUVBQWdCLEVBQUMsS0FBZSxPQUFaQSw4REFBVyxJQUNsQ0EsbUVBQWdCO0lBQ3BCLHFCQUNFLDhEQUFDUTtRQUNDQyxXQUFXSjtRQUNYSyxTQUFTTjtRQUNUTyxjQUFXOzswQkFFWCw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNBOzs7Ozs7Ozs7OztBQUdQO0dBaEJTVjs7UUFDbUNELGdFQUFNQTs7O0tBRHpDQztBQWtCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9idXR0b25zL0hhbWJ1cmd1ZXJCdXR0b24vaW5kZXgudHN4PzExYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYnRuLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiQC9hcHAvY29udGV4dC9wb3Jmb2xpb0NvbnRleHRcIjtcblxuZnVuY3Rpb24gSGFtYnVyZ2VyKCkge1xuICBjb25zdCB7IG9wZW5NZW51LCBoYW5kbGVDbGlja09wZW5NZW51IH0gPSB1c2VBcGkoKTtcbiAgY29uc3QgY2xhc3NCdG4gPSBvcGVuTWVudVxuICAgID8gYCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMub3Blbn1gXG4gICAgOiBzdHlsZXMuY29udGFpbmVyO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NCdG59XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW5NZW51fVxuICAgICAgYXJpYS1sYWJlbD1cIkFicmlyIG1lbnVcIlxuICAgID5cbiAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlQXBpIiwiSGFtYnVyZ2VyIiwib3Blbk1lbnUiLCJoYW5kbGVDbGlja09wZW5NZW51IiwiY2xhc3NCdG4iLCJjb250YWluZXIiLCJvcGVuIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/buttons/HamburguerButton/index.tsx\n"));

/***/ })

});