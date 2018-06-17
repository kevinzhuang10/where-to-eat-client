import {
  HANDLE_CLICK_CATEGORY_CHIP, 
  HANDLE_DELETE_CATEGORY,
  REQUEST_RECOMMENDATIONS,
  RECEIVE_RECOMMENDATIONS,
  SELECT_YES, 
  SELECT_NEXT,
  INPUT_CATEGORY,
  ADD_CATEGORY,
  CHANGE_ADDRESS
} from '../actions/recommend'

export const initialCategories = ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'];
const initialCategoryStates = initialCategories.map(category => {
  return {
    categoryName: category,
    selected: false
  };
});

const initialState = {
  showCategoryPicker: true,
  choicesAvailable: 5,
  maxCategoriesCount: 15,
  categoryStates: initialCategoryStates,
  numberSelected: 0,
  formattedAddress: '',
  lat: '37.760737',
  lng: '-122.467954',
  addressName: '',
  isFetching: false,
  availableOptions: [],
  currentRestaurant: null,
  addCategoryTextField: ''
}

const recommend = (state = initialState, action) => {
  const {
    categoryStates,
    numberSelected,
    choicesAvailable,
    maxCategoriesCount
  } = state;
  let newCategoryStates;
  let newCategoryState;
  let newNumberSelected;

  switch (action.type) {
    case HANDLE_CLICK_CATEGORY_CHIP:
      const targetCategory = action.category;
      let selecting = true;
      newCategoryStates = categoryStates.map(categoryState => {
        if (categoryState.categoryName === targetCategory.categoryName) {
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
        categoryStates: initialCategoryStates,
        availableOptions: [],
        currentRestaurant: null,
        numberSelected: 0
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
          categoryStates: initialCategoryStates,
          availableOptions: [],
          currentRestaurant: null,
          numberSelected: 0
        }
      }

    case RECEIVE_RECOMMENDATIONS: 
      return {
        ...state,
        availableOptions: action.availableOptions,
        currentRestaurant: action.currentRestaurant,
        isFetching: false
      }

    case INPUT_CATEGORY:
      return {
        ...state,
        addCategoryTextField: action.categoryString
      }

    case ADD_CATEGORY:
      if (action.categoryString.length < 1) {
        return state;
      }
      const categoryExists = categoryStates.filter(categoryState => {
        return categoryState.categoryName.toLowerCase() === action.categoryString.toLowerCase()
      }).length > 0;
      if (categoryExists || (categoryStates.length >= maxCategoriesCount)) {
        return {
          ...state,
          addCategoryTextField: ''
        }
      }
      newCategoryState = {
        categoryName: action.categoryString,
        selected: false
      };
      newCategoryStates = categoryStates.slice();
      newCategoryStates.push(newCategoryState);
      return {
        ...state,
        categoryStates: newCategoryStates,
        addCategoryTextField: ''
      }
      
    case CHANGE_ADDRESS:
      return {
        ...state,
        formattedAddress: action.formattedAddress,
        lat: action.lat,
        lng: action.lng,
        addressName: action.addressName
      }

    case HANDLE_DELETE_CATEGORY:
      newCategoryStates = state.categoryStates.filter(categoryState => {
        return categoryState.categoryName !== action.category.categoryName
      });
      newNumberSelected = state.numberSelected;
      if (action.category.selected) {
        newNumberSelected--;
      }
      return {
        ...state,
        categoryStates: newCategoryStates,
        numberSelected: newNumberSelected
      }
      
    default:
      return state;
  }
}

export default recommend;