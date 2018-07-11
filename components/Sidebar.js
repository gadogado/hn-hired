import PropTypes from 'prop-types';
import {
  Typography,
  Drawer,
  List,
  ListItem,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  paper: {
    width: 140,
    position: 'absolute',
    height: '100%'
  }
});

const Sidebar = ({ trends, searchTokens, onSearch, classes }) => {
  const searchComments = trend => {
    const newTokens = [...new Set(searchTokens.concat(trend))];
    onSearch(newTokens);
  };

  const listTrends = Object.entries(trends)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count], key) => (
      <ListItem button key={name} onClick={() => searchComments(name)} dense>
        <Typography variant="body2">
          {name} ({count})
        </Typography>
      </ListItem>
    ));

  return (
    <Drawer variant="permanent" classes={classes}>
      <List>{listTrends}</List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTokens: PropTypes.array.isRequired,
  trends: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
