import React from 'react';
import Chip from '@material-ui/core/Chip';

const styles = {
  chip: {
    margin: '0 auto'
  }
};

const FoodCategoryChip = (props) => {
  const {handleClickCategoryChip, categoryState, categoryIndex} = props;
  let backgroundColor;
  if (categoryState.selected) {
    backgroundColor = 'green';
  }

  return (
    <div style={styles.chip}>
      <Chip {...{
        label: categoryState.categoryName,
        onClick: () => handleClickCategoryChip(categoryIndex), 
        style: {background: backgroundColor}
      }}/>
    </div>
  );
}

export default FoodCategoryChip;