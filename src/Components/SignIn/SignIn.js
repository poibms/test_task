import React, { Component } from 'react';
import { checkLogin } from '../../Services/RoutingServices';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import { mainPage } from '../../Config/Routes';
import './SignIn.css';
// import requireAuthentication from '../../Hoc/UserStatus';

class SignIn extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isLoggin: checkLogin(),
	// 	};
	// }
	//
	componentDidMount() {
		checkLogin(this.props);
	}
	//
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState !== this.state) {
	// 		console.log('updated');
	// 		console.log(this.state.isLoggin);
	// 	}
	// }

	signInUserAccount = (login, email, password) => {
		const numbers = /[A-Z\d]/g;

		if (password.length > 5 && numbers.test(password)) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			// this.setState({
			// 	isLoggin: checkLogin(),
			// });
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
