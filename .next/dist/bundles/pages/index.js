module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/latestundefined";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Comments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroll_component__ = __webpack_require__("react-infinite-scroll-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroll_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroll_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Done__ = __webpack_require__("@material-ui/icons/Done");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Done___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Done__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__);
var _jsxFileName = '/Users/geoff/Projects/hn-hired/components/Comments.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      paddingLeft: 140,
      flexGrow: 1
    }
  };
};

var scrollChunk = 10;

var Comments = function (_Component) {
  _inherits(Comments, _Component);

  function Comments() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      results: [],
      hasMore: false
    }, _this.next = function () {
      var comments = _this.props.comments;

      var start = _this.state.results.length;
      var end = start + scrollChunk;
      var hasMore = comments.length >= end;
      var nextComments = comments.slice(start, end);

      _this.setState({
        results: _this.state.results.concat(nextComments),
        hasMore: hasMore
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comments, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          hasMore = _state.hasMore,
          results = _state.results;
      var classes = this.props.classes;

      var resultsList = results.map(function (comment) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
          { key: __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()(), __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["ListItem"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["ListItemText"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["Typography"],
                { variant: 'body1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { dangerouslySetInnerHTML: { __html: comment.text }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["Divider"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["List"],
        { classes: classes, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroll_component___default.a,
          {
            dataLength: results.length,
            next: this.next,
            hasMore: hasMore,
            loader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              'Loading....'
            ),
            height: 1280,
            endMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { textAlign: 'center' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Done___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              })
            ),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          resultsList
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var comments = nextProps.comments;

      // Return null with default state for same results.

      if (comments === prevState.results) {
        return null;
      }

      // New results for combined search tokens. Resets scroll pagination
      return {
        results: comments.slice(0, scrollChunk),
        hasMore: comments.length !== 0
      };
    }

    /*
      Infinite scrolling throttles a large list render
    */

  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Comments.propTypes = {
  comments: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["withStyles"])(styles)(Comments));

/***/ }),

/***/ "./components/Github.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__ = __webpack_require__("@material-ui/core/SvgIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/geoff/Projects/hn-hired/components/Github.js";

// from:  https://github.com/mui-org/material-ui/blob/fad1a78deed7cbf712b42bb5931b35fb2bcdbca4/docs/src/modules/components/Github.js#L7-L13



var GitHub = function GitHub(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a,
    _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (GitHub);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/geoff/Projects/hn-hired/components/Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "title",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      "HN Hired"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
var _jsxFileName = '/Users/geoff/Projects/hn-hired/components/Loading.js';




var styles = {
  root: {
    flexGrow: 1
  }
};

var Loading = function Loading(_ref) {
  var classes = _ref.classes,
      loading = _ref.loading;

  if (!loading) return null;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["LinearProgress"], { color: 'secondary', __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })
  );
};

Loading.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["withStyles"])(styles)(Loading));

/***/ }),

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchSuggest__ = __webpack_require__("./components/SearchSuggest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Github__ = __webpack_require__("./components/Github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core__);
var _jsxFileName = '/Users/geoff/Projects/hn-hired/components/SearchBar.js';


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing.unit
    },
    button: {
      margin: theme.spacing.unit
    },
    typography: {
      flex: 1
    }
  };
};

var SearchBar = function SearchBar(_ref) {
  var classes = _ref.classes,
      searchTokens = _ref.searchTokens,
      onSearch = _ref.onSearch,
      trends = _ref.trends,
      date = _ref.date;

  var addToken = function addToken(value) {
    var token = value.trim().toLowerCase();

    if (!token) return;
    var newTokens = [].concat(_toConsumableArray(new Set(searchTokens.concat(token))));

    if (newTokens.length !== searchTokens.length) {
      onSearch(newTokens);
    }
  };

  var removeToken = function removeToken(token) {
    var newTokens = searchTokens.filter(function (t) {
      return t !== token;
    });
    onSearch(newTokens);
  };

  var tokensList = searchTokens.map(function (token) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core__["Chip"], {
      key: token,
      label: token,
      onDelete: function onDelete() {
        return removeToken(token);
      },
      className: classes.chip,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    });
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["AppBar"],
    { position: 'sticky', __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["Toolbar"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["Typography"],
        { variant: 'title', color: 'inherit', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        'HN Hired',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["Typography"],
          { variant: 'caption', color: 'inherit', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          date
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["Typography"],
        { className: classes.typography, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchSuggest__["a" /* default */], { onAddToken: addToken, suggestions: trends, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'https://github.com/gadogado/hn-hired', target: '_blank', rel: 'noopener noreferrer', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["IconButton"],
          { className: classes.button, component: 'span', __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Github__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      },
      tokensList
    )
  );
};

SearchBar.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  trends: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  searchTokens: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core__["withStyles"])(styles)(SearchBar));

/***/ }),

