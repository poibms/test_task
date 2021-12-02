import { combineReducers } from '@reduxjs/toolkit';
import user from './User';
import { searchHistory, crntWeather, nearestWeather } from './Weather';
import error from './Error';

const rootReducer = combineReducers({
	user,
	searchHistory,
	crntWeather,
	nearestWeather,
	error,
});
export default rootReducer;
