import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Weather from '../Weather/Weather';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { removeSearchHistory } from '../../Actions/RemoveSearchHistory';
import { getWeatherById, getWeatherByName } from '../../Reducers/Weather';
import { addNearestWeather } from '../../Actions/NearestWeather';
import { addSearchHistory } from '../../Actions/SearchHistoryAction';
import { addCurntWeather } from '../../Actions/CurrentWeatherAction/Index';
import { checkUserStatus } from '../../Actions/UserStatusAction';

class Main extends Component {
	componentDidUpdate(prevProps) {
		// eslint-disable-next-line no-shadow
		const { searchHistory } = this.props;

		if (prevProps.searchHistory !== searchHistory) {
			LocalStorageServices.addSearchHistory(JSON.stringify(searchHistory));
		}
	}

	submitRequestByName = async (value) => {
		this.props.getByName(value, this.props);
	};

	submitRequestById = async (id) => {
		this.props.getById(id, this.props);
	};

	removeSearchItem = (id) => {
		// eslint-disable-next-line no-shadow
		const { searchHistory, removeSearchHistory } = this.props;
		console.log(searchHistory);
		const array = searchHistory.filter((item) => item.id !== id);
		removeSearchHistory(array);
	};

	render() {
		// eslint-disable-next-line no-shadow
		const { crntWeather, searchHistory, nearestWeather } = this.props;

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
								onDeleteItem={this.removeSearchItem}
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
	{
		checkUserStatus,
		addCurntWeather,
		addNearestWeather,
		addSearchHistory,
		removeSearchHistory,
		getByName: getWeatherByName,
		getById: getWeatherById,
	},
)(Main);
