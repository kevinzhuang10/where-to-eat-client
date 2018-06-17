import React from 'react';
import { connect } from 'react-redux';
import {handleYes, handleNext} from '../actions/recommend';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantPicker = (props) => {
  return (
    <div>
      <RestaurantCard 
        restaurant={props.currentRestaurant}
        handleNext={props.handleNext}
        handleYes={props.handleYes}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  currentRestaurant: state.recommend.currentRestaurant
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