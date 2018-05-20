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
        categoryStates={props.categoryStates} 
        handleClickCategoryChip={props.handleClickCategoryChip}
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