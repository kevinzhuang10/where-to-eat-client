import axios from 'axios';
import {receiveRecommendations} from './RestaurantPicker';
export const HANDLE_CLICK_CATEGORY_CHIP = 'HANDLE_CLICK_CATEGORY_CHIP';
export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';

export const handleClickCategoryChip = (categoryIndex) => {
  return {
    type: HANDLE_CLICK_CATEGORY_CHIP,
    categoryIndex
  };
};

export const requestRecommendations = () => {
  return {
    type: REQUEST_RECOMMENDATIONS
  };
};

export const handleGetRecommendations = () => {
  console.log('got called!');
  return (dispatch, getState) => {
    console.log('got call here too', getState());
    const currentState = getState();
    if (currentState.CategoryPicker.numberSelected <= 0) {
      return;
    }

    const categoryString = currentState.CategoryPicker.categoryStates.filter(categoryState => {
      return categoryState.selected;
    }).map(categoryState => {
      return categoryState.categoryName;
    }).join('+'); 
    const lat = currentState.CategoryPicker.userLat;
    const lon = currentState.CategoryPicker.userLon;
    const queryString = `term=${categoryString}&latitude=${lat}&longitude=${lon}`;

    dispatch(requestRecommendations());
    return fetchRecommendations(queryString)
      .then(response => {
        console.log('res', response);
        let restaurants = response.data;
        const currentRestaurant = restaurants.pop();
        return dispatch(receiveRecommendations(restaurants, currentRestaurant));
      });
  }
}

const fetchRecommendations = (queryString) => {
  let endPoint = 'recommend/index?';
  let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
  console.log('sending request', devURL);
  return axios.get(devURL);
}