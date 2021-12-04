import React from 'react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import user from '../../Reducers/User';
import Header from './Header';

const renderWithRedux = (
	component,
	{ initialState, store = createStore(user, initialState) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

describe('testing Header component', () => {
	it('render Header component', () => {
		const { getByRole } = renderWithRedux(<Header />);
		expect(getByRole('heading')).toHaveTextContent('Weather app');
	});
	it('testing logout function through Redux', () => {
		const { getByText } = renderWithRedux(<Header />, {
			initialState: { user: true },
		});
		userEvent.click(getByText('Log Out'));
	});
});
