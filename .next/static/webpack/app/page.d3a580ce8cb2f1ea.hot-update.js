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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GreenFuturesFoundation\": function() { return /* binding */ GreenFuturesFoundation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/image/trees.jpg */ \"(app-client)/./src/image/trees.jpg\");\n/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/info-card */ \"(app-client)/./src/components/info-card.tsx\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react */ \"(app-client)/./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ERC20abi.json */ \"(app-client)/./src/app/green-futures-foundation/ERC20abi.json\");\n/* harmony import */ var _TxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxList */ \"(app-client)/./src/app/green-futures-foundation/TxList.js\");\n/* __next_internal_client_entry_do_not_use__ GreenFuturesFoundation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst OPTIONS = [\n    {\n        title: \"Donation History\",\n        description: \"Learning Courses\"\n    },\n    {\n        title: \"Transaction History\",\n        description: \"Expert Instructors\"\n    }\n];\nfunction GreenFuturesFoundation() {\n    _s();\n    const [txs, setTxs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [txs2, setTxs2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(\"re-render\");\n    const [but, setBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);\n        erc20.on(\"Transfer\", (from, to, amount, event)=>{\n            //  console.log({ from, to, amount, event });\n            console.log(but);\n            // if isLoading = false {}\n            if (but == \"donate\") {\n                setTxs((currentTxs)=>{\n                    // isLoading = false\n                    return [\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ];\n                });\n            } else if (but == \"buy\") {\n                setTxs2((currentTxs)=>{\n                    // isLoading = false\n                    return [\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ];\n                });\n            }\n        });\n    }, [\n        \"0xaA771801045F8E0B726c968338e138999e2b333d\",\n        but\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(txs);\n        console.log(txs2);\n    }, [\n        txs,\n        txs2\n    ]);\n    const handleTransfer = async (e)=>{\n        e.preventDefault();\n        const formId = e.target.id;\n        //console.log(id)\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n        setBut(formId);\n    };\n    const handleTransfer2 = async (e)=>{\n        e.preventDefault();\n        const formId = e.target.id;\n        //console.log(id)\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n        setBut(formId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto max-w-lg px-4 lg:px-0 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Banner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        color: \"blue-gray\",\n                                        className: \"mb-4\",\n                                        children: undefined,\n                                        placeholder: undefined,\n                                        children: \"Green Futures Foundation\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"lead\",\n                                        className: \"mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0\",\n                                        children: \"Environmental Advancement\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/3\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    title: \"Transaction History\",\n                                    children: \"Expert Instructors\"\n                                }, \"Transaction History\", false, {\n                                    fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    txs: txs2\n                                }, void 0, false, {\n                                    fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"donate\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Donate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer2,\n                id: \"buy\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 173,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Buy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 181,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 163,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n        lineNumber: 107,\n        columnNumber: 7\n    }, this);\n}\n_s(GreenFuturesFoundation, \"mwFtTpJE89DjCRDI47p+t0D+9+I=\");\n_c = GreenFuturesFoundation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenFuturesFoundation);\nvar _c;\n$RefreshReg$(_c, \"GreenFuturesFoundation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ1M7QUFDTTtBQUNRO0FBRXRCO0FBQ087QUFDVjtBQUNlO0FBRTVDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFTSxTQUFTQyx5QkFBeUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DVSxRQUFRQyxHQUFHLENBQUM7SUFFWixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR2IsK0NBQVFBLENBQUM7SUFFL0JDLGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYSxXQUFXLElBQUlqQixnREFBNkIsQ0FBQ29CLE9BQU9DLFFBQVE7UUFDbEUsTUFBTUMsUUFBUSxJQUFJdEIsNENBQWUsQ0FDL0IsOENBQ0FDLDJDQUFRQSxFQUNSZ0I7UUFHRkssTUFBTUUsRUFBRSxDQUFDLFlBQVksQ0FBQ0MsTUFBTUMsSUFBSUMsUUFBUUMsUUFBVTtZQUNsRCw2Q0FBNkM7WUFDM0NmLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWiwwQkFBMEI7WUFDMUIsSUFBSUEsT0FBTyxVQUFVO2dCQUNuQkwsT0FBTyxDQUFDbUIsYUFBZTtvQkFDckIsb0JBQW9CO29CQUNwQixPQUFPOzJCQUNKQTt3QkFDSDs0QkFDRUMsUUFBUUYsTUFBTUcsZUFBZTs0QkFDN0JOOzRCQUNBQzs0QkFDQUMsUUFBUUssT0FBT0w7d0JBQ2pCO3FCQUNEO2dCQUFBO1lBQ0gsT0FDSyxJQUFJWixPQUFPLE9BQU87Z0JBQ3JCSCxRQUFRLENBQUNpQixhQUFlO29CQUN0QixvQkFBb0I7b0JB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Ozs7OztrQ0FHaEIsOERBQUNNO3dCQUFPZCxXQUFVO2tDQUNoQiw0RUFBQ2U7NEJBQ0NILE1BQUs7NEJBQ0xaLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDUztnQkFBS0MsVUFBVVo7Z0JBQWlCUixJQUFLOztrQ0FDcEMsOERBQUNXO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ0MsTUFBSzs0QkFDTEMsTUFBSzs0QkFDTGIsV0FBVTs0QkFDVlEsYUFBWTs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDUDt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQ0NDLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xiLFdBQVU7NEJBQ1ZRLGFBQVk7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ007d0JBQU9kLFdBQVU7a0NBQ2hCLDRFQUFDZTs0QkFDQ0gsTUFBSzs0QkFDTFosV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakIsQ0FBQztHQXRLZXhDO0tBQUFBO0FBd0toQiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ3JlZW4tZnV0dXJlcy1mb3VuZGF0aW9uL3BhZ2UudHN4PzhjZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHRyZWVzIGZyb20gJy9zcmMvaW1hZ2UvdHJlZXMuanBnJ1xuaW1wb3J0IEluZm9DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvaW5mby1jYXJkXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyLCBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzXCJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBlcmMyMGFiaSBmcm9tIFwiLi9FUkMyMGFiaS5qc29uXCI7XG5pbXBvcnQgVHhMaXN0IGZyb20gXCIuL1R4TGlzdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE9QVElPTlMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEb25hdGlvbiBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGVhcm5pbmcgQ291cnNlc1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkV4cGVydCBJbnN0cnVjdG9yc1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdyZWVuRnV0dXJlc0ZvdW5kYXRpb24oKSB7XG4gIGNvbnN0IFt0eHMsIHNldFR4c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0eHMyLCBzZXRUeHMyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG5cbiAgY29uc3QgW2J1dCwgc2V0QnV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IGVyYzIwID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIFwiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCIsXG4gICAgICBlcmMyMGFiaSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcblxuICAgIGVyYzIwLm9uKFwiVHJhbnNmZXJcIiwgKGZyb20sIHRvLCBhbW91bnQsIGV2ZW50KSA9PiB7XG4gICAgLy8gIGNvbnNvbGUubG9nKHsgZnJvbSwgdG8sIGFtb3VudCwgZXZlbnQgfSk7XG4gICAgICBjb25zb2xlLmxvZyhidXQpXG4gICAgICAvLyBpZiBpc0xvYWRpbmcgPSBmYWxzZSB7fVxuICAgICAgaWYgKGJ1dCA9PSBcImRvbmF0ZVwiKSB7XG4gICAgICAgIHNldFR4cygoY3VycmVudFR4cykgPT4ge1xuICAgICAgICAgIC8vIGlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5jdXJyZW50VHhzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR4SGFzaDogZXZlbnQudHJhbnNhY3Rpb25IYXNoLFxuICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgYW1vdW50OiBTdHJpbmcoYW1vdW50KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChidXQgPT0gXCJidXlcIikge1xuICAgICAgICBzZXRUeHMyKChjdXJyZW50VHhzKSA9PiB7XG4gICAgICAgICAgLy8gaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmN1cnJlbnRUeHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhhbW91bnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19KTtcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbXCIweGFBNzcxODAxMDQ1RjhFMEI3MjZjOTY4MzM4ZTEzODk5OWUyYjMzM2RcIiwgYnV0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0eHMpO1xuICAgIGNvbnNvbGUubG9nKHR4czIpO1xuICB9LCBbdHhzLCB0eHMyXSlcbiAgY29uc3QgaGFuZGxlVHJhbnNmZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtSWQgPSBlLnRhcmdldC5pZFxuICAgIC8vY29uc29sZS5sb2coaWQpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFwiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCIsIGVyYzIwYWJpLCBzaWduZXIpO1xuICAgIGF3YWl0IGVyYzIwLnRyYW5zZmVyKGRhdGEuZ2V0KFwicmVjaXBpZW50XCIpLCBkYXRhLmdldChcImFtb3VudFwiKSk7XG4gICAgc2V0QnV0KGZvcm1JZClcbiBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUcmFuc2ZlcjIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtSWQgPSBlLnRhcmdldC5pZFxuICAgIC8vY29uc29sZS5sb2coaWQpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFwiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCIsIGVyYzIwYWJpLCBzaWduZXIpO1xuICAgIGF3YWl0IGVyYzIwLnRyYW5zZmVyKGRhdGEuZ2V0KFwicmVjaXBpZW50XCIpLCBkYXRhLmdldChcImFtb3VudFwiKSk7XG4gICAgc2V0QnV0KGZvcm1JZClcbiBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgcHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIG1heC13LTZ4bCBteC1hdXRvIGl0ZW1zLWNlbnRlclwiPlxuXG4gICAgICAgICAgey8qIEJhbm5lciBJbWFnZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctbGcgcHgtNCBsZzpweC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0cmVlc30gYWx0PVwiQmFubmVyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjb2xvcj1cImJsdWUtZ3JheVwiIGNsYXNzTmFtZT1cIm1iLTRcIiBjaGlsZHJlbj17dW5kZWZpbmVkfSBwbGFjZWhvbGRlcj17dW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICBHcmVlbiBGdXR1cmVzIEZvdW5kYXRpb25cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsZWFkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi01IHB4LTQgdGV4dC1jZW50ZXIgdGV4dC14bCAhdGV4dC1ncmF5LTUwMCBsZzpweC0wXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVudmlyb25tZW50YWwgQWR2YW5jZW1lbnRcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ2VudGVyZWQgQ2FyZHMgd2l0aCBFcXVhbCBHYXAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zXCI+IHsvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovfVxuICAgICAgICAgICAgICAgIDxJbmZvQ2FyZCBrZXk9XCJUcmFuc2FjdGlvbiBIaXN0b3J5XCIgdGl0bGU9XCJUcmFuc2FjdGlvbiBIaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICBFeHBlcnQgSW5zdHJ1Y3RvcnNcbiAgICAgICAgICAgICAgICA8L0luZm9DYXJkPiBcbiAgICAgICAgICAgICAgICA8VHhMaXN0IHR4cz17dHhzMn0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVHJhbnNmZXJ9IGlkID0gXCJkb25hdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgYmxvY2sgdy1mdWxsIGZvY3VzOnJpbmcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2lwaWVudCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50IHRvIHRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnV0dG9uIGZvY3VzOnJpbmcgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVHJhbnNmZXIyfSBpZCA9IFwiYnV5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNpcGllbnQgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gdHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idXR0b24gZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBCdXlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyZWVuRnV0dXJlc0ZvdW5kYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInRyZWVzIiwiSW5mb0NhcmQiLCJUeXBvZ3JhcGh5IiwiZXRoZXJzIiwiZXJjMjBhYmkiLCJUeExpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9QVElPTlMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiR3JlZW5GdXR1cmVzRm91bmRhdGlvbiIsInR4cyIsInNldFR4cyIsInR4czIiLCJzZXRUeHMyIiwiY29uc29sZSIsImxvZyIsImJ1dCIsInNldEJ1dCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJlcmMyMCIsIkNvbnRyYWN0Iiwib24iLCJmcm9tIiwidG8iLCJhbW91bnQiLCJldmVudCIsImN1cnJlbnRUeHMiLCJ0eEhhc2giLCJ0cmFuc2FjdGlvbkhhc2giLCJTdHJpbmciLCJoYW5kbGVUcmFuc2ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1JZCIsInRhcmdldCIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwic2VuZCIsInNpZ25lciIsImdldFNpZ25lciIsInRyYW5zZmVyIiwiZ2V0IiwiaGFuZGxlVHJhbnNmZXIyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsInZhcmlhbnQiLCJjb2xvciIsImNoaWxkcmVuIiwidW5kZWZpbmVkIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiZm9vdGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/green-futures-foundation/page.tsx\n"));

/***/ })

});