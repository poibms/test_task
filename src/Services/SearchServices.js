import { apiKey, imgUrl, regularRote, units } from '../Config/Api';
import BaseSearchClass from './BaseSearchClass';

const configureLinkByName = (value) => {
	const linkByName = `${regularRote}q=${value}&cnt=5&appid=${apiKey}${units}`;

	return linkByName;
};

const configureLinkById = (id) => {
	const linkById = `${regularRote}id=${id}&cnt=5&appid=${apiKey}${units}`;

	return linkById;
};

export const searchByName = async (value) =>
	BaseSearchClass.http.get(configureLinkByName(value));

export const searchById = async (id) =>
	BaseSearchClass.http.get(configureLinkById(id));

export const getIcon = (id) => {
	return `${imgUrl}img/wn/${id}@2x.png`;
};
