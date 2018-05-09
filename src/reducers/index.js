import { combineReducers } from 'redux'
import CategoryPicker from './CategoryPicker'
import RestaurantPicker from './RestaurantPicker'
import UIState from './UIState'

const rootReducer = combineReducers({
  UIState,
  CategoryPicker,
  RestaurantPicker
})

export default rootReducer