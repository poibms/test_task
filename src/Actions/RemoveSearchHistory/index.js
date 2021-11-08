import { REMOVE_SEARCH_HISTORY } from './RemoveSearchHistoryConstant';

export const removeSearchHistory = (arr) => ({
	type: REMOVE_SEARCH_HISTORY,
	arr,
});
