import React, { Component } from 'react';
import { checkLogin } from '../../Services/RoutingServices';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import { mainPage } from '../../Config/Routes';
import './SignIn.css';
import passwordValidation from '../../Services/Validation';

class SignIn extends Component {
	componentDidMount() {
		checkLogin(this.props);
	}

	signInUserAccount = (login, email, password) => {
		const numbers = /[A-Z\d]/g;
		const passValid = passwordValidation(password, numbers);
		if (passValid) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			this.props.history.push(mainPage);
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

export default SignIn;
