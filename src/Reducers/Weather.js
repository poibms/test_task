import {
	ADD_SEARCH_HISHORY,
	ADD_CURNT_WEATHER,
	ADD_NEAREST_WEATHER,
	REMOVE_SEARCH_HISTORY,
} from '../Config/ReduxConstants/ActionConstants';
import LocalStorageServices from '../Services/LocalStorageServices';
import { searchById, searchByName } from '../Services/SearchServices';
import { wrongValue } from '../Config/Error';

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

const setWeatherValue = (response, props, dispatch) => {
	console.log(response);
	const dt = Date(response.data.dt);
	const crntDate = dt.slice(0, 15);
	const time = dt.slice(16, 24);
	const tempArr = response.data.list;

	const {
		nearestWeather,
		searchHistory,
		addCurntWeather,
		addNearestWeather,
		addSearchHistory,
	} = props;
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < tempArr.length; index++) {
		if (index === 0) {
			const newCurWeather = {
				name: response.data.city.name,
				country: response.data.city.country,
				temp: Math.ceil(tempArr[index].main.temp),
				feel: Math.floor(tempArr[index].main.feels_like),
				crntDate,
				time,
				weather: tempArr[index].weather,
			};
			dispatch(addCurntWeather(newCurWeather));
			console.log(newCurWeather);
		} else {
			const newNearestWeather = {
				temp: Math.ceil(tempArr[index].main.temp),
				feels_like: Math.floor(tempArr[index].main.feels_like),
				wind: tempArr[index].wind.speed,
				time: tempArr[index].dt_txt.slice(11, 20),
				id: tempArr[index].dt,
			};

			if (nearestWeather.length === 4) {
				// eslint-disable-next-line no-param-reassign
				nearestWeather.splice(0, nearestWeather.length);

				return newNearestWeather;
			}
			addNearestWeather(newNearestWeather);
		}
	}

	// const { searchHistory } = this.props;
	const newPost = {
		name: response.data.city.name,
		country: response.data.city.country,
		id: response.data.city.id,
	};
	const { id } = response.data.city;
	// eslint-disable-next-line no-shadow
	// const { addSearchHistory } = this.props;
	const elem = searchHistory.find((item) => item.id === id);
	if (elem) {
		const index = searchHistory.indexOf(elem);
		searchHistory.splice(index, 1);

		const newData = [...searchHistory, newPost];
		addSearchHistory(newPost);

		return newData;
	}
	const newData = [...searchHistory, newPost];
	dispatch(addSearchHistory(newPost));

	LocalStorageServices.addSearchHistory(JSON.stringify(newData));
};

export const getWeatherByName = (value, props) => {
	return (dispatch) => {
		searchByName(value)
			.then((response) => {
				setWeatherValue(response, props, dispatch);
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
			})
			.catch((e) => {
				alert(wrongValue, e);
			});
	};
};
