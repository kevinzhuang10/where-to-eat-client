import {
  HANDLE_CLICK_CATEGORY_CHIP, 
  REQUEST_RECOMMENDATIONS,
  RECEIVE_RECOMMENDATIONS,
  SELECT_YES, 
  SELECT_NEXT 
} from '../actions/recommend'

export const initialCategories = ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'];
const initialCategoriesState = initialCategories.map(category => {
  return {
    categoryName: category,
    selected: false
  };
});

const initialState = {
  showCategoryPicker: true,
  choicesAvailable: 5,
  categoryStates: initialCategoriesState,
  numberSelected: 0,
  userLat: '37.760737',
  userLon: '-122.467954',
  isFetching: false,
  availableOptions: [],
  currentRestaurant: null,
}

const recommend = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CLICK_CATEGORY_CHIP:
      const {categoryStates, numberSelected, choicesAvailable} = state
      const targetIndex = action.categoryIndex;
      let selecting = true;
      const newCategoryStates = categoryStates.map((categoryState, index) => {
        if (index === targetIndex) {
          selecting = !categoryState.selected;
          return {
            ...categoryState,
            selected: !categoryState.selected
          };
        } else {
          return categoryState;
        }
      });

      if (selecting && (numberSelected >= choicesAvailable)) {
        return state;
      }

      return {
        ...state,
        categoryStates: newCategoryStates,
        numberSelected: selecting ? numberSelected + 1 : numberSelected - 1
      }

    case REQUEST_RECOMMENDATIONS:
      return {
        ...state,
        isFetching: true,
        showCategoryPicker: false
      };

      case SELECT_YES:
      return {
        ...state,
        selectedCategories: [],
        availableOptions: [],
        currentRestaurant: null
      };

    case SELECT_NEXT:
      let newAvailableOptions = state.availableOptions.slice();
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

export default recommend;