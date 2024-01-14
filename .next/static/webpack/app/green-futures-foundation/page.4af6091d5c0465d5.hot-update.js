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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GreenFuturesFoundation\": function() { return /* binding */ GreenFuturesFoundation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/image/trees.jpg */ \"(app-client)/./src/image/trees.jpg\");\n/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/info-card */ \"(app-client)/./src/components/info-card.tsx\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react */ \"(app-client)/./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ERC20abi.json */ \"(app-client)/./src/app/green-futures-foundation/ERC20abi.json\");\n/* harmony import */ var _TxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxList */ \"(app-client)/./src/app/green-futures-foundation/TxList.js\");\n/* __next_internal_client_entry_do_not_use__ GreenFuturesFoundation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst OPTIONS = [\n    {\n        title: \"Donation History\",\n        description: \"Learning Courses\"\n    },\n    {\n        title: \"Transaction History\",\n        description: \"Expert Instructors\"\n    }\n];\nfunction GreenFuturesFoundation() {\n    _s();\n    const [txs, setTxs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [txs2, setTxs2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [but, setBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);\n        erc20.on(\"Transfer\", (from, to, amount, event)=>{\n            console.log({\n                from,\n                to,\n                amount,\n                event\n            });\n            console.log(but);\n            if (but == \"donate\") {\n                setTxs((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            } else {\n                setTxs2((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            }\n        });\n    }, [\n        \"0xaA771801045F8E0B726c968338e138999e2b333d\"\n    ]);\n    const handleTransfer = async (e)=>{\n        e.preventDefault();\n        const id = e.target.id;\n        console.log(id);\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n        setBut(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto max-w-lg px-4 lg:px-0 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Banner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        color: \"blue-gray\",\n                                        className: \"mb-4\",\n                                        children: undefined,\n                                        placeholder: undefined,\n                                        children: \"Green Futures Foundation\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"lead\",\n                                        className: \"mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0\",\n                                        children: \"Environmental Advancement\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Donation History\",\n                                        children: \"Learning Courses\"\n                                    }, \"Donation History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Transaction History\",\n                                        children: \"Expert Instructors\"\n                                    }, \"Transaction History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"donate\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Donate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"buy\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Buy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 7\n    }, this);\n}\n_s(GreenFuturesFoundation, \"MrUxIi+xhc70P4jGTVS5/JxpNx4=\");\n_c = GreenFuturesFoundation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenFuturesFoundation);\nvar _c;\n$RefreshReg$(_c, \"GreenFuturesFoundation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ1M7QUFDTTtBQUNRO0FBRXRCO0FBQ087QUFDVjtBQUNlO0FBRTVDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFTSxTQUFTQyx5QkFBeUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU0sQ0FBQ1UsS0FBS0MsT0FBTyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQkMsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLE1BQU1XLFdBQVcsSUFBSWYsZ0RBQTZCLENBQUNrQixPQUFPQyxRQUFRO1FBQ2xFLE1BQU1DLFFBQVEsSUFBSXBCLDRDQUFlLENBQy9CLDhDQUNBQywyQ0FBUUEsRUFDUmM7UUFHRkssTUFBTUUsRUFBRSxDQUFDLFlBQVksQ0FBQ0MsTUFBTUMsSUFBSUMsUUFBUUMsUUFBVTtZQUNoREMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFTDtnQkFBTUM7Z0JBQUlDO2dCQUFRQztZQUFNO1lBQ3RDQyxRQUFRQyxHQUFHLENBQUNmO1lBQ1osSUFBSUEsT0FBTyxVQUFVO2dCQUNuQkgsT0FBTyxDQUFDbUIsYUFBZTsyQkFDbEJBO3dCQUNIOzRCQUNFQyxRQUFRSixNQUFNSyxlQUFlOzRCQUM3QlI7NEJBQ0FDOzRCQUNBQyxRQUFRTyxPQUFPUDt3QkFDakI7cUJBQ0Q7WUFDSCxPQUNLO2dCQUNIYixRQUFRLENBQUNpQixhQUFlOzJCQUNuQkE7d0JBQ0g7NEJBQ0VDLFFBQVFKLE1BQU1LLGVBQWU7NEJBQzdCUjs0QkFDQUM7NEJBQ0FD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QiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ3JlZW4tZnV0dXJlcy1mb3VuZGF0aW9uL3BhZ2UudHN4PzhjZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHRyZWVzIGZyb20gJy9zcmMvaW1hZ2UvdHJlZXMuanBnJ1xuaW1wb3J0IEluZm9DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvaW5mby1jYXJkXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyLCBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzXCJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBlcmMyMGFiaSBmcm9tIFwiLi9FUkMyMGFiaS5qc29uXCI7XG5pbXBvcnQgVHhMaXN0IGZyb20gXCIuL1R4TGlzdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE9QVElPTlMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEb25hdGlvbiBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGVhcm5pbmcgQ291cnNlc1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkV4cGVydCBJbnN0cnVjdG9yc1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdyZWVuRnV0dXJlc0ZvdW5kYXRpb24oKSB7XG4gIGNvbnN0IFt0eHMsIHNldFR4c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0eHMyLCBzZXRUeHMyXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbYnV0LCBzZXRCdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgXCIweGFBNzcxODAxMDQ1RjhFMEI3MjZjOTY4MzM4ZTEzODk5OWUyYjMzM2RcIixcbiAgICAgIGVyYzIwYWJpLFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuXG4gICAgZXJjMjAub24oXCJUcmFuc2ZlclwiLCAoZnJvbSwgdG8sIGFtb3VudCwgZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZnJvbSwgdG8sIGFtb3VudCwgZXZlbnQgfSk7XG4gICAgICBjb25zb2xlLmxvZyhidXQpIFxuICAgICAgaWYgKGJ1dCA9PSBcImRvbmF0ZVwiKSB7XG4gICAgICAgIHNldFR4cygoY3VycmVudFR4cykgPT4gW1xuICAgICAgICAgIC4uLmN1cnJlbnRUeHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhhbW91bnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFR4czIoKGN1cnJlbnRUeHMpID0+IFtcbiAgICAgICAgICAuLi5jdXJyZW50VHhzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR4SGFzaDogZXZlbnQudHJhbnNhY3Rpb25IYXNoLFxuICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgYW1vdW50OiBTdHJpbmcoYW1vdW50KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pXG4gIH0sIFtcIjB4YUE3NzE4MDEwNDVGOEUwQjcyNmM5NjgzMzhlMTM4OTk5ZTJiMzMzZFwiXSk7XG5cbiAgY29uc3QgaGFuZGxlVHJhbnNmZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFwiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCIsIGVyYzIwYWJpLCBzaWduZXIpO1xuICAgIGF3YWl0IGVyYzIwLnRyYW5zZmVyKGRhdGEuZ2V0KFwicmVjaXBpZW50XCIpLCBkYXRhLmdldChcImFtb3VudFwiKSk7XG5cbiAgICBzZXRCdXQoaWQpO1xuXG4gIH07XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIHB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xMiBtYXgtdy02eGwgbXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cblxuICAgICAgICAgIHsvKiBCYW5uZXIgSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LWxnIHB4LTQgbGc6cHgtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17dHJlZXN9IGFsdD1cIkJhbm5lclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY29sb3I9XCJibHVlLWdyYXlcIiBjbGFzc05hbWU9XCJtYi00XCIgY2hpbGRyZW49e3VuZGVmaW5lZH0gcGxhY2Vob2xkZXI9e3VuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgR3JlZW4gRnV0dXJlcyBGb3VuZGF0aW9uXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwibGVhZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNSBweC00IHRleHQtY2VudGVyIHRleHQteGwgIXRleHQtZ3JheS01MDAgbGc6cHgtMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnZpcm9ubWVudGFsIEFkdmFuY2VtZW50XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENlbnRlcmVkIENhcmRzIHdpdGggRXF1YWwgR2FwICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvM1wiPiB7LyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICA8SW5mb0NhcmQga2V5PSBcIkRvbmF0aW9uIEhpc3RvcnlcIiB0aXRsZT1cIkRvbmF0aW9uIEhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgIExlYXJuaW5nIENvdXJzZXNcbiAgICAgICAgICAgICAgICA8L0luZm9DYXJkPlxuICAgICAgICAgICAgICAgIDxUeExpc3QgdHhzPXt0eHN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvM1wiPiB7LyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICA8SW5mb0NhcmQga2V5PVwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiIHRpdGxlPVwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgRXhwZXJ0IEluc3RydWN0b3JzXG4gICAgICAgICAgICAgICAgPC9JbmZvQ2FyZD4gXG4gICAgICAgICAgICAgICAgPFR4TGlzdCB0eHM9e3R4czJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRyYW5zZmVyfSBpZCA9IFwiZG9uYXRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNpcGllbnQgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gdHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idXR0b24gZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVHJhbnNmZXJ9IGlkID0gXCJidXlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2lwaWVudCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudCB0byB0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgc3VibWl0LWJ1dHRvbiBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JlZW5GdXR1cmVzRm91bmRhdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidHJlZXMiLCJJbmZvQ2FyZCIsIlR5cG9ncmFwaHkiLCJldGhlcnMiLCJlcmMyMGFiaSIsIlR4TGlzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT1BUSU9OUyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJHcmVlbkZ1dHVyZXNGb3VuZGF0aW9uIiwidHhzIiwic2V0VHhzIiwidHhzMiIsInNldFR4czIiLCJidXQiLCJzZXRCdXQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXJjMjAiLCJDb250cmFjdCIsIm9uIiwiZnJvbSIsInRvIiwiYW1vdW50IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFR4cyIsInR4SGFzaCIsInRyYW5zYWN0aW9uSGFzaCIsIlN0cmluZyIsImhhbmRsZVRyYW5zZmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJzZW5kIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNmZXIiLCJnZXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwidmFyaWFudCIsImNvbG9yIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJmb290ZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/green-futures-foundation/page.tsx\n"));

/***/ })

});