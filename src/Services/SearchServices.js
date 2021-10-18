import { apiKey } from '../config';

const axios = require('axios');

export const searchByName = (value) =>
	axios.get(
		`http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=5&appid=${apiKey}&units=metric`,
	);

export const searchById = (id) => axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=5&appid=${apiKey}&units=metric`);
