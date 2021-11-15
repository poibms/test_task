import { storage } from '../Config/Storage';

class LocalStorageServices {
	createAccount = (value) => {
		localStorage.setItem(storage.userAccount, value);
	};

	removeAccount = () => {
		localStorage.removeItem(storage.userAccount);
	};

	addSearchHistory = (value) => {
		localStorage.setItem(storage.searchHistory, value);
	};

	getSearchHistory = () => {
		const data = JSON.parse(localStorage.getItem(storage.searchHistory));

		return data;
	};

	getUserAcc = () => {
		if (localStorage.getItem(storage.userAccount)) {
			return true;
		}

		return false;
	};
}

export default new LocalStorageServices();