import {SELECT_YES, SELECT_NEXT} from '../actions/RestaurantPicker'

const initialState = {
  showRestaurantPicker: false,
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
    default:
      return state;
  }
}

export default RestaurantPicker;