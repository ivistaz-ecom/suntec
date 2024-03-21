"use strict";
exports.id = 4758;
exports.ids = [4758];
exports.modules = {

/***/ 4665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function CtaCall({ text , btn , url  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        className: "wbg-gy text-center d-flex flex-column justify-content-center align-items-center",
        style: {
            height: 10 + "em"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "fs-4",
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "b-btn mt-4",
                href: url,
                children: btn
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CtaCall);


/***/ }),

/***/ 5060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1181);






function Insights({ tags  }) {
    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fetchInsights = async ()=>{
        let url = "";
        url = `${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}all-insights?tag=${tags}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.length);
            setInsights(data);
            if (data.length > 1) {
                setHeading(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchInsights();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        className: "mb-5 mt-5 text-center",
        id: "insights",
        children: [
            heading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "fs-1 txt-dark-purple",
                children: "Further Reading"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Our Latest Insights"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "mt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    className: "center",
                    children: allInsights.map((post)=>{
                        //console.log(post);
                        const Type = post["type"];
                        const Pslug = post["slug"];
                        let Links;
                        if (Type == "page") {
                            Links = Pslug;
                        } else {
                            Links = Type + "/" + Pslug;
                        }
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            sm: 6,
                            lg: 4,
                            xs: 6,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: Links,
                                className: "pr-text text-decoration-none",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                                            variant: "top",
                                            src: post["featured_img_src"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                                            className: "text-start",
                                            style: {
                                                height: 6 + "em"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "badge text-bg-warning mb-3",
                                                    children: Type
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                                                    className: "fs-6",
                                                    children: post["title"]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                                            className: "text-start mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Link, {
                                                className: "readmore",
                                                children: "Read More"
                                            })
                                        })
                                    ]
                                })
                            })
                        }, post["id"]);
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insights);


/***/ }),

/***/ 2494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1181);






function InsightsBtn({ tags  }) {
    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fetchInsights = async ()=>{
        let url = "";
        url = `${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}all-insights?tag=${tags}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.length);
            setInsights(data);
            if (data.length > 1) {
                setHeading(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchInsights();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        className: "wbg-sun text-center d-flex flex-column justify-content-center p-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: "center",
            children: allInsights.map((post, index)=>{
                //console.log(post);
                const Type = post["type"];
                const Pslug = post["slug"];
                let Links;
                if (Type == "page") {
                    Links = Pslug;
                } else {
                    Links = Type + "/" + Pslug;
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        sm: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            className: "w-btn capital mb-2",
                            href: "#insights",
                            children: Type
                        })
                    })
                });
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsBtn);


/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = JSON.parse('{"LB":"https://elementor.ivistasolutions.biz/wp-json/wp/v2/"}');

/***/ })

};
;