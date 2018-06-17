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
      {props.categoryStates.map((categoryState, i) => {
        return (
          <FoodCategoryChip 
            key={i} 
            categoryIndex={i}
            categoryState={categoryState}
            handleClickCategoryChip={props.handleClickCategoryChip}
            handleDeleteCategory={props.handleDeleteCategory}
          />
        )})
      }
    </div>
  );
}

export default FoodCategoryChips;