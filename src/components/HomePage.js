import React, { Component } from 'react';
import CategoryPickerContainer from '../containers/CategoryPickerContainer';
import RestaurantPickerContainer from '../containers/RestaurantPickerContainer';

const HomePage = ({showCategoryPicker, currentRestaurant}) => {
  let content;
  if (!currentRestaurant) {
    content = <CategoryPickerContainer/>;
  } else {
    content = <RestaurantPickerContainer/>;
  }

  return (
  <div>
    {content}
  </div>
  );
}

export default HomePage;