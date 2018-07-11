import PropTypes from 'prop-types';
import { withStyles, LinearProgress } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  }
};

const Loading = ({ classes, loading }) => {
  if (!loading) return null;

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);
