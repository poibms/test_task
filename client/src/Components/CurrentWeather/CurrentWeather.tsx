import React from 'react';
import { getIcon } from '../../Services/SearchServices';

function CurrentWeather({ data, nextWeather }: any) {
	const icon = data.weather.map((item: any) => (
		<img alt="icon" key={item.id} src={getIcon(item.icon)} />
	));
	const weather = data.weather.map((item: any) => (
		<div key={item.id}>
			<p>{item.main}</p>
		</div>
	));

	const nearestWeather = nextWeather.map((item: any) => (
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
	);
}

export default CurrentWeather;
