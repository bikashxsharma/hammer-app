import postsReducer from './postsReducer'
import isLoggedInReducer from './isLoggedInReducer'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    postsReducer,
    isLoggedInReducer,

})

export default allReducers;