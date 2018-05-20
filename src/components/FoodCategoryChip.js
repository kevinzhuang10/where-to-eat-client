import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import {blue300} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: '0 auto'
  }
};

const FoodCategoryChip = (props) => {
  const {handleClickCategoryChip, categoryState, categoryIndex} = props;
  let backgroundColor;
  if (categoryState.selected) {
    backgroundColor = blue300
  }

  return (
    <div style={styles.chip}>
      <Chip {...{onClick: () => handleClickCategoryChip(categoryIndex), backgroundColor}}>
        {categoryState.categoryName}
      </Chip>
    </div>
  );
}

export default FoodCategoryChip;