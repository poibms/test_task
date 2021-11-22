import React, { useEffect, FC } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Weather from '../Weather/Weather';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { removeSearchHistory } from '../../Actions/RemoveSearchHistory';
import { getWeatherById, getWeatherByName } from '../../Reducers/Weather';
import { RootState } from '../../Store/Store';

const Main: FC = () => {
	const crntWeather = useSelector((state: RootState) => state.crntWeather);
	const searchHistory = useSelector((state: RootState) => state.searchHistory);
	const nearestWeather = useSelector(
		(state: RootState) => state.nearestWeather,
	);
	const dispatch = useDispatch();

	const stateObj = { nearestWeather, searchHistory };

	useEffect(() => {
		if (searchHistory !== undefined) {
			LocalStorageServices.addSearchHistory(JSON.stringify(searchHistory));
		}
	});

	const submitRequestByName = async (value: string) => {
		dispatch(getWeatherByName(value, stateObj));
	};

	const submitRequestById = async (id: number) => {
		dispatch(getWeatherById(id, stateObj));
	};

	const removeSearchItem = (id: number) => {
		const array = searchHistory.filter((item: any) => item.id !== id);
		dispatch(removeSearchHistory(array));
	};

	return (
		<>
			<div className="wrapper">
				<div className="content">
					<Header />
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
