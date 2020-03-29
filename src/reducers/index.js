import postsReducer from './postsReducer'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    postsReducer: postsReducer,

})

export default allReducers;