/***/ "./components/SearchSuggest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosuggest__ = __webpack_require__("react-autosuggest");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosuggest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_autosuggest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match__ = __webpack_require__("autosuggest-highlight/match");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse__ = __webpack_require__("autosuggest-highlight/parse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/geoff/Projects/hn-hired/components/SearchSuggest.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var styles = function styles(theme) {
  return {
    container: {
      flexGrow: 1,
      float: 'left',
      marginLeft: 30
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      width: 200,
      float: 'left'
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },
    input: {
      inputType: 'search',
      width: 200,
      '&::before': {
        marginLeft: 0
      }
    }
  };
};

var renderInput = function renderInput(inputProps) {
  var classes = inputProps.classes,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ['classes', 'ref']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["TextField"], {
    fullWidth: true,
    InputProps: _extends({
      inputRef: ref,
      classes: {
        input: classes.input
      }
    }, other),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  });
};

var renderSuggestion = function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;

  var matches = __WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match___default()(suggestion, query);
  var parts = __WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse___default()(suggestion, matches);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["MenuItem"],
    { selected: isHighlighted, component: 'div', __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      },
      parts.map(function (part, index) {
        return part.highlight ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { key: String(index), style: { fontWeight: 500 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          part.text
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          { key: String(index), style: { fontWeight: 300 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          part.text
        );
      })
    )
  );
};

var renderSuggestionsContainer = function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
      children = options.children;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["Paper"],
    _extends({}, containerProps, { square: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }),
    children
  );
};

var SearchSuggest = function (_Component) {
  _inherits(SearchSuggest, _Component);

  function SearchSuggest() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchSuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchSuggest.__proto__ || Object.getPrototypeOf(SearchSuggest)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      value: '',
      suggestions: []
    }, _this.handleSuggestionsFetchRequested = function (_ref3) {
      var value = _ref3.value;

      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    }, _this.handleSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      });
    }, _this.handleChange = function (event, _ref4) {
      var newValue = _ref4.newValue,
          method = _ref4.method;

      _this.setState({
        value: newValue
      });
    }, _this.handleOnFocus = function (event) {
      _this.setState({
        value: ''
      });
      event.target.value = '';
    }, _this.getSuggestions = function (value) {
      var suggestions = _this.props.suggestions;

      var inputValue = value.trim().toLowerCase();
      var inputLength = inputValue.length;

      return inputLength === 0 ? [] : Object.keys(suggestions).filter(function (suggestion) {
        return suggestion.toLowerCase().slice(0, inputLength) === inputValue;
      });
    }, _this.handleSuggestionSelected = function (event, _ref5) {
      var suggestionValue = _ref5.suggestionValue;

      _this.setState({
        value: ''
      }, function () {
        _this.props.onAddToken(suggestionValue);
      });
    }, _this.handleKeyPress = function (event) {
      if (event.key !== 'Enter') return;
      var value = event.target.value;

      _this.setState({
        value: ''
      }, function () {
        _this.props.onAddToken(value);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchSuggest, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_autosuggest___default.a, {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
          input: classes.input
        },
        renderInputComponent: renderInput,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: renderSuggestionsContainer,
        onSuggestionSelected: this.handleSuggestionSelected,
        getSuggestionValue: function getSuggestionValue(value) {
          return value;
        },
        renderSuggestion: renderSuggestion,
        inputProps: {
          classes: classes,
          placeholder: 'Search',
          value: this.state.value,
          onChange: this.handleChange,
          onKeyPress: this.handleKeyPress,
          onFocus: this.handleOnFocus
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      });
    }
  }]);

  return SearchSuggest;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SearchSuggest.propTypes = {
  suggestions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onAddToken: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["withStyles"])(styles)(SearchSuggest));

