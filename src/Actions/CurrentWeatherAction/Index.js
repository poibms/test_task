import { ADD_CURNT_WEATHER } from './CurrentWeatherConstant';

export const addCurntWeather = (obj) => ({
	type: ADD_CURNT_WEATHER,
	obj,
});
