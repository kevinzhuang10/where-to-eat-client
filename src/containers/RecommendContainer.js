import React from 'react';
import { connect } from 'react-redux';
import CategoryPickerContainer from '../containers/CategoryPickerContainer';
import RestaurantPickerContainer from '../containers/RestaurantPickerContainer';

const Recommend = ({currentRestaurant}) => {
  let content;
  if (!currentRestaurant) {
    content = <CategoryPickerContainer/>;
  } else {
    content = <RestaurantPickerContainer/>;
  }

  return (
  <div>
    {content}
  </div>
  );
}

const mapStateToProps = state => ({
  showCategoryPicker: state.recommend.showCategoryPicker,
  currentRestaurant: state.recommend.currentRestaurant
});

const RecommendContainer = connect(
  mapStateToProps
)(Recommend);


export default RecommendContainer;