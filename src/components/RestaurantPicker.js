import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantPicker = (props) => {
  return (
    <div>
      <RestaurantCard 
        restaurant={props.currentRestaurant}
        handleNext={props.handleNext}
      />
    </div>
  )
}

export default RestaurantPicker;