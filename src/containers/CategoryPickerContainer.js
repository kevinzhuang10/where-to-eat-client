import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FoodCategoryChips from '../components/FoodCategoryChips';
import Button from '@material-ui/core/Button';
import AddCategory from '../components/AddCategory';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import {
  handleClickCategoryChip, 
  handleGetRecommendations, 
  inputCategory, 
  changeAddress,
  handleDeleteCategory,
  addCategory
} from '../actions/recommend';

const styles = theme => ({
  button: {
    margin: 12,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const CategoryPicker = (props) => {
  const {
    classes,
    inputCategory,
    addCategoryTextField,
    handleAddCategory
  } = props;
  return (
    <div>
      <SearchBox
        onPlacesChanged={props.changeAddress}
      />
      <FoodCategoryChips 
        categoryStates={props.categoryStates} 
        handleClickCategoryChip={props.handleClickCategoryChip}
        handleDeleteCategory={props.handleDeleteCategory}
      />
      <AddCategory 
        handleAddCategoryTextFieldChange={inputCategory}
        addCategoryTextField={addCategoryTextField}
        handleAddCategory={handleAddCategory}
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
  userLocation: state.recommend.userLocation,
  addCategoryTextField: state.recommend.addCategoryTextField
});

const mapDispatchToProps = dispatch => ({
  handleClickCategoryChip: categoryObject => dispatch(handleClickCategoryChip(categoryObject)),
  handleGetRecommendations: () => dispatch(handleGetRecommendations()),
  inputCategory: (e) => dispatch(inputCategory(e.target.value)),
  changeAddress: (addressObject) => dispatch(changeAddress(addressObject)),
  handleDeleteCategory: (categoryObject) => dispatch(handleDeleteCategory(categoryObject)),
  handleAddCategory: (categoryString) => dispatch(addCategory(categoryString))
});

const CategoryPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CategoryPicker));


export default CategoryPickerContainer;