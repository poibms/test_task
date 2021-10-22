import LocalStorageServices from './LocalStorageServices';
import { mainPage, signIn } from '../Config/Routes';

export const checkLogin = (props) => {
	if (!LocalStorageServices.getUserAcc()) {
		props.history.push(signIn);
	} else {
		props.history.push(mainPage);
	}
};

