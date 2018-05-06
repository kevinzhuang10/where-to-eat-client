import React from 'react';
import FoodCategoryChip from './FoodCategoryChip';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

function FoodCategoryChips(props) {
  return (
    <div style={styles.wrapper}>
      {props.categories.map(((category, i) => <FoodCategoryChip key={i} category={category} handleSelect={props.handleSelect}/>))}
    </div>
  );
}

export default FoodCategoryChips;