import React from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import passwordValidation from '../../Services/Validation';
import { checkUserStatus } from '../../Actions/UserStatusAction';

import './SignIn.css';

const SignIn = () => {
	const dispatch = useDispatch();

	const signInUserAccount = (login, email, password) => {
		const passValid = passwordValidation(password);
		if (passValid) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			dispatch(checkUserStatus());
		} else {
			alert(wrongPassword);
		}
	};

	return (
		<>
			<div className="wrap">
				<SignInForm onSubmit={signInUserAccount} />
			</div>
		</>
	);
};

export default SignIn;
