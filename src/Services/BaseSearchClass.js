const axios = require('axios');

class BaseSearchClass {
	http;

	constructor() {
		this.http = axios.create({
			baseURL: 'http://api.openweathermap.org/',
		});
	}

	async get(url) {
		const response = await this.http.get(url);

		return response;
	}
}

export default new BaseSearchClass();
