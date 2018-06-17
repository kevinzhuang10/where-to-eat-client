import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FoodCategoryChips from '../components/FoodCategoryChips';
import Button from '@material-ui/core/Button';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import {handleClickCategoryChip, handleGetRecommendations, inputLocation, changeAddress} from '../actions/recommend';

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

const mapStateToProps = state => ({
  categoryStates: state.recommend.categoryStates,
  userLocation: state.recommend.userLocation
});

const mapDispatchToProps = dispatch => ({
  handleClickCategoryChip: categoryIndex => dispatch(handleClickCategoryChip(categoryIndex)),
  handleGetRecommendations: () => dispatch(handleGetRecommendations()),
  inputLocation: (e) => dispatch(inputLocation(e.target.value)),
  changeAddress: (addressObject) => dispatch(changeAddress(addressObject))
});

const CategoryPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CategoryPicker));


export default CategoryPickerContainer;