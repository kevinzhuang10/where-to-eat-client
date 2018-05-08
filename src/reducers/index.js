import { combineReducers } from 'redux'
import CategoryPickerReducer from './CategoryPickerReducer'
import RestaurantPickerReducer from './RestaurantPickerReducer'

const rootReducer = combineReducers({
  CategoryPickerReducer,
  RestaurantPickerReducer
})

export default rootReducer