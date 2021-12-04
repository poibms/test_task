import { CHECK_ERROR } from '../Actions/ErrorAction/ErrorConstant';

const error = (state = false, { type, value }: any) => {
	switch (type) {
		case CHECK_ERROR:
			return value;
		default:
			return state;
	}
};
export default error;
