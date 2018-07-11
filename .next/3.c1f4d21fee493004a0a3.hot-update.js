webpackHotUpdate(3,{

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchSuggest__ = __webpack_require__("./components/SearchSuggest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Github__ = __webpack_require__("./components/Github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
var _jsxFileName = '/Users/gereth/Projects/hn-hired/components/SearchBar.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core__["b" /* Chip */], {
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
    __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["a" /* AppBar */],
    { position: 'sticky', __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["n" /* Toolbar */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["o" /* Typography */],
        { variant: 'title', color: 'inherit', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        'HN Hired',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["o" /* Typography */],
          { variant: 'caption', color: 'inherit', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          date
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["o" /* Typography */],
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
        { href: 'https://github.com/gadogado/hn-hired', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__material_ui_core__["f" /* IconButton */],
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core__["p" /* withStyles */])(styles)(SearchBar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', '/Users/gereth/Projects/hn-hired/components/SearchBar.js');
  reactHotLoader.register(SearchBar, 'SearchBar', '/Users/gereth/Projects/hn-hired/components/SearchBar.js');
  reactHotLoader.register(_default, 'default', '/Users/gereth/Projects/hn-hired/components/SearchBar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.c1f4d21fee493004a0a3.hot-update.js.map