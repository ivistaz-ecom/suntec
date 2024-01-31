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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [ebooks, setEbooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [pov, setPov] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [podcasts, setPodcasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ebooks/{\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            class: \"card-title text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"title\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"excerpt\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: Links,\n                                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                            children: \"Read More\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 7\n                                                }, this),\n                                                Type\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 55,\n                                columnNumber: 1\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 54,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                    lineNumber: 39,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 38,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n        lineNumber: 36,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"kCspNxl4VbhU/hLjYYBt8AfCtiM=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9GZXRjaEVib29rcy5qcz84MWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5mdW5jdGlvbiBJbnNpZ2h0cyh7dGFnc30pIHtcbiAgY29uc3QgW2FsbEluc2lnaHRzLCBzZXRJbnNpZ2h0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2hlYWRpbmcsIHNldEhlYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vib29rcywgc2V0RWJvb2tzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Bvdiwgc2V0UG92XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3BvZGNhc3RzLCBzZXRQb2RjYXN0c10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmV0Y2hJbnNpZ2h0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICAgIHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1lYm9va3MveyR7dGFnc31gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHNldEluc2lnaHRzKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBzZXRIZWFkaW5nKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluc2lnaHRzKCk7XG4gICAgICB9LFtdKTtcblxuXG4gIHJldHVybiAoXG48Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1iLTUgbXQtNSB0ZXh0LWNlbnRlclwiIGlkPVwiaW5zaWdodHNcIj5cbntoZWFkaW5nICYmIDxoMj5PdXIgTGF0ZXN0IEluc2lnaHRzPC9oMj59XG48Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgPFJvdyBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAge1xuYWxsSW5zaWdodHMubWFwKChwb3N0KSA9PiB7XG4gIC8vY29uc29sZS5sb2cocG9zdCk7XG4gIGNvbnN0IFR5cGUgPSAgcG9zdFsndHlwZSddO1xuICBjb25zdCBQc2x1ZyA9ICBwb3N0WydzbHVnJ107XG4gIGxldCBMaW5rcztcbiAgaWYoVHlwZSA9PSdwYWdlJyl7XG4gICAgTGlua3MgPSBQc2x1ZztcbiAgfVxuICBlbHNle1xuICAgIExpbmtzID0gVHlwZSArICcvJysgUHNsdWc7XG4gIH1cblxucmV0dXJuIChcbiAgPENvbCBrZXk9e3Bvc3RbJ2lkJ119IHNtPXs2fSBsZz17Nn0geHM9ezZ9IG1kPXs2fT5cbjxkaXYgY2xhc3M9XCJjYXJkIG1iLTMgYm9yZGVyLTBcIiA+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0WydmZWF0dXJlZF9pbWdfc3JjJ119IGNsYXNzPVwiaW1nLWZsdWlkIFwiIGFsdD1cIi4uLlwiIHdpZHRoPXsyMjB9IGhlaWdodD17MjIwfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3RbJ3RpdGxlJ119fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0WydleGNlcnB0J10gfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e0xpbmtzfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICAgPC9Db2w+XG4gIClcbn0pfVxuPC9Sb3c+XG48L0NvbnRhaW5lcj5cbjwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJJbWFnZSIsIkJyZWFkY3J1bWIiLCJDYXJkIiwiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiY29uZmlnRGF0YSIsIkluc2lnaHRzIiwidGFncyIsImFsbEluc2lnaHRzIiwic2V0SW5zaWdodHMiLCJoZWFkaW5nIiwic2V0SGVhZGluZyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZWJvb2tzIiwic2V0RWJvb2tzIiwicG92Iiwic2V0UG92IiwicG9kY2FzdHMiLCJzZXRQb2RjYXN0cyIsImZldGNoSW5zaWdodHMiLCJ1cmwiLCJTRVJWRVJfVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVycm9yIiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInBvc3QiLCJUeXBlIiwiUHNsdWciLCJMaW5rcyIsInNtIiwibGciLCJ4cyIsIm1kIiwiZGl2IiwiY2xhc3MiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg1IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});