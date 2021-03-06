import { Dispatch } from 'redux';
import LocalStorageServices from '../Services/LocalStorageServices';
import { searchById, searchByName } from '../Services/SearchServices';
import { ADD_CURNT_WEATHER } from '../Actions/CurrentWeatherAction/CurrentWeatherConstant';
import { ADD_SEARCH_HISHORY } from '../Actions/SearchHistoryAction/SearchHistoryConstant';
import { ADD_NEAREST_WEATHER } from '../Actions/NearestWeather/NearestWeatherConstant';
import { REMOVE_SEARCH_HISTORY } from '../Actions/RemoveSearchHistory/RemoveSearchHistoryConstant';
import setWeatherValue from '../Services/SetWeatherServices';
import { addCurntWeather } from '../Actions/CurrentWeatherAction';
import { addNearestWeather } from '../Actions/NearestWeather';
import { addSearchHistory } from '../Actions/SearchHistoryAction';
import { setError } from '../Actions/ErrorAction';

const posts = LocalStorageServices.getSearchHistory();

export const crntWeather = (state = {}, { obj, type }: any) => {
	switch (type) {
		case ADD_CURNT_WEATHER:
			return obj;
		default:
			return state;
	}
};

export const searchHistory = (state = posts || [], { arr, obj, type }: any) => {
	switch (type) {
		case ADD_SEARCH_HISHORY:
			return [...state, obj];
		case REMOVE_SEARCH_HISTORY:
			return arr;
		default:
			return state;
	}
};

export const nearestWeather = (state = [], { obj, type }: any) => {
	switch (type) {
		case ADD_NEAREST_WEATHER:
			return obj;
		default:
			return state;
	}
};

export const getWeatherByName = (value: string, stateObj: object) => {
	return async (dispatch: Dispatch) => {
		await searchByName(value)
			.then((response) => {
				const answ = setWeatherValue({ response, stateObj });
				const { currentWeather, nextWeather, history } = answ;
				dispatch(setError(false));
				dispatch(addCurntWeather(currentWeather));
				dispatch(addNearestWeather(nextWeather));
				dispatch(addSearchHistory(history));
			})
			.catch(() => {
				dispatch(setError(true));
			});
	};
};

export const getWeatherById = (id: number, stateObj: any) => {
	return (dispatch: any) => {
		searchById(id)
			.then((response) => {
				const answ = setWeatherValue({ response, stateObj });
				const { currentWeather, nextWeather, history } = answ;
				dispatch(setError(false));
				dispatch(addCurntWeather(currentWeather));
				dispatch(addNearestWeather(nextWeather));
				dispatch(addSearchHistory(history));
			})
			.catch(() => {
				dispatch(setError(true));
			});
	};
};
