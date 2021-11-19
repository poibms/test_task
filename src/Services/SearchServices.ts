import { apiParams } from '../Config/Api';
import Http from './Http';

const configureLinkByName = (value: any) => {
	const linkByName = `${apiParams.regularRote}q=${value}&cnt=5&appid=${apiParams.apiKey}${apiParams.units}`;

	return linkByName;
};

const configureLinkById = (id: any) => {
	const linkById = `${apiParams.regularRote}id=${id}&cnt=5&appid=${apiParams.apiKey}${apiParams.units}`;

	return linkById;
};

export const searchByName = async (value: any) =>
	Http.get(configureLinkByName(value));

export const searchById = async (id: any) => Http.get(configureLinkById(id));

export const getIcon = (id: any) => {
	return `${apiParams.imgUrl}img/wn/${id}@2x.png`;
};
