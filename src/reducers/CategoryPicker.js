import {SELECT_CATEGORY, DESELECT_CATEGORY} from '../actions/CategoryPicker'

export const initialCategories = ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'];

const initialState = {
  choicesAvailable: 5,
  categories: initialCategories,
  selectedCategories: []
}

const CategoryPickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      if (state.selectedCategories.length < state.choicesAvailable) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.concat(action.payload.categoryIndex)
        }
      }
      // return state;
    case DESELECT_CATEGORY:
      const targetIndex = state.selectedCategories.indexOf(action.payload.categoryIndex);
      if (targetIndex !== -1) {
        let newSelectCategories = state.selectedCategories.slice();
        newSelectCategories.splice(targetIndex, 1);
        return {
          ...state,
          selectedCategories: newSelectCategories
        }
      }
      // return state;
    default:
      return state;
  }
}

export default CategoryPickerReducer;