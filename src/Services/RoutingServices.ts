import LocalStorageServices from './LocalStorageServices';

export const checkLogin = () => {
	if (LocalStorageServices.getUserAcc()) {
		return true;
	}

	return false;
};
