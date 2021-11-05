import LocalStorageServices from '../Services/LocalStorageServices';
import { searchById, searchByName } from '../Services/SearchServices';
import { wrongValue } from '../Config/Error';
// import setWeatherValue from '../Services/SetWeatherServices';
import { ADD_CURNT_WEATHER } from '../Actions/CurrentWeatherAction/CurrentWeatherConstant';
import { ADD_SEARCH_HISHORY } from '../Actions/SearchHistoryAction/SearchHistoryConstant';
import { ADD_NEAREST_WEATHER } from '../Actions/NearestWeather/NearestWeatherConstant';
import { REMOVE_SEARCH_HISTORY } from '../Actions/RemoveSearchHistory/RemoveSearchHistoryConstant';
import setWeatherValue from '../Services/SetWeatherServices';

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

export const getWeatherByName = (value, props) => {
	return (dispatch) => {
		searchByName(value)
			.then((response) => {
				setWeatherValue(response, props);
				dispatch(crntWeather);
				dispatch(nearestWeather);
				dispatch(searchHistory);
			})
			.catch((e) => {
				alert(wrongValue, e);
			});
	};
};

export const getWeatherById = (id, props) => {
	return (dispatch) => {
		searchById(id)
			.then((response) => {
				setWeatherValue(response, props, dispatch);
				dispatch(crntWeather);
				dispatch(nearestWeather);
				dispatch(searchHistory);
			})
			.catch((e) => {
				alert(wrongValue, e);
			});
	};
};
