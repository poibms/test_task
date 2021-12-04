import React, { FC } from 'react';
import './Weather.css';
import SearchHistory from '../SearchHistory/SearchHistory';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IWeatherProps {
	data: any;
	posts: any[];
	nextWeather: any[];
	error: boolean;
	onSubmitById: (id: number) => void;
	onDeleteItem: (id: number) => void;
}

const Weather: FC<IWeatherProps> = ({
	data,
	posts,
	nextWeather,
	error,
	onSubmitById,
	onDeleteItem,
}: IWeatherProps) => {
	const copy = posts.concat([]);
	const reverse = copy.reverse();
	const errorMessage = error ? <ErrorMessage /> : null;
	const content =
		!error && data.name ? (
			<CurrentWeather data={data} nextWeather={nextWeather} />
		) : null;

	return (
		<>
			<div className="main-content">
				<SearchHistory
					reverse={reverse}
					onSubmitById={onSubmitById}
					onDeleteItem={onDeleteItem}
				/>
				<div className="main-weather">
					{errorMessage}
					{content}
				</div>
			</div>
		</>
	);
};
export default Weather;
