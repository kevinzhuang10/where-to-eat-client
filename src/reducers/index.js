import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import recommend from './recommend'

const rootReducer = combineReducers({
  router: routerReducer,
  recommend
})

export default rootReducer