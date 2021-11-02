import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Weather from '../Weather/Weather';
import { searchById, searchByName } from '../../Services/SearchServices';
import { wrongValue } from '../../Config/Error';
import LocalStorageServices from '../../Services/LocalStorageServices';
import {
	addCurntWeather,
	addSearchHistory,
	addNearestWeather,
	removeSearchHistory,
} from '../../Actions/ActionCreator';

class Main extends Component {
	constructor(props) {
		super(props);

		this.submitRequestByName = this.submitRequestByName.bind(this);
	}

	componentDidUpdate(prevProps) {
		const { searchHistory } = this.props;

		if (prevProps.searchHistory !== searchHistory) {
			LocalStorageServices.addSearchHistory(JSON.stringify(searchHistory));
		}
	}

	submitRequestByName = async (value) => {
		await searchByName(value)
			.then((response) => {
				const dt = Date(response.data.dt);
				const crntDate = dt.slice(0, 15);
				const time = dt.slice(16, 24);
				const tempArr = response.data.list;

				// eslint-disable-next-line no-shadow
				const { nearestWeather, addCurntWeather, addNearestWeather } =
					this.props;
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
						addCurntWeather(newCurWeather);
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

				const { searchHistory } = this.props;
				const newPost = {
					name: response.data.city.name,
					country: response.data.city.country,
					id: response.data.city.id,
				};
				const { id } = response.data.city;
				// eslint-disable-next-line no-shadow
				const { addSearchHistory } = this.props;
				const elem = searchHistory.find((item) => item.id === id);
				if (elem) {
					const index = searchHistory.indexOf(elem);
					searchHistory.splice(index, 1);

					const newData = [...searchHistory, newPost];
					addSearchHistory(newPost);

					return newData;
				}
				const newData = [...searchHistory, newPost];
				addSearchHistory(newPost);

				LocalStorageServices.addSearchHistory(JSON.stringify(newData));
			})
			.catch((e) => {
				alert(wrongValue, e);
			});
	};

	submitRequestById = async (id) => {
		const response = await searchById(id);
		const dt = Date(response.data.dt);
		const crntDate = dt.slice(0, 15);
		const time = dt.slice(16, 24);

		const tempArr = response.data.list;
		// eslint-disable-next-line no-shadow
		const { nearestWeather, addCurntWeather, addNearestWeather } = this.props;
		for (let index = 0; index < tempArr.length; index = index + 1) {
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
				addCurntWeather(newCurWeather);
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

		const { searchHistory } = this.props;
		// eslint-disable-next-line no-shadow
		const { addSearchHistory } = this.props;
		const newPost = {
			name: response.data.city.name,
			country: response.data.city.country,
			id: response.data.city.id,
		};

		const elem = searchHistory.find((item) => item.id === id);
		const index = searchHistory.indexOf(elem);
		searchHistory.splice(index, 1);
		const newData = [...searchHistory, newPost];
		addSearchHistory(newPost);

		LocalStorageServices.addSearchHistory(JSON.stringify(newData));
	};

	render() {
		// eslint-disable-next-line no-shadow
		const { crntWeather, searchHistory, nearestWeather, removeSearchHistory } =
			this.props;

		return (
			<>
				<div className="wrapper">
					<div className="content">
						<Header {...this.props} />
						<div className="search-panel">
							<SearchPanel onSubmitByName={this.submitRequestByName} />
						</div>
						<div className="main">
							<Weather
								data={crntWeather}
								posts={searchHistory}
								nextWeather={nearestWeather}
								onSubmitById={this.submitRequestById}
								onDeleteItem={removeSearchHistory}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default connect(
	(state) => ({
		crntWeather: state.crntWeather,
		searchHistory: state.searchHistory,
		nearestWeather: state.nearestWeather,
	}),
	{ addCurntWeather, addSearchHistory, addNearestWeather, removeSearchHistory },
)(Main);
