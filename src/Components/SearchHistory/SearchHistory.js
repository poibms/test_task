import React from 'react';

function SearchHistory(props) {
	const { reverse, onSubmitById, onDeleteItem } = props;
	const elements = reverse.map((item) => (
		<li className="search-item" key={item.id}>
			<div
				role="button"
				className="search-item_text"
				onClick={() => {
					onSubmitById(item.id);
				}}>
				{item.name},{item.country}
			</div>
			<span
				className="delBtn"
				role="button"
				onClick={() => {
					onDeleteItem(item.id);
				}}>
				X
			</span>
		</li>
	));

	return (
		<div className="main-list">
			<h3>Search history</h3>
			<ul className="list-item">{elements}</ul>
		</div>
	);
}

export default SearchHistory;
