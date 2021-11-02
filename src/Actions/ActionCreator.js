import {
	ISLOGIN,
	ADD_SEARCH_HISHORY,
	ADD_CURNT_WEATHER,
	ADD_NEAREST_WEATHER,
	REMOVE_SEARCH_HISTORY,
} from '../Config/ReduxConstants/ActionConstants';

export const checkUserStatus = (status) => ({
	type: ISLOGIN,
	status,
});

export const addCurntWeather = (obj) => ({
	type: ADD_CURNT_WEATHER,
	obj,
});

export const addSearchHistory = (obj) => ({
	type: ADD_SEARCH_HISHORY,
	obj,
});

export const addNearestWeather = (obj) => ({
	type: ADD_NEAREST_WEATHER,
	obj,
});

export const removeSearchHistory = (id) => ({
	type: REMOVE_SEARCH_HISTORY,
	id,
});
