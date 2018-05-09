import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width: '50%',
  height: '50%',
  margin: 'auto'
}

const RestaurantCard = (props) => {
  return (
    <div style={style}>
      <Card>
        <CardMedia>
          {/* <img src={props.restaurant.image_url} alt="restaurant" /> */}
        </CardMedia>
        {/* <CardTitle title={props.restaurant.name} subtitle={props.restaurant.categories[0].title} /> */}
        <CardActions>
          <RaisedButton label="Yes!" primary={true} onClick={props.handleYes}/>
          <RaisedButton label="Next" secondary={true} onClick={props.handleNext}/>
        </CardActions>
      </Card>
    </div>
  );
};

export default RestaurantCard;