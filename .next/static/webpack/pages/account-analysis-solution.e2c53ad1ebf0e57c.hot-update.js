"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account-analysis-solution",{

/***/ "./utils/FetchEbooks.js":
/*!******************************!*\
  !*** ./utils/FetchEbooks.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n// import React, { useEffect, useState } from \"react\";\n// import GravityForm from 'react-native-gravityform';\nconst post = (param)=>{\n    let { data  } = param;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, post.id, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 17,\n                columnNumber: 1\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n        lineNumber: 12,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\nasync function getServerSideProps(tags) {\n    const { id  } = context.params;\n    const res = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.SERVER_URL, \"/ebooks/45643\"));\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaEVib29rcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBOEQ7QUFDdEI7QUFDeEMsc0RBQXNEO0FBSXRELHNEQUFzRDtBQUV0RCxNQUFNSyxPQUFPLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7SUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRiw4REFBQ0c7a0JBR0RILEtBQUtJLEdBQUcsQ0FBQyxDQUFDTCxPQUFPO1lBQ2pCLHFCQUNBLDhEQUFDSSxXQUFTSixLQUFLTSxFQUFFOzs7OztRQUlqQjs7Ozs7O0FBS0E7QUFFQSwrREFBZU4sSUFBSUEsRUFBQTtBQUlaLGVBQWVPLG1CQUFtQkMsSUFBSSxFQUFDO0lBQzFDLE1BQU0sRUFBQ0YsR0FBRSxFQUFDLEdBQUdHLFFBQVFDLE1BQU07SUFDM0IsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQXlCLE9BQXRCYixvREFBcUIsRUFBQztJQUNqRCxNQUFNRSxPQUFPLE1BQU1VLElBQUlHLElBQUk7SUFDM0IsT0FBTztRQUFDQyxPQUFNO1lBQUNkO1FBQUk7SUFBQztBQUl4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0ZldGNoRWJvb2tzLmpzPzgxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXIsUm93LCBDb2wsQnJlYWRjcnVtYn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbi8vIGltcG9ydCBHcmF2aXR5Rm9ybSBmcm9tICdyZWFjdC1uYXRpdmUtZ3Jhdml0eWZvcm0nO1xuXG5jb25zdCBwb3N0ID0gKHtkYXRhfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbjxkaXY+XG5cbntcbmRhdGEubWFwKChwb3N0KT0+e1xucmV0dXJuIChcbjxkaXYga2V5PXtwb3N0LmlkfT5cblxuPC9kaXY+XG4pXG59KX1cblxuXG48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHRhZ3Mpe1xuICAgIGNvbnN0IHtpZH0gPSBjb250ZXh0LnBhcmFtcztcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9L2Vib29rcy80NTY0M2ApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7cHJvcHM6e2RhdGF9fVxuICAgIFxuICAgIFxuICAgIFxufSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJCcmVhZGNydW1iIiwiY29uZmlnRGF0YSIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwidGFncyIsImNvbnRleHQiLCJwYXJhbXMiLCJyZXMiLCJmZXRjaCIsIlNFUlZFUl9VUkwiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});