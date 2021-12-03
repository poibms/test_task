import React, { useState, FC } from 'react';
import './SearchPanel.css';

interface ISearchProps {
	onSubmitByName: (value: string) => void;
	error: boolean;
}

const SearchPanel: FC<ISearchProps> = ({
	onSubmitByName,
	error,
}: ISearchProps) => {
	const [value, setValue] = useState('');

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmitByName(value);
		setValue('');
	};
	let inputStyle = { border: '3px solid #00B4CC' };
	if (error) {
		inputStyle = { border: '3px solid #c10020' };
	}

	return (
		<form className="search-form" onSubmit={submitForm}>
			<input
				className="onChange"
				type="text"
				placeholder="Enter city"
				value={value}
				style={inputStyle}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<input type="submit" className="onSearch" value="Search" />
		</form>
	);
};

export default SearchPanel;
