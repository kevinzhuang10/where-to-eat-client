import React from 'react';
import FoodCategoryChip from './FoodCategoryChip';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

const FoodCategoryChips = (props) => {
  return (
    <div style={styles.wrapper}>
      {props.categories.map((category, i) => {
        return (
          <FoodCategoryChip 
            key={i} 
            category={category} 
            handleSelect={props.handleSelect}
            handleDeselect={props.handleDeselect}
          />
        )})
      }
    </div>
  );
}

export default FoodCategoryChips;