// eslint-disable-next-line import/named
import { ISLOGIN } from '../Config/ReduxConstants/ActionConstants';

const user = (state = false, { type, status }) => {
	switch (type) {
		case ISLOGIN:
			return status;
		default:
			return state;
	}
};
export default user;
