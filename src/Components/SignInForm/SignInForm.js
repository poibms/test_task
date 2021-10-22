import React, { Component } from 'react';

import './SignInForm.css';

export default class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			email: '',
			password: '',
		};
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmitSignInForm = this.onSubmitSignInForm.bind(this);
	}

	onLoginChange(event) {
		this.setState({
			login: event.target.value,
		});
	}

	onEmailChange(event) {
		this.setState({
			email: event.target.value,
		});
	}

	onPasswordChange(event) {
		this.setState({
			password: event.target.value,
		});
	}

	onSubmitSignInForm(event) {
		event.preventDefault();
		// const {onSubmit} = this.props
		const { login, email, password } = this.state;
		this.props.onSubmit(login, email, password);
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.onSubmitSignInForm}>
					<div className="form_inner">
						<h3>Sign up</h3>

						<input
							type="text"
							name="login"
							placeholder="Username"
							onChange={this.onLoginChange}
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={this.onEmailChange}
						/>

						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.onPasswordChange}
						/>

						<input type="submit" value="Sign Up" />
					</div>
				</form>
			</div>
		);
	}
}
