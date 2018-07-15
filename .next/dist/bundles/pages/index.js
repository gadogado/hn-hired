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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(6);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "react-infinite-scroll-component"
var external__react_infinite_scroll_component_ = __webpack_require__(7);
var external__react_infinite_scroll_component__default = /*#__PURE__*/__webpack_require__.n(external__react_infinite_scroll_component_);

// EXTERNAL MODULE: external "@material-ui/icons/Done"
var Done_ = __webpack_require__(8);
var Done__default = /*#__PURE__*/__webpack_require__.n(Done_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// CONCATENATED MODULE: ./components/Comments.js
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

var Comments_Comments = function (_Component) {
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
        return external__react__default.a.createElement(
          external__react_["Fragment"],
          { key: v4__default()() },
          external__react__default.a.createElement(
            core_["ListItem"],
            null,
            external__react__default.a.createElement(
              core_["ListItemText"],
              null,
              external__react__default.a.createElement(
                core_["Typography"],
                { variant: 'body1' },
                external__react__default.a.createElement('span', { dangerouslySetInnerHTML: { __html: comment.text } })
              )
            )
          ),
          external__react__default.a.createElement(core_["Divider"], null)
        );
      });

      return external__react__default.a.createElement(
        core_["List"],
        { classes: classes },
        external__react__default.a.createElement(
          external__react_infinite_scroll_component__default.a,
          {
            dataLength: results.length,
            next: this.next,
            hasMore: hasMore,
            loader: external__react__default.a.createElement(
              'h4',
              null,
              'Loading....'
            ),
            height: 1280,
            endMessage: external__react__default.a.createElement(
              'p',
              { style: { textAlign: 'center' } },
              external__react__default.a.createElement(Done__default.a, null)
            )
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
}(external__react_["Component"]);

/* harmony default export */ var components_Comments = (Object(core_["withStyles"])(styles)(Comments_Comments));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Header.js



var Header_Header = function Header() {
  return external__react__default.a.createElement(
    head__default.a,
    null,
    external__react__default.a.createElement(
      "title",
      null,
      "HN Hired"
    ),
    external__react__default.a.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
    external__react__default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    })
  );
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Sidebar.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var Sidebar_styles = function styles(theme) {
  return {
    paper: {
      width: 140,
      position: 'absolute',
      height: '100%'
    }
  };
};

var Sidebar_Sidebar = function Sidebar(_ref) {
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

    return external__react__default.a.createElement(
      core_["ListItem"],
      { button: true, key: name, onClick: function onClick() {
          return searchComments(name);
        }, dense: true },
      external__react__default.a.createElement(
        core_["Typography"],
        { variant: 'body2' },
        name,
        ' (',
        count,
        ')'
      )
    );
  });

  return external__react__default.a.createElement(
    core_["Drawer"],
    { variant: 'permanent', classes: classes },
    external__react__default.a.createElement(
      core_["List"],
      null,
      listTrends
    )
  );
};

/* harmony default export */ var components_Sidebar = (Object(core_["withStyles"])(Sidebar_styles)(Sidebar_Sidebar));
// CONCATENATED MODULE: ./components/Loading.js




var Loading_styles = {
  root: {
    flexGrow: 1
  }
};

var Loading_Loading = function Loading(_ref) {
  var classes = _ref.classes,
      loading = _ref.loading;

  if (!loading) return null;

  return external__react__default.a.createElement(
    'div',
    { className: classes.root },
    external__react__default.a.createElement(core_["LinearProgress"], { color: 'secondary' })
  );
};

/* harmony default export */ var components_Loading = (Object(core_["withStyles"])(Loading_styles)(Loading_Loading));
// EXTERNAL MODULE: external "react-autosuggest"
var external__react_autosuggest_ = __webpack_require__(10);
var external__react_autosuggest__default = /*#__PURE__*/__webpack_require__.n(external__react_autosuggest_);

