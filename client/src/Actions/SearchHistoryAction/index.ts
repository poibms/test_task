import { ADD_SEARCH_HISHORY } from './SearchHistoryConstant';

export const addSearchHistory = (obj: object) => ({
	type: ADD_SEARCH_HISHORY,
	obj,
});
