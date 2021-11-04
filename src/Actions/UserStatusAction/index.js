import { ISLOGIN } from './UserStatusConstant';

export const checkUserStatus = (status) => ({
	type: ISLOGIN,
	status,
});
