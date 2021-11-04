// import LocalStorageServices from './LocalStorageServices';
//
// const setWeatherValue = (response, props, dispatch) => {
// 	console.log(response);
// 	console.log(props);
// 	const dt = Date(response.data.dt);
// 	const crntDate = dt.slice(0, 15);
// 	const time = dt.slice(16, 24);
// 	const tempArr = response.data.list;
//
// 	const {
// 		nearestWeather,
// 		searchHistory,
// 		addCurntWeather,
// 		addNearestWeather,
// 		addSearchHistory,
// 	} = props;
// 	// eslint-disable-next-line no-plusplus
// 	for (let index = 0; index < tempArr.length; index++) {
// 		if (index === 0) {
// 			const newCurWeather = {
// 				name: response.data.city.name,
// 				country: response.data.city.country,
// 				temp: Math.ceil(tempArr[index].main.temp),
// 				feel: Math.floor(tempArr[index].main.feels_like),
// 				crntDate,
// 				time,
// 				weather: tempArr[index].weather,
// 			};
// 			dispatch(addCurntWeather(newCurWeather));
// 			console.log(newCurWeather);
// 		} else {
// 			const newNearestWeather = {
// 				temp: Math.ceil(tempArr[index].main.temp),
// 				feels_like: Math.floor(tempArr[index].main.feels_like),
// 				wind: tempArr[index].wind.speed,
// 				time: tempArr[index].dt_txt.slice(11, 20),
// 				id: tempArr[index].dt,
// 			};
//
// 			if (nearestWeather.length === 4) {
// 				// eslint-disable-next-line no-param-reassign
// 				nearestWeather.splice(0, nearestWeather.length);
//
// 				return newNearestWeather;
// 			}
// 			addNearestWeather(newNearestWeather);
// 		}
// 	}
//
// 	// const { searchHistory } = this.props;
// 	const newPost = {
// 		name: response.data.city.name,
// 		country: response.data.city.country,
// 		id: response.data.city.id,
// 	};
// 	const { id } = response.data.city;
// 	// eslint-disable-next-line no-shadow
// 	// const { addSearchHistory } = this.props;
// 	const elem = searchHistory.find((item) => item.id === id);
// 	if (elem) {
// 		const index = searchHistory.indexOf(elem);
// 		searchHistory.splice(index, 1);
//
// 		const newData = [...searchHistory, newPost];
// 		addSearchHistory(newPost);
//
// 		return newData;
// 	}
// 	const newData = [...searchHistory, newPost];
// 	dispatch(addSearchHistory(newPost));
//
// 	LocalStorageServices.addSearchHistory(JSON.stringify(newData));
// };
//
// export default setWeatherValue;
