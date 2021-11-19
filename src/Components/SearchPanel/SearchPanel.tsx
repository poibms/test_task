import React, { useState } from 'react';
import './SearchPanel.css';

type Props = {
	onSubmitByName: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchPanel: React.FunctionComponent<Props> = ({
	onSubmitByName,
}: Props) => {
	const [value, setValue] = useState('');

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// @ts-ignore
		onSubmitByName(value);
		setValue('');
	};

	return (
		<form className="search-form" onSubmit={submitForm}>
			<input
				className="onChange"
				type="text"
				placeholder="Enter city"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<input type="submit" className="onSearch" />
		</form>
	);
};

export default SearchPanel;
