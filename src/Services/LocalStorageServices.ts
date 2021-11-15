import { storage } from '../Config/Storage';

class LocalStorageServices {
	createAccount = (value: string) => {
		localStorage.setItem(storage.userAccount, value);
	};

	removeAccount = () => {
		localStorage.removeItem(storage.userAccount);
	};

	addSearchHistory = (value: string) => {
		localStorage.setItem(storage.searchHistory, value);
	};

	getSearchHistory = () => {
		const data = JSON.parse(
			<string>localStorage.getItem(storage.searchHistory),
		);

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
