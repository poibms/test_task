import { ADD_NEAREST_WEATHER } from './NearestWeatherConstant';

export const addNearestWeather = (obj: object) => ({
	type: ADD_NEAREST_WEATHER,
	obj,
});
