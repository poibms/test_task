import { apiParams } from '../Config/Api';

const axios = require('axios');

class Http {
	http;

	constructor() {
		this.http = axios.create({
			baseURL: apiParams.baseUrl,
		});
	}

	async get(url: string) {
		const response = await this.http.get(url);

		return response;
	}

	async post(url: any, data: any) {
		return this.http.post(url, data);
	}

	async put(url: any, data: any) {
		return this.http.put(url, data);
	}

	async delete(url: any, data: any) {
		return this.http.delete(url, data);
	}
}

export default new Http();