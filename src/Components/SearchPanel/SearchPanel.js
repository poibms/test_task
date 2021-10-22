import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
		this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
	}

	onSubmitSearchForm(e) {
		e.preventDefault();
		const { value } = this.state;
		this.props.onSubmitByName(value);
		this.setState({
			value: '',
		});
	}

	onChangeSearchInput(event) {
		this.setState({
			value: event.target.value,
			// value: event,
		});
	}

	render() {
		const { value } = this.state;

		return (
			<form className="search-form" onSubmit={this.onSubmitSearchForm}>
				<input
					className="onChange"
					type="text"
					placeholder="type ur city"
					value={value}
					onChange={this.onChangeSearchInput}
				/>
				<input type="submit" className="onSearch" />
				<button type="button" className="click" />
			</form>
		);
	}
}
