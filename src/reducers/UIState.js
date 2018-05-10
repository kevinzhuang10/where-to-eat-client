import {initialCategories} from './CategoryPicker'
import {highlightCategory, HIGHLIGHT_CATEGORY} from '../actions/UIState'

const initialState = {
  foodCategoryChipsUIState: initialCategories.map(category => {
    return {selected: false}
  }),
  showCategoryPicker: true,
  showRestaurantPicker: false
}

const UIStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_CATEGORY:
      return {
        ...state,
        foodCategoryChipsUIState: state.foodCategoryChipsUIState.map((uiState, index) => {
          if (index === action.payload.categoryIndex) {
            uiState.selected = true
            return uiState
          }
          return uiState
        })
      }
    default:
      return state
  }
}

export default UIStateReducer;