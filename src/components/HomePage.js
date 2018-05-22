import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import CategoryPickerContainer from '../containers/CategoryPickerContainer';
import RestaurantPickerContainer from '../containers/RestaurantPickerContainer';
import RestaurantPicker from './RestaurantPicker';
import {selectCategory, deselectCategory, handleGetRecommendations, handleClickCategoryChip} from '../actions/CategoryPicker';
import {selectYes, selectNext} from '../actions/RestaurantPicker';
import {highlightCategory} from '../actions/UIState';
import { connect } from 'react-redux';


// class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     choicesAvailable: 5,
  //     categories: ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'],
  //     selectedCategories: [],
  //     availableOptions: [],
  //     currentRestaurant: null
  //   };
  // }

  // handleSelect = (category) => {
  //   if (this.state.selectedCategories.length < this.state.choicesAvailable) {
  //     this.setState({
  //       selectedCategories: this.state.selectedCategories.concat(category)
  //     });
  //     return true;
  //   }
  //   return false;
  // }

  // handleDeselect = (category) => {
  //   let newSelectCategories = this.state.selectedCategories.slice();
  //   let targetIndex = newSelectCategories.indexOf(category);
  //   if (targetIndex !== -1) {
  //     newSelectCategories.splice(targetIndex, 1);
  //     this.setState({
  //       selectedCategories: newSelectCategories
  //     });
  //     return true;
  //   }
  //   return false;
  // }

  // async getRecommendations(queryString) {
  //   let endPoint = 'recommend/index?';
  //   let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
  //   console.log('sending request', devURL);
  //   let result = await axios.get(devURL);
  //   console.log(result.data);
  //   let restaurants = result.data;
  //   let currentRestaurant = restaurants.pop();
  //   this.setState({
  //     availableOptions: restaurants,
  //     currentRestaurant: currentRestaurant
  //   });
  // }

  // handleGetRecommendations = () => {
  //   if (this.state.selectedCategories.length > 0) {
  //     let lat = '37.760737';
  //     let lon = '-122.467954';
  //     let queryString = `term=${this.state.selectedCategories.join('+')}&latitude=${lat}&longitude=${lon}`;
  //     this.getRecommendations(queryString);
  //   }
  // }

  // handleNext = () => {
  //   let newAvailableOptions = this.state.availableOptions.slice();
  //   let nextRestaurant = newAvailableOptions.pop();
  //   if (nextRestaurant) {
  //     this.setState({
  //       availableOptions: newAvailableOptions,
  //       currentRestaurant: nextRestaurant
  //     });
  //   } else {
  //     this.setState({
  //       selectedCategories: [],
  //       availableOptions: [],
  //       currentRestaurant: null
  //     });
  //   }
  // }

  // handleYes = () => {
  //   this.setState({
  //     selectedCategories: [],
  //     availableOptions: [],
  //     currentRestaurant: null
  //   });
  // }

const HomePage = ({showCategoryPicker}) => {
  let content;
  if (showCategoryPicker) {
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

export default HomePage;