import { ADD_SEARCH_HISHORY } from './SearchHistoryConstant';

export const addSearchHistory = (obj) => ({
	type: ADD_SEARCH_HISHORY,
	obj,
});
