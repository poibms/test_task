import React, { useState, FC } from 'react';
import './SearchPanel.css';

interface ISearchProps {
	onSubmitByName: (value: string) => void;
}

const SearchPanel: FC<ISearchProps> = ({ onSubmitByName }: ISearchProps) => {
	const [value, setValue] = useState('');

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmitByName(value);
		// setValue('');
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
			<input type="submit" className="onSearch" value="Search" />
		</form>
	);
};

export default SearchPanel;
