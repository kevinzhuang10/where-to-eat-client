import { connect } from 'react-redux';
import {handleYes, handleNext} from '../actions/CategoryPicker';
import RestaurantPicker from '../components/RestaurantPicker';

const mapStateToProps = state => ({
  currentRestaurant: state.CategoryPicker.currentRestaurant
});

const mapDispatchToProps = dispatch => ({
  handleNext: restaurant => dispatch(handleNext(restaurant)),
  handleYes: restaurant => dispatch(handleYes(restaurant))
});

const RestaurantPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantPicker);


export default RestaurantPickerContainer;