import React from 'react';
import './Weather.css';
// eslint-disable-next-line import/named
import { getIcon } from '../../Services/SearchServices';

export default function Weather(props) {
	const { data, posts, nextWeather, onSubmitById, onDeleteItem } = props;
	const reverse = posts.reverse();

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

	const weather = data.weather.map((item) => (
		<div key={item.id}>
			<p>{item.description}</p>
		</div>
	));

	const icon = data.weather.map((item) => (
		<img alt="icon" key={item.id} src={getIcon(item.icon)} />
	));

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
