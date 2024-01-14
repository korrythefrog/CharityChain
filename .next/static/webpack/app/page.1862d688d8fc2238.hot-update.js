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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GreenFuturesFoundation\": function() { return /* binding */ GreenFuturesFoundation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/image/trees.jpg */ \"(app-client)/./src/image/trees.jpg\");\n/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/info-card */ \"(app-client)/./src/components/info-card.tsx\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react */ \"(app-client)/./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ERC20abi.json */ \"(app-client)/./src/app/green-futures-foundation/ERC20abi.json\");\n/* harmony import */ var _TxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxList */ \"(app-client)/./src/app/green-futures-foundation/TxList.js\");\n/* __next_internal_client_entry_do_not_use__ GreenFuturesFoundation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst OPTIONS = [\n    {\n        title: \"Donation History\",\n        description: \"Learning Courses\"\n    },\n    {\n        title: \"Transaction History\",\n        description: \"Expert Instructors\"\n    }\n];\nfunction GreenFuturesFoundation() {\n    _s();\n    const [txs, setTxs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [txs2, setTxs2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [but, setBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"hi\");\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);\n        erc20.on(\"Transfer\", (from, to, amount, event)=>{\n            console.log({\n                from,\n                to,\n                amount,\n                event\n            });\n            if (but == \"donate\") {\n                setTxs((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            } else {\n                setTxs2((currentTxs)=>[\n                        ...currentTxs,\n                        {\n                            txHash: event.transactionHash,\n                            from,\n                            to,\n                            amount: String(amount)\n                        }\n                    ]);\n            }\n        });\n    }, [\n        \"0xaA771801045F8E0B726c968338e138999e2b333d\",\n        but\n    ]);\n    const handleTransfer = async (e)=>{\n        e.preventDefault();\n        const formId = e.target.id;\n        //console.log(id)\n        const data = new FormData(e.target);\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []);\n        const signer = await provider.getSigner();\n        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_9__.Contract(\"0xaA771801045F8E0B726c968338e138999e2b333d\", _ERC20abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);\n        await erc20.transfer(data.get(\"recipient\"), data.get(\"amount\"));\n        setBut(formId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto max-w-lg px-4 lg:px-0 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _src_image_trees_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Banner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        color: \"blue-gray\",\n                                        className: \"mb-4\",\n                                        children: undefined,\n                                        placeholder: undefined,\n                                        children: \"Green Futures Foundation\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"lead\",\n                                        className: \"mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0\",\n                                        children: \"Environmental Advancement\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Donation History\",\n                                        children: \"Learning Courses\"\n                                    }, \"Donation History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Transaction History\",\n                                        children: \"Expert Instructors\"\n                                    }, \"Transaction History\", false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        txs: txs2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"donate\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Donate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleTransfer,\n                id: \"buy\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"recipient\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Recipient address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"amount\",\n                            className: \"input input-bordered block w-full focus:ring focus:outline-none\",\n                            placeholder: \"Amount to transfer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary submit-button focus:ring focus:outline-none w-full\",\n                            children: \"Buy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyhkim/Desktop/GitHub/CharityChain/src/app/green-futures-foundation/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 7\n    }, this);\n}\n_s(GreenFuturesFoundation, \"MrUxIi+xhc70P4jGTVS5/JxpNx4=\");\n_c = GreenFuturesFoundation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenFuturesFoundation);\nvar _c;\n$RefreshReg$(_c, \"GreenFuturesFoundation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ1M7QUFDTTtBQUNRO0FBRXRCO0FBQ087QUFDVjtBQUNlO0FBRTVDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFTSxTQUFTQyx5QkFBeUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU0sQ0FBQ1UsS0FBS0MsT0FBTyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxXQUFXLElBQUlqQixnREFBNkIsQ0FBQ29CLE9BQU9DLFFBQVE7UUFDbEUsTUFBTUMsUUFBUSxJQUFJdEIsNENBQWUsQ0FDL0IsOENBQ0FDLDJDQUFRQSxFQUNSZ0I7UUFHRkssTUFBTUUsRUFBRSxDQUFDLFlBQVksQ0FBQ0MsTUFBTUMsSUFBSUMsUUFBUUMsUUFBVTtZQUNoRGIsUUFBUUMsR0FBRyxDQUFDO2dCQUFFUztnQkFBTUM7Z0JBQUlDO2dCQUFRQztZQUFNO1lBQ3RDLElBQUlmLE9BQU8sVUFBVTtnQkFDbkJILE9BQU8sQ0FBQ21CLGFBQWU7MkJBQ2xCQTt3QkFDSDs0QkFDRUMsUUFBUUYsTUFBTUcsZUFBZTs0QkFDN0JOOzRCQUNBQzs0QkFDQUMsUUFBUUssT0FBT0w7d0JBQ2pCO3FCQUNEO1lBQ0gsT0FDSztnQkFDSGYsUUFBUSxDQUFDaUIsYUFBZTsyQkFDbkJBO3dCQUNIOzRCQUNFQyxRQUFRRixNQUFNRyxlQUFlOzRCQUM3Qk47NEJBQ0FDOzRCQUNB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LCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ncmVlbi1mdXR1cmVzLWZvdW5kYXRpb24vcGFnZS50c3g/OGNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdHJlZXMgZnJvbSAnL3NyYy9pbWFnZS90cmVlcy5qcGcnXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvLWNhcmRcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZiYXIsIEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGVyYzIwYWJpIGZyb20gXCIuL0VSQzIwYWJpLmpzb25cIjtcbmltcG9ydCBUeExpc3QgZnJvbSBcIi4vVHhMaXN0XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT1BUSU9OUyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRvbmF0aW9uIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMZWFybmluZyBDb3Vyc2VzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUcmFuc2FjdGlvbiBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwZXJ0IEluc3RydWN0b3JzXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JlZW5GdXR1cmVzRm91bmRhdGlvbigpIHtcbiAgY29uc3QgW3R4cywgc2V0VHhzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3R4czIsIHNldFR4czJdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtidXQsIHNldEJ1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IGVyYzIwID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIFwiMHhhQTc3MTgwMTA0NUY4RTBCNzI2Yzk2ODMzOGUxMzg5OTllMmIzMzNkXCIsXG4gICAgICBlcmMyMGFiaSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcblxuICAgIGVyYzIwLm9uKFwiVHJhbnNmZXJcIiwgKGZyb20sIHRvLCBhbW91bnQsIGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh7IGZyb20sIHRvLCBhbW91bnQsIGV2ZW50IH0pO1xuICAgICAgaWYgKGJ1dCA9PSBcImRvbmF0ZVwiKSB7XG4gICAgICAgIHNldFR4cygoY3VycmVudFR4cykgPT4gW1xuICAgICAgICAgIC4uLmN1cnJlbnRUeHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhhbW91bnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFR4czIoKGN1cnJlbnRUeHMpID0+IFtcbiAgICAgICAgICAuLi5jdXJyZW50VHhzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR4SGFzaDogZXZlbnQudHJhbnNhY3Rpb25IYXNoLFxuICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgYW1vdW50OiBTdHJpbmcoYW1vdW50KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pXG4gIH0sIFtcIjB4YUE3NzE4MDEwNDVGOEUwQjcyNmM5NjgzMzhlMTM4OTk5ZTJiMzMzZFwiLCBidXRdKTtcblxuICBjb25zdCBoYW5kbGVUcmFuc2ZlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1JZCA9IGUudGFyZ2V0LmlkXG4gICAgLy9jb25zb2xlLmxvZyhpZClcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXCIweGFBNzcxODAxMDQ1RjhFMEI3MjZjOTY4MzM4ZTEzODk5OWUyYjMzM2RcIiwgZXJjMjBhYmksIHNpZ25lcik7XG4gICAgYXdhaXQgZXJjMjAudHJhbnNmZXIoZGF0YS5nZXQoXCJyZWNpcGllbnRcIiksIGRhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgICBzZXRCdXQoZm9ybUlkKVxuIFxuICB9O1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgbWF4LXctNnhsIG14LWF1dG8gaXRlbXMtY2VudGVyXCI+XG5cbiAgICAgICAgICB7LyogQmFubmVyIEltYWdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy1sZyBweC00IGxnOnB4LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RyZWVzfSBhbHQ9XCJCYW5uZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNvbG9yPVwiYmx1ZS1ncmF5XCIgY2xhc3NOYW1lPVwibWItNFwiIGNoaWxkcmVuPXt1bmRlZmluZWR9IHBsYWNlaG9sZGVyPXt1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgIEdyZWVuIEZ1dHVyZXMgRm91bmRhdGlvblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImxlYWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgcHgtNCB0ZXh0LWNlbnRlciB0ZXh0LXhsICF0ZXh0LWdyYXktNTAwIGxnOnB4LTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBBZHZhbmNlbWVudFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDZW50ZXJlZCBDYXJkcyB3aXRoIEVxdWFsIEdhcCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj4gey8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgICAgICAgPEluZm9DYXJkIGtleT0gXCJEb25hdGlvbiBIaXN0b3J5XCIgdGl0bGU9XCJEb25hdGlvbiBIaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICBMZWFybmluZyBDb3Vyc2VzXG4gICAgICAgICAgICAgICAgPC9JbmZvQ2FyZD5cbiAgICAgICAgICAgICAgICA8VHhMaXN0IHR4cz17dHhzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj4gey8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgICAgICAgPEluZm9DYXJkIGtleT1cIlRyYW5zYWN0aW9uIEhpc3RvcnlcIiB0aXRsZT1cIlRyYW5zYWN0aW9uIEhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgIEV4cGVydCBJbnN0cnVjdG9yc1xuICAgICAgICAgICAgICAgIDwvSW5mb0NhcmQ+IFxuICAgICAgICAgICAgICAgIDxUeExpc3QgdHhzPXt0eHMyfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVUcmFuc2Zlcn0gaWQgPSBcImRvbmF0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpcGllbnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgYmxvY2sgdy1mdWxsIGZvY3VzOnJpbmcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaXBpZW50IGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgYmxvY2sgdy1mdWxsIGZvY3VzOnJpbmcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50IHRvIHRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnV0dG9uIGZvY3VzOnJpbmcgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRG9uYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRyYW5zZmVyfSBpZCA9IFwiYnV5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNpcGllbnQgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBibG9jayB3LWZ1bGwgZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gdHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idXR0b24gZm9jdXM6cmluZyBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBCdXlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyZWVuRnV0dXJlc0ZvdW5kYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInRyZWVzIiwiSW5mb0NhcmQiLCJUeXBvZ3JhcGh5IiwiZXRoZXJzIiwiZXJjMjBhYmkiLCJUeExpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9QVElPTlMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiR3JlZW5GdXR1cmVzRm91bmRhdGlvbiIsInR4cyIsInNldFR4cyIsInR4czIiLCJzZXRUeHMyIiwiYnV0Iiwic2V0QnV0IiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJlcmMyMCIsIkNvbnRyYWN0Iiwib24iLCJmcm9tIiwidG8iLCJhbW91bnQiLCJldmVudCIsImN1cnJlbnRUeHMiLCJ0eEhhc2giLCJ0cmFuc2FjdGlvbkhhc2giLCJTdHJpbmciLCJoYW5kbGVUcmFuc2ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1JZCIsInRhcmdldCIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwic2VuZCIsInNpZ25lciIsImdldFNpZ25lciIsInRyYW5zZmVyIiwiZ2V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsInZhcmlhbnQiLCJjb2xvciIsImNoaWxkcmVuIiwidW5kZWZpbmVkIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiZm9vdGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/green-futures-foundation/page.tsx\n"));

/***/ })

});