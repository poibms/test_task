import { Dispatch } from 'redux';
import LocalStorageServices from '../Services/LocalStorageServices';
import { searchById, searchByName } from '../Services/SearchServices';
import { errors } from '../Config/Error';
import { ADD_CURNT_WEATHER } from '../Actions/CurrentWeatherAction/CurrentWeatherConstant';
import { ADD_SEARCH_HISHORY } from '../Actions/SearchHistoryAction/SearchHistoryConstant';
import { ADD_NEAREST_WEATHER } from '../Actions/NearestWeather/NearestWeatherConstant';
import { REMOVE_SEARCH_HISTORY } from '../Actions/RemoveSearchHistory/RemoveSearchHistoryConstant';
import setWeatherValue from '../Services/SetWeatherServices';
import { addCurntWeather } from '../Actions/CurrentWeatherAction';
import { addNearestWeather } from '../Actions/NearestWeather';
import { addSearchHistory } from '../Actions/SearchHistoryAction';

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

export const getWeatherByName = ({ value, stateObj }: any) => {
	return (dispatch: Dispatch) => {
		searchByName(value)
			.then((response) => {
				const answ = setWeatherValue({ response, stateObj });
				const { currentWeather, nextWeather, history } = answ;
				dispatch(addCurntWeather(currentWeather));
				dispatch(addNearestWeather(nextWeather));
				dispatch(addSearchHistory(history));
			})
			.catch(() => {
				alert(errors.wrongValue);
			});
	};
};

export const getWeatherById = ({ id, stateObj }: any) => {
	return (dispatch: any) => {
		searchById(id)
			.then((response) => {
				const answ = setWeatherValue({ response, stateObj });
				const { currentWeather, nextWeather, history } = answ;
				dispatch(addCurntWeather(currentWeather));
				dispatch(addNearestWeather(nextWeather));
				dispatch(addSearchHistory(history));
			})
			.catch(() => {
				alert(errors.wrongValue);
			});
	};
};
