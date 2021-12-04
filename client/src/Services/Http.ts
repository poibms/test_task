import { baseUrl } from '../Config/Api';

import axios from 'axios'

class Http {
	http;

	constructor() {
		this.http = axios.create({
			baseURL: baseUrl,
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
