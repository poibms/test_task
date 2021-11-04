import { ADD_NEAREST_WEATHER } from './NearestWeatherConstant';

export const addNearestWeather = (obj) => ({
	type: ADD_NEAREST_WEATHER,
	obj,
});