/***/ }),

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
var _jsxFileName = '/Users/geoff/Projects/hn-hired/components/Sidebar.js';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var styles = function styles(theme) {
  return {
    paper: {
      width: 140,
      position: 'absolute',
      height: '100%'
    }
  };
};

var Sidebar = function Sidebar(_ref) {
  var trends = _ref.trends,
      searchTokens = _ref.searchTokens,
      onSearch = _ref.onSearch,
      classes = _ref.classes;

  var searchComments = function searchComments(trend) {
    var newTokens = [].concat(_toConsumableArray(new Set(searchTokens.concat(trend))));
    onSearch(newTokens);
  };

  var listTrends = Object.entries(trends).sort(function (a, b) {
    return b[1] - a[1];
  }).map(function (_ref2, key) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        count = _ref3[1];

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__material_ui_core__["ListItem"],
      { button: true, key: name, onClick: function onClick() {
          return searchComments(name);
        }, dense: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Typography"],
        { variant: 'body2', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        name,
        ' (',
        count,
        ')'
      )
    );
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Drawer"],
    { variant: 'permanent', classes: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__material_ui_core__["List"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      listTrends
    )
  );
};

Sidebar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  searchTokens: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  trends: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["withStyles"])(styles)(Sidebar));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Comments__ = __webpack_require__("./components/Comments.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Sidebar__ = __webpack_require__("./components/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Loading__ = __webpack_require__("./components/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuse_js__ = __webpack_require__("fuse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fuse_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors__ = __webpack_require__("@material-ui/core/colors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_isomorphic_fetch__);

var _jsxFileName = '/Users/geoff/Projects/hn-hired/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/sort-comp */













var theme = Object(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors__["blue"]
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14
  }
});

var fuseOptions = {
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.2,
  keys: ['text']
};

var sidebarCommentsStyle = {
  flexGrow: 1,
  zIndex: 1,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  height: '100%'
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      trends: {},
      comments: [],
      searchTokens: [],
      searchedComments: [],
      loading: true,
      date: null
    }, _this.collector = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var url, response, _ref3, comments, trends, date;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url =  false ? '/latest/collector' // aws lambda path
              : '/collector';
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_11_isomorphic_fetch___default()(url);

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _ref3 = _context.sent;
              comments = _ref3.comments;
              trends = _ref3.trends;
              date = _ref3.date;
              return _context.abrupt('return', { comments: comments, trends: trends, date: date });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.searchComments = function (searchTokens) {
      var comments = _this.state.comments;

      var searchedComments = searchTokens.length !== 0 ? _this.fuse.search(searchTokens.join(' ')) : comments;

      _this.setState({ searchedComments: searchedComments, searchTokens: searchTokens });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /*
                    Fetch hn hiring results from aws lambda, setState, and init Fuse.js
                */
                this.collector().then(function (_ref5) {
                  var comments = _ref5.comments,
                      trends = _ref5.trends,
                      date = _ref5.date;
                  return _this3.setState({
                    loading: false,
                    searchedComments: comments,
                    date: date,
                    comments: comments,
                    trends: trends
                  }, function () {
                    _this3.fuse = new __WEBPACK_IMPORTED_MODULE_7_fuse_js___default.a(comments, fuseOptions);
                  });
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          trends = _state.trends,
          searchedComments = _state.searchedComments,
          searchTokens = _state.searchTokens,
          date = _state.date;

      var asyncContent = !loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchBar__["a" /* default */], {
          onSearch: this.searchComments,
          searchTokens: searchTokens,
          trends: trends,
          date: date,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: sidebarCommentsStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Sidebar__["a" /* default */], {
            trends: trends,
            onSearch: this.searchComments,
            searchTokens: searchTokens,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Comments__["a" /* default */], { comments: searchedComments, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          })
        )
      );

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react__["Fragment"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core__["CssBaseline"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__material_ui_core_styles__["MuiThemeProvider"],
          { theme: theme, __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Loading__["a" /* default */], { loading: loading, __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          }),
          asyncContent
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/colors":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Done":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "autosuggest-highlight/match":
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/match");

/***/ }),

/***/ "autosuggest-highlight/parse":
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/parse");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "fuse.js":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-infinite-scroll-component":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ "uuid/v4":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map