import {HANDLE_CLICK_CATEGORY_CHIP} from '../actions/CategoryPicker'

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
  numberSelected: 0
}

const CategoryPickerReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
}

export default CategoryPickerReducer;