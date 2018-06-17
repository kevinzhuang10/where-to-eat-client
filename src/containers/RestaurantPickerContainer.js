import React from 'react';
import { connect } from 'react-redux';
import {handleYes, handleNext} from '../actions/recommend';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RestaurantCard from '../components/RestaurantCard';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const RestaurantPicker = (props) => {
  const {
    classes,
    availableOptions
  } = props;
  return (
    <div>
      <RestaurantCard 
        restaurant={props.currentRestaurant}
        handleNext={props.handleNext}
        handleYes={props.handleYes}
      />
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            {`You have ${availableOptions.length} options remaining.`}
          </Typography>
        </Paper>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentRestaurant: state.recommend.currentRestaurant,
  availableOptions: state.recommend.availableOptions
});

const mapDispatchToProps = dispatch => ({
  handleNext: restaurant => dispatch(handleNext(restaurant)),
  handleYes: restaurant => dispatch(handleYes(restaurant))
});

const RestaurantPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RestaurantPicker));

export default RestaurantPickerContainer;