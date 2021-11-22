import { regularRote, apiKey, units, imgUrl } from '../Config/Api';
import Http from './Http';

const configureLinkByName = (value: any) => {
	const linkByName = `${regularRote}q=${value}&cnt=5&appid=${apiKey}${units}`;

	return linkByName;
};

const configureLinkById = (id: any) => {
	const linkById = `${regularRote}id=${id}&cnt=5&appid=${apiKey}${units}`;

	return linkById;
};

export const searchByName = async (value: any) =>
	Http.get(configureLinkByName(value));

export const searchById = async (id: any) => Http.get(configureLinkById(id));

export const getIcon = (id: any) => {
	return `${imgUrl}img/wn/${id}@2x.png`;
};
