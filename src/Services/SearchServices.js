import { apiKey } from '../Config/Api';

const axios = require('axios');

const configureLinkByName = (value) => {
	const linkByName = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=5&appid=${apiKey}&units=metric`;

	return linkByName;
};

const configureLinkById = (id) => {
	const linkbyId = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=5&appid=${apiKey}&units=metric`;

	return linkbyId;
};

const search = (link) => {
	try {
		const request = axios.get(link);

		return request;
	} catch (err) {
		console.log('error', err);
	}
};

export const searchByName = (value) => search(configureLinkByName(value));

export const searchById = (id) => search(configureLinkById(id));

export const getIcon = (id) => {
	return `http://openweathermap.org/img/wn/${id}@2x.png`;
};
