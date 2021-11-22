import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchPanel from './SearchPanel';

describe('SearchPanel Component', () => {
	it('render component', () => {
		render(<SearchPanel />);
		screen.debug();
	});
	it('fireEvent', () => {
		render(<SearchPanel />);
		screen.debug();
		// fireEvent.change(screen.getByRole('textbox'), {
		// 	target: { value: 'Minsk' },
		// });
		userEvent.type(screen.getByRole('textbox'), 'Minsk');
		screen.debug();
	});
	it('testing click', () => {
		const handleClick = jest.fn();
		const { container } = render(
			<button type="button" onClick={handleClick} />,
		);

		const btn = container.firstChild;
		fireEvent.click(btn);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('test search button', () => {
		const handleClick = jest.fn();
		const { getByDisplayValue } = render(
			<SearchPanel onSubmitByName={handleClick} />,
		);
		const input = getByDisplayValue('Search');
		fireEvent.click(input);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
