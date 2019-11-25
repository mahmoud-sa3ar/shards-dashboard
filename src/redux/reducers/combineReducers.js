import { combineReducers } from 'redux'

import setLoginReducer from './setLoginReducer'

import dummyReducer from './dummyReducer'


export default combineReducers({
  dummyReducer,
  setLoginReducer
})