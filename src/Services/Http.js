import { apiParams } from '../Config/Api';

const axios = require('axios');

class Http {
	http;

	constructor() {
		this.http = axios.create({
			baseURL: apiParams.baseUrl,
		});
	}

	async get(url) {
		const response = await this.http.get(url);

		return response;
	}

	async post(url, data) {
		return this.http.post(url, data);
	}

	async put(url, data) {
		return this.http.put(url, data);
	}

	async delete(url, data) {
		return this.http.delete(url, data);
	}
}

export default new Http();