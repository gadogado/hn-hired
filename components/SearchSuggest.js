import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { Paper, MenuItem, TextField, withStyles } from '@material-ui/core';

const styles = theme => ({
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
});

const renderInput = inputProps => {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

const renderSuggestionsContainer = options => {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
};

class SearchSuggest extends Component {
  state = {
    value: '',
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleOnFocus = event => {
    this.setState({
      value: ''
    });
    event.target.value = '';
  };

  getSuggestions = value => {
    const { suggestions } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : Object.keys(suggestions).filter(suggestion => {
          return suggestion.toLowerCase().slice(0, inputLength) === inputValue;
        });
  };

  handleSuggestionSelected = (event, { suggestionValue }) => {
    this.setState(
      {
        value: ''
      },
      () => {
        this.props.onAddToken(suggestionValue);
      }
    );
  };

  handleKeyPress = event => {
    if (event.key !== 'Enter') return;
    const value = event.target.value;

    this.setState(
      {
        value: ''
      },
      () => {
        this.props.onAddToken(value);
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
          input: classes.input
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionSelected={this.handleSuggestionSelected}
        getSuggestionValue={value => value}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: 'Search',
          value: this.state.value,
          onChange: this.handleChange,
          onKeyPress: this.handleKeyPress,
          onFocus: this.handleOnFocus
        }}
      />
    );
  }
}

SearchSuggest.propTypes = {
  suggestions: PropTypes.object.isRequired,
  onAddToken: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchSuggest);
