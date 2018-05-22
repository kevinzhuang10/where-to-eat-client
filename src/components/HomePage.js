import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import CategoryPickerContainer from '../containers/CategoryPickerContainer';
import RestaurantPickerContainer from '../containers/RestaurantPickerContainer';
import RestaurantPicker from './RestaurantPicker';
import {selectCategory, deselectCategory, handleGetRecommendations, handleClickCategoryChip} from '../actions/CategoryPicker';
import {selectYes, selectNext} from '../actions/RestaurantPicker';
import {highlightCategory} from '../actions/UIState';
import { connect } from 'react-redux';

const HomePage = ({showCategoryPicker, currentRestaurant}) => {
  let content;
  if (showCategoryPicker) {
    content = <CategoryPickerContainer/>;
  } else if (!showCategoryPicker && currentRestaurant){
    content = <RestaurantPickerContainer/>;
  }

  return (
  <div>
    {content}
  </div>
  );
}

export default HomePage;