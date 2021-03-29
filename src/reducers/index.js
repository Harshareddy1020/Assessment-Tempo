import { combineReducers } from 'redux'

import teamsReducer from './teamsReducer'
import userReducer from './userReducer'
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  teams: teamsReducer,
  team:userReducer,
  searchState: searchReducer,
})

export default rootReducer
