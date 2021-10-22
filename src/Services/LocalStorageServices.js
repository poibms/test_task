import { searchHistory, userAccount } from '../Config/Storage';

class LocalStorageServices {
	createAccount = (value) => {
		localStorage.setItem(userAccount, value);
	};

	removeAccount = () => {
		localStorage.removeItem(userAccount);
	};

	addSearchHistory = (value) => {
		localStorage.setItem(searchHistory, value);
	};

	getSearchHistory = () => {
		const data = JSON.parse(localStorage.getItem(searchHistory));

		return data;
	};

	getUserAcc = () => {
		if (localStorage.getItem(userAccount)) {
			return true;
		}

		return false;
	};
}

export default new LocalStorageServices();
