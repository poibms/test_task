import { ISLOGIN } from '../Actions/UserStatusAction/UserStatusConstant';

const user = (state = false, { type, status }) => {
	switch (type) {
		case ISLOGIN:
			return status;
		default:
			return state;
	}
};
export default user;
