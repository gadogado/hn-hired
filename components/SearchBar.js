import PropTypes from 'prop-types';
import SearchSuggest from './SearchSuggest';
import Github from '../components/Github';
import {
  Typography,
  Toolbar,
  AppBar,
  Chip,
  withStyles,
  IconButton
} from '@material-ui/core';

const styles = theme => ({
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
});

const SearchBar = ({ classes, searchTokens, onSearch, trends, date }) => {
  const addToken = value => {
    const token = value.trim().toLowerCase();

    if (!token) return;
    const newTokens = [...new Set(searchTokens.concat(token))];

    if (newTokens.length !== searchTokens.length) {
      onSearch(newTokens);
    }
  };

  const removeToken = token => {
    const newTokens = searchTokens.filter(t => t !== token);
    onSearch(newTokens);
  };

  const tokensList = searchTokens.map(token => (
    <Chip
      key={token}
      label={token}
      onDelete={() => removeToken(token)}
      className={classes.chip}
    />
  ));

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="title" color="inherit">
          HN Hired
          <Typography variant="caption" color="inherit">
            {date}
          </Typography>
        </Typography>

        <Typography className={classes.typography}>
          <SearchSuggest onAddToken={addToken} suggestions={trends} />
        </Typography>
        <a
          href="https://github.com/gadogado/hn-hired"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton className={classes.button} component="span">
            <Github />
          </IconButton>
        </a>
      </Toolbar>
      <div className={classes.root}>{tokensList}</div>
    </AppBar>
  );
};

SearchBar.propTypes = {
  date: PropTypes.string.isRequired,
  trends: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTokens: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
