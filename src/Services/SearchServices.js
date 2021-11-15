import { apiParams } from '../Config/Api';
import Http from './Http';

const configureLinkByName = (value) => {
	const linkByName = `${apiParams.regularRote}q=${value}&cnt=5&appid=${apiParams.apiKey}${apiParams.units}`;

	return linkByName;
};

const configureLinkById = (id) => {
	const linkById = `${apiParams.regularRote}id=${id}&cnt=5&appid=${apiParams.apiKey}${apiParams.units}`;

	return linkById;
};

export const searchByName = async (value) =>
	Http.get(configureLinkByName(value));

export const searchById = async (id) => Http.get(configureLinkById(id));

export const getIcon = (id) => {
	return `${apiParams.imgUrl}img/wn/${id}@2x.png`;
};
