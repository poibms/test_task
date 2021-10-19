import { getUserAcc, removeAccout } from '../Config/Storage';
import { mainPage, signIn } from '../Config/Routes';

export const checkLogin = (props) => {
	if (!getUserAcc()) {
		props.history.push(signIn);
	} else {
		props.history.push(mainPage);
	}
};

export const loginOut = (props) => {
	removeAccout();
	props.history.push(signIn);
};
