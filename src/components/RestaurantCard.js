import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    width: '50%',
    height: '50%',
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const RestaurantCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia {...{
          className: classes.media,
          image: props.restaurant.image_url,
          title: props.restaurant.name
        }}/>
        <CardContent>
          <Typography variant="headline">
            {props.restaurant.name}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {props.restaurant.categories[0].title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button {...{
            variant: 'contained',
            color: 'primary',
            onClick: props.handleYes
          }}>
            Yes!
          </Button>
          <Button {...{
            color: 'secondary',
            onClick: props.handleNext
          }}>
            Next
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(RestaurantCard);