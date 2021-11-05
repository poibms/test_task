import { combineReducers } from 'redux';
import user from './User';
import { searchHistory, crntWeather, nearestWeather } from './Weather';

const rootReducer = combineReducers({
	user,
	searchHistory,
	crntWeather,
	nearestWeather,
});

export default rootReducer;
