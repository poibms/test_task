import { Storage } from '../Config/Storage';

class LocalStorageServices {
	createAccount = (value: string) => {
		localStorage.setItem(Storage.UserAccount, value);
	};

	removeAccount = () => {
		localStorage.removeItem(Storage.UserAccount);
	};

	addSearchHistory = (value: string) => {
		localStorage.setItem(Storage.SearchHistory, value);
	};

	getSearchHistory = () => {
		const data = JSON.parse(
			<string>localStorage.getItem(Storage.SearchHistory),
		);

		return data;
	};

	getUserAcc = () => {
		if (localStorage.getItem(Storage.UserAccount)) {
			return true;
		}

		return false;
	};
}

export default new LocalStorageServices();
