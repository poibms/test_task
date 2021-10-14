import React, { Component } from 'react';
import './Search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({
      value: '',
    });
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="type ur city"
          value={value}
          onChange={this.onChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
