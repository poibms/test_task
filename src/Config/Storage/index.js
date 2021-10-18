export const userAccount = 'UserAccount';
export const searchHistory = 'SearchHistory';

export const getUserAcc = () => {
	if (localStorage.getItem(userAccount)) {
		return true;
	}

	return false;
};

export const removeAccout = () => {
	localStorage.removeItem(userAccount);
};

export const addSearchHistory = (value) => {
	localStorage.setItem(searchHistory, value);
};

export const getSearchHistory = () => {
	const data = JSON.parse(localStorage.getItem(searchHistory));

	return data;
};
