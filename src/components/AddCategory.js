import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: 12,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const AddCategory = (props) => {
  const {
    classes,
    handleAddCategoryTextFieldChange,
    addCategoryTextField,
    handleAddCategory
  } = props;

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="addCategory"
          label="add a category"
          className={classes.textField}
          value={addCategoryTextField}
          onChange={handleAddCategoryTextFieldChange}
          margin="normal"
        />
        <Button 
          variant="outlined" 
          className={classes.button}
          onClick={() => handleAddCategory(addCategoryTextField)}
        >
          add category
        </Button>
      </form>
    </div>
  );
}

export default withStyles(styles)(AddCategory);