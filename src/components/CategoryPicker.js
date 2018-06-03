import React from 'react';
import FoodCategoryChips from './FoodCategoryChips';
import Button from '@material-ui/core/Button';

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
      <Button
        variant="contained"
        color="primary" 
        style={style}
        onClick={props.handleGetRecommendations} 
      >
        Recommend
      </Button>
    </div>
  );
}

export default CategoryPicker;