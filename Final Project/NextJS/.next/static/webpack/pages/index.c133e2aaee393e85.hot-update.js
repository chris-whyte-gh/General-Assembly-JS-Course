"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_hikes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hikes */ \"./components/hikes.js\");\n/* harmony import */ var _components_owen_wilson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/owen_wilson */ \"./components/owen_wilson.js\");\n/* harmony import */ var _components_dad_jokes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/dad_jokes */ \"./components/dad_jokes.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Destructuring the api response to use useState. This allows us to access and change variables\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), /*#__PURE__*/ apiResponse = ref[0], setapiResponse = ref[1];\n    // So we know which api is called when the button is clicked.\n    //This is the key, the value is in the component\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), apiType = ref1[0], setapiType = ref1[1];\n    // console.log(apiType);\n    var renderApiResponse = function() {\n        // Handling scenario where we haven't received data from API yet. The page is rendering immediately before the API response is ready\n        if (apiResponse === null) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n        } else if (apiType === \"owenWilson\") {\n            console.log(apiResponse);\n            //console.log(apiType);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Wow!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        src: apiResponse,\n                        controls: true,\n                        style: {\n                            width: \"300px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true);\n        } else if (apiType === \"dadJokes\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Is that the Joke?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this),\n                    apiResponse\n                ]\n            }, void 0, true);\n        } else if (apiType === \"hikes\") {\n            var _this1 = _this;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Hikes in your state\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this),\n                    apiResponse.map(function(hike) {\n                        {\n                        /* Adding a unique key because we're creating a new item through our map function, and this is how the shadow DOM knows divs are unique */ }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: hike.activityName\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: hike.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: hike.imagesArray,\n                                    width: \"150px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, hike.activityName, true, {\n                            fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true);\n        } else {\n            throw new Error(\"Not a valid API call\");\n        }\n    };\n    //apiResponse ? JSON.stringify(apiResponse) : null;\n    //return statement use brackets use {JSX}\n    //   return (\n    //     { apiResponse ? JSON.stringify(apiResponse) : null }\n    //)\n    //Everything in return is the render function\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-4d8cb960ec594577\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-4d8cb960ec594577\",\n                        children: \"My Final Project for General Assembly\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-4d8cb960ec594577\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-4d8cb960ec594577\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-4d8cb960ec594577\" + \" \" + \"title\",\n                        children: \"General Assembly Final Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4d8cb960ec594577\" + \" \" + \"grid\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-4d8cb960ec594577\" + \" \" + \"card\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_owen_wilson__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    //component props\n                                    setapiResponse: setapiResponse,\n                                    setapiType: setapiType,\n                                    anything: 1.2\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-4d8cb960ec594577\" + \" \" + \"card\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dad_jokes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    setapiResponse: setapiResponse,\n                                    setapiType: setapiType\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-4d8cb960ec594577\" + \" \" + \"card\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hikes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    setapiResponse: setapiResponse,\n                                    setapiType: setapiType\n                                }, void 0, false, {\n                                    fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4d8cb960ec594577\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-4d8cb960ec594577\" + \" \" + \"solution\",\n                            children: renderApiResponse()\n                        }, void 0, false, {\n                            fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bd9fb2ee8faa4be\",\n                children: \".container.jsx-4d8cb960ec594577{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-4d8cb960ec594577{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4d8cb960ec594577{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-4d8cb960ec594577 img.jsx-4d8cb960ec594577{margin-left:.5rem}footer.jsx-4d8cb960ec594577 a.jsx-4d8cb960ec594577{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-4d8cb960ec594577{color:inherit;text-decoration:none}.title.jsx-4d8cb960ec594577 a.jsx-4d8cb960ec594577{color:#0070f3;text-decoration:none}.title.jsx-4d8cb960ec594577 a.jsx-4d8cb960ec594577:hover,.title.jsx-4d8cb960ec594577 a.jsx-4d8cb960ec594577:focus,.title.jsx-4d8cb960ec594577 a.jsx-4d8cb960ec594577:active{text-decoration:underline}.title.jsx-4d8cb960ec594577{margin:0;line-height:1.15;font-size:4rem}.title.jsx-4d8cb960ec594577,.description.jsx-4d8cb960ec594577{text-align:center}.description.jsx-4d8cb960ec594577{line-height:1.5;font-size:1.5rem}code.jsx-4d8cb960ec594577{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-4d8cb960ec594577{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-4d8cb960ec594577{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-4d8cb960ec594577:hover,.card.jsx-4d8cb960ec594577:focus,.card.jsx-4d8cb960ec594577:active{color:#0070f3;border-color:#0070f3}.card.jsx-4d8cb960ec594577 h3.jsx-4d8cb960ec594577{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-4d8cb960ec594577 p.jsx-4d8cb960ec594577{margin:0;font-size:1.25rem;line-height:1.5}img.jsx-4d8cb960ec594577{margin:40px 0 0 0}.logo.jsx-4d8cb960ec594577{height:1em}@media(max-width:600px){.grid.jsx-4d8cb960ec594577{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2323726f93dd16ea\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cwhyte/Desktop/GeneralAssembly-JS/Final Project/NextJS/pages/index.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"7udYEMzCx5sfzcpmAkRC60B4jf0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixpQkFBaUI7b0NBQ2pCSyxjQUFjLEVBQUVBLGNBQWM7b0NBQzlCRSxVQUFVLEVBQUVBLFVBQVU7b0NBQ3RCd0IsUUFBUSxFQUFFLEdBQUc7Ozs7O3dDQUNiOzs7OztvQ0FDRTswQ0FDTiw4REFBQ2IsS0FBRzswRUFBVyxNQUFNOzBDQUNuQiw0RUFBQ2pCLDZEQUFTO29DQUNSSSxjQUFjLEVBQUVBLGNBQWM7b0NBQzlCRSxVQUFVLEVBQUVBLFVBQVU7Ozs7O3dDQUN0Qjs7Ozs7b0NBQ0U7MENBQ04sOERBQUNXLEtBQUc7MEVBQVcsTUFBTTswQ0FDbkIsNEVBQUNuQix5REFBSztvQ0FBQ00sY0FBYyxFQUFFQSxjQUFjO29DQUFFRSxVQUFVLEVBQUVBLFVBQVU7Ozs7O3dDQUFJOzs7OztvQ0FDN0Q7Ozs7Ozs0QkFDRjtrQ0FDTiw4REFBQ1csS0FBRzs7a0NBR0YsNEVBQUNBLEtBQUc7c0VBQVcsVUFBVTtzQ0FBRVYsaUJBQWlCLEVBQUU7Ozs7O2dDQUFPOzs7Ozs0QkFDakQ7Ozs7OztvQkFDRDs7Ozs7Ozs7Ozs7Ozs7WUF3SkgsQ0FDTjtDQUNIO0dBaFF1QkwsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIaWtlcyBmcm9tICcuLi9jb21wb25lbnRzL2hpa2VzJ1xuaW1wb3J0IE93ZW5fd2lsc29uIGZyb20gJy4uL2NvbXBvbmVudHMvb3dlbl93aWxzb24nXG5pbXBvcnQgRGFkX2pva2VzIGZyb20gJy4uL2NvbXBvbmVudHMvZGFkX2pva2VzJ1xuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZXN0cnVjdHVyaW5nIHRoZSBhcGkgcmVzcG9uc2UgdG8gdXNlIHVzZVN0YXRlLiBUaGlzIGFsbG93cyB1cyB0byBhY2Nlc3MgYW5kIGNoYW5nZSB2YXJpYWJsZXNcbiAgY29uc3QgW2FwaVJlc3BvbnNlLCBzZXRhcGlSZXNwb25zZV0gPSB1c2VTdGF0ZShudWxsKVxuICAvLyBTbyB3ZSBrbm93IHdoaWNoIGFwaSBpcyBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gIC8vVGhpcyBpcyB0aGUga2V5LCB0aGUgdmFsdWUgaXMgaW4gdGhlIGNvbXBvbmVudFxuICBjb25zdCBbYXBpVHlwZSwgc2V0YXBpVHlwZV0gPSB1c2VTdGF0ZShudWxsKVxuICAvLyBjb25zb2xlLmxvZyhhcGlUeXBlKTtcblxuICBjb25zdCByZW5kZXJBcGlSZXNwb25zZSA9ICgpID0+IHtcbiAgICAvLyBIYW5kbGluZyBzY2VuYXJpbyB3aGVyZSB3ZSBoYXZlbid0IHJlY2VpdmVkIGRhdGEgZnJvbSBBUEkgeWV0LiBUaGUgcGFnZSBpcyByZW5kZXJpbmcgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBBUEkgcmVzcG9uc2UgaXMgcmVhZHlcbiAgICBpZiAoYXBpUmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAoPD5cbiAgICAgIHsvKiBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIEFQSSBpcyBub3QgcmVhZHkgKi99XG4gICAgICA8Lz4pXG4gICAgfSBlbHNlIGlmIChhcGlUeXBlID09PSBcIm93ZW5XaWxzb25cIikge1xuICAgICAgY29uc29sZS5sb2coYXBpUmVzcG9uc2UpO1xuICAgICAgLy9jb25zb2xlLmxvZyhhcGlUeXBlKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxoMj5Xb3chPC9oMj5cbiAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXJcbiAgICAgICAgICBzcmM9e2FwaVJlc3BvbnNlfVxuICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPC8+XG4pXG4gICAgfSBlbHNlIGlmIChhcGlUeXBlID09PSBcImRhZEpva2VzXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPklzIHRoYXQgdGhlIEpva2U/PC9oMj5cbiAgICAgICAgICB7YXBpUmVzcG9uc2V9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGFwaVR5cGUgPT09IFwiaGlrZXNcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogVGhpcyB3aWxsIHNvbWV0aW1lcyBlcnJvciBiZWNhdXNlIGluZGV4LmpzIGxvYWRzIGJlZm9yZSB0aGUgYXBpIGlzIGNhbGxlZCAqL31cbiAgICAgICAgICA8aDI+SGlrZXMgaW4geW91ciBzdGF0ZTwvaDI+XG4gICAgICAgICAge2FwaVJlc3BvbnNlLm1hcCgoaGlrZSkgPT4ge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiBBZGRpbmcgYSB1bmlxdWUga2V5IGJlY2F1c2Ugd2UncmUgY3JlYXRpbmcgYSBuZXcgaXRlbSB0aHJvdWdoIG91ciBtYXAgZnVuY3Rpb24sIGFuZCB0aGlzIGlzIGhvdyB0aGUgc2hhZG93IERPTSBrbm93cyBkaXZzIGFyZSB1bmlxdWUgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtoaWtlLmFjdGl2aXR5TmFtZX0+XG4gICAgICAgICAgICAgICAgPGgyPntoaWtlLmFjdGl2aXR5TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPntoaWtlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aGlrZS5pbWFnZXNBcnJheX0gd2lkdGg9XCIxNTBweFwiPjwvaW1nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB2YWxpZCBBUEkgY2FsbFwiKTtcbiAgICB9XG5cbiAgfVxuICAgIC8vYXBpUmVzcG9uc2UgPyBKU09OLnN0cmluZ2lmeShhcGlSZXNwb25zZSkgOiBudWxsO1xuXG4gICAgLy9yZXR1cm4gc3RhdGVtZW50IHVzZSBicmFja2V0cyB1c2Uge0pTWH1cbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgeyBhcGlSZXNwb25zZSA/IEpTT04uc3RyaW5naWZ5KGFwaVJlc3BvbnNlKSA6IG51bGwgfVxuICAgIC8vKVxuXG5cbiAgLy9FdmVyeXRoaW5nIGluIHJldHVybiBpcyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgRmluYWwgUHJvamVjdCBmb3IgR2VuZXJhbCBBc3NlbWJseTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkdlbmVyYWwgQXNzZW1ibHkgRmluYWwgUHJvamVjdDwvaDE+XG5cbiAgICAgICAgey8qIENhbiBtYWtlIGEgYnV0dG9uIGNvbXBvbmVudCB3aXRoIGEgazp2IHByb3AgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPE93ZW5fd2lsc29uXG4gICAgICAgICAgICAgIC8vY29tcG9uZW50IHByb3BzXG4gICAgICAgICAgICAgIHNldGFwaVJlc3BvbnNlPXtzZXRhcGlSZXNwb25zZX1cbiAgICAgICAgICAgICAgc2V0YXBpVHlwZT17c2V0YXBpVHlwZX1cbiAgICAgICAgICAgICAgYW55dGhpbmc9ezEuMn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8RGFkX2pva2VzXG4gICAgICAgICAgICAgIHNldGFwaVJlc3BvbnNlPXtzZXRhcGlSZXNwb25zZX1cbiAgICAgICAgICAgICAgc2V0YXBpVHlwZT17c2V0YXBpVHlwZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8SGlrZXMgc2V0YXBpUmVzcG9uc2U9e3NldGFwaVJlc3BvbnNlfSBzZXRhcGlUeXBlPXtzZXRhcGlUeXBlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Lyoge2FwaVJlc3BvbnNlID8gSlNPTi5zdHJpbmdpZnkoYXBpUmVzcG9uc2UpIDogbnVsbH0gKi99XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbHV0aW9uXCI+e3JlbmRlckFwaVJlc3BvbnNlKCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjogNDBweCAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJIaWtlcyIsIk93ZW5fd2lsc29uIiwiRGFkX2pva2VzIiwiUmVhY3RBdWRpb1BsYXllciIsIkhvbWUiLCJhcGlSZXNwb25zZSIsInNldGFwaVJlc3BvbnNlIiwiYXBpVHlwZSIsInNldGFwaVR5cGUiLCJyZW5kZXJBcGlSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoMiIsInNyYyIsImNvbnRyb2xzIiwic3R5bGUiLCJ3aWR0aCIsIm1hcCIsImhpa2UiLCJkaXYiLCJhY3Rpdml0eU5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJpbWciLCJpbWFnZXNBcnJheSIsIkVycm9yIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImFueXRoaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});