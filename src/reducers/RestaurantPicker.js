import {SELECT_YES, SELECT_NEXT, RECEIVE_RECOMMENDATIONS} from '../actions/RestaurantPicker'

const initialState = {
  availableOptions: [],
  currentRestaurant: null,
}

const RestaurantPicker = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_YES:
      return {
        ...state,
        selectedCategories: [],
        availableOptions: [],
        currentRestaurant: null
      };
    case SELECT_NEXT:
      let newAvailableOptions = this.state.availableOptions.slice();
      let nextRestaurant = newAvailableOptions.pop();
      if (nextRestaurant) {
        return {
          ...state,
          availableOptions: newAvailableOptions,
          currentRestaurant: nextRestaurant
        }
      } else {
        return {
          ...state,
          selectedCategories: [],
          availableOptions: [],
          currentRestaurant: null
        }
      }
    case RECEIVE_RECOMMENDATIONS: 
      return {
        ...state,
        availableOptions: action.availableOptions,
        currentRestaurant: action.currentRestaurant
      }
    default:
      return state;
  }
}

export default RestaurantPicker;