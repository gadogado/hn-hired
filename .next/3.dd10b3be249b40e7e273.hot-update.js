webpackHotUpdate(3,{

/***/ "./components/SearchSuggest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosuggest__ = __webpack_require__("./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosuggest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_autosuggest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match__ = __webpack_require__("./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autosuggest_highlight_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse__ = __webpack_require__("./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_autosuggest_highlight_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["m" /* TextField */], {
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
    __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["k" /* MenuItem */],
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
    __WEBPACK_IMPORTED_MODULE_5__material_ui_core__["l" /* Paper */],
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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchSuggest;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SearchSuggest.propTypes = {
  suggestions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onAddToken: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5__material_ui_core__["p" /* withStyles */])(styles)(SearchSuggest);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  reactHotLoader.register(renderInput, 'renderInput', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  reactHotLoader.register(renderSuggestion, 'renderSuggestion', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  reactHotLoader.register(renderSuggestionsContainer, 'renderSuggestionsContainer', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  reactHotLoader.register(SearchSuggest, 'SearchSuggest', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  reactHotLoader.register(_default, 'default', '/Users/gereth/Projects/hn-hired/components/SearchSuggest.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.dd10b3be249b40e7e273.hot-update.js.map