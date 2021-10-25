import React from 'react';
import { getIcon } from './SearchServices';

class WeatherServices {
	addSearchHistoryPost = (reverse, onSubmitById, onDeleteItem) => {
		const elements = reverse.map((item) => (
			<li className="search-item" key={item.id}>
				<div
					role="button"
					className="search-item_text"
					onClick={() => {
						onSubmitById(item.id);
					}}>
					{item.name},{item.country}
				</div>
				<span
					className="delBtn"
					role="button"
					onClick={() => {
						onDeleteItem(item.id);
					}}>
					X
				</span>
			</li>
		));

		return elements;
	};

	currentWeatherDescription = (data) => {
		const weather = data.weather.map((item) => (
			<div key={item.id}>
				<p>{item.main}</p>
			</div>
		));

		return weather;
	};

	iconWeatherStatus = (data) => {
		const icon = data.weather.map((item) => (
			<img alt="icon" key={item.id} src={getIcon(item.icon)} />
		));

		return icon;
	};

	nearestWeather = (nextWeather) => {
		const nearestWeather = nextWeather.map((item) => (
			<li key={item.id}>
				<div className="item_body">
					<div className="item_body-title">{item.time}</div>
					<div className="item_body-body">
						{item.temp}
						°C
					</div>
					<div className="item_body-footer">
						<p>Feel like {item.feels_like}</p>
						<p>Wind speed {item.wind}</p>
					</div>
				</div>
			</li>
		));

		return nearestWeather;
	};
}
export default new WeatherServices();
