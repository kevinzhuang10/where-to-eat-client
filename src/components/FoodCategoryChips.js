import React from 'react';
import FoodCategoryChip from './FoodCategoryChip';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 12,
    height: '250px'
  }
};

const FoodCategoryChips = (props) => {
  return (
    <div style={styles.wrapper}>
      {props.categories.map((category, i) => {
        return (
          <FoodCategoryChip 
            key={i} 
            categoryIndex={i}
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