// EXTERNAL MODULE: external "autosuggest-highlight/match"
var match_ = __webpack_require__(11);
var match__default = /*#__PURE__*/__webpack_require__.n(match_);

// EXTERNAL MODULE: external "autosuggest-highlight/parse"
var parse_ = __webpack_require__(12);
var parse__default = /*#__PURE__*/__webpack_require__.n(parse_);

// CONCATENATED MODULE: ./components/SearchSuggest.js
var SearchSuggest__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function SearchSuggest__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchSuggest__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SearchSuggest__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var SearchSuggest_styles = function styles(theme) {
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

var SearchSuggest_renderInput = function renderInput(inputProps) {
  var classes = inputProps.classes,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ['classes', 'ref']);

  return external__react__default.a.createElement(core_["TextField"], {
    fullWidth: true,
    InputProps: _extends({
      inputRef: ref,
      classes: {
        input: classes.input
      }
    }, other)
  });
};

var SearchSuggest_renderSuggestion = function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;

  var matches = match__default()(suggestion, query);
  var parts = parse__default()(suggestion, matches);

  return external__react__default.a.createElement(
    core_["MenuItem"],
    { selected: isHighlighted, component: 'div' },
    external__react__default.a.createElement(
      'div',
      null,
      parts.map(function (part, index) {
        return part.highlight ? external__react__default.a.createElement(
          'span',
          { key: String(index), style: { fontWeight: 500 } },
          part.text
        ) : external__react__default.a.createElement(
          'strong',
          { key: String(index), style: { fontWeight: 300 } },
          part.text
        );
      })
    )
  );
};

var SearchSuggest_renderSuggestionsContainer = function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
      children = options.children;


  return external__react__default.a.createElement(
    core_["Paper"],
    _extends({}, containerProps, { square: true }),
    children
  );
};

var SearchSuggest_SearchSuggest = function (_Component) {
  SearchSuggest__inherits(SearchSuggest, _Component);

  function SearchSuggest() {
    var _ref2;

    var _temp, _this, _ret;

    SearchSuggest__classCallCheck(this, SearchSuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = SearchSuggest__possibleConstructorReturn(this, (_ref2 = SearchSuggest.__proto__ || Object.getPrototypeOf(SearchSuggest)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
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
    }, _temp), SearchSuggest__possibleConstructorReturn(_this, _ret);
  }

  SearchSuggest__createClass(SearchSuggest, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return external__react__default.a.createElement(external__react_autosuggest__default.a, {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
          input: classes.input
        },
        renderInputComponent: SearchSuggest_renderInput,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: SearchSuggest_renderSuggestionsContainer,
        onSuggestionSelected: this.handleSuggestionSelected,
        getSuggestionValue: function getSuggestionValue(value) {
          return value;
        },
        renderSuggestion: SearchSuggest_renderSuggestion,
        inputProps: {
          classes: classes,
          placeholder: 'Search',
          value: this.state.value,
          onChange: this.handleChange,
          onKeyPress: this.handleKeyPress,
          onFocus: this.handleOnFocus
        }
      });
    }
  }]);

  return SearchSuggest;
}(external__react_["Component"]);

/* harmony default export */ var components_SearchSuggest = (Object(core_["withStyles"])(SearchSuggest_styles)(SearchSuggest_SearchSuggest));
// EXTERNAL MODULE: external "@material-ui/core/SvgIcon"
var SvgIcon_ = __webpack_require__(13);
var SvgIcon__default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);

// CONCATENATED MODULE: ./components/Github.js

// from:  https://github.com/mui-org/material-ui/blob/fad1a78deed7cbf712b42bb5931b35fb2bcdbca4/docs/src/modules/components/Github.js#L7-L13



