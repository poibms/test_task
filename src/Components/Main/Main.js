import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchPanel from '../Search-panel/Search-panel';
import Weather from '../Weather/Weather';
import { searchById, searchByName } from '../../Services/SearchServices';
import { checkLogin } from '../../Services/RoutingServices';
import { wrongValue } from '../../Config/Error';
import LocalStorageServices from '../../Services/LocalStorageServices';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				name: '',
				country: '',
				temp: '',
				feel: '',
				crntDate: '',
				time: '',
				weather: [],
			},
			nextWeather: [],
			posts: [],

		};
		this.onSubmit = this.onSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount() {
		checkLogin(this.props);
		const posts = LocalStorageServices.getSearchHistory();
		if (posts) {
			this.setState({ posts });
		}
	}

	onSubmit = async (value) => {
		await searchByName(value)
			.then((response) => {
				const dt = Date(response.data.dt);
				const crntDate = dt.slice(0, 15);
				const time = dt.slice(16, 24);
				const tempArr = response.data.list;
				// eslint-disable-next-line no-plusplus
				for (let index = 0; index < tempArr.length; index++) {
					if (index === 0) {
						this.setState({
							data: {
								name: response.data.city.name,
								country: response.data.city.country,
								temp: Math.ceil(tempArr[index].main.temp),
								feel: Math.floor(tempArr[index].main.feels_like),
								crntDate,
								time,
								weather: tempArr[index].weather,
							},
						});
					} else {
						this.setState(({ nextWeather }) => {
							const newPost = {
								temp: Math.ceil(tempArr[index].main.temp),
								feels_like: Math.floor(tempArr[index].main.feels_like),
								wind: tempArr[index].wind.speed,
								time: tempArr[index].dt_txt.slice(11, 20),
								id: tempArr[index].dt,
							};

							if (nextWeather.length === 4) {
								// eslint-disable-next-line no-param-reassign
								nextWeather = [];
								const newData = [...nextWeather, newPost];

								return {
									nextWeather: newData,
								};
							}
							const newData = [...nextWeather, newPost];

							return {
								nextWeather: newData,
							};
						});
					}
				}

				this.setState(({ posts }) => {
					const newPost = {
						name: response.data.city.name,
						country: response.data.city.country,
						id: response.data.city.id,
					};

					const { id } = response.data.city;

					const elem = posts.find((item) => item.id === id);
					if (elem) {
						const index = posts.indexOf(elem);

						posts.splice(index, 1);

						const newData = [...posts, newPost];

						return {
							posts: newData,
						};
					}
					const newData = [...posts, newPost];

					return {
						posts: newData,
					};
				});
				LocalStorageServices.addSearchHistory(JSON.stringify(this.state.posts));
			})
			.catch((e) => {
				alert(wrongValue, e);
			});
	};

	searchById = async (id) => {
		const response = await searchById(id);
		const dt = Date(response.data.dt);
		const crntDate = dt.slice(0, 15);
		const time = dt.slice(16, 24);

		const tempArr = response.data.list;

		for (let index = 0; index < tempArr.length; index = index + 1) {
			if (index === 0) {
				this.setState({
					data: {
						name: response.data.city.name,
						country: response.data.city.country,
						temp: Math.ceil(tempArr[index].main.temp),
						feel: Math.floor(tempArr[index].main.feels_like),
						crntDate,
						time,
						weather: tempArr[index].weather,
					},
				});
			} else {
				this.setState(({ nextWeather }) => {
					const newPost = {
						temp: Math.ceil(tempArr[index].main.temp),
						feels_like: Math.floor(tempArr[index].main.feels_like),
						wind: tempArr[index].wind.speed,
						time: tempArr[index].dt_txt.slice(11, 20),
						id: tempArr[index].dt,
					};

					if (nextWeather.length === 4) {
						// nextWeather = [];
						nextWeather.splice(0, nextWeather.length);
						const newData = [...nextWeather, newPost];

						return {
							nextWeather: newData,
						};
					}
					const newData = [...nextWeather, newPost];

					return {
						nextWeather: newData,
					};
				});
			}
		}

		this.setState(({ posts }) => {
			const newPost = {
				name: response.data.city.name,
				country: response.data.city.country,
				id: response.data.city.id,
			};

			const elem = posts.find((item) => item.id === id);
			if (elem) {
				const index = posts.indexOf(elem);
				posts.splice(index, 1);
				const newData = [...posts, newPost];

				return {
					posts: newData,
				};
			}
			const newData = [...posts, newPost];

			return {
				posts: newData,
			};
		});
		LocalStorageServices.addSearchHistory(JSON.stringify(this.state.posts));
	};

	deleteItem = async (id) => {
		await this.setState(({ posts }) => ({
			posts: posts.filter((item) => item.id !== id),
		}));
		LocalStorageServices.addSearchHistory(JSON.stringify(this.state.posts));
	};

	render() {
		const { data, posts, nextWeather } = this.state;

		return (
			<>
				<div className="wrapper">
					<div className="content">
						<Header {...this.props} />
						<div className="search-panel">
							<SearchPanel onSubmit={this.onSubmit} />
						</div>
						<div className="main">
							<Weather
								data={data}
								posts={posts}
								nextWeather={nextWeather}
								onSearch={this.searchById}
								onDeleteItem={this.deleteItem}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}
