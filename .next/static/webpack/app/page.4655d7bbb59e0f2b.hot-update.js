"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/green-futures-foundation/page.tsx":
/*!***************************************************!*\
  !*** ./src/app/green-futures-foundation/page.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GreenFuturesFoundation\": function() { return /* binding */ GreenFuturesFoundation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/image/trees.jpg */ \"(app-client)/./src/image/trees.jpg\");\n/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/info-card */ \"(app-client)/./src/components/info-card.tsx\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react */ \"(app-client)/./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ERC20abi.json */ \"(app-client)/./src/app/green-futures-foundation/ERC20abi.json\");\n/* harmony import */ var _TxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxList */ \"(app-client)/./src/app/green-futures-foundation/TxList.js\");\n/* __next_internal_client_entry_do_not_use__ GreenFuturesFoundation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst OPTIONS = [\n    {\n        title: \"Donation History\",\n        description: \"Learning Courses\"\n    },\n    {\n        title: \"Transaction History\",\n        description: \"Expert Instructors\"\n    }\n];\nfunction GreenFuturesFoundation() {\n    _s();\n    const [txs, setTxs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);\n        erc20.on(\"Transfer\", (from, to, amount, event)=>{\n            console.log({\n                from,\n                to,\n                amount,\n                event\n            });\n            setTxs((currentTxs)=>[\n                    ...currentTxs,\n                    {\n                        txHash: event.transactionHash,\n                        from,\n                        to,\n                        amount: String(amount)\n                    }\n                ]);\n        });\n    }, [\n        \"0xaA771801045F8E0B726c968338e138999e2b333d\"\n    ]);\n    const handleTransfer = async (e)=>{\n        e.preventDefault();\n        console.log(e.target);\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto max-w-lg px-4 lg:px-0 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Banner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        color: \"blue-gray\",\n                                        className: \"mb-4\",\n                                        children: undefined,\n                                        placeholder: undefined,\n                                        children: \"Green Futures Foundation\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"lead\",\n                                        className: \"mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0\",\n                                        children: \"Environmental Advancement\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-8\",\n                        children: OPTIONS.map((param)=>/*#__PURE__*/ {\n                            let { title , description  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: title,\n                                        children: description\n                                    }, title, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Donate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Buy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, this);\n}\n_s(GreenFuturesFoundation, \"GdK0w31UssnGJOXjvWpqkSCZUDE=\");\n_c = GreenFuturesFoundation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenFuturesFoundation);\nvar _c;\n$RefreshReg$(_c, \"GreenFuturesFoundation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ1M7QUFDTTtBQUNRO0FBRXRCO0FBQ087QUFDVjtBQUNlO0FBRTVDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFTSxTQUFTQyx5QkFBeUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpDQyxnREFBU0EsQ0FBQyxJQUFNO1FBRWQsTUFBTU8sV0FBVyxJQUFJWCxnREFBNkIsQ0FBQ2MsT0FBT0MsUUFBUTtRQUNsRSxNQUFNQyxRQUFRLElBQUloQiw0Q0FBZSxDQUMvQiw4Q0FDQUMsMkNBQVFBLEVBQ1JVO1FBR0ZLLE1BQU1FLEVBQUUsQ0FBQyxZQUFZLENBQUNDLE1BQU1DLElBQUlDLFFBQVFDLFFBQVU7WUFDaERDLFFBQVFDLEdBQUcsQ0FBQztnQkFBRUw7Z0JBQU1DO2dCQUFJQztnQkFBUUM7WUFBTTtZQUN0Q1osT0FBTyxDQUFDZSxhQUFlO3VCQUNsQkE7b0JBQ0g7d0JBQ0VDLFFBQVFKLE1BQU1LLGVBQWU7d0JBQzdCUjt3QkFDQUM7d0JBQ0FDLFFBQVFPLE9BQU9QO29CQUNqQjtpQkFDRDtRQUNIO0lBQ0YsR0FBRztRQUFDO0tBQTZDO0lBRWpELE1BQU1RLGlCQUFpQixPQUFPQyxJQUFNO1FBQ2xDQSxFQUFFQyxjQUFjO1FBQ2hCUixRQUFRQyxHQUFHLENBQUNNLEVBQUVFLE1BQU07UUFDcEIsTUFBTUMsT0FBTyxJQUFJQyxTQUFTSixFQUFFRSxNQUFNO1FBQ2xDLE1BQU1yQixXQUFXLElBQUlYLGdEQUE2QixDQUFDYyxPQUFPQyxRQUFRO1FBQ2xFLE1BQU1KLFNBQVN3QixJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFDN0MsTUFBTUMsU0FBUyxNQUFNekIsU0FBUzBCLFNBQVM7UUFDdkMsTUFBTXJCLFFBQVEsSUFBSWhCLDRDQUFlLENBQUMsOENBQThDQywyQ0FBUUEsRUFBRW1DO1FBQzFGLE1BQU1wQixNQUFNc0IsUUFBUSxDQUFDTCxLQUFLTSxHQUFHLENBQUMsY0FBY04sS0FBS00sR0FBRyxDQUFDO0lBQ3ZEO0lBSUEscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUdiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUM3QyxtREFBS0E7Z0NBQUMrQyxLQUFLOUMsNERBQUtBO2dDQUFFK0MsS0FBSTs7Ozs7OzBDQUN2Qiw4REFBQ0Y7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDMUMsZ0VBQVVBO3dDQUFDOEMsU0FBUTt3Q0FBS0MsT0FBTTt3Q0FBWUwsV0FBVTt3Q0FBT00sVUFBVUM7d0NBQVdDLGFBQWFEO2tEQUFXOzs7Ozs7a0RBR3pHLDhEQUFDakQsZ0VBQVVBO3dDQUNUOEMsU0FBUTt3Q0FDUkosV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9MLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWnBDLFFBQVE2QyxHQUFHLENBQUMsdUJBQ1g7Z0NBRFksRUFBRTVDLE1BQUssRUFBRUMsWUFBVyxFQUFFO21DQUNsQyw4REFBQ21DO2dDQUFJRCxXQUFVOztvQ0FBUTtrREFDckIsOERBQUMzQyw2REFBUUE7d0NBQWFRLE9BQU9BO2tEQUMxQkM7dUNBRFlEOzs7OztrREFHZiw4REFBQ0osK0NBQU1BO3dDQUFDTyxLQUFLQTs7Ozs7Ozs7Ozs7O3dCQUNWOzs7Ozs7Ozs7Ozs7MEJBSVgsOERBQUMwQztnQkFBS0MsVUFBVXZCOztrQ0FDViw4REFBQ2E7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNZOzRCQUNDQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMZCxXQUFVOzRCQUNWUSxhQUFZOzs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNQO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDWTs0QkFDQ0MsTUFBSzs0QkFDTEMsTUFBSzs0QkFDTGQsV0FBVTs0QkFDVlEsYUFBWTs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDTzt3QkFBT2YsV0FBVTtrQ0FDaEIsNEVBQUNnQjs0QkFDQ0gsTUFBSzs0QkFDTGIsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNVO2dCQUFLQyxVQUFVdkI7O2tDQUNkLDhEQUFDYTt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ1k7NEJBQ0NDLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xkLFdBQVU7NEJBQ1ZRLGFBQVk7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ1A7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNZOzRCQUNDQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMZCxXQUFVOzRCQUNWUSxhQUFZOzs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNPO3dCQUFPZixXQUFVO2tDQUNoQiw0RUFBQ2dCOzRCQUNDSCxNQUFLOzRCQUNMYixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQixDQUFDO0dBN0hlakM7S0FBQUE7QUErSGhCLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3g/OGNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdHJlZXMgZnJvbSAnL3NyYy9pbWFnZS90cmVlcy5qcGcnXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvLWNhcmRcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZiYXIsIEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGVyYzIwYWJpIGZyb20gXCIuL0VSQzIwYWJpLmpzb25cIjtcbmltcG9ydCBUeExpc3QgZnJvbSBcIi4vVHhMaXN0XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT1BUSU9OUyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRvbmF0aW9uIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMZWFybmluZyBDb3Vyc2VzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUcmFuc2FjdGlvbiBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwZXJ0IEluc3RydWN0b3JzXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JlZW5GdXR1cmVzRm91bmRhdGlvbigpIHtcbiAgY29uc3QgW3R4cywgc2V0VHhzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBcIjB4YUE3NzE4MDEwNDVGOEUwQjcyNmM5NjgzMzhlMTM4OTk5ZTJiMzMzZFwiLFxuICAgICAgZXJjMjBhYmksXG4gICAgICBwcm92aWRlclxuICAgICk7XG5cbiAgICBlcmMyMC5vbihcIlRyYW5zZmVyXCIsIChmcm9tLCB0bywgYW1vdW50LCBldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBmcm9tLCB0bywgYW1vdW50LCBldmVudCB9KTtcbiAgICAgIHNldFR4cygoY3VycmVudFR4cykgPT4gW1xuICAgICAgICAuLi5jdXJyZW50VHhzLFxuICAgICAgICB7XG4gICAgICAgICAgdHhIYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICBhbW91bnQ6IFN0cmluZyhhbW91bnQpLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgfSlcbiAgfSwgW1wiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCJdKTtcblxuICBjb25zdCBoYW5kbGVUcmFuc2ZlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGVyYzIwID0gbmV3IGV0aGVycy5Db250cmFjdChcIjB4YUE3NzE4MDEwNDVGOEUwQjcyNmM5NjgzMzhlMTM4OTk5ZTJiMzMzZFwiLCBlcmMyMGFiaSwgc2lnbmVyKTtcbiAgICBhd2FpdCBlcmMyMC50cmFuc2ZlcihkYXRhLmdldChcInJlY2lwaWVudFwiKSwgZGF0YS5nZXQoXCJhbW91bnRcIikpO1xuICB9O1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgbWF4LXctNnhsIG14LWF1dG8gaXRlbXMtY2VudGVyXCI+XG5cbiAgICAgICAgICB7LyogQmFubmVyIEltYWdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy1sZyBweC00IGxnOnB4LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RyZWVzfSBhbHQ9XCJCYW5uZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNvbG9yPVwiYmx1ZS1ncmF5XCIgY2xhc3NOYW1lPVwibWItNFwiIGNoaWxkcmVuPXt1bmRlZmluZWR9IHBsYWNlaG9sZGVyPXt1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgIEdyZWVuIEZ1dHVyZXMgRm91bmRhdGlvblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImxlYWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgcHgtNCB0ZXh0LWNlbnRlciB0ZXh0LXhsICF0ZXh0LWdyYXktNTAwIGxnOnB4LTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBBZHZhbmNlbWVudFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDZW50ZXJlZCBDYXJkcyB3aXRoIEVxdWFsIEdhcCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgIHtPUFRJT05TLm1hcCgoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zXCI+IHsvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovfVxuICAgICAgICAgICAgICAgIDxJbmZvQ2FyZCBrZXk9e3RpdGxlfSB0aXRsZT17dGl0bGV9PlxuICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvSW5mb0NhcmQ+XG4gICAgICAgICAgICAgICAgPFR4TGlzdCB0eHM9e3R4c30vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRyYW5zZmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2lwaWVudCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudCB0byB0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgc3VibWl0LWJ1dHRvbiBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVUcmFuc2Zlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNpcGllbnQgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gdHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idXR0b24gZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBCdXlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyZWVuRnV0dXJlc0ZvdW5kYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInRyZWVzIiwiSW5mb0NhcmQiLCJUeXBvZ3JhcGh5IiwiZXRoZXJzIiwiZXJjMjBhYmkiLCJUeExpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9QVElPTlMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiR3JlZW5GdXR1cmVzRm91bmRhdGlvbiIsInR4cyIsInNldFR4cyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJlcmMyMCIsIkNvbnRyYWN0Iiwib24iLCJmcm9tIiwidG8iLCJhbW91bnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VHhzIiwidHhIYXNoIiwidHJhbnNhY3Rpb25IYXNoIiwiU3RyaW5nIiwiaGFuZGxlVHJhbnNmZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJzZW5kIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNmZXIiLCJnZXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwidmFyaWFudCIsImNvbG9yIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJwbGFjZWhvbGRlciIsIm1hcCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJmb290ZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/green-futures-foundation/page.tsx\n"));

/***/ })

});