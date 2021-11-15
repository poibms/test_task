import LocalStorageServices from './LocalStorageServices';

const setCurrentWeather = (index, response, arr) => {
	const dt = Date(response.data.dt);
	const crntDate = dt.slice(0, 15);
	const time = dt.slice(16, 24);

	const newCurWeather = {
		name: response.data.city.name,
		country: response.data.city.country,
		temp: Math.ceil(arr[index].main.temp),
		feel: Math.floor(arr[index].main.feels_like),
		crntDate,
		time,
		weather: arr[index].weather,
	};

	return newCurWeather;
};

const setNearestWeather = (index, arr, nearestWeather) => {
	const newNearestWeather = {
		temp: Math.ceil(arr[index].main.temp),
		feels_like: Math.floor(arr[index].main.feels_like),
		wind: arr[index].wind.speed,
		time: arr[index].dt_txt.slice(11, 20),
		id: arr[index].dt,
	};

	if (nearestWeather.length === 4) {
		// eslint-disable-next-line no-param-reassign
		nearestWeather.splice(0, nearestWeather.length);

		return newNearestWeather;
	}

	return newNearestWeather;
};

const setSearchHistory = (response, searchHistory) => {
	const newPost = {
		name: response.data.city.name,
		country: response.data.city.country,
		id: response.data.city.id,
	};
	const { id } = response.data.city;
	const elem = searchHistory.find((item) => item.id === id);
	if (elem) {
		const index = searchHistory.indexOf(elem);
		searchHistory.splice(index, 1);

		return newPost;
	}
	LocalStorageServices.addSearchHistory(JSON.stringify(newPost));

	return newPost;
};

const setWeatherValue = (response, stateObj) => {
	const tempArr = response.data.list;
	const { nearestWeather, searchHistory } = stateObj;
	console.log(stateObj);
	let currentWeather;
	let nextWeather = [];
	let history = [];

	for (let index = 0; index < tempArr.length; index = index + 1) {
		if (index === 0) {
			currentWeather = setCurrentWeather(index, response, tempArr);
		} else {
			const nearestIteration = setNearestWeather(
				index,
				tempArr,
				nearestWeather,
			);
			const newData = [...nextWeather, nearestIteration];
			nextWeather = newData;
		}
	}

	history = setSearchHistory(response, searchHistory);
	const responseObj = { currentWeather, nextWeather, history };

	return responseObj;
};

export default setWeatherValue;
