"use strict";
exports.id = 9840;
exports.ids = [9840];
exports.modules = {

/***/ 9277:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Breadcum({ PostTitle  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        fluid: true,
        className: "breadcum",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {
                    href: "/",
                    children: "Homepage"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {
                    href: router.asPath,
                    active: true,
                    children: PostTitle
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcum);


/***/ }),

/***/ 5892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ExpandableContent = ({ initialContent , expandedContent  })=>{
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleExpand = ()=>{
        setIsExpanded(!isExpanded);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: isExpanded ? expandedContent : initialContent
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: toggleExpand,
                className: "g-btn",
                children: isExpanded ? "Read Less" : "Read More"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandableContent);


/***/ }),

/***/ 7797:
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
    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [ebooks, setEbooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [pov, setPov] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [podcasts, setPodcasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const fetchInsights = async ()=>{
        let url = "";
        url = `${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}all-insights?tag=${tags}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
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
            heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
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
                            lg: 6,
                            xs: 6,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "card mb-3 border-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "row g-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "col-md-4 d-flex justify-content-center align-items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                src: post["featured_img_src"],
                                                class: "img-fluid ",
                                                alt: "...",
                                                width: 220,
                                                height: 220
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "col-md-8 text-start",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        class: "card-title text-start",
                                                        dangerouslySetInnerHTML: {
                                                            __html: post["title"]
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        class: "card-text text-start",
                                                        dangerouslySetInnerHTML: {
                                                            __html: post["excerpt"]
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: Links,
                                                        className: "pr-text text-decoration-none expand-btn text-white px-5 rounded-3",
                                                        children: "Read More"
                                                    })
                                                ]
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

/***/ 7773:
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





const SinglePost = ({ tags  })=>{
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPost = async ()=>{
            try {
                const postResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}case-studies/${tags}`);
                const postData = await postResponse.json();
                if (postResponse.ok) {
                    setPost(postData);
                    // Fetch featured image information
                    const featuredImageId = postData.featured_media;
                    if (featuredImageId) {
                        const featuredImageResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}media/${featuredImageId}`);
                        const featuredImageData = await featuredImageResponse.json();
                        if (featuredImageResponse.ok) {
                            setFeaturedImage(featuredImageData);
                        } else {
                            console.error(`Failed to fetch featured image. Status: ${featuredImageResponse.status}`);
                        }
                    }
                } else {
                    console.error(`Failed to fetch post. Status: ${postResponse.status}`);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-center mb-3 mt-4",
                children: "Case Study"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "wbg-blue p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "card mb-3 border-0",
                    style: {
                        background: "#D6F4F6"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "row g-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-8 text-start d-flex align-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            class: "card-title text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.title.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            class: "card-text text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `case-studies/${post.slug}`,
                                            className: "pr-text text-decoration-none expand-btn text-white px-5 rounded-3",
                                            children: "Download Now"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-4 d-flex justify-content-center align-items-center",
                                children: featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: featuredImage.source_url,
                                    alt: featuredImage.alt_text,
                                    style: {
                                        maxWidth: "100%",
                                        height: "auto"
                                    },
                                    class: "img-fluid ",
                                    width: 420,
                                    height: 220
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);


/***/ }),

/***/ 3063:
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





const SinglePost = ({ tags  })=>{
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPost = async ()=>{
            try {
                const postResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}ebooks/${tags}`);
                const postData = await postResponse.json();
                if (postResponse.ok) {
                    setPost(postData);
                    // Fetch featured image information
                    const featuredImageId = postData.featured_media;
                    if (featuredImageId) {
                        const featuredImageResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}media/${featuredImageId}`);
                        const featuredImageData = await featuredImageResponse.json();
                        if (featuredImageResponse.ok) {
                            setFeaturedImage(featuredImageData);
                        } else {
                            console.error(`Failed to fetch featured image. Status: ${featuredImageResponse.status}`);
                        }
                    }
                } else {
                    console.error(`Failed to fetch post. Status: ${postResponse.status}`);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-center mb-5",
                children: "ebooks"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "wbg-blue p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "card mb-3 border-0",
                    style: {
                        background: "#D6F4F6"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "row g-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-8 text-start d-flex align-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            class: "card-title text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.title.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            class: "card-text text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `ebooks/${post.slug}`,
                                            className: "pr-text text-decoration-none expand-btn text-white px-5 rounded-3",
                                            children: "Download Now"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-4 d-flex justify-content-center align-items-center",
                                children: featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: featuredImage.source_url,
                                    alt: featuredImage.alt_text,
                                    style: {
                                        maxWidth: "100%",
                                        height: "auto"
                                    },
                                    class: "img-fluid ",
                                    width: 420,
                                    height: 220
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);


/***/ }),

/***/ 4858:
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





const SinglePost = ({ tags  })=>{
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPost = async ()=>{
            try {
                const postResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}point-of-view/${tags}`);
                const postData = await postResponse.json();
                if (postResponse.ok) {
                    setPost(postData);
                    // Fetch featured image information
                    const featuredImageId = postData.featured_media;
                    if (featuredImageId) {
                        const featuredImageResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}media/${featuredImageId}`);
                        const featuredImageData = await featuredImageResponse.json();
                        if (featuredImageResponse.ok) {
                            setFeaturedImage(featuredImageData);
                        } else {
                            console.error(`Failed to fetch featured image. Status: ${featuredImageResponse.status}`);
                        }
                    }
                } else {
                    console.error(`Failed to fetch post. Status: ${postResponse.status}`);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-center mb-3 mt-4",
                children: "Point of View"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "wbg-blue p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "card mb-3 border-0",
                    style: {
                        background: "#D6F4F6"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "row g-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-4 d-flex justify-content-center align-items-center",
                                children: featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: featuredImage.source_url,
                                    alt: featuredImage.alt_text,
                                    style: {
                                        maxWidth: "100%",
                                        height: "auto"
                                    },
                                    class: "img-fluid ",
                                    width: 420,
                                    height: 220
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-8 text-start d-flex align-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            class: "card-title text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.title.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            class: "card-text text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `point-of-view/${post.slug}`,
                                            className: "pr-text text-decoration-none expand-btn text-white px-5 rounded-3",
                                            children: "Download Now"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);


/***/ }),

/***/ 9657:
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





const SinglePost = ({ tags  })=>{
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPost = async ()=>{
            try {
                const postResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}ytvideos/${tags}`);
                const postData = await postResponse.json();
                console.log(postData);
                if (postResponse.ok) {
                    setPost(postData);
                    // Fetch featured image information
                    const featuredImageId = postData.featured_media;
                    if (featuredImageId) {
                        const featuredImageResponse = await fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_URL */ .LB}media/${featuredImageId}`);
                        const featuredImageData = await featuredImageResponse.json();
                        if (featuredImageResponse.ok) {
                            setFeaturedImage(featuredImageData);
                        } else {
                            console.error(`Failed to fetch featured image. Status: ${featuredImageResponse.status}`);
                        }
                    }
                } else {
                    console.error(`Failed to fetch post. Status: ${postResponse.status}`);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-center mb-3 mt-4",
                children: "Videos"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "wbg-pink p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "card mb-3 border-0",
                    style: {
                        background: "#e9c7e033"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "row g-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-4 d-flex justify-content-center align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    width: "950",
                                    height: "534",
                                    src: post.acf.youtube_link,
                                    frameborder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowfullscreen: true,
                                    className: "w-100 h-100"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-md-8 text-start d-flex align-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "card-body",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            class: "card-title text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.title.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            class: "card-text text-start",
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `ytvideos/${post.slug}`,
                                            className: "pr-text text-decoration-none expand-btn text-white px-5 rounded-3",
                                            children: "Watch Now"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);


/***/ })

};
;