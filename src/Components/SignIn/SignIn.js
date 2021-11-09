import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import passwordValidation from '../../Services/Validation';
import { checkUserStatus } from '../../Actions/UserStatusAction';

import './SignIn.css';

class SignIn extends Component {
	signInUserAccount = (login, email, password) => {
		// eslint-disable-next-line no-shadow
		const { checkUserStatus } = this.props;
		const numbers = /[A-Z\d]/g;
		const passValid = passwordValidation(password, numbers);
		if (passValid) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			checkUserStatus();
		} else {
			alert(wrongPassword);
		}
	};

	render() {
		return (
			<>
				<div className="wrap">
					<SignInForm onSubmit={this.signInUserAccount} />
				</div>
			</>
		);
	}
}

export default connect(
	(state) => ({
		user: state.user,
	}),
	{ checkUserStatus },
)(SignIn);
