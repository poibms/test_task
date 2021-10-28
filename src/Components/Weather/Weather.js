import React from 'react';
import './Weather.css';
import SearchHistory from '../SearchHistory/SearchHistory';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

export default function Weather(props) {
	const { data, posts, nextWeather, onSubmitById, onDeleteItem } = props;
	const copy = posts.concat([]);
	const reverse = copy.reverse();

	return (
		<>
			<div className="main-content">
				<SearchHistory
					reverse={reverse}
					onSubmitById={onSubmitById}
					onDeleteItem={onDeleteItem}
				/>
				<div className="main-weather">
					{data.name && (
						<CurrentWeather data={data} nextWeather={nextWeather} />
					)}
				</div>
			</div>
		</>
	);
}
