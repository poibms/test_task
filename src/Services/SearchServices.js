import { apiKey, baseUrl } from '../Config/Api';
import BaseSearchClass from './BaseSearchClass';

const configureLinkByName = (value) => {
	const linkByName = `data/2.5/forecast?q=${value}&appid=${apiKey}&units=metric`;

	return linkByName;
};

const configureLinkById = (id) => {
	const linkbyId = `data/2.5/forecast?id=${id}&cnt=5&appid=${apiKey}&units=metric`;

	return linkbyId;
};

export const searchByName = async (value) =>
	BaseSearchClass.http.get(configureLinkByName(value));

export const searchById = async (id) =>
	BaseSearchClass.http.get(configureLinkById(id));

export const getIcon = (id) => {
	return `${baseUrl}img/wn/${id}@2x.png`;
};
