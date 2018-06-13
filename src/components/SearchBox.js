import React from 'react';
import { compose, withProps } from 'recompose';
import {withScriptjs} from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const SearchBox = (props) => {
  const { classes } = props;
  const refs = {};
  return (
    <div data-standalone-searchbox="">
      <StandaloneSearchBox
        ref={ref => refs.searchBox = ref}
        bounds={props.bounds}
        onPlacesChanged={() => props.onPlacesChanged(refs.searchBox.getPlaces()[0])}
      >
        <TextField
          id="location"
          label="location"
          className={classes.textField}
          margin="normal"
        />
      </StandaloneSearchBox>
    </div>
  );
}

export default compose(
  withProps({
    googleMapURL: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  withStyles(styles),
  withScriptjs
)(SearchBox);