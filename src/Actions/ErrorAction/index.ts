import { CHECK_ERROR } from './ErrorConstant';

export const setError = (value: boolean) => ({
	type: CHECK_ERROR,
	value,
});
