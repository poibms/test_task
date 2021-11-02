import {
	ADD_SEARCH_HISHORY,
	ADD_CURNT_WEATHER,
	ADD_NEAREST_WEATHER,
	REMOVE_SEARCH_HISTORY,
} from '../Config/ReduxConstants/ActionConstants';
import LocalStorageServices from '../Services/LocalStorageServices';

const posts = LocalStorageServices.getSearchHistory();

export const crntWeather = (state = {}, { obj, type }) => {
	switch (type) {
		case ADD_CURNT_WEATHER:
			return obj;
		default:
			return state;
	}
};

export const searchHistory = (state = posts || [], { id, obj, type }) => {
	switch (type) {
		case ADD_SEARCH_HISHORY:
			return [...state, obj];
		case REMOVE_SEARCH_HISTORY:
			return [...state].filter((item) => item.id !== id);
		default:
			return state;
	}
};

export const nearestWeather = (state = [], { obj, type }) => {
	switch (type) {
		case ADD_NEAREST_WEATHER:
			return [...state, obj];
		default:
			return state;
	}
};
