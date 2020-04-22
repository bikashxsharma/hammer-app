import postsReducer from "./postsReducer"
import isLoggedInReducer from "./isLoggedInReducer"
import getUsersReducer from "./getUsersReducer"

import {combineReducers} from "redux"

const allReducers = combineReducers({
  postsReducer,
  isLoggedInReducer,
  getUsersReducer,
})

export default allReducers
