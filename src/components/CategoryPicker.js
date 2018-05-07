import React from 'react';
import FoodCategoryChips from './FoodCategoryChips';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const CategoryPicker = (props) => {
  return (
    <div>
      <FoodCategoryChips 
        categories={props.categories} 
        handleSelect={props.handleSelect} 
        handleDeselect={props.handleDeselect}
      />
      <RaisedButton 
        label="Show Me The Magic" 
        primary={true} 
        style={style}
        onClick={props.handleGetRecommendations} 
      />
    </div>
  );
}

export default CategoryPicker;