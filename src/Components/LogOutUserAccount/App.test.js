import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LogOutUserAccount from './LogOutUserAccount';

test('snapshot Logout component', () => {
	const { asFragment } = render(<LogOutUserAccount onLogout="test" />);
	expect(asFragment(<LogOutUserAccount />)).toMatchSnapshot();
});

describe('Logout component', () => {
	it('render Logout component', () => {
		render(<LogOutUserAccount />);
		screen.debug();
	});
	it('testing screen methods', () => {
		render(<LogOutUserAccount />);
		expect(screen.getByText(/Log out/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('try to click', () => {
		const { getByText } = render(<LogOutUserAccount />);
		const btn = getByText(/Log Out/i);
		fireEvent.click(btn);
	});
});
