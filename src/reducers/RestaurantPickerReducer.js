import {SELECT_YES, SELECT_NEXT} from '../actions/RestaurantPickerActions'

const initialState = {
  availableOptions: [],
  currentRestaurant: null
}

const RestaurantPickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_YES:
      return '';
    case SELECT_NEXT:
      return '';
    default:
      return state;
  }
}

export default RestaurantPickerReducer;