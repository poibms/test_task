import { ISLOGIN } from '../Actions/UserStatusAction/UserStatusConstant';
import { checkLogin } from '../Services/RoutingServices';

const user = (state = checkLogin(), { type }) => {
	switch (type) {
		case ISLOGIN:
			return checkLogin();
		default:
			return state;
	}
};
export default user;
