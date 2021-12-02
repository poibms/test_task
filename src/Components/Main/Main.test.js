import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Main from './Main';
import { renderWithRedux } from '../../Services/TestServices';
import { data, error } from './response';

jest.mock('axios');

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
	{
		country: 'RU',
		id: 524901,
		name: 'Moscow',
	},
];

describe('testing Main component', () => {
	it('render Main snapshot', () => {
		const { asFragment } = renderWithRedux(<Main />);
		expect(asFragment(<Main />)).toMatchSnapshot();
	});

	it('render Main', () => {
		renderWithRedux(<Main />);
		screen.debug();
	});

	it('testing search function', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
		const { getByText } = renderWithRedux(<Main />);
		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'Moscow' },
		});
		fireEvent.click(getByText('Search'));
		// const items = await getByText(/Snow/i);
		// expect(items).toBeInTheDocument();
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(
			'data/2.5/forecast?q=Moscow&cnt=5&appid=002d4403ca0cb44523537de5c6cdfe1a&units=metric',
		);
	});

	it('search by id', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
		const { getByText } = renderWithRedux(<Main />, {
			initialState: {
				searchHistory: testSearchHistory,
			},
		});
		const btn = getByText(/Moscow/);
		fireEvent.click(btn);
		const message = await screen.getByText(/Clouds/);
		expect(message).toBeInTheDocument();
		screen.debug();
		expect(axios.get).toHaveBeenCalledTimes(1);
	});

	it('generate error', async () => {
		axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
		const { getByText } = renderWithRedux(<Main />);
		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'Moscow' },
		});
		fireEvent.click(getByText('Search'));
		// const message = await getByText(/Something was wrong/);
		// expect(message).toBeInTheDocument();
	});

	it('testing remove function', () => {
		const { getByText, getAllByRole } = renderWithRedux(<Main />, {
			initialState: {
				searchHistory: testSearchHistory,
			},
		});
		const items = getAllByRole('listitem');
		expect(items).toHaveLength(1);
		userEvent.click(getByText('X'));
		screen.debug();
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
