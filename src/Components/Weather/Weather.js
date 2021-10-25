import React from 'react';
import './Weather.css';
import WeatherServices from '../../Services/WeatherServices';

export default function Weather(props) {
	const { data, posts, nextWeather, onSubmitById, onDeleteItem } = props;
	const copy = posts.concat([]);
	const reverse = copy.reverse();

	const elements = WeatherServices.addSearchHistoryPost(
		reverse,
		onSubmitById,
		onDeleteItem,
	);

	const weather = WeatherServices.currentWeatherDescription(data);

	const icon = WeatherServices.iconWeatherStatus(data);

	const nearestWeather = WeatherServices.nearestWeather(nextWeather);

	return (
		<>
			<div className="main-content">
				<div className="main-list">
					<h3>Search history</h3>

					<ul className="list-item">{elements}</ul>
				</div>

				<div className="main-weather">
					{data.name && (
						<>
							<div className="main-content_title">
								<h3>{data.crntDate}</h3>
								<h2>
									{data.name}, {data.country}
								</h2>
							</div>
							<div className="main-content_body">
								<div className="current-temp">
									{icon}
									<h3> {data.temp} °C </h3>
								</div>
								<div className="temp-info">
									{weather} Feels like {data.feel} °C. {data.state}
								</div>
							</div>
							<div className="main-content_footer">{nearestWeather}</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
