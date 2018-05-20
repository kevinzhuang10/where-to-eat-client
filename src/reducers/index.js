import { combineReducers } from 'redux'
import CategoryPicker from './CategoryPicker'
import RestaurantPicker from './RestaurantPicker'

const rootReducer = combineReducers({
  CategoryPicker,
  RestaurantPicker
})

export default rootReducer