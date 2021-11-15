import React, { useState } from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
	const [value, setValue] = useState('');

	const onSubmitSearchForm = (e) => {
		e.preventDefault();
		props.onSubmitByName(value);
		setValue('');
	};

	const onChangeSearchInput = (event) => {
		setValue(event.target.value);
	};

	return (
		<form className="search-form" onSubmit={onSubmitSearchForm}>
			<input
				className="onChange"
				type="text"
				placeholder="Enter city"
				value={value}
				onChange={onChangeSearchInput}
			/>
			<input type="submit" className="onSearch" />
		</form>
	);
};

export default SearchPanel;
