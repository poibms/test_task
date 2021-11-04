import { REMOVE_SEARCH_HISTORY } from './RemoveSearchHistoryConstant';

export const removeSearchHistory = (id) => ({
	type: REMOVE_SEARCH_HISTORY,
	id,
});
