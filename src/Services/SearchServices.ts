import { regularRote, apiKey, units, imgUrl } from '../Config/Api';
import Http from './Http';

const configureLinkByName = (value: string) => {
	const linkByName = `${regularRote}q=${value}&cnt=5&appid=${apiKey}${units}`;

	return linkByName;
};

const configureLinkById = (id: number) => {
	const linkById = `${regularRote}id=${id}&cnt=5&appid=${apiKey}${units}`;

	return linkById;
};

export const searchByName = async (value: string) =>
	Http.get(configureLinkByName(value));

export const searchById = async (id: number) => Http.get(configureLinkById(id));

export const getIcon = (id: string) => {
	return `${imgUrl}img/wn/${id}@2x.png`;
};
