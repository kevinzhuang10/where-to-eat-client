import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FoodCategoryChips from './FoodCategoryChips';
import Button from '@material-ui/core/Button';
import SearchBox from './SearchBox';

const styles = theme => ({
  button: {
    margin: 12,
  },
});

const CategoryPicker = (props) => {
  const { classes } = props;
  return (
    <div>
      <FoodCategoryChips 
        categoryStates={props.categoryStates} 
        handleClickCategoryChip={props.handleClickCategoryChip}
      />
      <SearchBox
        onPlacesChanged={props.changeAddress}
      />
      <Button
        variant="contained"
        color="primary" 
        className={classes.button}
        onClick={props.handleGetRecommendations} 
      >
        Recommend
      </Button>
    </div>
  );
}

CategoryPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryPicker);