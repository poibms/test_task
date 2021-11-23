import React from 'react';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import {
	crntWeather,
	searchHistory,
	nearestWeather,
} from '../../Reducers/Weather';
import Main from './Main';

jest.mock('axios');

const rootReducer = combineReducers({
	searchHistory,
	crntWeather,
	nearestWeather,
});

const renderWithRedux = (
	component,
	{ initialState, store = createStore(rootReducer, initialState) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

const testObj = {
	name: 'Minsk',
	country: 'BY',
	temp: 13,
	feel: 10,
	crntDate: '11-22-2021',
	time: '12:41',
	weather: [
		{
			description: 'overcast clouds',
			icon: '04d',
			id: 804,
			main: 'Clouds',
		},
	],
};
const testWeather = [
	{
		feels_like: -2,
		id: 1637593200,
		temp: 1,
		time: '15:00:00',
		wind: 2.11,
	},
	{
		feels_like: -3,
		id: 1637604000,
		temp: 1,
		time: '18:00:00',
		wind: 2.11,
	},
];
const testSearchHistory = [
	{
		country: 'BY',
		id: 629634,
		name: 'Brest',
	},
	// {
	// 	country: 'BY',
	// 	id: 625144,
	// 	name: 'Minsk',
	// },
];

describe('testing Main component', () => {
	it('render Main snapshot', () => {
		const { asFragment } = renderWithRedux(<Main />);
		expect(asFragment(<Main />)).toMatchSnapshot();
	});

	// ne rabotaet :/
	it('testing search function', async () => {
		axios.get.mockResolvedValueOnce({ data: { value: 'Minsk' } });
		const { getByText } = renderWithRedux(<Main />);
		// 	// userEvent.type(screen.getByRole('textbox'), 'Minsk');
		userEvent.click(getByText('Search'));
		// 	// const items = await getByText(/Clouds/i);
		// 	// expect(items).toBeInTheDocument();
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(
			'http://api.openweathermap.org/data/2.5/forecast?q=&cnt=5&appid=002d4403ca0cb44523537',
		);
	});

	it('testing remove function', () => {
		const { getByText, getAllByRole } = renderWithRedux(<Main />, {
			initialState: {
				searchHistory: testSearchHistory,
			},
		});
		const items = getAllByRole('listitem');
		expect(items).toHaveLength(1);
		// console.log(items[0]);
		userEvent.click(getByText('X'));
	});
});

describe('testing Main component with Redux', () => {
	it('render component with initialState', () => {
		const { getByText } = renderWithRedux(<Main />, {
			initialState: {
				crntWeather: testObj,
			},
		});
		expect(getByText('Clouds')).toBeInTheDocument();
	});
	it('testing search by id through Redux', () => {
		const { getByText } = renderWithRedux(<Main />, {
			initialState: {
				searchHistory: testSearchHistory,
			},
		});
		userEvent.click(getByText(/Brest/i));
		screen.debug();
	});
});
