import React from 'react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import User from '../../Reducers/User';
import SignIn from './SignIn';
import { checkLogin } from '../../Services/RoutingServices';
import Header from '../Header/Header';
import user from '../../Reducers/User';

const renderWithRedux = (
	component,
	{ initialState, store = createStore(user, initialState) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

describe('render SignIn component', () => {
	it('render with redux', () => {
		const { getByRole } = renderWithRedux(<SignIn />);
		expect(getByRole('heading')).toHaveTextContent('Sign up');
	});

	it('login with through redux', () => {
		const { getByText, getByPlaceholderText } = renderWithRedux(<SignIn />);
		console.log(checkLogin());
		userEvent.type(getByPlaceholderText('Username'), 'testUser1');
		userEvent.type(getByPlaceholderText('Email'), 'testemail@gmail.com');
		userEvent.type(getByPlaceholderText('Password'), 'password123');
		userEvent.click(getByText('Sign Up'));
		console.log(checkLogin());

		renderWithRedux(<Header />);
		console.log(checkLogin());
		userEvent.click(getByText('Log Out'));
		console.log(checkLogin());
	});
});
