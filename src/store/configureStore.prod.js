import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const configureStore = preloadedState => {
  const middleware = [
    thunk,
    routerMiddleware(history)
  ]

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )

  return store
}

export default configureStore