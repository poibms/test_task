import React, { FC } from 'react';
import './Weather.css';
import SearchHistory from '../SearchHistory/SearchHistory';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

interface IWeatherProps {
	data: any;
	posts: any[];
	nextWeather: any[];
	onSubmitById: (id: number) => void;
	onDeleteItem: (id: number) => void;
}

const Weather: FC<IWeatherProps> = ({
	data,
	posts,
	nextWeather,
	onSubmitById,
	onDeleteItem,
}: IWeatherProps) => {
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
};
export default Weather;
