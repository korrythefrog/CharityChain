"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/green-futures-foundation/page",{

/***/ "(app-client)/./src/app/green-futures-foundation/page.tsx":
/*!***************************************************!*\
  !*** ./src/app/green-futures-foundation/page.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GreenFuturesFoundation\": function() { return /* binding */ GreenFuturesFoundation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/image/trees.jpg */ \"(app-client)/./src/image/trees.jpg\");\n/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/info-card */ \"(app-client)/./src/components/info-card.tsx\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react */ \"(app-client)/./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ERC20abi.json */ \"(app-client)/./src/app/green-futures-foundation/ERC20abi.json\");\n/* harmony import */ var _TxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxList */ \"(app-client)/./src/app/green-futures-foundation/TxList.js\");\n/* __next_internal_client_entry_do_not_use__ GreenFuturesFoundation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst OPTIONS = [\n    {\n        title: \"Donation History\",\n        description: \"Learning Courses\"\n    },\n    {\n        title: \"Transaction History\",\n        description: \"Expert Instructors\"\n    }\n];\nfunction GreenFuturesFoundation() {\n    _s();\n    const [txs, setTxs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [txs2, setTxs2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [but, setBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);\n        erc20.on(\"Transfer\", (from, to, amount, event)=>{\n            console.log({\n                from,\n                to,\n                amount,\n                event\n            });\n            console.log(button);\n            if (but == \"donate\") {\n                setTxs((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            } else {\n                setTxs2((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            }\n        });\n    }, [\n        \"0xaA771801045F8E0B726c968338e138999e2b333d\"\n    ]);\n    const handleTransfer = async (e)=>{\n        e.preventDefault();\n        const id = e.target.id;\n        console.log(id);\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n        setBut(id);\n        console.log(but);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto max-w-lg px-4 lg:px-0 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Banner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        color: \"blue-gray\",\n                                        className: \"mb-4\",\n                                        children: undefined,\n                                        placeholder: undefined,\n                                        children: \"Green Futures Foundation\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"lead\",\n                                        className: \"mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0\",\n                                        children: \"Environmental Advancement\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Donation History\",\n                                        children: \"Learning Courses\"\n                                    }, \"Donation History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Transaction History\",\n                                        children: \"Expert Instructors\"\n                                    }, \"Transaction History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"donate\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Donate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"buy\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Buy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 167,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n        lineNumber: 88,\n        columnNumber: 7\n    }, this);\n}\n_s(GreenFuturesFoundation, \"MrUxIi+xhc70P4jGTVS5/JxpNx4=\");\n_c = GreenFuturesFoundation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenFuturesFoundation);\nvar _c;\n$RefreshReg$(_c, \"GreenFuturesFoundation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ1M7QUFDTTtBQUNRO0FBRXRCO0FBQ087QUFDVjtBQUNlO0FBRTVDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFTSxTQUFTQyx5QkFBeUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU0sQ0FBQ1UsS0FBS0MsT0FBTyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQkMsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLE1BQU1XLFdBQVcsSUFBSWYsZ0RBQTZCLENBQUNrQixPQUFPQyxRQUFRO1FBQ2xFLE1BQU1DLFFBQVEsSUFBSXBCLDRDQUFlLENBQy9CLDhDQUNBQywyQ0FBUUEsRUFDUmM7UUFHRkssTUFBTUUsRUFBRSxDQUFDLFlBQVksQ0FBQ0MsTUFBTUMsSUFBSUMsUUFBUUMsUUFBVTtZQUNoREMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFTDtnQkFBTUM7Z0JBQUlDO2dCQUFRQztZQUFNO1lBQ3RDQyxRQUFRQyxHQUFHLENBQUNDO1lBQ1osSUFBSWhCLE9BQU8sVUFBVTtnQkFDbkJILE9BQU8sQ0FBQ29CLGFBQWU7MkJBQ2xCQTt3QkFDSDs0QkFDRUMsUUFBUUwsTUFBTU0sZUFBZTs0QkFDN0JUOzRCQUNBQzs0QkFDQUMsUUFBUVEsT0FBT1I7d0JBQ2pCO3FCQUNEO1lBQ0gsT0FDSztnQkFDSGIsUUFBUSxDQUFDa0IsYUFBZTsyQkFDbkJBO3dCQUNIOzRCQUNFQyxRQUFRTCxNQUFNTSxlQUFlOzRCQUM3QlQ7NEJBQ0FDOzRCQUNB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QU9qQixDQUFDO0dBeEpldkM7S0FBQUE7QUEwSmhCLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3g/OGNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdHJlZXMgZnJvbSAnL3NyYy9pbWFnZS90cmVlcy5qcGcnXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvLWNhcmRcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZiYXIsIEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGVyYzIwYWJpIGZyb20gXCIuL0VSQzIwYWJpLmpzb25cIjtcbmltcG9ydCBUeExpc3QgZnJvbSBcIi4vVHhMaXN0XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT1BUSU9OUyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRvbmF0aW9uIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMZWFybmluZyBDb3Vyc2VzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUcmFuc2FjdGlvbiBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwZXJ0IEluc3RydWN0b3JzXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JlZW5GdXR1cmVzRm91bmRhdGlvbigpIHtcbiAgY29uc3QgW3R4cywgc2V0VHhzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3R4czIsIHNldFR4czJdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtidXQsIHNldEJ1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBcIjB4YUE3NzE4MDEwNDVGOEUwQjcyNmM5NjgzMzhlMTM4OTk5ZTJiMzMzZFwiLFxuICAgICAgZXJjMjBhYmksXG4gICAgICBwcm92aWRlclxuICAgICk7XG5cbiAgICBlcmMyMC5vbihcIlRyYW5zZmVyXCIsIChmcm9tLCB0bywgYW1vdW50LCBldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBmcm9tLCB0bywgYW1vdW50LCBldmVudCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbikgXG4gICAgICBpZiAoYnV0ID09IFwiZG9uYXRlXCIpIHtcbiAgICAgICAgc2V0VHhzKChjdXJyZW50VHhzKSA9PiBbXG4gICAgICAgICAgLi4uY3VycmVudFR4cyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eEhhc2g6IGV2ZW50LnRyYW5zYWN0aW9uSGFzaCxcbiAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICAgIGFtb3VudDogU3RyaW5nKGFtb3VudCksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2V0VHhzMigoY3VycmVudFR4cykgPT4gW1xuICAgICAgICAgIC4uLmN1cnJlbnRUeHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhhbW91bnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgXG4gICAgfSlcbiAgfSwgW1wiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCJdKTtcblxuICBjb25zdCBoYW5kbGVUcmFuc2ZlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXCIweGFBNzcxODAxMDQ1RjhFMEI3MjZjOTY4MzM4ZTEzODk5OWUyYjMzM2RcIiwgZXJjMjBhYmksIHNpZ25lcik7XG4gICAgYXdhaXQgZXJjMjAudHJhbnNmZXIoZGF0YS5nZXQoXCJyZWNpcGllbnRcIiksIGRhdGEuZ2V0KFwiYW1vdW50XCIpKTtcblxuICAgIHNldEJ1dChpZCk7XG4gICAgY29uc29sZS5sb2coYnV0KVxuXG4gIH07XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIHB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xMiBtYXgtdy02eGwgbXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cblxuICAgICAgICAgIHsvKiBCYW5uZXIgSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LWxnIHB4LTQgbGc6cHgtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17dHJlZXN9IGFsdD1cIkJhbm5lclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY29sb3I9XCJibHVlLWdyYXlcIiBjbGFzc05hbWU9XCJtYi00XCIgY2hpbGRyZW49e3VuZGVmaW5lZH0gcGxhY2Vob2xkZXI9e3VuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgR3JlZW4gRnV0dXJlcyBGb3VuZGF0aW9uXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwibGVhZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNSBweC00IHRleHQtY2VudGVyIHRleHQteGwgIXRleHQtZ3JheS01MDAgbGc6cHgtMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnZpcm9ubWVudGFsIEFkdmFuY2VtZW50XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENlbnRlcmVkIENhcmRzIHdpdGggRXF1YWwgR2FwICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvM1wiPiB7LyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICA8SW5mb0NhcmQga2V5PSBcIkRvbmF0aW9uIEhpc3RvcnlcIiB0aXRsZT1cIkRvbmF0aW9uIEhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgIExlYXJuaW5nIENvdXJzZXNcbiAgICAgICAgICAgICAgICA8L0luZm9DYXJkPlxuICAgICAgICAgICAgICAgIDxUeExpc3QgdHhzPXt0eHN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvM1wiPiB7LyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICA8SW5mb0NhcmQga2V5PVwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiIHRpdGxlPVwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgRXhwZXJ0IEluc3RydWN0b3JzXG4gICAgICAgICAgICAgICAgPC9JbmZvQ2FyZD4gXG4gICAgICAgICAgICAgICAgPFR4TGlzdCB0eHM9e3R4czJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRyYW5zZmVyfSBpZCA9IFwiZG9uYXRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNpcGllbnQgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gdHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idXR0b24gZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVHJhbnNmZXJ9IGlkID0gXCJidXlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2lwaWVudCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudCB0byB0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgc3VibWl0LWJ1dHRvbiBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JlZW5GdXR1cmVzRm91bmRhdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidHJlZXMiLCJJbmZvQ2FyZCIsIlR5cG9ncmFwaHkiLCJldGhlcnMiLCJlcmMyMGFiaSIsIlR4TGlzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT1BUSU9OUyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJHcmVlbkZ1dHVyZXNGb3VuZGF0aW9uIiwidHhzIiwic2V0VHhzIiwidHhzMiIsInNldFR4czIiLCJidXQiLCJzZXRCdXQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXJjMjAiLCJDb250cmFjdCIsIm9uIiwiZnJvbSIsInRvIiwiYW1vdW50IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwiY3VycmVudFR4cyIsInR4SGFzaCIsInRyYW5zYWN0aW9uSGFzaCIsIlN0cmluZyIsImhhbmRsZVRyYW5zZmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJzZW5kIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNmZXIiLCJnZXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwidmFyaWFudCIsImNvbG9yIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/green-futures-foundation/page.tsx\n"));

/***/ })

});