var Github_GitHub = function GitHub(props) {
  return external__react__default.a.createElement(
    SvgIcon__default.a,
    props,
    external__react__default.a.createElement("path", { d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" })
  );
};

/* harmony default export */ var Github = (Github_GitHub);
// CONCATENATED MODULE: ./components/SearchBar.js


function SearchBar__toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var SearchBar_styles = function styles(theme) {
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

var SearchBar_SearchBar = function SearchBar(_ref) {
  var classes = _ref.classes,
      searchTokens = _ref.searchTokens,
      onSearch = _ref.onSearch,
      trends = _ref.trends,
      date = _ref.date;

  var addToken = function addToken(value) {
    var token = value.trim().toLowerCase();

    if (!token) return;
    var newTokens = [].concat(SearchBar__toConsumableArray(new Set(searchTokens.concat(token))));

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
    return external__react__default.a.createElement(core_["Chip"], {
      key: token,
      label: token,
      onDelete: function onDelete() {
        return removeToken(token);
      },
      className: classes.chip
    });
  });

  return external__react__default.a.createElement(
    core_["AppBar"],
    { position: 'sticky' },
    external__react__default.a.createElement(
      core_["Toolbar"],
      null,
      external__react__default.a.createElement(
        core_["Typography"],
        { variant: 'title', color: 'inherit' },
        'HN Hired',
        external__react__default.a.createElement(
          core_["Typography"],
          { variant: 'caption', color: 'inherit' },
          date
        )
      ),
      external__react__default.a.createElement(
        core_["Typography"],
        { className: classes.typography },
        external__react__default.a.createElement(components_SearchSuggest, { onAddToken: addToken, suggestions: trends })
      ),
      external__react__default.a.createElement(
        'a',
        { href: 'https://github.com/gadogado/hn-hired', target: '_blank' },
        external__react__default.a.createElement(
          core_["IconButton"],
          { className: classes.button, component: 'span' },
          external__react__default.a.createElement(Github, null)
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: classes.root },
      tokensList
    )
  );
};

/* harmony default export */ var components_SearchBar = (Object(core_["withStyles"])(SearchBar_styles)(SearchBar_SearchBar));
// EXTERNAL MODULE: external "fuse.js"
var external__fuse_js_ = __webpack_require__(14);
var external__fuse_js__default = /*#__PURE__*/__webpack_require__.n(external__fuse_js_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(15);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(16);
var colors__default = /*#__PURE__*/__webpack_require__.n(colors_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(17);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/sort-comp */













var theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: colors_["blue"]
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

var pages_App = function (_Component) {
  pages__inherits(App, _Component);

  function App() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    pages__classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = pages__possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      trends: {},
      comments: [],
      searchTokens: [],
      searchedComments: [],
      loading: true,
      date: null
    }, _this.collector = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
      var url, response, _ref3, comments, trends, date;

      return regenerator__default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url =  true ? '/latest/collector' // aws lambda path
              : '/collector';
              _context.next = 3;
              return external__isomorphic_fetch__default()(url);

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
    }, _temp), pages__possibleConstructorReturn(_this, _ret);
  }

  pages__createClass(App, [{
    key: 'componentDidMount',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2() {
        var _this3 = this;

        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                    _this3.fuse = new external__fuse_js__default.a(comments, fuseOptions);
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

      var asyncContent = !loading && external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(components_SearchBar, {
          onSearch: this.searchComments,
          searchTokens: searchTokens,
          trends: trends,
          date: date
        }),
        external__react__default.a.createElement(
          'div',
          { style: sidebarCommentsStyle },
          external__react__default.a.createElement(components_Sidebar, {
            trends: trends,
            onSearch: this.searchComments,
            searchTokens: searchTokens
          }),
          external__react__default.a.createElement(components_Comments, { comments: searchedComments })
        )
      );

      return external__react__default.a.createElement(
        external__react_["Fragment"],
        null,
        external__react__default.a.createElement(components_Header, null),
        external__react__default.a.createElement(core_["CssBaseline"], null),
        external__react__default.a.createElement(
          styles_["MuiThemeProvider"],
          { theme: theme },
          external__react__default.a.createElement(components_Loading, { loading: loading }),
          asyncContent
        )
      );
    }
  }]);

  return App;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_App);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/match");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/parse");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ })
/******/ ]);