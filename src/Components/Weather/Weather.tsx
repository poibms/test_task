import React from 'react';
import './Weather.css';
import SearchHistory from '../SearchHistory/SearchHistory';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

type Props = {
	data: any;
	posts: any;
	nextWeather: any;
	onSubmitById: React.MouseEventHandler<HTMLButtonElement>;
	onDeleteItem: React.MouseEventHandler<HTMLButtonElement>;
};

const Weather: React.FunctionComponent<Props> = ({
	data,
	posts,
	nextWeather,
	onSubmitById,
	onDeleteItem,
}: Props) => {
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
