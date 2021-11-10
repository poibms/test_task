import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Weather from '../Weather/Weather';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { removeSearchHistory } from '../../Actions/RemoveSearchHistory';
import { getWeatherById, getWeatherByName } from '../../Reducers/Weather';

const Main = (props) => {
	const crntWeather = useSelector((state) => state.crntWeather);
	const searchHistory = useSelector((state) => state.searchHistory);
	const nearestWeather = useSelector((state) => state.nearestWeather);
	const dispatch = useDispatch();

	const stateObj = { nearestWeather, searchHistory };

	useEffect(() => {
		if (searchHistory !== undefined) {
			LocalStorageServices.addSearchHistory(JSON.stringify(searchHistory));
		}
	});

	const submitRequestByName = async (value) => {
		dispatch(getWeatherByName(value, stateObj));
	};

	const submitRequestById = async (id) => {
		dispatch(getWeatherById(id, stateObj));
	};

	const removeSearchItem = (id) => {
		const array = searchHistory.filter((item) => item.id !== id);
		dispatch(removeSearchHistory(array));
	};

	return (
		<>
			<div className="wrapper">
				<div className="content">
					<Header {...props} />
					<div className="search-panel">
						<SearchPanel onSubmitByName={submitRequestByName} />
					</div>
					<div className="main">
						<Weather
							data={crntWeather}
							posts={searchHistory}
							nextWeather={nearestWeather}
							onSubmitById={submitRequestById}
							onDeleteItem={removeSearchItem}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default Main;
