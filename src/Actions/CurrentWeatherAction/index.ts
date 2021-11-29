import { ADD_CURNT_WEATHER } from './CurrentWeatherConstant';

export const addCurntWeather = (obj: any) => ({
	type: ADD_CURNT_WEATHER,
	obj,
});
