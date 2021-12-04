import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { Errors } from '../../Config/Error';
import passwordValidation from '../../Services/Validation';
import { checkUserStatus } from '../../Actions/UserStatusAction';
import './SignIn.css';

const SignIn: FC = () => {
	const dispatch = useDispatch();

	const signInUserAccount = ({ login, email, password }: any) => {
		const passValid = passwordValidation(password);
		if (passValid) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			dispatch(checkUserStatus());
		} else {
			alert(Errors.WrongPassword);
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
