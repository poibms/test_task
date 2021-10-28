import LocalStorageServices from './LocalStorageServices';
import { mainPage, signIn } from '../Config/Routes';

// export const checkLogin = () => {
// 	if (LocalStorageServices.getUserAcc()) {
// 		return true;
// 	}
//
// 	return false;
// };
export const checkLogin = (props) => {
	if (LocalStorageServices.getUserAcc()) {
		props.history.push(mainPage);
	} else {
		props.history.push(signIn);
	}
};
