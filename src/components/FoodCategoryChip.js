import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  selectedChip: {
    margin: theme.spacing.unit / 2,
    background: 'green'
  }
});

const FoodCategoryChip = (props) => {
  const {handleClickCategoryChip, categoryState, handleDeleteCategory, classes} = props;
  let backgroundColor;
  if (categoryState.selected) {
    backgroundColor = 'green';
  }

  return (
    <div>
      <Chip {...{
        label: categoryState.categoryName,
        onClick: () => handleClickCategoryChip(categoryState), 
        onDelete: () => handleDeleteCategory(categoryState),
        style: {background: backgroundColor},
        className: classes.chip
      }}/>
    </div>
  );
}

export default withStyles(styles)(FoodCategoryChip);